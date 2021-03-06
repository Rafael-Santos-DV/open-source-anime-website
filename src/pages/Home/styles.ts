import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const ContainerHome = styled.div`
  span.line {
    width: 100%;
    height: 2px;
    background: ${colors.colorBlue};
    display: block;
  }

  #logo-master {
    @media only screen and (max-width: 768px) {
      width: 100%;
      max-width: 200px;
    }
  }

  .header-position {
    @media only screen and (min-width: 761px) {
      padding-bottom: 200px;
    }
    padding-bottom: 200px;
  }
`;

export const SectionFiltro = styled.section`
  transform: translateY(-50%);
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding: 0 20px;
`;

export const CalendarOfAnimes = styled.section`
  width: 100%;
  max-width: 1100px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  padding-bottom: 70px;

  .container-animes .box-animes {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media only screen and (min-width: 768px) {
      .background-image-anime {
        min-height: 26vw;
        max-height: 26vw;
      }
    }

    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);

      .background-image-anime {
        min-height: 34vw;
        max-height: 34vw;
      }
    }
    @media only screen and (max-width: 450px) {
      grid-template-columns: repeat(2, 1fr);

      .background-image-anime {
        min-height: 48vw;
        max-height: 48vw;
      }
    }

    @media only screen and (min-width: 1400px) {
      .background-image-anime {
        max-height: 340px;
        min-height: 340px;
      }
    }
  }

  .container-calendar .box-animes {
    @media only screen and (min-width: 768px) {
      .background-image-anime {
        min-height: 14vw;
        max-height: 14vw;
      }
    }

    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(4, 1fr);

      .background-image-anime {
        min-height: 24vw;
        max-height: 24vw;
      }

      .content-info {
        strong,
        time {
          font-size: 2.8vw;
        }
      }
    }
    @media only screen and (max-width: 478px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 1400px) {
      .background-image-anime {
        min-height: 140px;
        max-height: 140px;
      }
    }
  }
`;
