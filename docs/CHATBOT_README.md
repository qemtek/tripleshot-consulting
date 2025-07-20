# TripleShot Consulting Chatbot Implementation

This document provides an overview of the chatbot implementation for the TripleShot Consulting website.

## Overview

The chatbot serves two primary purposes:
1. Capturing leads by collecting visitor email addresses
2. Answering common questions about services, pricing, and processes

The implementation leverages OpenAI's GPT-4o model to provide intelligent, contextually relevant responses to user queries.

## Components

The implementation consists of:

1. **Frontend Chatbot Component** (`src/components/chatbot/ChatbotComponent.tsx`)
   - React component that provides the chat interface
   - Handles user interactions and message processing
   - Connects to backend API for OpenAI processing and lead storage

2. **Backend Server** (`server/index.js`)
   - Express.js server that handles API requests
   - Integrates with OpenAI API for intelligent responses
   - Stores lead information in a JSON file
   - Provides FAQ data via API endpoint

## Setup Instructions

### Frontend Setup

The chatbot component is already integrated into the main App component. To customize it:

1. Modify the styling by changing the `primaryColor` prop in `App.tsx`
2. Update the initial welcome message by modifying the `initialMessage` prop

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` template:
   ```
   cp .env.example .env
   ```

4. Add your OpenAI API key to the `.env` file:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

5. Start the server:
   ```
   npm run dev
   ```

6. The server will run on port 3001 by default

### Connecting Frontend to Backend

The ChatbotComponent is already configured to connect to the backend at `http://localhost:3001`. If your backend is running on a different URL, update the fetch URLs in the component:

1. Find the `handleSubmit` function for the chat API
2. Find the `saveLead` function for the leads API
3. Update the URLs as needed

## Customization Options

### Appearance

- **Position**: Set the `position` prop to "bottom-right" or "bottom-left"
- **Color**: Change the `primaryColor` prop to match your brand colors
- **Initial Message**: Customize the welcome message with the `initialMessage` prop

### Behavior

- **OpenAI System Message**: Modify the system message in `server/index.js` to change how the AI responds
- **OpenAI Parameters**: Adjust temperature, max_tokens, and other parameters in the `getChatResponse` function
- **Lead Capture**: Modify the conditions that trigger email collection in the `shouldAskForEmail` function

## OpenAI Integration

The chatbot uses OpenAI's GPT-4o model to generate intelligent responses:

1. **System Message**: The backend provides a detailed system message with company information and response guidelines
2. **Message History**: The full conversation history is sent to OpenAI for context
3. **Response Processing**: The AI response is returned to the frontend and displayed to the user
4. **Lead Capture**: The system intelligently identifies when to ask for contact information

### OpenAI Configuration

You can adjust the OpenAI parameters in `server/index.js`:

```javascript
const completion = await openai.chat.completions.create({
  model: "gpt-4o",         // Model to use
  messages: formattedMessages,
  max_tokens: 300,         // Maximum length of response
  temperature: 0.7,        // Randomness of response (0-1)
});
```

## Future Enhancements

Consider these improvements for future iterations:

1. **Enhanced NLP**: Fine-tune the OpenAI model for your specific domain
2. **User Authentication**: Allow returning users to authenticate for personalized experiences
3. **Analytics Integration**: Track chatbot usage and effectiveness
4. **Multi-language Support**: Add support for multiple languages
5. **Rich Media Responses**: Enable images, videos, and interactive elements in responses
6. **Appointment Scheduling**: Integrate with calendar systems for direct appointment booking

## Lead Management

Leads are stored in `server/data/leads.json` with the following structure:

```json
{
  "id": "1677589324000",
  "email": "example@example.com",
  "name": "",
  "company": "",
  "conversation": [
    {
      "text": "Hi there! How can I help you today?",
      "sender": "bot",
      "timestamp": "2023-02-28T12:00:00Z"
    },
    {
      "text": "I'd like to learn more about your services",
      "sender": "user",
      "timestamp": "2023-02-28T12:01:00Z"
    }
  ],
  "createdAt": "2023-02-28T12:02:04Z",
  "status": "new"
}
```

You can build a simple admin interface to view and manage these leads in the future.

## Support

For questions or issues with the chatbot implementation, please contact your development team.

## Security Considerations

1. **API Key Security**: Never expose your OpenAI API key in client-side code
2. **Rate Limiting**: Implement rate limiting to prevent abuse
3. **Content Filtering**: Consider implementing additional content filtering for user inputs
4. **Data Privacy**: Ensure user data is handled according to privacy regulations
