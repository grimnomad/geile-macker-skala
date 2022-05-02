import { AuthSignInDTO, SignInResponse } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { useAxios } from '../../components';

function useLogIn(): UseMutationResult<
  SignInResponse,
  unknown,
  AuthSignInDTO,
  unknown
> {
  const Axios = useAxios();

  const mutation = useMutation((data: AuthSignInDTO) =>
    Axios.post<SignInResponse, SignInResponse>('/auth/signin', data)
  );

  return mutation;
}

export { useLogIn };
