import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const Container = styled.div`
  width: 100%;

  header.info-anime {
    padding-bottom: 0;

    @media only screen and (min-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 1fr;

      > img {
        margin: 0 auto;
      }

      & article.box-article {
        grid-column: 1 / span 2;
        margin: 0 auto;
      }
    }

    @media only screen and (max-width: 648px) {
      padding-left: 15px;
      padding-right: 15px;

      img#logo-master {
        width: 100%;
        max-width: 250px;
      }
    }

    article.box-article {
      gap: 5px;

      img.poster-info {
        padding-bottom: 10px;
      }
    }
  }

  span.line-blue {
    width: 100%;
    height: 1px;
    display: block;
    border-bottom: 5px solid ${colors.colorBlue};
  }
`;

export const SectionEpisodes = styled.section`
  max-width: 1100px;
  margin: 0 auto;

  > h1 {
    color: ${colors.colorBlue};
    padding: 10px 10px 30px 10px;
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 768px) {
    > h1 {
      font-size: 5.5vw;
    }
  }
`;

export const MainOfAnime = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 500px) {
    footer div.content-play {
      display: none;
    }
  }
`;
