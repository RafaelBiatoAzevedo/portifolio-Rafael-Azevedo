import { FC, createContext, useState, useContext, useMemo } from 'react';

import { IContextTheme } from '~/interfaces/IContextTheme';

import { TTheme } from '../types/TTheme';

const ContextTheme = createContext<IContextTheme>({} as IContextTheme);

const ThemeStyleProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>('dark');

  const changeTheme = (type: TTheme): void => {
    setTheme(type);
  };

  const valueProvider = useMemo(() => ({ theme, changeTheme }), [theme]);

  return (
    <ContextTheme.Provider value={valueProvider}>
      {children}
    </ContextTheme.Provider>
  );
};

const useTheme = (): IContextTheme => {
  return useContext(ContextTheme);
};

export { ThemeStyleProvider, useTheme };
