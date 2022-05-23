import React from 'react';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Container } from './style';
import logo from '../../assets/logo.svg';

export const InfoAnime: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader isHome={false} />
      </Header>
    </Container>
  );
};
