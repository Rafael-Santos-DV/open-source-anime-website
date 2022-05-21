import styled from 'styled-components';

type HeaderType = {
  url: string;
};

export const HeaderStyle = styled.header<HeaderType>`
  background-image: url(${(props) => props.url});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -80px;
  display: flex;
  justify-content: space-around;
  padding: 20px 10px 200px 10px;

  flex-wrap: wrap;
  row-gap: 55px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
  }

  img {
    z-index: 1;
  }
`;