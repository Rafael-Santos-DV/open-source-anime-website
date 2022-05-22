import styled from 'styled-components';
import backgroundfooter from '../../assets/capa.jpg';
import { colors } from '../../colors/colors';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background: url(${backgroundfooter});
  padding-top: 150px;
  position: relative;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.colorMaster};
    opacity: 0.95;
  }

  > span {
    padding: 50px;
    z-index: 1;
    color: #fff;
    border-top: 1px solid #fff;
    margin-top: 100px;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    z-index: 1;
    width: 200px;
  }
`;
export const BoxSocialNetwork = styled.div`
  z-index: 1;
  display: flex;
  column-gap: 20px;
  align-items: center;

  img {
    width: 40px;
  }

  & a:nth-of-type(2) {
    img {
      width: 30px;
    }
  }
`;
