const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const dotenv = require('dotenv');
const OpenAI = require('openai');
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

// Load environment variables from parent directory
dotenv.config({ path: '../.env' });

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Validate required environment variables
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌ Missing required Supabase environment variables');
  process.exit(1);
}

// Initialize email transporter
const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

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

// Test Supabase connection
async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('Supabase connection error:', error);
    } else {
      console.log('✅ Supabase connection successful');
    }
  } catch (error) {
    console.error('Error testing Supabase connection:', error);
  }
}

// Send notification email for new leads
async function sendLeadNotificationEmail(leadData) {
  try {
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'christopher.collins.ds@gmail.com';
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: notificationEmail,
      subject: `🚀 New Lead: ${leadData.name} from ${leadData.company || 'Unknown Company'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3e2415; border-bottom: 2px solid #e8c598; padding-bottom: 10px;">
            🎉 New Contact Form Submission
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3e2415; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${leadData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${leadData.email}">${leadData.email}</a></p>
            <p><strong>Company:</strong> ${leadData.company || 'Not provided'}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #e8c598; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3e2415; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${leadData.message}</p>
          </div>
          
          <div style="background: #3e2415; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="margin: 0;"><strong>⏰ Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Respond within 24 hours for best conversion rates!</p>
          </div>
          
          <p style="color: #666; font-size: 12px; text-align: center; margin-top: 30px;">
            This email was sent automatically from your Tripleshot Consulting website contact form.
          </p>
        </div>
      `
    };

    await emailTransporter.sendMail(mailOptions);
    console.log('✅ Lead notification email sent successfully');
  } catch (error) {
    console.error('❌ Error sending lead notification email:', error);
    // Don't throw error - we don't want email failures to break the contact form
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
    
    // Insert chatbot lead into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          email,
          name,
          company,
          conversation: conversation || [],
          source: 'chatbot',
          status: 'new'
        }
      ])
      .select();
    
    if (error) {
      console.error('Supabase error saving chatbot lead:', error);
      return res.status(500).json({ error: 'Failed to save lead' });
    }
    
    res.status(201).json({ success: true, lead: data[0] });
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({ error: 'Failed to save lead' });
  }
});

// Get all leads (would be protected in production)
app.get('/api/leads', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Supabase error fetching leads:', error);
      return res.status(500).json({ error: 'Failed to fetch leads' });
    }
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Please provide a valid email address' 
      });
    }
    
    // Insert lead into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          email,
          name,
          company: company || '',
          message,
          source: 'contact_form',
          status: 'new'
        }
      ])
      .select();
    
    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ 
        error: 'Failed to save your message. Please try again.' 
      });
    }
    
    console.log('New contact form submission saved to Supabase:', { name, email, company });
    
    // Send notification email (don't wait for it to complete)
    sendLeadNotificationEmail({ name, email, company, message });
    
    res.status(201).json({ 
      success: true, 
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      error: 'Something went wrong. Please try again or email us directly.' 
    });
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
testSupabaseConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
