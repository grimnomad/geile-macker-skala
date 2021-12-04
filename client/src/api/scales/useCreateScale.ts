import { CreateScaleDTO, ScaleDTO } from '@gms/shared';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';

import { useAuth } from '../../components';
import { useAxios } from '../AxiosProvider';
import { createHeaders } from '../utils';
import { ScalesQueryFactory } from './ScalesQueryFactory';

function useCreateScale(): UseMutationResult<
  ScaleDTO,
  unknown,
  CreateScaleDTO,
  unknown
> {
  const { token } = useAuth();
  const Axios = useAxios();
  const queryClient = useQueryClient();

  const headers = createHeaders({ token });

  const mutation = useMutation(
    (data: CreateScaleDTO) =>
      Axios.post<ScaleDTO, ScaleDTO>('/scales', data, { headers }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(ScalesQueryFactory.all);
      }
    }
  );

  return mutation;
}

export { useCreateScale };
