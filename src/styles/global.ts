import { createGlobalStyle } from 'styled-components';

import '@fontsource/open-sans';
import '@fontsource/orbitron';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Orbitron";
    letter-spacing: 1px;
  }

  html {
    font-size: 14px;
  }
`;
