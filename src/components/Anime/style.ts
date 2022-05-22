import styled, { css } from 'styled-components';
import { colors } from '../../colors/colors';

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
    height: auto;
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

export const EffectBackground = styled.div`
  position: relative;
  overflow: hidden;
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
  row-gap: 10px;

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
            width: 40px;
            margin-top: 20px;
            animation: animation-show-image 200ms;
          }
        `
      : css`
          justify-content: center;

          img.image-play {
            width: 40px;
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
