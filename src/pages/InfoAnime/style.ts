import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const Container = styled.div`
  width: 100%;

  header.info-anime {
    padding-bottom: 0;

    @media only screen and (max-width: 648px) {
      padding-left: 15px;
      padding-right: 15px;

      img#logo-master {
        width: 100%;
        max-width: 250px;
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

export const SectionEpisodes = styled.section``;
