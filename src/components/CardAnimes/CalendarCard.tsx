import React, { useEffect, useState } from 'react';
import { ResponseData } from '../../types/responseData';
import { ComponentAnime } from '../Anime/Anime';
import { BoxAnimes, BoxTitle, ContainerCalendar } from './styles';

type TypeCardAnimes = {
  title: string;
  className?: string;
  // data?: Array<string>;
  type: 'calendar' | 'animes';
  data: ResponseData[] | undefined;
};

export const CardAnimes: React.FC<TypeCardAnimes> = ({
  title,
  className,
  type,
  data,
}) => {
  const [filterValues, setValues] = useState<ResponseData[]>();

  useEffect(() => {
    const newData = data?.filter((value) =>
      type === 'calendar'
        ? String(value.ano) === String(new Date().getFullYear())
        : value
    );

    setValues(newData);
  }, [data]);

  return (
    <ContainerCalendar className={className}>
      <BoxTitle>
        <div>
          <span />
          <span />
          <span />
        </div>
        <h1>{title}</h1>
      </BoxTitle>
      <BoxAnimes className="box-animes">
        {filterValues &&
          filterValues.map((value) => (
            <ComponentAnime
              key={value.description}
              anime={value.anime}
              type={type}
              url={value.poster}
              date={value.ano}
              rota={`/animes/${value.animeId}`}
              title={value.description}
            />
          ))}
      </BoxAnimes>
    </ContainerCalendar>
  );
};
