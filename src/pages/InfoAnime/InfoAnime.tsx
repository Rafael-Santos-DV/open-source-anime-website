import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Container, MainOfAnime, SectionEpisodes } from './style';
import logo from '../../assets/logo.svg';
import { InformationAnime } from '../../components/InformationAnime/InformationAnime';
import { EpisodeComponent } from '../../components/Espisode/Episode';
import { Footer } from '../../components/Footer/Footer';
import { useUniqueAnime } from '../../hooks/useUniqueAnime';

export const InfoAnime: React.FC = () => {
  const { animeId } = useParams<{ animeId: string }>();
  const data = useUniqueAnime(animeId);

  return (
    <Container>
      <Header className="info-anime">
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
      <SectionEpisodes>
        <h1>Episódios</h1>
        <MainOfAnime>
          {data &&
            data.episodes.map((value, index) => (
              <EpisodeComponent
                key={value.title}
                rota={`/animes/${animeId}/${index + 1}`}
                anime={data.anime}
                episode={index + 1}
                episodes={data.quant}
                poster={data.episodePoster}
              />
            ))}
        </MainOfAnime>
      </SectionEpisodes>
      <Footer />
    </Container>
  );
};
