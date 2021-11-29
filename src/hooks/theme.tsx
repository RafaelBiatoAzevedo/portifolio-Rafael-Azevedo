import {
  FC,
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';

import { IContextTheme } from '~/interfaces/IContextTheme';

import { TTheme } from '../types/TTheme';

const ContextTheme = createContext<IContextTheme>({} as IContextTheme);

const ThemeStyleProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>('dark');

  const changeTheme = useCallback((): void => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  }, [theme]);

  const valueProvider = useMemo(
    () => ({ theme, changeTheme }),
    [theme, changeTheme]
  );

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
