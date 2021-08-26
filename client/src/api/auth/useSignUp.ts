import { AuthSignUpDTO } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { usePost } from '../APIProvider';

function useSignUp(): UseMutationResult<void, unknown, AuthSignUpDTO, unknown> {
  const signUp = usePost<AuthSignUpDTO, void>();

  const mutation = useMutation((data: AuthSignUpDTO) =>
    signUp('/auth/signup', data)
  );

  return mutation;
}

export { useSignUp };
