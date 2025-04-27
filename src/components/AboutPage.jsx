// AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>This is the About page where you can describe your application or company.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
};

export default AboutPage;
