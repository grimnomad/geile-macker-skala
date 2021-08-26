import { createObject, CreateScaleDTO, ScaleDTO } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { useAuth } from '../../components';
import { FetchOptions, usePost } from '../APIProvider';

function useCreateScale(): UseMutationResult<
  Readonly<ScaleDTO>,
  unknown,
  CreateScaleDTO,
  unknown
> {
  const { token } = useAuth();

  const options = createObject<FetchOptions>({
    token
  });
  const createScale = usePost<CreateScaleDTO, ScaleDTO>(options);

  const mutation = useMutation((data: CreateScaleDTO) =>
    createScale('/scales', data)
  );

  return mutation;
}

export { useCreateScale };
