import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';

import TRG19 from './assets/app/trg19.png';
import TRG02 from './assets/app/game3.png';
import TRG03 from './assets/app/game2.jpg';
import TRG18 from './assets/app/trg18.png';


import PolicyPage from './PolicyPage';

// Header component
function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Earth People Studio" className="logo-img" />
                <span className="studio-name">Earth People Studio</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

// Trang chính
function HomePage() {
  const games = [
    {
      name: 'Horror Escape Nightmare',
      image: TRG19,
      link: 'https://play.google.com/store/apps/details?id=com.casual.horror.hunter'
    },
    {
      name: 'Pillow Fight - Fighting Games',
      image: TRG02,
      link: 'https://play.google.com/store/apps/details?id=com.earthpeoplestudio.pillowfight',
    },
    {
      name: 'Color Detective - Puzzle Game',
      image: TRG03,
      link: 'https://play.google.com/store/apps/details?id=com.EarthPeopleStudio.ColorDetective'
    },
    {
      name: 'Run Challenge: Block Survival',
      image: TRG18,
      link: 'https://play.google.com/store/apps/details?id=com.casual.run.challange.master'
    }
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Welcome to Earth People Studio</h2>
            <p className="about-text">
            Earth People Studio delivers fun and creative mobile games for everyone — from thrilling escapes in Horror Escape Nightmare, to hilarious battles in Pillow Fight – Fighting Games, brain-teasing challenges in Color Detective – Puzzle Game, and action-packed runs in Run Challenge: Block Survival. Each game is designed to spark imagination, bring excitement, and create joyful moments anytime, anywhere.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="game-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto:angryjamstudio@gmail.com">angryjamstudio@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              🏠 "Linh Dam, Hoang Liet
                Ha Noi - 100000
                Vietnam (VN)"
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Earth People Studio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
