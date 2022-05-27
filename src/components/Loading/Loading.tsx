import React from 'react';
import { AwaitingContainer } from './style';

type LoadingType = {
  text: string;
};

export const Loading: React.FC<LoadingType> = ({ text }) => {
  return (
    <AwaitingContainer>
      <span>{text}</span>
      <div />
    </AwaitingContainer>
  );
};
