import { Fragment, ReactElement, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../AuthProvider';

interface RequireAuthProps {
  readonly children: ReactNode;
}

function RequireAuth(props: RequireAuthProps): ReactElement | null {
  const { children } = props;
  const { status } = useAuth<string>();
  const location = useLocation();

  if (status === 'signedOut') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Fragment>{children}</Fragment>;
}

export type { RequireAuthProps };
export { RequireAuth };
