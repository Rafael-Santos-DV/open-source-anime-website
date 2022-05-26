import { createContext, ReactNode } from 'react';
import { useAllData } from '../hooks/useAllData';
import { ResponseData } from '../types/responseData';

type GlobalContextType = {
  children: ReactNode;
};

type ContextType = {
  data: ResponseData[] | undefined;
};

export const DataContext = createContext({} as ContextType);

export function GlobalContext(props: GlobalContextType) {
  const data = useAllData();

  return (
    <DataContext.Provider value={{ data }}>
      {props.children}
    </DataContext.Provider>
  );
}
