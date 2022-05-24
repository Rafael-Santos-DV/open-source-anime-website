import React from 'react';
import { Header } from '../../components/Header/Header';
import { CalendarOfAnimes, ContainerHome, SectionFiltro } from './styles';
import logo from '../../assets/logo.svg';
import { Navigation } from '../../components/Navigation/Navigation';
import { Search } from '../../components/Search/Search';
import { Button } from '../../components/Button/Button';
import { CardAnimes } from '../../components/CardAnimes/CalendarCard';
import { Footer } from '../../components/Footer/Footer';

export const Home: React.FC = () => {
  return (
    <ContainerHome>
      <Header className="header-position">
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader isHome />
        <Search />
      </Header>
      <span className="line" />
      <SectionFiltro>
        <Button>A</Button>
        <Button>b</Button>
        <Button>c</Button>
        <Button>d</Button>
        <Button>e</Button>
        <Button>f</Button>
        <Button>g</Button>
        <Button>h</Button>
        <Button>i</Button>
        <Button>j</Button>
        <Button>k</Button>
        <Button>l</Button>
        <Button>m</Button>
        <Button>n</Button>
        <Button>o</Button>
        <Button>p</Button>
        <Button>q</Button>
        <Button>r</Button>
        <Button>s</Button>
        <Button>t</Button>
        <Button>u</Button>
        <Button>v</Button>
        <Button>x</Button>
        <Button>y</Button>
        <Button>z</Button>
      </SectionFiltro>
      <CalendarOfAnimes>
        <CardAnimes
          title="Calendário de 2022"
          type="calendar"
          className="container-calendar"
        />
        <CardAnimes title="Animes" className="container-animes" type="animes" />
      </CalendarOfAnimes>
      <Footer />
    </ContainerHome>
  );
};
