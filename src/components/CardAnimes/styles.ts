import styled from 'styled-components';
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
