import { AuthSignUpDTO } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { SERVER_URL } from '../config';
import { createPost } from '../utils';

async function signUp(signUpDTO: AuthSignUpDTO): Promise<void> {
  const requestInit = createPost(signUpDTO);

  const response = await fetch(`${SERVER_URL}/auth/signup`, requestInit);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
}

function useSignUp(): UseMutationResult<void, unknown, AuthSignUpDTO, unknown> {
  const mutation = useMutation(signUp);

  return mutation;
}

export { useSignUp };
