import { createGlobalStyle } from 'styled-components';
import { colors } from '../colors/colors';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Lobster', cursive;
    text-decoration: none;
    list-style: none;
  }

  html, body, #root{
    height: 100%;
    background: ${colors.colorMaster};
  }
`;
