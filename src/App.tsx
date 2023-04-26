import { FC } from 'react';

import { Routes } from './routes';

import { ThemeStyleProvider } from './hooks/theme';
import { AppProvider } from './hooks';

import { GlobalStyle } from './styles/global';

const App: FC = (): JSX.Element => {
  return (
    <ThemeStyleProvider>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </ThemeStyleProvider>
  );
};

export default App;
