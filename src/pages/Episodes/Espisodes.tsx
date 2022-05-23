import React from 'react';
import { Header } from '../../components/Header/Header';
import { Container, MainContent, SectionEpisodes } from './styles';
import logo from '../../assets/logo.svg';
import { Navigation } from '../../components/Navigation/Navigation';
import { Footer } from '../../components/Footer/Footer';
import { EpisodeComponent } from '../../components/Espisode/Episode';

export const Episodes: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation isHome={false} navHeader />
      </Header>
      <MainContent>
        <h1>Episódios</h1>
        <SectionEpisodes>
          <EpisodeComponent animeName="Dragon ball super o melhor anime de todos aqui em petropolis aaaaaaaaaaaaa" />
          <EpisodeComponent animeName="Dragon ball Z é um anime de todos, mas nem todos soa par ele" />
          <EpisodeComponent animeName="Dragon ball super o melhor anime de todos aqui em petropolis aaaaaaaaaaaaa" />
          <EpisodeComponent animeName="Dragon ball Z é um anime de todos, mas nem todos soa par ele" />
          <EpisodeComponent animeName="Dragon ball super o melhor anime de todos aqui em petropolis aaaaaaaaaaaaa" />
          <EpisodeComponent animeName="Dragon ball Z é um anime de todos, mas nem todos soa par ele" />
          <EpisodeComponent animeName="Dragon ball super o melhor anime de todos aqui em petropolis aaaaaaaaaaaaa" />
          <EpisodeComponent animeName="Dragon ball Z é um anime de todos, mas nem todos soa par ele" />
          <EpisodeComponent animeName="Dragon ball super o melhor anime de todos aqui em petropolis aaaaaaaaaaaaa" />
          <EpisodeComponent animeName="Dragon ball Z é um anime de todos, mas nem todos soa par ele" />
        </SectionEpisodes>
      </MainContent>
      <Footer />
    </Container>
  );
};
