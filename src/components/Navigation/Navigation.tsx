import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuMobile, Nav } from './styles';
import home from '../../assets/home-image.svg';
import movie from '../../assets/movie.svg';
import foursquares from '../../assets/foursquares.svg';
import buttonHamburger from '../../assets/button-hamb.svg';
import buttonX from '../../assets/button-x.svg';
import { Search } from '../Search/Search';

type NavType = {
  navHeader: boolean;
  isHome: boolean;
};

export const Navigation: React.FC<NavType> = ({ navHeader, isHome }) => {
  const [active, setActive] = useState(false);

  const handleActiveMobile = () => {
    setActive((v) => !v);
  };

  return (
    <Nav className={`navigation ${navHeader ? 'mb' : ''}`} activeLinks={active}>
      {navHeader && (
        <MenuMobile className="menu-mobile" onClick={handleActiveMobile}>
          {!active && <img src={buttonHamburger} alt="Menu" />}
          {active && <img src={buttonX} alt="Menu" />}
        </MenuMobile>
      )}

      <div className={`links ${navHeader ? 'mobile-active' : ''}`}>
        <Link to="/" onClick={handleActiveMobile}>
          <img src={home} alt="Home" />
          <span>Home</span>
        </Link>
        <Link to="/animes" onClick={handleActiveMobile}>
          <img src={movie} alt="Animes" />
          <span>Animes</span>
        </Link>
        <Link to="/episodios" onClick={handleActiveMobile}>
          <img src={foursquares} alt="Episódios" />
          <span>Episódios</span>
        </Link>
        {navHeader && !isHome && <Search />}
      </div>
    </Nav>
  );
};
