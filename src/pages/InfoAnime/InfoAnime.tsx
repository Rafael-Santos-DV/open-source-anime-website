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
        <InformationAnime
          anime="dragon ball super"
          date="20222"
          description="melhor animes de todos"
          episodes={2}
          gender={['acao', 'comedia', 'eventura']}
          poster="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          star={3}
          title="anime leafar"
        />
      </Header>
      <span className="line-blue" />
      <SectionEpisodes>
        <h1>Episódios</h1>
        <MainOfAnime>
          <EpisodeComponent
            rota="/animes/dragon"
            anime="aaaaaaaaaaaaaaaaa"
            episode={1}
            episodes={144}
            poster="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
        </MainOfAnime>
      </SectionEpisodes>
      <Footer />
    </Container>
  );
};
