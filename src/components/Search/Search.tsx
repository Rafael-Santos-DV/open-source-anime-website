import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, ContainerSearch } from './styles';
import imageLupa from '../../assets/magnifier.svg';

type SearchType = {
  callback?: (value: string) => void;
};

export const Search: React.FC<SearchType> = ({ callback }) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (callback) {
      callback(event.target.value);
    }
  };

  const handleSearch = () => {
    navigate(`/animes/search?anime=${value}`);
  };

  return (
    <ContainerSearch id="search">
      <Box>
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={handleChangeSearch}
          value={value}
          id="keypress-active"
        />
        <img
          src={imageLupa}
          alt="Pesquisar"
          onClick={handleSearch}
          aria-hidden
        />
      </Box>
    </ContainerSearch>
  );
};
