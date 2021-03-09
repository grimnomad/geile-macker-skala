import styled from 'styled-components';

import { CenterMixin } from '../../theme';

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 33%;
`;

const SignUpContainer = styled.div`
  ${CenterMixin}
`;

export { SignUpContainer, SignUpForm };
