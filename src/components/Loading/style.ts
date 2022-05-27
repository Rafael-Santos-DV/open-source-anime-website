import styled from 'styled-components';

export const AwaitingContainer = styled.div`
  color: #00ff00;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 50px;

  > div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    border-right: 4px solid #fff;
    border-top: 4px solid green;

    animation: animation-one 1s ease-in-out infinite;

    @keyframes animation-one {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
