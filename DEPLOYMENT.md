# Vercel Deployment Guide

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Your backend API deployed and accessible

## Deployment Steps

### 1. Prepare Your Project
Your project is already configured for Vercel deployment with the following files:
- `vercel.json` - Vercel configuration
- `src/services/api-vercel.js` - Environment-aware API service

### 2. Environment Variables
Before deploying, you need to set up environment variables in Vercel:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add the following variable:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: Your backend API URL (e.g., `https://your-backend-url.vercel.app/api/loan`)

### 3. Deploy to Vercel

#### Option A: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts to configure your project
```

#### Option B: Deploy via GitHub
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push

#### Option C: Deploy via Vercel Dashboard
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure environment variables
4. Deploy

### 4. Update API Service
After deployment, update your components to use the new API service:

```javascript
// Replace this import in your components:
// import { loanApi } from '../services/api.js';

// With this:
import { loanApi } from '../services/api-vercel.js';
```

### 5. Verify Deployment
- Your app will be available at `https://your-app-name.vercel.app`
- Test all functionality to ensure API calls work correctly
- Check browser console for any CORS or API errors

## Troubleshooting

### Common Issues:
1. **API not accessible**: Ensure your backend is deployed and the URL is correct
2. **CORS errors**: Make sure your backend allows requests from your Vercel domain
3. **Environment variables not working**: Double-check the variable name starts with `REACT_APP_`

### Environment Variables Reference:
- `REACT_APP_API_URL`: Your backend API base URL

## Local Development
For local development, create a `.env` file in your project root:
```
REACT_APP_API_URL=http://localhost:8080/api/loan
```

This will allow you to use the same environment-aware API service locally. 