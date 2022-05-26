import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const ContainerSearch = styled.div`
  width: 100%;

  img#logo-master {
    width: 100%;
    max-width: 300px;
  }
`;

export const SectionResult = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  top: -350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  .anime-not-found {
    color: red;
    font-size: 20px;
  }
`;

export const BoxTitle = styled.article`
  h1 {
    font-size: 2rem;
    color: #ffffff;
    padding-bottom: 10px;

    @media only screen and (max-width: 768px) {
      font-size: 5.5vw;
    }
  }
`;

export const BoxAnimes = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  > .box-anime-link {
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;

    &:hover {
      border-top: 1px solid ${colors.colorBlue};
      border-left: 1px solid ${colors.colorBlue};
      border-right: 1px solid ${colors.colorBlue};

      img.background-image-anime {
        transform: scale(1.5);
      }
      div.effect-play {
        display: flex;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
