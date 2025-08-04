import React, { useState, useEffect } from 'react';
import { FaHistory, FaTrash, FaEye, FaCalendarAlt } from 'react-icons/fa';
import { loanApi } from '../services/api-standalone';
import './LoanHistory.css';

const LoanHistory = () => {
  const [calculations, setCalculations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCalculation, setSelectedCalculation] = useState(null);

  useEffect(() => {
    fetchCalculations();
  }, []);

  const fetchCalculations = async () => {
    try {
      setLoading(true);
      const data = await loanApi.getAllCalculations();
      setCalculations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this calculation?')) {
      try {
        await loanApi.deleteCalculation(id);
        setCalculations(prev => prev.filter(calc => calc.id !== id));
      } catch (err) {
        setError(err.message);
      }
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="loan-history">
        <h1 className="page-title">Loan History</h1>
        <div className="card">
          <div className="loading">Loading calculations...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="loan-history">
      <h1 className="page-title">Loan History</h1>
      
      {error && (
        <div className="card">
          <div className="error-message">{error}</div>
        </div>
      )}

      {calculations.length === 0 ? (
        <div className="card">
          <div className="empty-state">
            <FaHistory className="empty-icon" />
            <h3>No calculations found</h3>
            <p>Start by calculating your first EMI to see the history here.</p>
          </div>
        </div>
      ) : (
        <div className="calculations-grid">
          {calculations.map((calculation) => (
            <div key={calculation.id} className="card calculation-card">
              <div className="calculation-header">
                <div className="calculation-date">
                  <FaCalendarAlt />
                  {formatDate(calculation.calculatedAt)}
                </div>
                <div className="calculation-actions">
                  <button
                    className="btn-icon"
                    onClick={() => setSelectedCalculation(calculation)}
                    title="View Details"
                  >
                    <FaEye />
                  </button>
                  <button
                    className="btn-icon delete"
                    onClick={() => handleDelete(calculation.id)}
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>

              <div className="calculation-summary">
                <div className="summary-item">
                  <span className="label">Principal:</span>
                  <span className="value">{formatCurrency(calculation.principalAmount)}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Interest Rate:</span>
                  <span className="value">{calculation.interestRate}% p.a.</span>
                </div>
                <div className="summary-item">
                  <span className="label">Tenure:</span>
                  <span className="value">{calculation.tenureMonths} months</span>
                </div>
                <div className="summary-item highlight">
                  <span className="label">Monthly EMI:</span>
                  <span className="value">{formatCurrency(calculation.monthlyEmi)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for detailed view */}
      {selectedCalculation && (
        <div className="modal-overlay" onClick={() => setSelectedCalculation(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Calculation Details</h3>
              <button 
                className="btn-icon"
                onClick={() => setSelectedCalculation(null)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="label">Principal Amount:</span>
                  <span className="value">{formatCurrency(selectedCalculation.principalAmount)}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Interest Rate:</span>
                  <span className="value">{selectedCalculation.interestRate}% p.a.</span>
                </div>
                <div className="detail-item">
                  <span className="label">Tenure:</span>
                  <span className="value">{selectedCalculation.tenureMonths} months</span>
                </div>
                <div className="detail-item highlight">
                  <span className="label">Monthly EMI:</span>
                  <span className="value">{formatCurrency(selectedCalculation.monthlyEmi)}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Total Interest:</span>
                  <span className="value warning">{formatCurrency(selectedCalculation.totalInterest)}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Total Amount:</span>
                  <span className="value success">{formatCurrency(selectedCalculation.totalAmount)}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Calculated On:</span>
                  <span className="value">{formatDate(selectedCalculation.calculatedAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanHistory; 