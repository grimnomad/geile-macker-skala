import { AuthSignInDTO, createObject } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

async function logIn(signInDTO: AuthSignInDTO): Promise<void> {
  const requestInit = createObject<RequestInit>({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(signInDTO)
  });

  const response = await fetch(
    'http://localhost:3001/auth/signin',
    requestInit
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
}

function useLogIn(): UseMutationResult<void, unknown, AuthSignInDTO, unknown> {
  return useMutation(logIn);
}

export { useLogIn };
