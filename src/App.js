import React, { useState } from 'react';
import './App.css';
import MatrixIntro from './MatrixIntro';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    setTimeout(() => {
      setShowIntro(false);
      setShowContent(true);
    }, 500); // Wait for fade animation
  };

  return (
    <div className="App">
      {showIntro && <MatrixIntro onIntroComplete={handleIntroComplete} />}
      
      {showContent && (
        <>
          {/* Hero Section */}
          <section className="hero">
            <div className="avatar">
              <span className="avatar-text">L</span>
            </div>
            <h1 className="name">Liffty</h1>
            <h2 className="title">Computer Science Student</h2>
            <p className="tagline">Making music, playing golf, and coding my way through life</p>
          </section>

          {/* About Section */}
          <section className="about">
            <div className="container">
              <div className="about-grid">
                <div className="about-text">
                  <h3>About Me</h3>
                  <p>
                    Hey! I'm Liffty, a young computer science student with a passion for 
                    creating and exploring. When I'm not coding, you'll find me making music 
                    or out on the golf course. I believe in staying happy and pursuing 
                    multiple passions - life's too short to do just one thing!
                  </p>
                </div>
                <div className="skills">
                  <h3>What I Do</h3>
                  <div className="skills-grid">
                    <div className="skill-tag">💻 Computer Science</div>
                    <div className="skill-tag">🎵 Music Production</div>
                    <div className="skill-tag">⛳ Golf</div>
                    <div className="skill-tag">📚 Student Life</div>
                    <div className="skill-tag">🚀 Learning</div>
                    <div className="skill-tag">😊 Staying Happy</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact">
            <div className="container">
              <h3>Let's Connect!</h3>
              <p className="contact-intro">
                Always happy to chat about code, music, golf, or just life in general
              </p>
              <div className="contact-grid">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">your.email@example.com</div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🔗</div>
                  <div className="contact-label">LinkedIn</div>
                  <div className="contact-value">/in/liffty</div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🐱</div>
                  <div className="contact-label">GitHub</div>
                  <div className="contact-value">/liffty</div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🎵</div>
                  <div className="contact-label">Music</div>
                  <div className="contact-value">SoundCloud/Spotify</div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p>Made with ❤️ by Liffty</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;