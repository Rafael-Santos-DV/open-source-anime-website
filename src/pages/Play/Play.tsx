import React from 'react';
import { useParams } from 'react-router-dom';
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
import { useUniqueAnime } from '../../hooks/useUniqueAnime';

export const Play: React.FC = () => {
  const params = useParams<{
    animeId: string;
    episode: string;
  }>();

  const { episode, animeId } = params;

  const data = useUniqueAnime(animeId);
  console.log(params);
  return (
    <ContainerPlay>
      <Header className="page-play">
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader isHome={false} />
        {data && (
          <InformationAnime
            key={1}
            anime={data.anime}
            date={String(data.ano)}
            description={data.description}
            episodes={data.quant}
            gender={data.gender}
            poster={data.poster}
            star={data.likes}
            title={data.description}
          />
        )}
      </Header>
      <span className="line-blue" />
      <MainPlay>
        <BoxPreOrNext>
          <Button>Anterior</Button>
          <Button>Episódios</Button>
          <Button>Próximo</Button>
        </BoxPreOrNext>
        <ContainerVideo>
          {data && episode && (
            <video controls poster={data.episodePoster}>
              <source src={data.episodes[Number(episode) - 1].url} />
            </video>
          )}
        </ContainerVideo>
      </MainPlay>
      <SectionEpisodes>
        <h2>Episódios</h2>
        <ContentEpisodes>
          {data &&
            data.episodes.map((value, index) => (
              <EpisodeComponent
                rota={`/animes/${data.animeId}/${index + 1}`}
                anime={data.anime}
                episode={index + 1}
                episodes={data.quant}
                poster={data.episodePoster}
              />
            ))}
        </ContentEpisodes>
      </SectionEpisodes>
      <Footer />
    </ContainerPlay>
  );
};
