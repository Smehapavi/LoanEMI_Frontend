# Loan EMI Calculator - Frontend Only

A standalone React application for calculating loan EMIs. This version works completely offline without requiring any backend server.

## Features

- ✅ **EMI Calculator**: Calculate monthly EMI, total interest, and total amount
- ✅ **Loan History**: View and manage your previous calculations
- ✅ **Offline Support**: Works completely offline using localStorage
- ✅ **Responsive Design**: Works on desktop and mobile devices
- ✅ **No Backend Required**: All calculations done locally

## How It Works

- **EMI Calculation**: Uses the standard EMI formula implemented in JavaScript
- **Data Storage**: All calculations are stored in browser's localStorage
- **History Management**: View, delete, and manage your calculation history
- **No API Calls**: Everything works locally without external dependencies

## Deployment

This app is configured for deployment on Vercel as a static site.

### Deploy to Vercel

1. **Push to GitHub** (if not already done)
2. **Go to https://vercel.com/new**
3. **Import your GitHub repository**
4. **Configure:**
   - Framework Preset: Create React App
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `build`
5. **Deploy!**

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Technical Details

- **Framework**: React 18
- **Build Tool**: Create React App
- **Storage**: localStorage (browser storage)
- **Deployment**: Vercel (static hosting)
- **No Backend**: Completely frontend-only

## API Functions

The app uses a local API service (`src/services/api-standalone.js`) that provides:

- `calculateEmi(loanData)` - Calculate EMI locally
- `getAllCalculations()` - Get history from localStorage
- `deleteCalculation(id)` - Delete from localStorage
- `getCalculationById(id)` - Get specific calculation

## Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- localStorage API
- React 18

## License

MIT License 