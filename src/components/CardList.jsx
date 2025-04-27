import React from 'react';

const CardsPage = () => {
  const dummyCards = [
    { name: "John Doe", place: "New York", genre: "Rock" },
    { name: "Jane Smith", place: "California", genre: "Pop" },
    { name: "Alice Johnson", place: "Texas", genre: "Jazz" },
    { name: "Bob Brown", place: "Florida", genre: "Classical" }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2>Our Artists</h2>
        <div style={styles.cardsGrid}>
          {dummyCards.map((card, index) => (
            <div key={index} style={styles.card}>
              <h4>{card.name}</h4>
              <p>Place: {card.place}</p>
              <p>Genre: {card.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    padding: '20px',
    background: 'linear-gradient(-45deg, #2EC4B6, #FF6B6B, #FFD93D, #6A0572)',
    backgroundSize: '400% 400%',
    animation: 'gradientMove 15s ease infinite',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '1000px',
    margin: 'auto',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  }
};

// Insert keyframes manually
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default CardsPage;
