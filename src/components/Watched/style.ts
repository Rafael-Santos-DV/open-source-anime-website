import styled from 'styled-components';
import { colors } from '../../colors/colors';

export const ContainerWatched = styled.article`
  width: 100%;
  a {
    display: flex;
    width: 100%;
    align-items: center;
    column-gap: 10px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    overflow: hidden;
    color: #fff;
  }

  img.anime {
    width: 100%;
    max-width: 100px;
    height: auto;
  }

  div.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
    max-width: 200px;
    overflow: hidden;

    time {
      color: ${colors.colorCinza};
    }

    div.box-favorito {
      display: flex;
      align-items: center;

      img {
        width: 20px;
        margin-right: 10px;
      }
    }
  }
`;
