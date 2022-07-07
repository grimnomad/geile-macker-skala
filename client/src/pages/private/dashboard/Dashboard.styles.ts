import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Name = styled(Link)`
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 0.25rem;
  color: var(--color-text-main);
`;

export { Name };
