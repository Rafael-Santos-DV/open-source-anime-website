import { Link } from 'react-router-dom';
import { ContainerWatched } from './style';
import imageTeste from '../../assets/teste.jpg';
import star from '../../assets/star.svg';

export const Watched = () => {
  return (
    <ContainerWatched>
      <Link to="/">
        <img src={imageTeste} alt="tsete" className="anime" />
        <div className="content">
          <strong>Nome do anime aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</strong>
          <time>2022</time>
          <div className="box-favorito">
            <img src={star} alt="Favorito" />
            <span>2</span>
          </div>
        </div>
      </Link>
    </ContainerWatched>
  );
};
