# Loan EMI Calculator - Frontend

React.js frontend application with modern UI for loan EMI calculations.

## 🚀 Quick Start

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Application**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

## 🎨 Features

### Calculator Page (`/`)
- **Input Form**: Principal amount, interest rate, and tenure
- **Real-time Validation**: Input validation with error messages
- **Beautiful Results**: Color-coded results with detailed breakdown
- **Responsive Design**: Works perfectly on all devices

### History Page (`/history`)
- **Calculation History**: View all previous calculations
- **Detailed View**: Modal with complete calculation details
- **Delete Functionality**: Remove unwanted calculations
- **Sort by Date**: Newest calculations first

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js              # Navigation header
│   ├── Header.css
│   ├── EmiCalculator.js       # Main calculator component
│   ├── EmiCalculator.css
│   ├── LoanHistory.js         # History page component
│   └── LoanHistory.css
├── services/
│   └── api.js                 # API service functions
├── App.js                     # Main app component
├── App.css                    # App-specific styles
├── index.js                   # Entry point
└── index.css                  # Global styles
```

## 🎨 UI Components

### Header Component
- **Logo**: Calculator icon with app name
- **Navigation**: Calculator and History links
- **Responsive**: Mobile-friendly navigation
- **Active States**: Visual feedback for current page

### EMI Calculator Component
- **Form Inputs**: 
  - Principal Amount (₹)
  - Interest Rate (% per annum)
  - Tenure (Months)
- **Results Display**:
  - Monthly EMI (highlighted)
  - Principal Amount
  - Interest Rate
  - Tenure
  - Total Interest
  - Total Amount
- **Summary**: Human-readable calculation explanation

### Loan History Component
- **Card Layout**: Grid of calculation cards
- **Quick Info**: Principal, rate, tenure, EMI
- **Actions**: View details and delete
- **Modal**: Detailed view with all information
- **Empty State**: Helpful message when no calculations

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Success**: Green (#51cf66)
- **Warning**: Red (#ff6b6b)
- **Highlight**: Gold (#ffd700)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

### Animations
- **Hover Effects**: Smooth transitions on buttons and cards
- **Loading States**: Spinner and disabled states
- **Modal Transitions**: Smooth open/close animations

## 🔧 Configuration

### API Configuration
Update `src/services/api.js` if backend runs on different port:
```javascript
const API_BASE_URL = 'http://localhost:8080/api/loan';
```

### Environment Variables
Create `.env` file for environment-specific settings:
```env
REACT_APP_API_URL=http://localhost:8080/api/loan
REACT_APP_ENV=development
```

## 🚀 Build & Deployment

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
```

### Serve Production Build
```bash
# Install serve globally
npm install -g serve

# Serve the build folder
serve -s build -l 3000
```

### Docker (Optional)
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

### Mobile Features
- **Touch-friendly**: Large buttons and inputs
- **Swipe gestures**: Smooth navigation
- **Optimized layout**: Stacked cards and forms
- **Fast loading**: Optimized images and assets

## 🎯 User Experience

### Form Validation
- **Real-time**: Instant feedback on input
- **Clear messages**: Descriptive error text
- **Visual cues**: Color-coded input states
- **Accessibility**: Screen reader friendly

### Loading States
- **Button states**: Disabled during API calls
- **Loading text**: "Calculating..." feedback
- **Error handling**: Clear error messages
- **Retry options**: Easy to retry failed requests

### Data Formatting
- **Currency**: Indian Rupee formatting
- **Numbers**: Thousand separators
- **Dates**: Human-readable format
- **Percentages**: Clear percentage display

## 🐛 Troubleshooting

### Common Issues

1. **Backend Connection Error**
   - Ensure backend is running on port 8080
   - Check CORS configuration
   - Verify API endpoints

2. **Port Already in Use**
   - Change port: `PORT=3001 npm start`
   - Kill existing process: `npx kill-port 3000`

3. **Dependencies Issues**
   - Clear cache: `npm cache clean --force`
   - Delete node_modules: `rm -rf node_modules && npm install`

4. **Build Errors**
   - Check for syntax errors in console
   - Verify all imports are correct
   - Ensure all required files exist

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Test Coverage
```bash
npm test -- --coverage
```

## 📦 Dependencies

### Core Dependencies
- **React**: 18.2.0
- **React Router**: 6.11.2
- **Axios**: 1.4.0
- **React Icons**: 4.8.0

### Development Dependencies
- **React Scripts**: 5.0.1
- **Testing Library**: Jest and React Testing Library

---

**Frontend is ready! 🎨✨** 