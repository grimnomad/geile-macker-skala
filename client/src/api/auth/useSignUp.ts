import { useMutation, UseMutationResult } from 'react-query';

import { useAxios } from '../../components';
import { AuthSignUp } from '../../models';
import { AuthSignUpDTO } from './AuthSignUpDTO';
import { createAuthSignUpDTO } from './createAuthSignUpDTO';

function useSignUp(): UseMutationResult<void, unknown, AuthSignUp, unknown> {
  const Axios = useAxios();

  const mutation = useMutation((data: AuthSignUp) =>
    Axios.post<void, void, AuthSignUpDTO>(
      '/auth/signup',
      createAuthSignUpDTO(data)
    )
  );

  return mutation;
}

export { useSignUp };
