import React from 'react';
import { ComponentAnime } from '../Anime/Anime';
import { BoxAnimes, BoxTitle, ContainerCalendar } from './styles';

type TypeCardAnimes = {
  title: string;
  className?: string;
  // data?: Array<string>;
  type: 'calendar' | 'animes';
};

export const CardAnimes: React.FC<TypeCardAnimes> = ({
  title,
  className,
  type,
}) => {
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
        <ComponentAnime
          type={type}
          url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
        />
        <ComponentAnime
          type={type}
          url="https://image.tmdb.org/t/p/original/jtBo40RgHzihmYYzzqkPOXyux8.jpg"
        />
        <ComponentAnime
          type={type}
          url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
        />
        <ComponentAnime
          type={type}
          url="https://image.tmdb.org/t/p/original/jtBo40RgHzihmYYzzqkPOXyux8.jpg"
        />
        <ComponentAnime
          type={type}
          url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
        />
        <ComponentAnime
          type={type}
          url="https://image.tmdb.org/t/p/original/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg"
        />
        <ComponentAnime
          type={type}
          url="https://image.tmdb.org/t/p/original/jtBo40RgHzihmYYzzqkPOXyux8.jpg"
        />
      </BoxAnimes>
    </ContainerCalendar>
  );
};
