import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styles';
import home from '../../assets/home-image.svg';
import movie from '../../assets/movie.svg';
import foursquares from '../../assets/foursquares.svg';

export const Navigation: React.FC = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={home} alt="Home" />
        <span>Home</span>
      </Link>
      <Link to="/">
        <img src={movie} alt="Animes" />
        <span>Animes</span>
      </Link>
      <Link to="/">
        <img src={foursquares} alt="Episódios" />
        <span>Episódios</span>
      </Link>
    </Nav>
  );
};
