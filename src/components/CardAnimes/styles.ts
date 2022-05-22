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
`;
export const Anime = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;

  img {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding-left: 5px;

    strong,
    time {
      font-size: 14px;
    }

    time {
      color: ${colors.colorCinza};
    }
  }
`;
