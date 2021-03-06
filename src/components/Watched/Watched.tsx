import { Link } from 'react-router-dom';
import React from 'react';
import { ContainerWatched } from './style';
import starImage from '../../assets/star.svg';

type WatchedType = {
  anime: string;
  rota: string;
  title: string;
  date: string;
  star: number;
  poster: string;
};

export const Watched: React.FC<WatchedType> = ({
  anime,
  rota,
  title,
  date,
  star,
  poster,
}) => {
  return (
    <ContainerWatched>
      <Link to={rota}>
        <img src={poster} alt={title} className="anime" loading="lazy" />
        <div className="content">
          <strong>{anime}</strong>
          <time>{date}</time>
          <div className="box-favorito">
            <img src={starImage} alt="Favorito" />
            <span>{star}</span>
          </div>
        </div>
      </Link>
    </ContainerWatched>
  );
};
