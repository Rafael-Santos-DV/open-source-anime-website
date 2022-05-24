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
      <Header className="header-episodes">
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation isHome={false} navHeader />
      </Header>
      <MainContent>
        <h1>Episódios</h1>
        <SectionEpisodes>
          <EpisodeComponent
            rota="/animes/dragon"
            anime="Dragon ball super o melhor anime de todos aqui em petropolis aaaaaaaaaaaaa"
            episode={1}
            episodes={100}
            poster="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
        </SectionEpisodes>
      </MainContent>
      <Footer />
    </Container>
  );
};
