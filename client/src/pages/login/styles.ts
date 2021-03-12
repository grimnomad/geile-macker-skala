import styled from 'styled-components';

import { CenterMixin } from '../../theme';

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 33%;
`;

const LogInContainer = styled.div`
  ${CenterMixin}
`;

export { LogInContainer, LogInForm };
