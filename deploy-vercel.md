# Vercel Deployment Guide

## Current Issue
The deployment is failing because Vercel can't find the `index.html` file. This is likely due to the build configuration.

## Solution Steps

### 1. Verify Project Structure
Make sure your project has the following structure:
```
Frontend/
├── public/
│   ├── index.html          ✅ (exists)
│   └── manifest.json       ✅ (exists)
├── src/
│   ├── App.js
│   ├── index.js
│   └── components/
├── package.json            ✅ (exists)
└── vercel.json            ✅ (configured)
```

### 2. Deploy to Vercel

#### Option A: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (this will create a new project)
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? Select your account
# - Link to existing project? N
# - What's your project's name? loan-emi-frontend
# - In which directory is your code located? ./
# - Want to override the settings? N
```

#### Option B: Deploy via GitHub (Recommended)
1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

### 3. Environment Variables
In your Vercel dashboard:
1. Go to your project settings
2. Navigate to Environment Variables
3. Add:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://loanemi-calculator.onrender.com/api/loan`
   - **Environment**: Production, Preview, Development

### 4. Alternative: Manual Build Test
Test the build locally first:
```bash
# Install dependencies
npm install

# Test the build
npm run build

# Check if build folder is created
ls build/
```

### 5. Troubleshooting
If the build still fails:

1. **Clear Vercel cache**:
   - Go to project settings in Vercel
   - Find "Build & Development Settings"
   - Click "Clear Build Cache"

2. **Check Node.js version**:
   - Add `.nvmrc` file to your project root:
   ```
   18
   ```

3. **Force rebuild**:
   - In Vercel dashboard, go to Deployments
   - Click "Redeploy" on the latest deployment

## Current Configuration
- **API URL**: `https://loanemi-calculator.onrender.com/api/loan`
- **Framework**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`

## Expected Result
After successful deployment, your app will be available at:
`https://loan-emi-frontend.vercel.app` 