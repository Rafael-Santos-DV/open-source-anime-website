import React from 'react';
import { Header } from '../../components/Header/Header';
import { CalendarOfAnimes, ContainerHome, SectionFiltro } from './styles';
import logo from '../../assets/logo.svg';
import { Navigation } from '../../components/Navigation/Navigation';
import { Search } from '../../components/Search/Search';
import { ButtonLetter } from '../../components/ButtonLetter/ButtonLetter';
import { CardAnimes } from '../../components/CardAnimes/CalendarCard';
import { Footer } from '../../components/Footer/Footer';

export const Home: React.FC = () => {
  return (
    <ContainerHome>
      <Header>
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader />
        <Search />
      </Header>
      <span className="line" />
      <SectionFiltro>
        <ButtonLetter>A</ButtonLetter>
        <ButtonLetter>b</ButtonLetter>
        <ButtonLetter>c</ButtonLetter>
        <ButtonLetter>d</ButtonLetter>
        <ButtonLetter>e</ButtonLetter>
        <ButtonLetter>f</ButtonLetter>
        <ButtonLetter>g</ButtonLetter>
        <ButtonLetter>h</ButtonLetter>
        <ButtonLetter>i</ButtonLetter>
        <ButtonLetter>j</ButtonLetter>
        <ButtonLetter>k</ButtonLetter>
        <ButtonLetter>l</ButtonLetter>
        <ButtonLetter>m</ButtonLetter>
        <ButtonLetter>n</ButtonLetter>
        <ButtonLetter>o</ButtonLetter>
        <ButtonLetter>p</ButtonLetter>
        <ButtonLetter>q</ButtonLetter>
        <ButtonLetter>r</ButtonLetter>
        <ButtonLetter>s</ButtonLetter>
        <ButtonLetter>t</ButtonLetter>
        <ButtonLetter>u</ButtonLetter>
        <ButtonLetter>v</ButtonLetter>
        <ButtonLetter>x</ButtonLetter>
        <ButtonLetter>y</ButtonLetter>
        <ButtonLetter>z</ButtonLetter>
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
