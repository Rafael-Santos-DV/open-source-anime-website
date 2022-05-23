import React from 'react';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Container, SectionEpisodes } from './style';
import logo from '../../assets/logo.svg';
import { InformationAnime } from '../../components/InformationAnime/InformationAnime';

export const InfoAnime: React.FC = () => {
  return (
    <Container>
      <Header className="info-anime">
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader isHome={false} />
        <InformationAnime />
      </Header>
      <span className="line-blue" />
      <SectionEpisodes />
    </Container>
  );
};
