import React from 'react';
import { Header } from '../../components/Header/Header';
import {
  BoxPreOrNext,
  ContainerPlay,
  ContainerVideo,
  ContentEpisodes,
  MainPlay,
  SectionEpisodes,
} from './style';

import logo from '../../assets/logo.svg';
import { Navigation } from '../../components/Navigation/Navigation';
import { InformationAnime } from '../../components/InformationAnime/InformationAnime';
import { Button } from '../../components/Button/Button';
import { EpisodeComponent } from '../../components/Espisode/Episode';
import { Footer } from '../../components/Footer/Footer';

const url = 'https://pitou.goyabu.com/un-go/OVA-00.mp4'; // remover

export const Play: React.FC = () => {
  return (
    <ContainerPlay>
      <Header className="page-play">
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
      <MainPlay>
        <BoxPreOrNext>
          <Button>Anterior</Button>
          <Button>Episódios</Button>
          <Button>Próximo</Button>
        </BoxPreOrNext>
        <ContainerVideo>
          <video
            controls
            poster="https://i9.ytimg.com/vi_blogger/D-6ccpoTyV0/1.jpg?sqp=CL37s5QGGPDEAfqGspsBBgjAAhC0AQ&rs=AMzJL3k8dhrQGFv6SKDwMwcL5NIcTD9doA"
          >
            <source src={url} />
          </video>
        </ContainerVideo>
      </MainPlay>
      <SectionEpisodes>
        <h2>Episódios</h2>
        <ContentEpisodes>
          <EpisodeComponent
            rota="/animes/dragon"
            anime="tudo biem"
            episode={1}
            episodes={100}
            poster="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
        </ContentEpisodes>
      </SectionEpisodes>
      <Footer />
    </ContainerPlay>
  );
};
