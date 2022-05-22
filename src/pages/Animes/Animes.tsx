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
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images7.alphacoders.com/303/thumbbig-303042.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images7.alphacoders.com/303/thumbbig-303042.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images7.alphacoders.com/303/thumbbig-303042.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images7.alphacoders.com/303/thumbbig-303042.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
            />
            <ComponentAnime
              type="animes"
              url="https://images.alphacoders.com/605/thumbbig-605799.webp"
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
