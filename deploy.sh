#!/bin/bash

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "✅ Build successful! Build folder created."
    echo "📁 Build contents:"
    ls -la build/
else
    echo "❌ Build failed! Build folder not found."
    exit 1
fi

echo "🎉 Ready for deployment!"
echo "📋 Next steps:"
echo "1. Push your code to GitHub"
echo "2. Go to https://vercel.com/new"
echo "3. Import your GitHub repository"
echo "4. Configure environment variables:"
echo "   - REACT_APP_API_URL=https://loanemi-calculator.onrender.com/api/loan"
echo "5. Deploy!" 