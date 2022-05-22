import styled, { css } from 'styled-components';
import { colors } from '../../colors/colors';

export const ContainerCalendar = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.8rem;
    color: ${colors.colorBlue};
  }
  div {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    span {
      display: block;
      width: 6px;
      height: 6px;
      background-color: ${colors.colorRed};
      border-radius: 50%;
    }
  }
`;

export const BoxAnimes = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 15px;

  a.box-anime-link {
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid transparent;
    transition: border 1s;

    &:hover {
      border: 1px solid ${colors.colorBlue};

      img.background-image-anime {
        transform: scale(1.5);
      }
      div.effect-play {
        display: flex;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;

export const EffectBackground = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Anime = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  row-gap: 5px;
  border-bottom: 4px solid ${colors.colorBlue};
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);

  &.animes-pad {
    padding: 0;
  }

  img {
    width: 100%;
    height: 150px;
    /* margin-bottom: 10px; */
    transition: transform 500ms ease-out;
  }

  div.content-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding-left: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    max-width: 140px;

    strong,
    time {
      font-size: 14px;
      display: block;
    }

    time {
      color: ${colors.colorCinza};
    }
  }
`;

export const EffectPlay = styled.div<{ type: 'calendar' | 'animes' }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  display: none;

  ${(props) =>
    props.type === 'animes'
      ? css`
          span {
            padding: 4px 15px;
            color: #fff;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 5px;
            animation: animation-show 500ms;
            margin-bottom: 10px;
          }

          img.image-play {
            width: 50px;
            margin-top: 20px;
            animation: animation-show-image 200ms;
          }
        `
      : css`
          img.image-play {
            width: 50px;
            animation: animation-show-image 200ms;
          }
        `}

  @keyframes animation-show {
    0% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes animation-show-image {
    0% {
      width: 0px;
    }
    100% {
      width: 45px;
    }
  }

  @media only screen and (max-width: 768px) {
    row-gap: 10px;

    img.image-play {
      width: 30px;
    }

    span {
      font-size: 2vw;
    }

    @keyframes animation-show-image {
      0% {
        width: 0px;
      }
      100% {
        width: 30px;
      }
    }
  }
`;
