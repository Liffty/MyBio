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
        <div className="l-container">
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage:
                  "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg)",
              }}
            ></div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage:
                  "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_2.jpg)",
              }}
            ></div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage:
                  "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg)",
              }}
            ></div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage:
                  "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_4.jpg)",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;