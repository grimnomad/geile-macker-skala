import { createObject } from '@gms/shared';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';

import { useAuth } from '../../components';
import { FetchOptions } from '../APIProvider';
import { useDelete } from '../APIProvider/useDelete';

function useDeleteScale(): UseMutationResult<
  Readonly<unknown>,
  unknown,
  string,
  unknown
> {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  const options = createObject<FetchOptions>({
    token
  });
  const remove = useDelete(options);

  const mutation = useMutation((id: string) => remove(`/scales/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries('scales', { exact: true });
    }
  });

  return mutation;
}

export { useDeleteScale };
