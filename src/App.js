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
                backgroundImage: //Personer
                  "url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg)",
              }}
            ></div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage: //Golf
                  "url(https://i.pinimg.com/736x/25/1f/4e/251f4ed1d0de88624ac277ae2e943ab4.jpg)",
              }}
            ></div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage: //Musik
                  "url(https://cdm.link/app/uploads/2018/02/Ableton-Live-10-Release_10_web.jpg)",
              }}
            ></div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage: //Citater
                  "url(https://i.pinimg.com/736x/c0/81/a6/c081a6603c3c5d19a1ec3365e2d66f77.jpg)",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;