import { createContext, ReactNode } from 'react';

type GlobalContextType = {
  children: ReactNode;
};

export const PagesContext = createContext({});

export function GlobalContext(props: GlobalContextType) {
  return (
    <PagesContext.Provider value={{}}>{props.children}</PagesContext.Provider>
  );
}
