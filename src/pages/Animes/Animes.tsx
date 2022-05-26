import React, { useEffect, useState } from 'react';
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
import { useContextData } from '../../hooks/useContextData';
import { useLocalPath } from '../../hooks/usePath';

export const Animes: React.FC = () => {
  const data = useContextData();

  const location = useLocalPath();
  const [more, setMore] = useState({
    init: 0,
    end: 12,
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (localStorage.page) {
      setPage(Number(localStorage.page));
      setMore({
        init: Number(localStorage.page) * 12 - 12,
        end: Number(localStorage.page) * 12,
      });
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [location]);

  const handleMoreAnime = () => {
    if (more.end < Number(data?.length)) {
      setMore((prev) => ({
        init: prev.end,
        end: prev.end + 12,
      }));
      setPage((prev) => Number(prev) + 1);
      localStorage.page = Number(page) + 1;
    }
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  const handleEndAnime = () => {
    if (page > 1) {
      setPage((prev) => Number(prev) - 1);
      setMore((prev) => ({
        init: Number(prev.init) - 12,
        end: Number(prev.end) - 12,
      }));

      localStorage.page = Number(page) - 1;
    }
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

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
              data
                .slice(Number(more.init), Number(more.end))
                .map((value) => (
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
            <Button className="button-next" onClick={handleEndAnime}>
              {page}
            </Button>
            <Button
              disabled={more.end > Number(data?.length)}
              className="button-next"
              onClick={handleMoreAnime}
            >
              Próximo
            </Button>
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
