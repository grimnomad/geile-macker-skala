import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { useAxios } from '../../components';
import { AuthSignIn } from '../../models';
import { ResponseDTO } from '../common';
import { AuthSignInDTO } from './AuthSignInDTO';

type SignInResponse = ResponseDTO<string>;

function useLogIn(): UseMutationResult<
  SignInResponse,
  unknown,
  AuthSignIn,
  unknown
> {
  const Axios = useAxios();

  const mutation = useMutation((data: AuthSignIn) =>
    Axios.post<SignInResponse, SignInResponse, AuthSignInDTO>(
      '/auth/signin',
      data
    )
  );

  return mutation;
}

export { useLogIn };
