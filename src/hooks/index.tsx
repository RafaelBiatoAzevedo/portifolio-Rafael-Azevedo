import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { themeDark, themeLight } from '../styles/theme';

import { useStyleTheme } from './theme';
import { MenuProvider } from './menu';
import { LanguageProvider } from './language';

export const AppProvider: FC = ({ children }): JSX.Element => {
  const { theme } = useStyleTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <BrowserRouter>
        <LanguageProvider>
          <MenuProvider>{children}</MenuProvider>
        </LanguageProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
