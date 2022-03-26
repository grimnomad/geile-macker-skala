import { ResponseDTO, ScaleDTO } from '@gms/shared';
import { useQuery, UseQueryResult } from 'react-query';

import { Scale } from '../../models';
import { useAxios } from '../AxiosProvider';
import { createScale } from './createScale';
import { ScalesQueryFactory } from './ScalesQueryFactory';
import { ScalesResourceFactory } from './ScalesResourceFactory';

function useReadScales(): UseQueryResult<Scale[], unknown> {
  const Axios = useAxios();

  const query = useQuery(
    ScalesQueryFactory.all,
    () =>
      Axios.get<ResponseDTO<ScaleDTO[]>, ResponseDTO<ScaleDTO[]>>(
        ScalesResourceFactory.root
      ),
    {
      select: (response) => response.data.map(createScale)
    }
  );

  return query;
}

export { useReadScales };
