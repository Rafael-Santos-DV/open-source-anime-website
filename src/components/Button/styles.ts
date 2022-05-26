import styled, { css } from 'styled-components';
import { colors } from '../../colors/colors';

export const ButtonComponent = styled.button`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  color: ${colors.colorGreen};
  font-size: 20px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  transition: filter 200ms ease;
  z-index: 1;
  ${(props) =>
    props.disabled
      ? css`
          background-color: #ccc !important;
        `
      : ''}

  &:hover {
    filter: brightness(0.5);
  }

  @media only screen and (max-width: 768px) {
    padding: 7px;
  }
`;
