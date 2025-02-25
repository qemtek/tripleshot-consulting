# Deploying TripleShot Consulting Website on Netlify and Render

This guide provides step-by-step instructions for deploying the TripleShot Consulting website with Netlify (frontend) and Render (backend).

## Overview

- **Frontend (React)**: Deployed on Netlify
- **Backend (Express)**: Deployed on Render
- **Data Storage**: JSON files stored on Render
- **OpenAI Integration**: Configured via environment variables

## Prerequisites

- GitHub account with your TripleShot Consulting repository
- Netlify account (sign up at [netlify.com](https://netlify.com))
- Render account (sign up at [render.com](https://render.com))
- OpenAI API key

## Part 1: Deploying the Backend on Render

### Step 1: Prepare Your Repository

1. Ensure your server code is in the `server` directory
2. Make sure you have a `package.json` file in the `server` directory
3. Verify that your `server/index.js` file listens on the correct port:

```javascript
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 2: Create a Web Service on Render

1. Log in to your Render account at [dashboard.render.com](https://dashboard.render.com)
2. Click on the "New +" button and select "Web Service"
3. Connect your GitHub repository (you may need to authorize Render to access your GitHub account)
4. Find and select your TripleShot Consulting repository

### Step 3: Configure the Web Service

Fill in the following details:
- **Name**: `tripleshot-backend` (or any name you prefer)
- **Region**: Choose the region closest to your target audience
- **Branch**: `main` (or your default branch)
- **Root Directory**: `server`
- **Runtime**: Node
- **Build Command**: `npm install`
- **Start Command**: `node index.js`
- **Plan**: Free (or select a paid plan if needed)

### Step 4: Add Environment Variables

1. Scroll down to the "Environment" section
2. Add the following environment variables:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `CORS_ORIGIN`: Leave blank for now (we'll update this after deploying the frontend)

### Step 5: Deploy the Backend

1. Click "Create Web Service"
2. Wait for the deployment to complete (this may take a few minutes)
3. Once deployed, Render will provide you with a URL (e.g., `https://tripleshot-backend.onrender.com`)
4. Save this URL as you'll need it for the frontend configuration

## Part 2: Deploying the Frontend on Netlify

### Step 1: Prepare Your Frontend

1. Create a `.env.production` file in the root of your project:

```
VITE_API_URL=https://your-render-backend-url.onrender.com
```

Replace `your-render-backend-url` with the actual URL from Render.

2. Create a `netlify.toml` file in the root of your project:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 2: Deploy to Netlify

#### Option A: Deploy via Netlify UI

1. Log in to your Netlify account at [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure build settings:
   - **Branch to deploy**: `main` (or your default branch)
   - **Base directory**: (leave blank)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

#### Option B: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Log in to Netlify:
```bash
netlify login
```

3. Initialize your project:
```bash
netlify init
```

4. Follow the prompts to connect to your GitHub repository
5. Deploy your site:
```bash
netlify deploy --prod
```

### Step 3: Configure Environment Variables on Netlify

1. Go to your site settings in the Netlify dashboard
2. Navigate to "Site settings" > "Environment variables"
3. Add the environment variable:
   - Key: `VITE_API_URL`
   - Value: Your Render backend URL (e.g., `https://tripleshot-backend.onrender.com`)

### Step 4: Trigger a New Deployment

1. In the Netlify dashboard, go to "Deploys"
2. Click "Trigger deploy" > "Deploy site"

## Part 3: Connecting Frontend and Backend

### Step 1: Update CORS Settings on Render

1. Go back to your Render dashboard
2. Select your backend service
3. Go to "Environment" tab
4. Update the `CORS_ORIGIN` variable with your Netlify URL (e.g., `https://tripleshot-consulting.netlify.app`)
5. Click "Save Changes"
6. Your service will automatically redeploy with the new settings

### Step 2: Test the Integration

1. Visit your Netlify site
2. Open the chatbot and try sending a message
3. Verify that the chatbot is connecting to the backend and receiving responses from OpenAI

## Part 4: Domain Configuration (Optional)

### Custom Domain for Netlify

1. In the Netlify dashboard, go to "Site settings" > "Domain management"
2. Click "Add custom domain"
3. Enter your domain name and follow the instructions to configure DNS settings

### Custom Domain for Render

1. In the Render dashboard, select your service
2. Go to "Settings" > "Custom Domains"
3. Click "Add Custom Domain"
4. Enter your domain and follow the instructions

## Troubleshooting

### CORS Issues

If you encounter CORS errors:
1. Check that the `CORS_ORIGIN` on Render matches your Netlify domain exactly
2. Ensure your frontend is using the correct backend URL
3. Verify that your backend is properly configured to handle CORS:

```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST'],
  credentials: true
}));
```

### API Connection Issues

If the chatbot can't connect to the backend:
1. Open your browser's developer tools and check the Network tab
2. Look for failed requests to your backend API
3. Verify that the `VITE_API_URL` is set correctly in Netlify
4. Check that your Render service is running

### OpenAI API Errors

If you see errors related to the OpenAI API:
1. Check the logs in your Render dashboard
2. Verify that your API key is valid and has sufficient credits
3. Ensure the API key is correctly set in the Render environment variables

## Maintenance

### Updating Your Application

1. Push changes to your GitHub repository
2. Both Netlify and Render will automatically detect changes and redeploy

### Monitoring

1. Use Netlify Analytics for frontend monitoring
2. Check Render logs for backend issues
3. Set up health check endpoints to monitor your backend service

## Security Considerations

1. Never commit API keys or sensitive information to your repository
2. Use environment variables for all sensitive data
3. Consider implementing rate limiting to prevent abuse
4. Regularly update dependencies to address security vulnerabilities

## Cost Management

Both Netlify and Render offer free tiers that should be sufficient for most small to medium websites:

- **Netlify Free Tier**: 100GB bandwidth/month, 300 build minutes/month
- **Render Free Tier**: 750 hours of running time/month (enough for one service to run continuously)

Monitor your usage to avoid unexpected charges if you exceed these limits.
