import { ReactNode } from 'react';
import backgroundHeader from '../../assets/background1.jpg';
import { HeaderStyle } from './styles';

type HeaderType = {
  children: ReactNode;
};

export const Header: React.FC<HeaderType> = ({ children }) => {
  return (
    <HeaderStyle className="header-mobile" url={backgroundHeader}>
      {children}
    </HeaderStyle>
  );
};
