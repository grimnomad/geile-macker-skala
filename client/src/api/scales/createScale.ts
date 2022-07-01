import { Scale } from '../../models';
import { ScaleDTO } from './ScaleDTO';

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
