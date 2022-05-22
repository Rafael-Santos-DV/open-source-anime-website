import styled from 'styled-components';

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  border-radius: 30px;
  align-items: center;
  padding: 5px 15px 5px 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid #fff;
  z-index: 1;
  input {
    flex: 1;
    padding: 10px;
    background-color: transparent;
    border: none;
    width: 100%;

    &::placeholder {
      color: #fff;
      font-size: 20px;
    }
  }

  img {
    width: 30px;
    cursor: pointer;
  }

  @media only screen and (max-width: 568px) {
    input {
      &::placeholder {
        font-size: 4.5vw;
      }
    }
  }
`;
