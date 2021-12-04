import { ResponseDTO, Scale, ScaleDTO } from '@gms/shared';
import { useQuery, UseQueryResult } from 'react-query';

import { useAuth } from '../../components';
import { useAxios } from '../AxiosProvider';
import { createHeaders } from '../utils';
import { ScalesQueryFactory } from './ScalesQueryFactory';

function mapData(responseDTO: ResponseDTO<ScaleDTO[]>): Scale[] {
  const scales = responseDTO.data.map((scaleDTO) => {
    const scale: Scale = {
      admins: scaleDTO.admins,
      createdAt: scaleDTO.created_at,
      creator: scaleDTO.creator,
      name: scaleDTO.name,
      updatedAt: scaleDTO.updated_at
    };

    return scale;
  });

  return scales;
}

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
      select: mapData
    }
  );

  return query;
}

export { useReadScales };
