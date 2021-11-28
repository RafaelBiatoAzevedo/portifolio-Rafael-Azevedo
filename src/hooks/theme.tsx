import { FC, createContext, useState, useContext, useMemo } from 'react';

import { IContextTheme } from '~/interfaces/IContextTheme';

import { TTheme } from '../types/TTheme';

const ContextTheme = createContext<IContextTheme>({} as IContextTheme);

const ThemeStyleProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>('dark');

  const changeTheme = (): void => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  const valueProvider = useMemo(() => ({ theme, changeTheme }), [theme]);

  return (
    <ContextTheme.Provider value={valueProvider}>
      {children}
    </ContextTheme.Provider>
  );
};

const useStyleTheme = (): IContextTheme => {
  return useContext(ContextTheme);
};

export { ThemeStyleProvider, useStyleTheme };
