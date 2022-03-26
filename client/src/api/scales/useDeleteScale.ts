import { useMutation, UseMutationResult, useQueryClient } from 'react-query';

import { useAxios } from '../AxiosProvider';
import { ScalesQueryFactory } from './ScalesQueryFactory';
import { ScalesResourceFactory } from './ScalesResourceFactory';

function useDeleteScale(): UseMutationResult<
  unknown,
  unknown,
  string,
  unknown
> {
  const queryClient = useQueryClient();
  const Axios = useAxios();

  const mutation = useMutation(
    (id: string) => Axios.delete(ScalesResourceFactory.byID(id)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(ScalesQueryFactory.all, { exact: true });
      }
    }
  );

  return mutation;
}

export { useDeleteScale };
