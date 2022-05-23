import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const Container = styled.div`
  width: 100%;

  header.info-anime {
    padding-bottom: 0;
  }

  span.line-blue {
    width: 100%;
    height: 1px;
    display: block;
    border-bottom: 5px solid ${colors.colorBlue};
  }
`;
