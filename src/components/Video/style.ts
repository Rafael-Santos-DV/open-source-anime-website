import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const Container = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const VideoComponent = styled.video`
  width: 100%;
`;

export const Awaiting = styled.div<{ poster?: string }>`
  color: ${colors.colorBlue};
  font-size: 1.6rem;
  padding: 100px 0;
`;

export const NextVideo = styled.button`
  background-color: ${colors.colorBlue};
  color: white;
  position: absolute;
  margin: 40px;
  max-width: 200px;
  border-radius: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: 200ms background-color;

  &:active {
    background-color: #7c5ef7;
  }
`;

export const Play = styled(NextVideo)<{ play: boolean }>`
  opacity: ${(props) => (props.play ? 1 : 0)};
  z-index: 3;
  border: 1px solid red;
`;
