// Standalone EMI Calculator - No backend required
export const loanApi = {
  // Calculate EMI locally
  calculateEmi: async (loanData) => {
    try {
      const { principalAmount, interestRate, tenureMonths } = loanData;
      
      // Convert annual interest rate to monthly
      const monthlyInterestRate = interestRate / 12 / 100;
      
      // Calculate EMI using the formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
      const emi = principalAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths) / 
                  (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
      
      // Calculate total amount and interest
      const totalAmount = emi * tenureMonths;
      const totalInterest = totalAmount - principalAmount;
      
      // Store in localStorage for history
      const calculation = {
        id: Date.now(),
        principalAmount,
        interestRate,
        tenureMonths,
        monthlyEmi: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalAmount: Math.round(totalAmount),
        calculatedAt: new Date().toISOString()
      };
      
      // Save to localStorage
      const history = JSON.parse(localStorage.getItem('emiCalculations') || '[]');
      history.unshift(calculation);
      localStorage.setItem('emiCalculations', JSON.stringify(history.slice(0, 50))); // Keep last 50
      
      return calculation;
    } catch (error) {
      throw new Error('Failed to calculate EMI');
    }
  },

  // Get all calculations from localStorage
  getAllCalculations: async () => {
    try {
      const history = JSON.parse(localStorage.getItem('emiCalculations') || '[]');
      return history;
    } catch (error) {
      throw new Error('Failed to fetch calculations');
    }
  },

  // Get calculation by ID
  getCalculationById: async (id) => {
    try {
      const history = JSON.parse(localStorage.getItem('emiCalculations') || '[]');
      const calculation = history.find(calc => calc.id === id);
      if (!calculation) {
        throw new Error('Calculation not found');
      }
      return calculation;
    } catch (error) {
      throw new Error('Failed to fetch calculation');
    }
  },

  // Delete calculation from localStorage
  deleteCalculation: async (id) => {
    try {
      const history = JSON.parse(localStorage.getItem('emiCalculations') || '[]');
      const filteredHistory = history.filter(calc => calc.id !== id);
      localStorage.setItem('emiCalculations', JSON.stringify(filteredHistory));
    } catch (error) {
      throw new Error('Failed to delete calculation');
    }
  },

  // Health check - always returns success for standalone
  healthCheck: async () => {
    return { status: 'ok', message: 'Standalone calculator is working' };
  },
}; 