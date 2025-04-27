import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewCards = () => {
    navigate('/cards');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the HomePage</h1>
      <button style={styles.button} onClick={handleViewCards}>
        View Cards
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#333',
  },
  button: {
    backgroundColor: '#2EC4B6',
    padding: '14px 28px',
    fontSize: '18px',
    borderRadius: '8px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default HomePage;
