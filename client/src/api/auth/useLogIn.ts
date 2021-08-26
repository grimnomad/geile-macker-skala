import { AuthSignInDTO, SignInResponse } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { usePost } from '../APIProvider';

function useLogIn(): UseMutationResult<
  Readonly<SignInResponse>,
  unknown,
  AuthSignInDTO,
  unknown
> {
  const logIn = usePost<AuthSignInDTO, SignInResponse>();
  const mutation = useMutation((dto: AuthSignInDTO) =>
    logIn('/auth/signin', dto)
  );

  return mutation;
}

export { useLogIn };
