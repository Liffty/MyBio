import React, { useState, useEffect } from 'react';
import './App.css';
import MatrixIntro from './MatrixIntro';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [page, setPage] = useState('main'); // 'main' or 'golf'

  const handleIntroComplete = () => {
    setTimeout(() => {
      setShowIntro(false);
      setShowContent(true);
    }, 500); // Wait for fade animation
  };

  // Cursor effect only after intro
  useEffect(() => {
    if (!showContent) return;

    const cursor = document.getElementById("cursor");
    const cursor2 = document.getElementById("cursor2");
    const cursor3 = document.getElementById("cursor3");

    function moveCursor(e) {
      const x = e.clientX;
      const y = e.clientY;
      if (cursor) {
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      }
      if (cursor2) {
        cursor2.style.left = x + "px";
        cursor2.style.top = y + "px";
      }
      if (cursor3) {
        cursor3.style.left = x + "px";
        cursor3.style.top = y + "px";
      }
    }

    document.body.addEventListener("mousemove", moveCursor);

    function addHover() {
      if (cursor2) cursor2.classList.add("hover");
      if (cursor3) cursor3.classList.add("hover");
    }
    function removeHover() {
      if (cursor2) cursor2.classList.remove("hover");
      if (cursor3) cursor3.classList.remove("hover");
    }
    const hoverTargets = document.querySelectorAll(".hover-target");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseover", addHover);
      el.addEventListener("mouseout", removeHover);
    });

    // Always remove hover state when page changes
    removeHover();

    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseover", addHover);
        el.removeEventListener("mouseout", removeHover);
      });
      removeHover();
    };
  }, [showContent, page]);

  // Handler for Golf button
  const handleGolfClick = () => setPage('golf');

  return (
    <div className="App" style={{ position: "relative", overflow: "hidden" }}>
      {showIntro && <MatrixIntro onIntroComplete={handleIntroComplete} />}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="cursor" id="cursor"></div>
      <div className="cursor2" id="cursor2"></div>
      <div className="cursor3" id="cursor3"></div>
      {showContent && page === 'main' && (
        <div className="l-container">
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage:
                  "url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg)",
              }}
            ></div>
            <div className="card-btn-container">
              <button className="card-btn hover-target">History</button>
            </div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/25/1f/4e/251f4ed1d0de88624ac277ae2e943ab4.jpg)",
              }}
            ></div>
            <div className="card-btn-container">
              <button className="card-btn hover-target" onClick={handleGolfClick}>
                Golf
              </button>
            </div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage:
                  "url(https://cdm.link/app/uploads/2018/02/Ableton-Live-10-Release_10_web.jpg)",
              }}
            ></div>
            <div className="card-btn-container">
              <button className="card-btn hover-target">Music</button>
            </div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/c0/81/a6/c081a6603c3c5d19a1ec3365e2d66f77.jpg)",
              }}
            ></div>
            <div className="card-btn-container">
              <button className="card-btn hover-target">Art</button>
            </div>
          </div>
        </div>
      )}
      {showContent && page === 'golf' && (
        <div className="golf-page">
          <h1 style={{ color: "#64ffda", textAlign: "center", marginTop: "60px" }}>What's in my bag?</h1>
          <div className="cards-container">
            <ul className="cards" style={{ "--items": 10 }}>
              {[
                { name: "Putter", desc: "Used for short strokes on the green." },
                { name: "Driver", desc: "Used for long-distance tee shots." },
                { name: "2 Iron", desc: "Low-lofted iron for long shots." },
                { name: "4 Iron", desc: "Mid-lofted iron for approach shots." },
                { name: "5 Iron", desc: "Versatile iron for fairway shots." },
                { name: "6 Iron", desc: "Good for mid-range shots." },
                { name: "7 Iron", desc: "Common iron for approach shots." },
                { name: "8 Iron", desc: "Higher loft for shorter shots." },
                { name: "9 Iron", desc: "High-loft iron for short approach shots." },
                { name: "Pitching Wedge", desc: "Used for short, high shots." },
                { name: "50° Wedge", desc: "Gap wedge for controlled shots." },
                { name: "54° Wedge", desc: "Sand wedge for bunker and soft lies." },
                { name: "60° Wedge", desc: "Lob wedge for high, short shots." }
              ].map((club, i) => (
                <li key={i} style={{ "--i": i }}>
                  <input
                    type="radio"
                    id={`item-${i}`}
                    name="gallery-item"
                    defaultChecked={i === 0}
                  />
                  <label htmlFor={`item-${i}`}>{club.name}</label>
                  <h2>{club.name}</h2>
                  <p>{club.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button className="card-btn hover-target" onClick={() => setPage('main')}>
              Back to Main
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

