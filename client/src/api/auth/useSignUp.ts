import { AuthSignUpDTO } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { useAxios } from '../../components';

function useSignUp(): UseMutationResult<void, unknown, AuthSignUpDTO, unknown> {
  const Axios = useAxios();

  const mutation = useMutation((data: AuthSignUpDTO) =>
    Axios.post<void, void>('/auth/signup', data)
  );

  return mutation;
}

export { useSignUp };
