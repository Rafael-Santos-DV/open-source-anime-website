import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import {
  BoxInfo,
  ContainerEffect,
  ContainerEpisode,
  ContentImage,
} from './styles';
import playIcon from '../../assets/playicon.svg';
import play from '../../assets/play.svg';

type EpType = {
  anime: string;
  poster: string;
  episode: number;
  episodes: number;
  rota: string;
};

export const EpisodeComponent: React.FC<EpType> = ({
  anime,
  poster,
  episode,
  episodes,
  rota,
}) => {
  const text = useRef(null);

  useEffect(() => {
    const span = text.current as HTMLElement | null;

    if (span) {
      const value = span.innerText.split('');
      if (value.length >= 20) {
        if (window.innerWidth > 768) {
          console.log(window.innerWidth);
          const newValue = value.slice(0, 20);
          newValue.push('...');
          const newText = newValue.join('');
          span.innerText = newText;
        } else {
          const newValue = value.slice(0, 10);
          newValue.push('...');
          const newText = newValue.join('');
          span.innerText = newText;
        }
      }
    }
  }, []);
  return (
    <ContainerEpisode className="episode">
      <Link to={rota} className="content">
        <ContentImage>
          <img
            className="poster"
            src={poster}
            alt={`Episodio ${episode}`}
            loading="lazy"
          />

          <ContainerEffect className="effect">
            <img src={play} alt="Play" />
          </ContainerEffect>
        </ContentImage>
        <BoxInfo>
          <strong>
            <span className="ep">
              {episode}/{episodes}
            </span>
            <span ref={text}> {anime}</span>
          </strong>
          <div className="content-play">
            <img src={playIcon} alt="Play" loading="lazy" />
          </div>
        </BoxInfo>
      </Link>
    </ContainerEpisode>
  );
};
