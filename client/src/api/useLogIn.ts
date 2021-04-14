import { AuthSignInDTO, createObject, SignInResponse } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { createPost } from '../utils';

async function logIn(
  signInDTO: AuthSignInDTO
): Promise<Readonly<SignInResponse>> {
  const requestInit = createPost(signInDTO);

  const response = await fetch(
    'http://localhost:3001/auth/signin',
    requestInit
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const payload = await response.json();

  const data = createObject<SignInResponse>(payload);

  return data;
}

function useLogIn(): UseMutationResult<
  Readonly<SignInResponse>,
  unknown,
  AuthSignInDTO,
  unknown
> {
  const mutation = useMutation(logIn);

  return mutation;
}

export { useLogIn };
