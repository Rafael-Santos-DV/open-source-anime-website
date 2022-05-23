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
import star from '../../assets/star.svg';
import calendar from '../../assets/calendar.svg';

export const InformationAnime: React.FC = () => {
  return (
    <ContainerInformation>
      <img
        className="poster-info"
        src="https://image.tmdb.org/t/p/original/nTNqhbHL6Elwx7Uex6Zy03JRSP9.jpg"
        alt=""
      />
      <Information>
        <Title>
          <h1>Otome Game Sekai wa Mob ni Kibishii Sekai desu 1x8</h1>
        </Title>
        <BoxInformation>
          <Gender>
            <ul>
              <li>Ação</li>
              <li>Comédia</li>
              <li>Fantasia</li>
            </ul>
          </Gender>
          <TypeAnime>
            <div>
              <img src={calendar} alt="" />
              <time>2022</time>
            </div>
            <div>
              <span className="epi">12</span>
              <strong>Episódios</strong>
            </div>
            <div>
              <img src={star} alt="" />
              <span>2.5</span>
            </div>
          </TypeAnime>
        </BoxInformation>
      </Information>
      <Content>
        <p>
          Após acordar em um mundo desconhecido, Leon percebe que foi
          reencarnado no universo de um otome game que jogou. Nesse mundo as
          mulheres dominam completamente os homens, os usando como bem entendem
          para alcançar seus objetivos. Não o bastante, as únicas rotas amorosas
          disponíveis no jogo são com um grupo de príncipes herdeiros.
          Percebendo sua situação, Leon decide usar seus conhecimentos do jogo
          para iniciar uma revolução contra as mulheres, mudando completamente
          aquele mundo.
        </p>
      </Content>
    </ContainerInformation>
  );
};
