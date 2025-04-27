import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    genre: '',
    experience: '',
    address: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup data:', formData);
    // Connect to your backend here
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup} style={styles.form}>
          <input name="name" placeholder="Name" onChange={handleChange} style={styles.input} required />
          <input name="location" placeholder="Location" onChange={handleChange} style={styles.input} required />
          <input name="genre" placeholder="Genre" onChange={handleChange} style={styles.input} required />
          <input name="experience" placeholder="Experience" onChange={handleChange} style={styles.input} required />
          <input name="address" placeholder="Address" onChange={handleChange} style={styles.input} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} style={styles.input} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} style={styles.input} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} style={styles.input} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} style={styles.input} required />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: '30px',
    borderRadius: '15px',
    maxWidth: '450px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    marginTop: '10px',
    padding: '12px',
    backgroundColor: '#2EC4B6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
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

export default SignupPage;
