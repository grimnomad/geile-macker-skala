import { createGlobalStyle } from 'styled-components';

import { ColorMixin } from './ColorMixin';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Spartan', sans-serif;
    font-weight: 100;
  }

  html {
    --primary-color: #232c3f;
    --secondary-color: #f0f6fc;
    --tertiary-color: #1c2332;

    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    ${ColorMixin}
  }
`;

export { GlobalStyle };
