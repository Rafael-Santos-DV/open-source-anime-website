import React from 'react';
import { Header } from '../../components/Header/Header';
import { Container, MainContent, SectionEpisodes } from './styles';
import logo from '../../assets/logo.svg';
import { Navigation } from '../../components/Navigation/Navigation';
import { Footer } from '../../components/Footer/Footer';
import { EpisodeComponent } from '../../components/Espisode/Episode';
import { useAllData } from '../../hooks/useAllData';

export const Episodes: React.FC = () => {
  // amanha fazer manuntencao aqui
  const data = useAllData()?.reverse();
  return (
    <Container>
      <Header className="header-episodes">
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation isHome={false} navHeader />
      </Header>
      <MainContent>
        <h1>Episódios</h1>
        <SectionEpisodes>
          {data &&
            data.map((anim) =>
              anim.episodes
                .slice(anim.episodes.length - 2, anim.episodes.length - 1)
                .map(() => (
                  <EpisodeComponent
                    key={anim.animeId}
                    rota={`/animes/${anim.animeId}/${anim.quant}`}
                    anime={anim.anime}
                    episode={anim.quant}
                    episodes={anim.quant}
                    poster={anim.episodePoster}
                  />
                ))
            )}
        </SectionEpisodes>
      </MainContent>
      <Footer />
    </Container>
  );
};
