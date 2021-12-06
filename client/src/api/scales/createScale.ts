import { ScaleDTO } from '@gms/shared';

import { Scale } from '../../models';

function createScale(scaleDTO: ScaleDTO): Scale {
  const scale: Scale = {
    admins: scaleDTO.admins,
    createdAt: scaleDTO.created_at,
    creator: scaleDTO.creator,
    name: scaleDTO.name,
    updatedAt: scaleDTO.updated_at
  };

  return scale;
}

export { createScale };
