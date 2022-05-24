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

export const Animes: React.FC = () => {
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
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
              anime="Dragon ball"
              date="2020"
              rota="/animes/dd"
              title="melhor animes de todos"
            />
          </ArticleAnime>
          <BoxNext>
            <Button className="button-next">1</Button>
            <Button className="button-next">Próximo</Button>
          </BoxNext>
        </MainContent>
        <SideBarStar>
          <div className="box-feedback">
            <h2>Mais assistidos</h2>
            <Watched
              anime="dragon ball"
              date="2022"
              rota="/animes/dd"
              star={4}
              title="ola meus amigos"
            />
          </div>
        </SideBarStar>
      </SectionAllAnimes>
      <Footer />
    </ContainerAnimes>
  );
};
