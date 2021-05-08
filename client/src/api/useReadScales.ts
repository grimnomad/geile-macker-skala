import { createObject, ResponseDTO, Scale, ScaleDTO } from '@gms/shared';
import { useQuery, UseQueryResult } from 'react-query';

import { useAuth } from '../components';
import { useFetch, UseFetchInput } from './APIProvider';

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

  const requestOptions = createObject<RequestInit>({ method: 'GET' });
  const useFetchInput = createObject<UseFetchInput>({
    path: '/scale',
    token,
    requestOptions
  });
  const getAll = useFetch<unknown, ResponseDTO<ScaleDTO[]>>(useFetchInput);

  return useQuery('scales', getAll, {
    select: mapData
  });
}

export { useReadScales };
