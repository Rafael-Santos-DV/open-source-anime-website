import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { ButtonComponent } from './styles';

type LetterTypes = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<LetterTypes> = ({ children, ...props }) => (
  <ButtonComponent {...props}>{children}</ButtonComponent>
);
