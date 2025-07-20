# Deployment Guide for TripleShot Consulting Website

This guide provides instructions for deploying both the frontend React application and the backend Express server.

## Prerequisites

- Node.js and npm installed
- Git repository set up
- OpenAI API key

## Frontend Deployment

### Environment Setup

1. Create a `.env` file in the root directory based on `.env.example`:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```

2. Replace `https://your-backend-url.com` with the actual URL of your deployed backend.

### Option 1: Vercel (Recommended)

1. Create an account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project root and follow the prompts
4. Set environment variables in the Vercel dashboard

### Option 2: Netlify

1. Create an account at [netlify.com](https://netlify.com)
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Run `netlify deploy` and follow the prompts
4. Set environment variables in the Netlify dashboard

### Option 3: GitHub Pages

1. Add `gh-pages` package: `npm install --save-dev gh-pages`
2. Update package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   },
   "homepage": "https://yourusername.github.io/tripleshot-consulting"
   ```
3. Deploy: `npm run deploy`

## Backend Deployment

### Environment Setup

1. Create a `.env` file in the server directory based on `.env.example`:
   ```
   OPENAI_API_KEY=your_openai_api_key
   PORT=3001
   ```

2. Replace `your_openai_api_key` with your actual OpenAI API key.

### Option 1: Render

1. Create an account at [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - Root directory: `server`
   - Build command: `npm install`
   - Start command: `node index.js`
5. Add environment variables (OPENAI_API_KEY)

### Option 2: Railway

1. Create an account at [railway.app](https://railway.app)
2. Create a new project and select GitHub repository
3. Configure:
   - Root directory: `server`
   - Start command: `node index.js`
4. Add environment variables

### Option 3: Heroku

1. Create an account at [heroku.com](https://heroku.com)
2. Install Heroku CLI: `npm install -g heroku`
3. Deploy:
   ```
   cd server
   heroku create
   git push heroku main
   ```
4. Set environment variables: `heroku config:set OPENAI_API_KEY=your_key`

## CORS Configuration

If you're hosting the frontend and backend on different domains, you may need to update the CORS configuration in `server/index.js`:

```javascript
// Update CORS configuration for production
app.use(cors({
  origin: ['https://your-frontend-url.com', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));
```

Replace `https://your-frontend-url.com` with the actual URL of your deployed frontend.

## Security Considerations

1. **Environment Variables**: Never commit `.env` files to your repository. Use environment variables provided by your hosting platform.

2. **API Key Security**: Ensure your OpenAI API key is only stored on the server, never in client-side code.

3. **Rate Limiting**: Consider implementing rate limiting to prevent abuse of your API endpoints.

4. **HTTPS**: Ensure both frontend and backend are served over HTTPS.

## Monitoring and Maintenance

1. Set up logging to monitor errors and usage
2. Implement health check endpoints
3. Consider setting up alerts for server issues
4. Regularly update dependencies to address security vulnerabilities

## Troubleshooting

### CORS Errors

If you see CORS errors in the browser console:
1. Check that your backend CORS configuration includes your frontend domain
2. Verify that your frontend is using the correct backend URL

### API Connection Issues

If the chatbot can't connect to the backend:
1. Check that the `VITE_API_URL` environment variable is set correctly
2. Verify that the backend server is running
3. Check for any network restrictions or firewall issues

### OpenAI API Errors

If you see errors related to the OpenAI API:
1. Verify that your API key is valid and has sufficient credits
2. Check that the API key is correctly set in the backend environment variables
3. Look for any rate limiting or quota issues in the OpenAI dashboard
