import React from 'react';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';

import {
  ArticleAnime,
  BoxNext,
  ContainerAnimes,
  MainContent,
  SectionAllAnimes,
  SideBarStar,
  TitlePage,
} from './styles';
import logo from '../../assets/logo.svg';
import { ComponentAnime } from '../../components/Anime/Anime';
import { Button } from '../../components/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import { Watched } from '../../components/Watched/Watched';
import { useAllData } from '../../hooks/useAllData';

export const Animes: React.FC = () => {
  const data = useAllData();

  return (
    <ContainerAnimes>
      <Header className="page-animes-header">
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader isHome={false} />
      </Header>
      <SectionAllAnimes>
        <MainContent>
          <TitlePage>
            <h1>Todos</h1>
            <strong>Animes</strong>
          </TitlePage>
          <ArticleAnime>
            {data &&
              data.map((value) => (
                <ComponentAnime
                  key={value.animeId}
                  type="animes"
                  url={value.poster}
                  anime={value.anime}
                  date={value.ano}
                  rota={`/animes/${value.animeId}`}
                  title={value.description}
                />
              ))}
          </ArticleAnime>
          <BoxNext>
            <Button className="button-next">1</Button>
            <Button className="button-next">Próximo</Button>
          </BoxNext>
        </MainContent>
        <SideBarStar>
          <div className="box-feedback">
            <h2>Mais assistidos</h2>
            {data &&
              data
                .filter((filter) => filter.likes >= 7)
                .slice(0, 5)
                .map((value) => (
                  <Watched
                    poster={value.poster}
                    key={value.animeId}
                    anime={value.anime}
                    date={String(value.ano)}
                    rota={`/animes/${value.animeId}`}
                    star={value.likes}
                    title={value.description}
                  />
                ))}
          </div>
        </SideBarStar>
      </SectionAllAnimes>
      <Footer />
    </ContainerAnimes>
  );
};
