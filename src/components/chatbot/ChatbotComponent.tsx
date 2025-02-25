import React, { useState, useRef, useEffect } from 'react';

// Types
interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ChatbotProps {
  initialMessage?: string;
  position?: 'bottom-right' | 'bottom-left';
  primaryColor?: string;
  apiBaseUrl?: string;
}

const ChatbotComponent: React.FC<ChatbotProps> = ({
  initialMessage = "Hi there! How can I help you today?",
  position = 'bottom-right',
  primaryColor = '#4f46e5',
  apiBaseUrl = 'http://localhost:3001',
}) => {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isWaitingForEmail, setIsWaitingForEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          text: initialMessage,
          sender: 'bot',
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, [initialMessage, messages.length]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Toggle chatbot open/closed
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle user input submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // If waiting for email, validate and process it
    if (isWaitingForEmail) {
      handleEmailSubmission(input);
      return;
    }

    // Add user message to chat
    const userMessage = {
      text: input,
      sender: 'user' as const,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);
    
    try {
      // Format messages for the API
      const messageHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));
      
      // Add the new user message
      messageHistory.push({
        role: 'user',
        content: input
      });
      
      // Call the API
      const response = await fetch(`${apiBaseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: messageHistory }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from server');
      }
      
      const data = await response.json();
      
      // Add bot response to chat
      const botResponse = {
        text: data.response,
        sender: 'bot' as const,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      
      // Check if we should ask for email
      if (shouldAskForEmail(input, data.response)) {
        setTimeout(() => {
          const emailRequest = {
            text: "Would you like to provide your email so we can follow up with you?",
            sender: 'bot' as const,
            timestamp: new Date().toISOString(),
          };
          setMessages(prev => [...prev, emailRequest]);
          setIsWaitingForEmail(true);
        }, 1000);
      }
    } catch (error) {
      console.error('Error getting chat response:', error);
      
      // Add error message
      const errorMessage = {
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly.",
        sender: 'bot' as const,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsThinking(false);
    }
  };

  // Determine if we should ask for email based on user input and bot response
  const shouldAskForEmail = (userInput: string, botResponse: string): boolean => {
    const userInputLower = userInput.toLowerCase();
    const botResponseLower = botResponse.toLowerCase();
    
    // Keywords that indicate user interest
    const interestKeywords = [
      'interested', 'contact', 'quote', 'pricing', 'consultation', 
      'schedule', 'appointment', 'meet', 'talk', 'call', 'email', 
      'more information', 'learn more', 'get started'
    ];
    
    // Check if user input contains interest keywords
    const userShownInterest = interestKeywords.some(keyword => 
      userInputLower.includes(keyword)
    );
    
    // Check if bot response is suggesting contact
    const botSuggestedContact = 
      botResponseLower.includes('contact') || 
      botResponseLower.includes('consultation') ||
      botResponseLower.includes('email') ||
      botResponseLower.includes('schedule');
    
    return userShownInterest || botSuggestedContact;
  };

  // Handle email submission
  const handleEmailSubmission = (emailInput: string) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput)) {
      // Invalid email
      const errorMessage = {
        text: "That doesn't look like a valid email address. Please try again.",
        sender: 'bot' as const,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
      setInput('');
      return;
    }
    
    // Valid email
    setEmail(emailInput);
    
    // Add email message to chat
    const emailMessage = {
      text: emailInput,
      sender: 'user' as const,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, emailMessage]);
    setInput('');
    
    // Process lead
    saveLead(emailInput);
  };

  // Save lead to backend
  const saveLead = async (userEmail: string) => {
    setIsSubmitting(true);
    
    try {
      // Format conversation for storage
      const conversation = messages.map(msg => ({
        text: msg.text,
        sender: msg.sender,
        timestamp: msg.timestamp
      }));
      
      // Call the API
      const response = await fetch(`${apiBaseUrl}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          conversation,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save lead');
      }
      
      // Success message
      const successMessage = {
        text: "Thank you! We've received your information and will be in touch soon.",
        sender: 'bot' as const,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, successMessage]);
      setIsWaitingForEmail(false);
    } catch (error) {
      console.error('Error saving lead:', error);
      
      // Error message
      const errorMessage = {
        text: "I'm sorry, we couldn't save your information. Please try again later or contact us directly.",
        sender: 'bot' as const,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styles
  const positionStyles = {
    'bottom-right': { right: '20px', bottom: '20px' },
    'bottom-left': { left: '20px', bottom: '20px' },
  };

  return (
    <div className="fixed z-50" style={positionStyles[position]}>
      {/* Chatbot toggle button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: primaryColor }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className={`absolute bottom-16 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden ${position === 'bottom-right' ? 'right-0' : 'left-0'}`}>
          {/* Header */}
          <div className="p-4" style={{ backgroundColor: primaryColor }}>
            <h3 className="text-white font-medium">TripleShot Assistant</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-100 text-gray-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg bg-gray-100 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isWaitingForEmail ? "Enter your email..." : "Type your message..."}
                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-lg text-white"
                style={{ backgroundColor: primaryColor }}
                disabled={isSubmitting || !input.trim()}
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
