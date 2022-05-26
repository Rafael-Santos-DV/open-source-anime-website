import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BoxAnimes, BoxTitle, ContainerSearch, SectionResult } from './style';
import logo from '../../assets/logo.svg';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Footer } from '../../components/Footer/Footer';
import { ComponentAnime } from '../../components/Anime/Anime';
import { useContextData } from '../../hooks/useContextData';
import { ResponseData } from '../../types/responseData';

export const PageSearch: React.FC = () => {
  const [getQuery, setParam] = useSearchParams();
  const data = useContextData();
  const [filterData, setData] = useState<ResponseData[]>();

  useEffect(() => {
    const newData = data?.filter((valueFilter) =>
      valueFilter.anime
        .toUpperCase()
        .includes(getQuery.get('anime')?.toUpperCase() || '')
    );

    setData(newData);
  }, [getQuery.get('anime'), data]);

  const handleChangeFilter = (value: string) => {
    setParam(`anime=${value}`);
  };

  return (
    <ContainerSearch>
      <Header className="page-animes-header">
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation
          navHeader
          isHome={false}
          searchFunction={handleChangeFilter}
        />
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
          {!filterData?.length && (
            <div className="anime-not-found">Anime não Encontrado</div>
          )}
          {filterData &&
            filterData.map((value) => (
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
        </BoxAnimes>
      </SectionResult>
      <Footer />
    </ContainerSearch>
  );
};
