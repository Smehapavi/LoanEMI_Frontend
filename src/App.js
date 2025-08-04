import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EmiCalculator from './components/EmiCalculator';
import LoanHistory from './components/LoanHistory';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<EmiCalculator />} />
            <Route path="/history" element={<LoanHistory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 