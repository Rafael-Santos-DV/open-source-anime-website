import React from 'react';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Search } from '../../components/Search/Search';
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
import { ButtonLetter } from '../../components/ButtonLetter/ButtonLetter';
import { Footer } from '../../components/Footer/Footer';
import { Watched } from '../../components/Watched/Watched';

export const Animes: React.FC = () => {
  return (
    <ContainerAnimes>
      <Header>
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader />
        <Search />
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
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/jtBo40RgHzihmYYzzqkPOXyux8.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/xVqqHhoMRPDJbXXjIjr8uveRFIn.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/lCPi4hXHjLQWv7j2TVsWoLE99Uw.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
            <ComponentAnime
              type="animes"
              url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
            />
          </ArticleAnime>
          <BoxNext>
            <ButtonLetter className="button-next">1</ButtonLetter>
            <ButtonLetter className="button-next">Próximo</ButtonLetter>
          </BoxNext>
        </MainContent>
        <SideBarStar>
          <div className="box-feedback">
            <h2>Mais assistidos</h2>
            <Watched />
            <Watched />
            <Watched />
            <Watched />
            <Watched />
          </div>
        </SideBarStar>
      </SectionAllAnimes>
      <Footer />
    </ContainerAnimes>
  );
};
