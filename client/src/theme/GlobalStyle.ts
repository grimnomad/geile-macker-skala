import { createGlobalStyle } from 'styled-components';

import { ColorMixin } from './ColorMixin';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Spartan', sans-serif;
    font-weight: 100;
  }

  html {
    --primary-color: ${(props) => props.theme.primary};
    --secondary-color: ${(props) => props.theme.secondary};
    --tertiary-color: ${(props) => props.theme.tertiary};

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
