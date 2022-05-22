import React from 'react';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Search } from '../../components/Search/Search';
import { ContainerAnimes } from './styles';
import logo from '../../assets/logo.svg';

export const Animes: React.FC = () => {
  return (
    <ContainerAnimes>
      <Header>
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader />
        <Search />
      </Header>
    </ContainerAnimes>
  );
};
