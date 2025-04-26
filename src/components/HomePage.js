import React from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const user = location.state;

  return (
    <div className="home">
      <h1>Welcome, {user?.name || 'Guest'}!</h1>
      <p>This is your homepage.</p>
    </div>
  );
};

export default HomePage;
