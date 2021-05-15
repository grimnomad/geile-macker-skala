import { AuthSignInDTO, SignInResponse } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { usePost } from './APIProvider';

function useLogIn(): UseMutationResult<
  Readonly<SignInResponse>,
  unknown,
  AuthSignInDTO,
  unknown
> {
  const logIn = usePost<AuthSignInDTO, SignInResponse>('/auth/signin');
  const mutation = useMutation(logIn);

  return mutation;
}

export { useLogIn };
