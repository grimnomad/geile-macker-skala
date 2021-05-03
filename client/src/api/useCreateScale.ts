import { createObject, CreateScaleDTO, ScaleDTO } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { useAuth } from '../components';
import { useFetch, UseFetchInput } from './APIProvider';

function useCreateScale(): UseMutationResult<
  Readonly<ScaleDTO>,
  unknown,
  CreateScaleDTO,
  unknown
> {
  const { token } = useAuth();

  const requestOptions = createObject<RequestInit>({ method: 'POST' });
  const useFetchInput = createObject<UseFetchInput>({
    path: '/scale',
    token,
    requestOptions
  });
  const createScale = useFetch<CreateScaleDTO, ScaleDTO>(useFetchInput);

  const mutation = useMutation(createScale);

  return mutation;
}

export { useCreateScale };
