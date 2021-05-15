import { AuthSignUpDTO } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { usePost } from './APIProvider';

function useSignUp(): UseMutationResult<void, unknown, AuthSignUpDTO, unknown> {
  const signUp = usePost<AuthSignUpDTO, void>('/auth/signup');

  const mutation = useMutation(signUp);

  return mutation;
}

export { useSignUp };
