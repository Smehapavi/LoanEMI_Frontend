import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/loan';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loanApi = {
  // Calculate EMI
  calculateEmi: async (loanData) => {
    try {
      const response = await api.post('/calculate', loanData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to calculate EMI');
    }
  },

  // Get all calculations
  getAllCalculations: async () => {
    try {
      const response = await api.get('/calculations');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch calculations');
    }
  },

  // Get calculation by ID
  getCalculationById: async (id) => {
    try {
      const response = await api.get(`/calculations/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch calculation');
    }
  },

  // Delete calculation
  deleteCalculation: async (id) => {
    try {
      await api.delete(`/calculations/${id}`);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete calculation');
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await api.get('/health');
      return response.data;
    } catch (error) {
      throw new Error('Backend service is not available');
    }
  },
};

export default api; 