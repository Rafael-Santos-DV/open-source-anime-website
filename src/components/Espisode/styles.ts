import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const ContainerEpisode = styled.article`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;

  a.content {
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid ${colors.colorBlue};
    padding: 10px;
    color: #fff;
    font-weight: normal;
    gap: 10px;

    &:hover {
      img.poster {
        transform: scale(1.5);
      }

      div.effect {
        display: flex;
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

export const ContentImage = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  img.poster {
    width: 100%;
    transition: transform 200ms;
  }
`;

export const BoxInfo = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  line-height: 1.5;
  letter-spacing: 0.05rem;
  flex-direction: column;

  strong {
    font-size: 0.8rem;

    span.ep {
      color: ${colors.colorBlue};
    }
  }

  img {
    width: 20px;
  }

  @media only screen and (max-width: 768px) {
    strong {
      font-size: 2vw;
    }

    img {
      width: 100%;
      max-width: 15px;
    }
  }

  .content-play {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ContainerEffect = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 50px;
    animation: animation-img 400ms ease;
  }

  @keyframes animation-img {
    0% {
      width: 0;
    }
    100% {
      max-width: 50px;
    }
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 100%;
      max-width: 30px;
    }
    @keyframes animation-img {
      0% {
        width: 0;
      }
      100% {
        max-width: 30px;
      }
    }
  }
`;
