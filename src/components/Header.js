import React from 'react';
import '../Header.css'

const Header = () => {
  return (
    <header className="header-container navbar navbar-dark">
      <div className="marquee-container">
        <div className="marquee">
          <p className="scrolling-text">Bienvenue sur Galsen-Music</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
