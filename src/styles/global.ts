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
  
  @media(max-width: ${(p) => p.theme.resolutions.medium}) {
    html {
      font-size: 10px;
    }
  }

  @media(max-width: ${(p) => p.theme.resolutions.small}) {
    html {
      font-size: 8px;
    }
  }

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    html {
      font-size: 4px;
    }
  }
`;
