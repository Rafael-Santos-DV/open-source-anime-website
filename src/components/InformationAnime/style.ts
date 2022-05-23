import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const ContainerInformation = styled.article`
  z-index: 1;
  color: #fff;
  width: 100%;
  max-width: 1100px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, 1fr);

  img.poster-info {
    width: 100%;
    max-width: 200px;
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }

  @media only screen and (max-width: 648px) {
    grid-template-columns: repeat(3, 1fr);

    img.poster-info {
      grid-row: 1 / span 3;
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  grid-column: 2 / span 5;
`;

export const Title = styled.div`
  width: 100%;

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 3vw;
    }
  }
  @media only screen and (max-width: 748px) {
    grid-column: 3 / span 5;
  }
`;

export const BoxInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Gender = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media only screen and (max-width: 748px) {
    font-size: 3.4vw;
  }
`;

export const TypeAnime = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: 5px;
  }
  @media only screen and (max-width: 748px) {
    font-size: 3.4vw;
  }

  span.epi {
    color: ${colors.colorBlue};
  }
`;

export const Content = styled.article`
  grid-column: 2 / span 5;
  grid-row: 2 / span 2;
  text-align: justify;

  p {
    font-family: 'Roboto', sans-serif;
    color: ${colors.colorCinza};
  }

  @media only screen and (max-width: 648px) {
    grid-row: 4;
    grid-column: 1 / span 5;

    p {
      font-size: 4vw;
    }
  }

  @media only screen and (max-width: 420px) {
    grid-row: 4;
    grid-column: 1 / span 5;
  }

  @media only screen and (max-width: 350px) {
    grid-row: 3;
  }
`;
