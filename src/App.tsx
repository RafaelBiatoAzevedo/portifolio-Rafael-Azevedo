import { FC } from 'react';

import { ThemeStyleProvider } from './hooks/theme';
import { AppProvider } from './hooks';

import { Home } from './pages/Home';

import { GlobalStyle } from './styles/global';

const App: FC = (): JSX.Element => {
  return (
    <ThemeStyleProvider>
      <AppProvider>
        <Home />
        <GlobalStyle />
      </AppProvider>
    </ThemeStyleProvider>
  );
};

export default App;
