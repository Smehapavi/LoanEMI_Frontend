import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCalculator, FaHistory } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <FaCalculator className="logo-icon" />
            <span>Loan EMI Calculator</span>
          </Link>
          
          <nav className="nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              <FaCalculator />
              Calculator
            </Link>
            <Link 
              to="/history" 
              className={`nav-link ${location.pathname === '/history' ? 'active' : ''}`}
            >
              <FaHistory />
              History
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 