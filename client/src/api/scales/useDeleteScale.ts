import { useMutation, UseMutationResult, useQueryClient } from 'react-query';

import { useAuth } from '../../components';
import { useAxios } from '../AxiosProvider';
import { createHeaders } from '../utils';
import { ScalesQueryFactory } from './ScalesQueryFactory';

function useDeleteScale(): UseMutationResult<
  unknown,
  unknown,
  string,
  unknown
> {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const Axios = useAxios();

  const headers = createHeaders({ token });

  const mutation = useMutation(
    (id: string) => Axios.delete(`/scales/${id}`, { headers }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(ScalesQueryFactory.all, { exact: true });
      }
    }
  );

  return mutation;
}

export { useDeleteScale };
