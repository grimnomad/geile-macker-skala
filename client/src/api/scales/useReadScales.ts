import { ResponseDTO, ScaleDTO } from '@gms/shared';
import { useQuery, UseQueryResult } from 'react-query';

import { useAuth } from '../../components';
import { Scale } from '../../models';
import { useAxios } from '../AxiosProvider';
import { createHeaders } from '../utils';
import { createScale } from './createScale';
import { ScalesQueryFactory } from './ScalesQueryFactory';

function useReadScales(): UseQueryResult<Scale[], unknown> {
  const { token } = useAuth();
  const Axios = useAxios();

  const headers = createHeaders({ token });

  const query = useQuery(
    ScalesQueryFactory.all,
    () =>
      Axios.get<ResponseDTO<ScaleDTO[]>, ResponseDTO<ScaleDTO[]>>('/scales', {
        headers
      }),
    {
      select: (response) => response.data.map(createScale)
    }
  );

  return query;
}

export { useReadScales };
