import React from 'react';
import {
  BoxInformation,
  ContainerInformation,
  Content,
  Gender,
  Information,
  Title,
  TypeAnime,
} from './style';
import starImage from '../../assets/star.svg';
import calendar from '../../assets/calendar.svg';

type InformationType = {
  anime: string;
  poster: string;
  title: string;
  gender: Array<string>;
  date: string;
  episodes: number;
  star: number;
  description: string;
};

export const InformationAnime: React.FC<InformationType> = ({
  anime,
  poster,
  title,
  gender,
  date,
  episodes,
  star,
  description,
}) => {
  return (
    <ContainerInformation className="box-article">
      <img className="poster-info" src={poster} alt={title} />
      <Information>
        <Title>
          <h1>{anime}</h1>
        </Title>
        <BoxInformation>
          <Gender>
            <ul>
              {gender.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </Gender>
          <TypeAnime>
            <div>
              <img src={calendar} alt="Ano" />
              <time>{date}</time>
            </div>
            <div>
              <span className="epi">{episodes}</span>
              <strong>Episódios</strong>
            </div>
            <div>
              <img src={starImage} alt="Feedback" />
              <span>{star}</span>
            </div>
          </TypeAnime>
        </BoxInformation>
      </Information>
      <Content>
        <p>{description}</p>
      </Content>
    </ContainerInformation>
  );
};
