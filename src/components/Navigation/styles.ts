import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  column-gap: 25px;
  z-index: 1;

  a {
    display: flex;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    column-gap: 10px;

    img {
      width: 30px;
    }
  }
`;
