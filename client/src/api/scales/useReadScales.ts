import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { useAxios } from '../../components';
import { Scale } from '../../models';
import { ResponseDTO } from '../common';
import { createScale } from './createScale';
import { ScaleDTO } from './ScaleDTO';
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
