import { useQuery, UseQueryResult } from 'react-query';

import { useAxios } from '../../components';
import { Scale } from '../../models';
import { ResponseDTO } from '../common';
import { createScale } from './createScale';
import { ScaleDTO } from './ScaleDTO';
import { ScalesQueryFactory } from './ScalesQueryFactory';
import { ScalesResourceFactory } from './ScalesResourceFactory';

function useReadScale(name: string): UseQueryResult<Scale, unknown> {
  const Axios = useAxios();

  const query = useQuery(
    ScalesQueryFactory.detail(name),
    () =>
      Axios.get<ResponseDTO<ScaleDTO>, ResponseDTO<ScaleDTO>>(
        ScalesResourceFactory.byID(name)
      ),
    {
      select: (response) => createScale(response.data)
    }
  );

  return query;
}

export { useReadScale };
