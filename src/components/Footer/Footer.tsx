import React from 'react';
import { BoxContent, BoxSocialNetwork, FooterContainer } from './styles';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import logo from '../../assets/logo.svg';
import { Navigation } from '../Navigation/Navigation';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <BoxContent>
        <img src={logo} alt="LF AnimesFlix" />
        <Navigation navHeader={false} isHome={false} />
        <BoxSocialNetwork>
          <a href="http://">
            <img src={youtube} alt="Youtube" />
          </a>
          <a href="http://">
            <img src={instagram} alt="Instagram" />
          </a>

          <a href="http://">
            <img src={twitter} alt="Twitter" />
          </a>
        </BoxSocialNetwork>
      </BoxContent>
      <span>Desenvolvido por @rafaelrdscoding</span>
    </FooterContainer>
  );
};
