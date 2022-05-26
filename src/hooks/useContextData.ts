import { useContext } from 'react';
import { DataContext } from '../context/context';

export const useContextData = () => {
  const { data } = useContext(DataContext);
  return data;
};
