import { CreateScaleDTO, ScaleDTO } from '@gms/shared';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';

import { useAxios } from '../AxiosProvider';
import { ScalesQueryFactory } from './ScalesQueryFactory';
import { ScalesResourceFactory } from './ScalesResourceFactory';

function useCreateScale(): UseMutationResult<
  ScaleDTO,
  unknown,
  CreateScaleDTO,
  unknown
> {
  const Axios = useAxios();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (data: CreateScaleDTO) =>
      Axios.post<ScaleDTO, ScaleDTO>(ScalesResourceFactory.root, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(ScalesQueryFactory.all);
      }
    }
  );

  return mutation;
}

export { useCreateScale };
