import { createGlobalStyle } from 'styled-components';

import { ColorMixin } from './ColorMixin';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Spartan', sans-serif;
    font-weight: 100;
  }

  body {
    margin: 0;
    ${ColorMixin}
  }
`;

export { GlobalStyle };
