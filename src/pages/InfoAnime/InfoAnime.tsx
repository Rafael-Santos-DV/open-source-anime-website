import React from 'react';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Container, MainOfAnime, SectionEpisodes } from './style';
import logo from '../../assets/logo.svg';
import { InformationAnime } from '../../components/InformationAnime/InformationAnime';
import { EpisodeComponent } from '../../components/Espisode/Episode';
import { Footer } from '../../components/Footer/Footer';

export const InfoAnime: React.FC = () => {
  return (
    <Container>
      <Header className="info-anime">
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader isHome={false} />
        <InformationAnime />
      </Header>
      <span className="line-blue" />
      <SectionEpisodes>
        <h1>Episódios</h1>
        <MainOfAnime>
          <EpisodeComponent animeName="aaaaaaaaaaaaaaaaa" />
          <EpisodeComponent animeName="aaaaaaaaaaaaaaaaa" />

          <EpisodeComponent animeName="aaaaaaaaaaaaaaaaa" />

          <EpisodeComponent animeName="aaaaaaaaaaaaaaaaa" />
          <EpisodeComponent animeName="aaaaaaaaaaaaaaaaa" />
          <EpisodeComponent animeName="aaaaaaaaaaaaaaaaa" />

          <EpisodeComponent animeName="aaaaaaaaaaaaaaaaa" />

          <EpisodeComponent animeName="aaaaaaaaaaaaaaaaa" />
        </MainOfAnime>
      </SectionEpisodes>
      <Footer />
    </Container>
  );
};
