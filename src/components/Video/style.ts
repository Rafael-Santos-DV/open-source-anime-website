import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const VideoComponent = styled.video``;

export const Awaiting = styled.div<{ poster?: string }>`
  color: ${colors.colorBlue};
  font-size: 1.6rem;
  padding: 100px 0;
`;
