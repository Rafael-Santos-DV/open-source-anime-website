import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { Video } from '../../components/Video/Video';
import { useLocalPath } from '../../hooks/usePath';
import { Loading } from '../../components/Loading/Loading';

export const Play: React.FC = () => {
  const params = useParams<{
    animeId: string;
    episode: string;
  }>();

  const { episode, animeId } = params;
  const data = useUniqueAnime(animeId as string);

  const useRouter = useNavigate();

  // eslint-disable-next-line
  const location = useLocalPath() as any;

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [location]);

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
          <Button
            disabled={Number(episode) === 1}
            onClick={() =>
              useRouter(`${location.pathname}/../${Number(episode) - 1}`)
            }
          >
            Anterior
          </Button>
          <Button onClick={() => useRouter(`${location.pathname}/..`)}>
            Episódios
          </Button>
          <Button
            disabled={Number(episode) === data?.episodes.length}
            onClick={() =>
              useRouter(`${location.pathname}/../${Number(episode) + 1}`)
            }
          >
            Próximo
          </Button>
        </BoxPreOrNext>
        <ContainerVideo>
          {data && episode && (
            <Video status={episode} poster={data.episodePoster} controls>
              <source src={data.episodes[Number(episode) - 1].url} />
            </Video>
          )}
        </ContainerVideo>
        <div>
          <span>Assistindo Episódio: </span>
          {episode}
        </div>
      </MainPlay>
      <SectionEpisodes>
        <h2>Episódios</h2>
        <ContentEpisodes>
          {data &&
            data.episodes.map((value, index) => (
              <EpisodeComponent
                key={value.title}
                rota={`/animes/${data.animeId}/${index + 1}`}
                anime={data.anime}
                episode={index + 1}
                episodes={data.quant}
                poster={data.episodePoster}
                isPlayer={index + 1 === Number(episode)}
              />
            ))}
          {!data && <Loading text="Carregando" />}
        </ContentEpisodes>
      </SectionEpisodes>
      <Footer />
    </ContainerPlay>
  );
};
