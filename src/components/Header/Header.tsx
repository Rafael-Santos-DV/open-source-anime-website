import { ReactNode } from 'react';
import backgroundHeader from '../../assets/background1.jpg';
import { HeaderStyle } from './styles';

type HeaderType = {
  children: ReactNode;
  className?: string;
};

export const Header: React.FC<HeaderType> = ({ children, className }) => {
  return (
    <HeaderStyle
      className={`header-mobile ${className || ''}`}
      url={backgroundHeader}
    >
      {children}
    </HeaderStyle>
  );
};
