import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { BoxAnimes, BoxTitle, ContainerSearch, SectionResult } from './style';
import logo from '../../assets/logo.svg';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Footer } from '../../components/Footer/Footer';
import { ComponentAnime } from '../../components/Anime/Anime';

export const PageSearch: React.FC = () => {
  const [getQuery] = useSearchParams();

  return (
    <ContainerSearch>
      <Header className="page-animes-header">
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader isHome={false} />
      </Header>

      <SectionResult>
        <BoxTitle>
          <h1>
            {getQuery.get('anime')
              ? getQuery.get('anime')
              : 'Nenhum anime encontrado'}
          </h1>
        </BoxTitle>

        <BoxAnimes>
          <ComponentAnime
            type="animes"
            url="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
          <ComponentAnime
            type="animes"
            url="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
          <ComponentAnime
            type="animes"
            url="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
          <ComponentAnime
            type="animes"
            url="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
          <ComponentAnime
            type="animes"
            url="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
          <ComponentAnime
            type="animes"
            url="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
          <ComponentAnime
            type="animes"
            url="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
          <ComponentAnime
            type="animes"
            url="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg"
          />
        </BoxAnimes>
      </SectionResult>
      <Footer />
    </ContainerSearch>
  );
};
