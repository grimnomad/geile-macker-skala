import { createObject, CreateScaleDTO, ScaleDTO } from '@gms/shared';
import { useMutation, UseMutationResult } from 'react-query';

import { useAuth } from '../components';
import { SERVER_URL } from '../config';
import { createPost } from '../utils';

async function createScale(
  scaleDTO: CreateScaleDTO,
  token: Parameters<typeof createPost>[2]
): Promise<ScaleDTO> {
  const requestInit = createPost(scaleDTO, null, token);
  const response = await fetch(`${SERVER_URL}/scale`, requestInit);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const payload = await response.json();

  const data = createObject<ScaleDTO>(payload);

  return data;
}

function useCreateScale(): UseMutationResult<
  Readonly<ScaleDTO>,
  unknown,
  CreateScaleDTO,
  unknown
> {
  const { token } = useAuth();
  const mutation = useMutation<
    Readonly<ScaleDTO>,
    unknown,
    CreateScaleDTO,
    unknown
  >((data) => createScale(data, token));

  return mutation;
}

export { useCreateScale };
