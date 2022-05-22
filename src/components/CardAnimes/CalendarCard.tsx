import React from 'react';
import { Link } from 'react-router-dom';
import {
  Anime,
  BoxAnimes,
  BoxTitle,
  ContainerCalendar,
  EffectBackground,
  EffectPlay,
} from './styles';
import imageTeste from '../../assets/teste.jpg';
import play from '../../assets/play.svg';

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
        <Link to="/" className="box-anime-link">
          <Anime className={` ${type === 'animes' ? 'animes-pad' : ''}`}>
            <EffectBackground>
              <img
                src={imageTeste}
                alt="teste"
                className="background-image-anime"
              />
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
        <Link to="/" className="box-anime-link">
          <Anime className={` ${type === 'animes' ? 'animes-pad' : ''}`}>
            <EffectBackground>
              <img
                src={imageTeste}
                alt="teste"
                className="background-image-anime"
              />
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
        <Link to="/" className="box-anime-link">
          <Anime className={` ${type === 'animes' ? 'animes-pad' : ''}`}>
            <EffectBackground>
              <img
                src={imageTeste}
                alt="teste"
                className="background-image-anime"
              />
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
        <Link to="/" className="box-anime-link">
          <Anime className={` ${type === 'animes' ? 'animes-pad' : ''}`}>
            <EffectBackground>
              <img
                src={imageTeste}
                alt="teste"
                className="background-image-anime"
              />
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
        <Link to="/" className="box-anime-link">
          <Anime className={` ${type === 'animes' ? 'animes-pad' : ''}`}>
            <EffectBackground>
              <img
                src={imageTeste}
                alt="teste"
                className="background-image-anime"
              />
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
        <Link to="/" className="box-anime-link">
          <Anime className={` ${type === 'animes' ? 'animes-pad' : ''}`}>
            <EffectBackground>
              <img
                src={imageTeste}
                alt="teste"
                className="background-image-anime"
              />
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
        <Link to="/" className="box-anime-link">
          <Anime className={` ${type === 'animes' ? 'animes-pad' : ''}`}>
            <EffectBackground>
              <img
                src={imageTeste}
                alt="teste"
                className="background-image-anime"
              />
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
      </BoxAnimes>
    </ContainerCalendar>
  );
};
