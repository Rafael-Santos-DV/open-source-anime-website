import React from 'react';
import { Link } from 'react-router-dom';
import { Anime, EffectBackground, EffectPlay } from './style';
import play from '../../assets/play.svg';

type AnimeType = {
  type: 'animes' | 'calendar';
  url: string;
  anime: string;
  date: number | string;
  rota: string;
  title: string;
};

export const ComponentAnime: React.FC<AnimeType> = ({
  type,
  url,
  anime,
  date,
  rota,
  title,
}) => {
  return (
    <Link to={rota} className="box-anime-link">
      <Anime className={` ${type === 'animes' ? 'animes-pad' : ''}`}>
        <EffectBackground>
          <img src={url} alt={title} className="background-image-anime" />
          <EffectPlay className="effect-play" type={type}>
            <img src={play} alt="Ver anime" className="image-play" />
            {type === 'animes' && <span>Ver anime</span>}
          </EffectPlay>
        </EffectBackground>

        <div className="content-info">
          <strong>{anime}</strong>
          <time>{date}</time>
        </div>
      </Anime>
    </Link>
  );
};
