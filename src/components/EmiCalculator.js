import React, { useState } from 'react';
import { FaCalculator, FaMoneyBillWave, FaPercent, FaCalendarAlt } from 'react-icons/fa';
import { loanApi } from '../services/api-render';
import './EmiCalculator.css';

const EmiCalculator = () => {
  const [formData, setFormData] = useState({
    principalAmount: '',
    interestRate: '',
    tenureMonths: ''
  });
  
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await loanApi.calculateEmi({
        principalAmount: parseFloat(formData.principalAmount),
        interestRate: parseFloat(formData.interestRate),
        tenureMonths: parseInt(formData.tenureMonths)
      });
      
      setResult(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-IN').format(number);
  };

  return (
    <div className="emi-calculator">
      <h1 className="page-title">Loan EMI Calculator</h1>
      
      <div className="grid grid-2">
        {/* Calculator Form */}
        <div className="card">
          <h2 className="card-title">
            <FaCalculator />
            Calculate EMI
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                <FaMoneyBillWave />
                Principal Amount (₹)
              </label>
              <input
                type="number"
                name="principalAmount"
                value={formData.principalAmount}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter loan amount"
                min="1000"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaPercent />
                Interest Rate (% per annum)
              </label>
              <input
                type="number"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter interest rate"
                min="0.1"
                step="0.1"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaCalendarAlt />
                Tenure (Months)
              </label>
              <input
                type="number"
                name="tenureMonths"
                value={formData.tenureMonths}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter tenure in months"
                min="1"
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Calculating...' : 'Calculate EMI'}
            </button>
          </form>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        </div>

        {/* Results Display */}
        {result && (
          <div className="card results-card">
            <h2 className="card-title">
              <FaCalculator />
              EMI Results
            </h2>
            
            <div className="results-grid">
              <div className="result-item">
                <div className="result-label">Monthly EMI</div>
                <div className="result-value primary">
                  {formatCurrency(result.monthlyEmi)}
                </div>
              </div>

              <div className="result-item">
                <div className="result-label">Principal Amount</div>
                <div className="result-value">
                  {formatCurrency(result.principalAmount)}
                </div>
              </div>

              <div className="result-item">
                <div className="result-label">Interest Rate</div>
                <div className="result-value">
                  {result.interestRate}% p.a.
                </div>
              </div>

              <div className="result-item">
                <div className="result-label">Tenure</div>
                <div className="result-value">
                  {result.tenureMonths} months
                </div>
              </div>

              <div className="result-item">
                <div className="result-label">Total Interest</div>
                <div className="result-value warning">
                  {formatCurrency(result.totalInterest)}
                </div>
              </div>

              <div className="result-item">
                <div className="result-label">Total Amount</div>
                <div className="result-value success">
                  {formatCurrency(result.totalAmount)}
                </div>
              </div>
            </div>

            <div className="calculation-summary">
              <h3>Summary</h3>
              <p>
                For a loan of {formatCurrency(result.principalAmount)} at {result.interestRate}% interest rate 
                for {result.tenureMonths} months, your monthly EMI will be {formatCurrency(result.monthlyEmi)}.
              </p>
              <p>
                You will pay a total of {formatCurrency(result.totalAmount)} over the loan period, 
                with {formatCurrency(result.totalInterest)} as interest.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmiCalculator; 