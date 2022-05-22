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

    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 450px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .container-calendar .box-animes {
    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);

      .background-image-anime {
        height: auto;
        max-height: 80px;
      }

      .content-info {
        strong,
        time {
          font-size: 2.8vw;
        }
      }
    }
  }
`;
