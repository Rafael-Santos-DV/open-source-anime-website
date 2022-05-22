import React from 'react';
import { Anime, BoxAnimes, BoxTitle, ContainerCalendar } from './styles';
import imageTeste from '../../assets/teste.jpg';

type TypeCardAnimes = {
  title: string;
  className?: string;
  // data?: Array<string>;
};

export const CardAnimes: React.FC<TypeCardAnimes> = ({ title, className }) => {
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
        <Anime>
          <img src={imageTeste} alt="teste" />
          <div>
            <strong>Nome do anime</strong>
            <time>2022</time>
          </div>
        </Anime>
        <Anime>
          <img src={imageTeste} alt="teste" />
          <div>
            <strong>Nome do anime</strong>
            <time>2022</time>
          </div>
        </Anime>
        <Anime>
          <img src={imageTeste} alt="teste" />
          <div>
            <strong>Nome do anime</strong>
            <time>2022</time>
          </div>
        </Anime>
        <Anime>
          <img src={imageTeste} alt="teste" />
          <div>
            <strong>Nome do anime</strong>
            <time>2022</time>
          </div>
        </Anime>
        <Anime>
          <img src={imageTeste} alt="teste" />
          <div>
            <strong>Nome do anime</strong>
            <time>2022</time>
          </div>
        </Anime>
        <Anime>
          <img src={imageTeste} alt="teste" />
          <div>
            <strong>Nome do anime</strong>
            <time>2022</time>
          </div>
        </Anime>
        <Anime>
          <img src={imageTeste} alt="teste" />
          <div>
            <strong>Nome do anime</strong>
            <time>2022</time>
          </div>
        </Anime>
      </BoxAnimes>
    </ContainerCalendar>
  );
};
