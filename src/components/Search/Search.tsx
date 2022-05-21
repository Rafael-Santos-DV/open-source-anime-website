import React from 'react';
import { Box, ContainerSearch } from './styles';
import imageLupa from '../../assets/magnifier.svg';

export const Search: React.FC = () => {
  return (
    <ContainerSearch>
      <Box>
        <input type="text" placeholder="Pesquisar..." />
        <img src={imageLupa} alt="Pesquisar" />
      </Box>
    </ContainerSearch>
  );
};
