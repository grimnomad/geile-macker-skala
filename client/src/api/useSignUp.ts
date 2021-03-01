import { AuthSignUpDTO, createObject } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

async function signUp(signUpDTO: AuthSignUpDTO): Promise<void> {
  const requestInit = createObject<RequestInit>({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(signUpDTO)
  });

  await fetch('http://localhost:3001/auth/signup', requestInit);
}

function useSignUp(): UseMutationResult<void, unknown, AuthSignUpDTO, unknown> {
  return useMutation(signUp);
}

export { useSignUp };
