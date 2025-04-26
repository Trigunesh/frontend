import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import HomePage from './components/HomePage';
import './styles.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="auth-box">
                <div className="toggle-buttons">
                  <button className={showLogin ? 'active' : ''} onClick={() => setShowLogin(true)}>Login</button>
                  <button className={!showLogin ? 'active' : ''} onClick={() => setShowLogin(false)}>Sign Up</button>
                </div>
                {showLogin ? <LoginForm /> : <SignupForm />}
              </div>
            </div>
          }
        />
        {/* Ensure this route is defined to show the login form */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
