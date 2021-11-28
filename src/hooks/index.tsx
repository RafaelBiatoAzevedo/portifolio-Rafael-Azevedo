import { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import { themeDark, themeLight } from '../styles/theme';

import { useStyleTheme } from './theme';
import { LanguageProvider } from './language';

export const AppProvider: FC = ({ children }): JSX.Element => {
  const { theme } = useStyleTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
};
