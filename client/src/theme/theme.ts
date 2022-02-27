import { CSSProperties } from 'react';

interface Theme {
  colors: {
    text: {
      main: CSSProperties['color'];
      dimmed: CSSProperties['color'];
    };
    elements: {
      main: CSSProperties['color'];
      shadow: CSSProperties['color'];
      highlight: CSSProperties['color'];
    };
    helpers: {
      danger: CSSProperties['color'];
      success: CSSProperties['color'];
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
