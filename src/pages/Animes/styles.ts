import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const ContainerAnimes = styled.div`
  width: 100%;
`;

export const SectionAllAnimes = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  position: relative;
  top: -200px;
  gap: 10px;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

export const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ArticleAnime = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  a.box-anime-link {
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid transparent;
    transition: border 1s;

    img.background-image-anime {
      min-height: 100px;
    }

    &:hover {
      border: 1px solid ${colors.colorBlue};

      img.background-image-anime {
        transform: scale(1.5);
      }
      div.effect-play {
        display: flex;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  @media only screen and (max-width: 678px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
  }
`;

export const TitlePage = styled.div`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  h1 {
    color: #ffffff;
    font-size: 2rem;
  }
  strong {
    color: #ffffff;
    padding-bottom: 20px;
    text-transform: uppercase;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
  }
`;

export const BoxNext = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 20px;

  .button-next {
    background-color: ${colors.colorBlue};
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;

export const SideBarStar = styled.aside`
  width: 100%;
  div.box-feedback {
    width: 100%;
    background-color: rgba(39, 37, 63, 0.5);
    border-radius: 10px;
    border: 1px solid #000;
    padding: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #fff;
    gap: 20px;

    h2 {
      padding-bottom: 20px;
    }
  }
`;
