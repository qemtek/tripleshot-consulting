const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const dotenv = require('dotenv');
const OpenAI = require('openai');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', // Allow configuration via env var or default to all
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(bodyParser.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
const leadsFile = path.join(dataDir, 'leads.json');

// Initialize data directory and files
async function initializeDataStorage() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    
    try {
      await fs.access(leadsFile);
    } catch (error) {
      // File doesn't exist, create it with empty array
      await fs.writeFile(leadsFile, JSON.stringify([]));
    }
    
    console.log('Data storage initialized successfully');
  } catch (error) {
    console.error('Error initializing data storage:', error);
  }
}

// OpenAI Chat Function
async function getChatResponse(messages, companyInfo) {
  try {
    // Create a system message with company information
    const systemMessage = {
      role: 'system',
      content: `You are a helpful assistant for TripleShot Consulting, a technology consulting company. 
      
Company Information:
- TripleShot Consulting specializes in technology consulting services.
- Services include customer service solutions, marketing automation, financial management tools, business operations optimization, data analysis, and technology skills training.
- The company offers free initial consultations to understand client requirements.
- Implementation timelines vary from a few weeks for simple projects to several months for complex ones.
- Ongoing support packages are available after implementation.
- Clients can get started by scheduling a free consultation or contacting through the website.

Your task is to:
1. Be friendly, professional, and helpful
2. Answer questions about TripleShot Consulting's services
3. Collect contact information if the user is interested in services
4. Keep responses concise (max 3-4 sentences)
5. If you don't know the answer to a specific question, suggest they contact the company directly
6. Don't make up specific pricing information or client names

${companyInfo || ''}`
    };

    // Add the system message at the beginning
    const formattedMessages = [
      systemMessage,
      ...messages
    ];

    // Call the OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: formattedMessages,
      max_tokens: 300,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error getting chat response:', error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later or contact us directly.";
  }
}

// API Routes
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, companyInfo } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }
    
    const response = await getChatResponse(messages, companyInfo);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

app.post('/api/leads', async (req, res) => {
  try {
    const { email, conversation, name = '', company = '' } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    // Read existing leads
    const leadsData = await fs.readFile(leadsFile, 'utf8');
    const leads = JSON.parse(leadsData);
    
    // Create new lead
    const newLead = {
      id: Date.now().toString(),
      email,
      name,
      company,
      conversation: conversation || [],
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    
    // Add to leads array
    leads.push(newLead);
    
    // Save updated leads
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2));
    
    res.status(201).json({ success: true, lead: newLead });
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({ error: 'Failed to save lead' });
  }
});

// Get all leads (would be protected in production)
app.get('/api/leads', async (req, res) => {
  try {
    const leadsData = await fs.readFile(leadsFile, 'utf8');
    const leads = JSON.parse(leadsData);
    res.json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

// FAQ endpoints
app.get('/api/faqs', async (req, res) => {
  try {
    // In a real implementation, this would come from a database
    const faqs = [
      {
        id: '1',
        question: "What services do you offer?",
        answer: "We offer a range of technology consulting services including customer service solutions, marketing automation, financial management tools, business operations optimization, data analysis, and technology skills training."
      },
      {
        id: '2',
        question: "How much do your services cost?",
        answer: "Our pricing is customized based on your specific needs and the scope of the project. We offer free initial consultations to understand your requirements and provide a detailed quote."
      },
      {
        id: '3',
        question: "How long does implementation typically take?",
        answer: "Implementation timelines vary depending on the complexity of the solution. Simple projects can be completed in a few weeks, while more complex implementations may take several months. We'll provide a timeline estimate during our consultation."
      },
      {
        id: '4',
        question: "Do you offer ongoing support?",
        answer: "Yes, we offer ongoing support packages to ensure your solutions continue to work effectively. Our support includes regular maintenance, troubleshooting, and updates as needed."
      },
      {
        id: '5',
        question: "How do I get started?",
        answer: "You can get started by scheduling a free consultation through our contact form, or by initiating a chat with us right here. We'll discuss your needs and recommend the best approach for your business."
      }
    ];
    
    res.json(faqs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
});

// Start server
initializeDataStorage().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
