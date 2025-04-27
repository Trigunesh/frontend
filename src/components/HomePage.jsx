import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2>Welcome to HelloCoding!</h2>
        <p>Explore challenges, improve your skills, and become a coding expert!</p>
      </div>

      {/* Content above footer */}
      <div style={styles.mainContent}>
        <h3>Skills-based coding tests to find developers, fast</h3>
        <p>
          We help navigate that sea of applicants so you can connect faster and hire developers with the skills your team needs to innovate.
        </p>
        <div style={styles.buttons}>
          <button style={styles.button}>Try for free</button>
          <button style={styles.button}>Book a demo</button>
        </div>
      </div>

      {/* Fairness Section */}
      <div style={styles.fairnessSection}>
        <h3>Fairness built into every click</h3>
        <p>
          From plagiarism detection and proctoring to minimizing bias, our assessments give developers everywhere an equal shot at today's top tech opportunities.
        </p>

        <h4>World-class plagiarism monitoring</h4>
        <p>
          Advanced machine learning monitors for plagiarism, test-taker integrity, and question leaks, giving all developers a fairer shot at the next round.
        </p>

        <h4>A standardized skills approach</h4>
        <p>
          Structured assessment content and a scalable system make sure you test applicants consistently, whether you're hiring one dev or 1,000.
        </p>

        <h4>Fair, valid, and reliable results</h4>
        <p>
          From adverse-impact studies to sensitivity reviews, our content undergoes expert-led analysis to help you test the skills that matter most.
        </p>
      </div>

      {/* New section - Candidates tackle real coding challenges */}
      <div style={styles.candidateSection}>
        <h3>Candidates tackle real coding challenges from the comfort of their home.</h3>
        <p>
          The best way to assess a developer's skills is by reviewing their code. Instead of manually reviewing resumes, automate screening and let developers showcase their technical skills in familiar coding environments. Reduce time spent in technical interviews by filtering out unqualified candidates early.
        </p>

        <h4>Identify strong candidates quickly</h4>
        <p>
          Automating the screening process allows you to quickly identify qualified candidates. By letting developers demonstrate their skills in coding challenges, you can reduce technical interview time and focus only on the most qualified applicants.
        </p>

        <h4>Access the largest library of hiring content in the world</h4>
        <p>
          Skip the hassle of building tests from scratch and use a pre-built Certified Assessment or dive into the library of hands-on questions. Covering tech's most in-demand roles and skills, across all levels, HackerRank has the largest library of developer hiring content in the world.
        </p>

        <h4>University hiring and early talent screening built to scale</h4>
        <p>
          When hiring turns high volume, our approach helps applicants show off their skills. Think developer-approved prep materials, coding challenges, and screening that scales with you. This solution ensures efficient hiring even when dealing with large volumes of applicants.
        </p>
      </div>

      {/* Footer section */}
      <footer style={styles.footer}>
        <div style={styles.section}>
          <h3>Resources</h3>
          <ul style={styles.list}>
            <li>Blog</li>
            <li>Customer Stories</li>
            <li>Roles Directory</li>
            <li>Partners</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3>Products</h3>
          <ul style={styles.list}>
            <li>Screen</li>
            <li>Interview</li>
            <li>Engage</li>
            <li>SkillUp</li>
            <li>Certified Assessments</li>
            <li>Plagiarism Detection</li>
            <li>Real-world Questions</li>
          </ul>
        </div>

        {/* New Get Started section */}
        <div style={styles.section}>
          <h3>Get Started</h3>
          <ul style={styles.list}>
            <li>Pricing</li>
            <li>Free Trial</li>
            <li>Request a Demo</li>
            <li>Product Support</li>
            <li>For Developers</li>
          </ul>
        </div>

        {/* New Solutions section */}
        <div style={styles.section}>
          <h3>Solutions</h3>
          <ul style={styles.list}>
            <li>Set up your skills strategy</li>
            <li>Showcase your tech brand</li>
            <li>Optimize your hiring process</li>
            <li>Mobilize your internal talent</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div style={styles.socialMediaSection}>
          <h3>Follow us</h3>
          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/1024px-Facebook_Logo_2023.png" alt="Facebook" style={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_logo_2012.png" alt="Twitter" style={styles.icon} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon_2023.svg" alt="LinkedIn" style={styles.icon} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png" alt="Instagram" style={styles.icon} />
            </a>
          </div>
        </div>
      </footer>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '40px 30px',
    borderRadius: '25px',
    maxWidth: '750px',
    margin: '50px auto',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
    transform: 'scale(1.02)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  mainContent: {
    marginTop: '30px',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
  },
  buttons: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#FF6B6B',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '15px',
    transition: 'background-color 0.3s',
  },
  fairnessSection: {
    backgroundColor: '#fafafa',
    padding: '40px 30px',
    marginTop: '40px',
    borderRadius: '15px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  candidateSection: {
    padding: '40px 30px',
    marginTop: '40px',
    backgroundColor: '#f3f4f6',
    borderRadius: '15px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    padding: '40px 20px',
    borderTop: '2px solid #e5e5e5',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '60px',
    flexWrap: 'wrap',
    marginTop: 'auto',
    textAlign: 'center',
  },
  section: {
    minWidth: '200px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '15px',
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#333',
  },
  socialMediaSection: {
    textAlign: 'center',
    marginTop: '20px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '15px',
  },
  iconLink: {
    display: 'inline-block',
  },
  icon: {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
  },
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

export default HomePage;
