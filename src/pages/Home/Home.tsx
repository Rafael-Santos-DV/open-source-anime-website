import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { CalendarOfAnimes, ContainerHome, SectionFiltro } from './styles';
import logo from '../../assets/logo.svg';
import { Navigation } from '../../components/Navigation/Navigation';
import { Search } from '../../components/Search/Search';
import { Button } from '../../components/Button/Button';
import { CardAnimes } from '../../components/CardAnimes/CalendarCard';
import { Footer } from '../../components/Footer/Footer';
import { useContextData } from '../../hooks/useContextData';
import { useLocalPath } from '../../hooks/usePath';

const Letter = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export const Home: React.FC = () => {
  const data = useContextData();
  const location = useLocalPath();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [location]);

  const handleClickSearch = (value: string) => {
    const element = document.getElementById('keypress-active') as HTMLElement;
    const funcEvent = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        navigate(`animes/search?anime=${value}`);
      }
    };

    element.addEventListener('keypress', funcEvent);

    return () => {
      element.removeEventListener('keypress', funcEvent);
    };
  };

  const handleFilterLetter = (letter: string) => {
    navigate(`animes/search?anime=${letter}`);
  };

  return (
    <ContainerHome>
      <Header className="header-position">
        <img src={logo} alt="LF AnimesFlix" id="logo-master" />
        <Navigation navHeader isHome />
        <Search callback={handleClickSearch} />
      </Header>
      <span className="line" />
      <SectionFiltro>
        {Letter.map((letter) => (
          <Button onClick={() => handleFilterLetter(letter)}>{letter}</Button>
        ))}
      </SectionFiltro>
      <CalendarOfAnimes>
        <CardAnimes
          title={`Calendário de ${new Date().getFullYear()}`}
          type="calendar"
          className="container-calendar"
          data={data}
        />
        <CardAnimes
          title="Animes"
          className="container-animes"
          type="animes"
          data={data}
        />
      </CalendarOfAnimes>
      <Footer />
    </ContainerHome>
  );
};
