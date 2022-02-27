import { createGlobalStyle } from 'styled-components';

import { ColorMixin } from './ColorMixin';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Spartan', sans-serif;
    font-weight: 100;
  }

  html {
    --color-text-main: ${(props) => props.theme.colors.text.main};
    --color-text-dimmed: ${(props) => props.theme.colors.text.dimmed};

    --color-elements-main: ${(props) => props.theme.colors.elements.main};
    --color-elements-shadow: ${(props) => props.theme.colors.elements.shadow};
    --color-elements-highlight: ${(props) =>
      props.theme.colors.elements.highlight};

    --color-helpers-danger: ${(props) => props.theme.colors.helpers.danger};
    --color-helpers-success: ${(props) => props.theme.colors.helpers.success};

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
