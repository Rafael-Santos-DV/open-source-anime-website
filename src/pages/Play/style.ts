import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const ContainerPlay = styled.div`
  header.page-play {
    padding: 10px;

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

export const MainPlay = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
`;

export const BoxPreOrNext = styled.div`
  display: flex;
  column-gap: 20px;

  > button {
    background-color: ${colors.colorBlue};
    color: #fff;
    border-radius: 5px;
    font-size: 0.8rem;
    padding: 10px;
    letter-spacing: 1px;
    font-weight: normal;

    @media only screen and (max-width: 468px) {
      padding: 8px;
      font-size: 0.5rem;
    }
  }
`;

export const ContainerVideo = styled.article`
  width: 100%;
  > video {
    width: 100%;
    max-width: 700px;
  }
`;

export const SectionEpisodes = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;

  > h2 {
    padding-bottom: 20px;
    color: ${colors.colorBlue};
    font-size: 1.8rem;
    font-weight: normal;
  }
`;

export const ContentEpisodes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
