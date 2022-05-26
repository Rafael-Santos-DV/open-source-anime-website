import React, { ChangeEvent, useState } from 'react';
import { Box, ContainerSearch } from './styles';
import imageLupa from '../../assets/magnifier.svg';

type SearchType = {
  callback?: (value: string) => void;
};

export const Search: React.FC<SearchType> = ({ callback }) => {
  const [value, setValue] = useState('');

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (callback) {
      callback(event.target.value);
      setValue(event.target.value);
    }
  };

  return (
    <ContainerSearch id="search">
      <Box>
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={handleChangeSearch}
          value={value}
        />
        <img src={imageLupa} alt="Pesquisar" />
      </Box>
    </ContainerSearch>
  );
};
