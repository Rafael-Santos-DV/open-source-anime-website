import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

type LetterTypes = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonLetter: React.FC<LetterTypes> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);
