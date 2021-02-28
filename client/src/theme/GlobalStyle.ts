import { createGlobalStyle } from 'styled-components';

import { ColorMixin } from './ColorMixin';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    ${ColorMixin}
  }
`;

export { GlobalStyle };
