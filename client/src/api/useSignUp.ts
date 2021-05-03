import { AuthSignUpDTO, createObject } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { useFetch, UseFetchInput } from './APIProvider';

function useSignUp(): UseMutationResult<void, unknown, AuthSignUpDTO, unknown> {
  const requestOptions = createObject<RequestInit>({ method: 'POST' });
  const useFetchInput = createObject<UseFetchInput>({
    path: '/auth/signup',
    requestOptions
  });
  const signUp = useFetch<AuthSignUpDTO, void>(useFetchInput);

  const mutation = useMutation(signUp);

  return mutation;
}

export { useSignUp };
