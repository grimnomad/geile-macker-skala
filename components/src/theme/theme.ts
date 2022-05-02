import { CSSProperties } from 'react';

type CSSColor = Exclude<CSSProperties['color'], undefined>;

interface Theme {
  colors: {
    text: {
      main: CSSColor;
      dimmed: CSSColor;
    };
    elements: {
      main: CSSColor;
      shadow: CSSColor;
      highlight: CSSColor;
    };
    helpers: {
      danger: CSSColor;
      success: CSSColor;
    };
  };
}

const dark: Theme = {
  colors: {
    text: {
      main: '#ffffff',
      dimmed: '#c1c1c1'
    },
    elements: {
      main: '#14213d',
      highlight: '#0e1b30',
      shadow: '#001524'
    },
    helpers: {
      danger: '#dc3545',
      success: '#198754'
    }
  }
};

export type { Theme };
export { dark };
