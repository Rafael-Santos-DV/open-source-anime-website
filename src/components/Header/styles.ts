import styled from 'styled-components';

type HeaderType = {
  url: string;
};

export const HeaderStyle = styled.header<HeaderType>`
  background-image: url(${(props) => props.url});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position-y: -80px; */
  display: flex;
  justify-content: space-around;
  padding: 20px 30px 400px 10px;

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
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    #logo-master {
      order: 2;
    }
    .navigation {
      order: 1;
      flex-direction: column;
    }

    #search {
      order: 3;
    }
  }
`;
