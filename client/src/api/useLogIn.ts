import { AuthSignInDTO, createObject, SignInResponse } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { useFetch } from './APIProvider';

function useLogIn(): UseMutationResult<
  Readonly<SignInResponse>,
  unknown,
  AuthSignInDTO,
  unknown
> {
  const requestOptions = createObject<RequestInit>({ method: 'POST' });
  const logIn = useFetch<AuthSignInDTO, SignInResponse>({
    path: '/auth/signin',
    requestOptions
  });
  const mutation = useMutation(logIn);

  return mutation;
}

export { useLogIn };
