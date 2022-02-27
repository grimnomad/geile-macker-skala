import styled from 'styled-components';

import { CenterMixin } from '../../theme';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(28, 35, 50, 0.3);
  ${CenterMixin};
`;

const DialogContainer = styled.div`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;
  max-height: 80%;
  max-width: 80%;
  background-color: var(--color-elements-main);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 2px;
`;

export { Backdrop, DialogContainer };
