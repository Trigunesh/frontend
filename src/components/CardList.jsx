import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardList = ({ cards }) => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/home');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Card List</h2>

      <div style={styles.cardContainer}>
        {cards && cards.length > 0 ? (
          cards.map((card, index) => (
            <div key={index} style={styles.card}>
              <img src={card.photo} alt={card.name} style={styles.image} />
              <h3 style={styles.title}>{card.name}</h3>
              <p style={styles.text}>{card.genre}</p>
              <p style={styles.text}>{card.place}</p>
            </div>
          ))
        ) : (
          <p style={styles.text}>No cards available.</p>
        )}
      </div>

      <button style={styles.button} onClick={redirectToHome}>
        Go to Homepage
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '40px 20px',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: '600',
    color: '#333',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1000px',
    marginBottom: '30px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '15px',
    borderRadius: '4px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#222',
    marginBottom: '8px',
  },
  text: {
    fontSize: '14px',
    color: '#555',
    margin: '4px 0',
  },
  button: {
    backgroundColor: '#2EC4B6',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default CardList;
