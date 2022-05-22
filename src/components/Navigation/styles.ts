import styled, { css } from 'styled-components';

export const Nav = styled.nav<{ activeLinks: boolean }>`
  z-index: 1;

  &.mb {
    padding-left: 20px;
  }

  .menu-mobile {
    display: none;
  }

  div.links {
    display: flex;
    gap: 25px;
  }

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

  @media only screen and (max-width: 768px) {
    width: 100%;

    div.links {
      flex-wrap: wrap;
      justify-content: center;
    }

    div.mobile-active {
      flex-direction: column;
      row-gap: 20px;
      animation: animation-mobile 200ms ease;
    }

    .menu-mobile {
      display: flex;
      margin-bottom: 15px;
    }

    ${(props) =>
      !props.activeLinks &&
      css`
        div.mobile-active {
          display: none;
        }
      `}

    @keyframes animation-mobile {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translate(0%);
      }
    }
  }
`;

export const MenuMobile = styled.div``;
