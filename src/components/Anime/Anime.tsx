import React from 'react';
import { Link } from 'react-router-dom';
import { Anime, EffectBackground, EffectPlay } from './style';
import play from '../../assets/play.svg';

type AnimeType = {
  type: 'animes' | 'calendar';
  url: string;
};

export const ComponentAnime: React.FC<AnimeType> = ({ type, url }) => {
  return (
    <Link to="/" className="box-anime-link">
      <Anime className={` ${type === 'animes' ? 'animes-pad' : ''}`}>
        <EffectBackground>
          <img src={url} alt="teste" className="background-image-anime" />
          <EffectPlay className="effect-play" type={type}>
            <img src={play} alt="Ver anime" className="image-play" />
            {type === 'animes' && <span>Ver anime</span>}
          </EffectPlay>
        </EffectBackground>

        <div className="content-info">
          <strong>Nome do anime</strong>
          <time>2022</time>
        </div>
      </Anime>
    </Link>
  );
};
