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
  animeName: string;
};

export const EpisodeComponent: React.FC<EpType> = ({ animeName }) => {
  const text = useRef(null);

  useEffect(() => {
    const span = text.current as HTMLElement | null;

    if (span) {
      const value = span.innerText.split('');
      console.log(span);
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
    <ContainerEpisode>
      <Link to="/" className="content">
        <ContentImage>
          <img
            className="poster"
            src="https://www.themoviedb.org/t/p/w160_and_h90_bestv2/do38h5WNe5gW8Z5QMZR6hNZXPjk.jpg"
            alt=""
            loading="lazy"
          />

          <ContainerEffect className="effect">
            <img src={play} alt="Play" />
          </ContainerEffect>
        </ContentImage>
        <BoxInfo>
          <strong>
            <span className="ep">1/100 </span>
            <span ref={text}>{animeName}</span>
          </strong>
          <div className="content-play">
            <img src={playIcon} alt="" />
          </div>
        </BoxInfo>
      </Link>
    </ContainerEpisode>
  );
};