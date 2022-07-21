import {
  useMutation,
  UseMutationResult,
  useQueryClient
} from '@tanstack/react-query';

import { useAxios } from '../../components';
import { CreateScale } from '../../models';
import { CreateScaleDTO } from './CreateScaleDTO';
import { ScaleDTO } from './ScaleDTO';
import { ScalesQueryFactory } from './ScalesQueryFactory';
import { ScalesResourceFactory } from './ScalesResourceFactory';

function useCreateScale(): UseMutationResult<
  ScaleDTO,
  unknown,
  CreateScale,
  unknown
> {
  const Axios = useAxios();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (data: CreateScale) =>
      Axios.post<ScaleDTO, ScaleDTO, CreateScaleDTO>(
        ScalesResourceFactory.root,
        data
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(ScalesQueryFactory.all);
      }
    }
  );

  return mutation;
}

export { useCreateScale };
