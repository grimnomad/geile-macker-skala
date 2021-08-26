import { createObject, ResponseDTO, Scale, ScaleDTO } from '@gms/shared';
import { useQuery, UseQueryResult } from 'react-query';

import { useAuth } from '../../components';
import { FetchOptions, useGet } from '../APIProvider';

function mapData(responseDTO: ResponseDTO<ScaleDTO[]>): Readonly<Scale>[] {
  const scales = responseDTO.data.map((scaleDTO) => {
    const scale = createObject<Scale>({
      admins: scaleDTO.admins,
      createdAt: scaleDTO.created_at,
      creator: scaleDTO.creator,
      name: scaleDTO.name,
      updatedAt: scaleDTO.updated_at
    });

    return scale;
  });

  return scales;
}

function useReadScales(): UseQueryResult<Readonly<Scale>[], unknown> {
  const { token } = useAuth();

  const options = createObject<FetchOptions>({
    token
  });
  const get = useGet<ResponseDTO<ScaleDTO[]>>(options);

  return useQuery('scales', () => get('/scales'), {
    select: mapData
  });
}

export { useReadScales };
