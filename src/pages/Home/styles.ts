import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const ContainerHome = styled.div`
  span.line {
    width: 100%;
    height: 2px;
    background: ${colors.colorBlue};
    display: block;
  }
`;

export const SectionFiltro = styled.section`
  transform: translateY(-50%);
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CalendarOfYear = styled.section`
  width: 100%;
  max-width: 1100px;
  padding: 10px;
  border: 1px solid red;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
