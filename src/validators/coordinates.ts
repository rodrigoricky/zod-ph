import { z } from 'zod';
import type { CoordinateOptions } from '../utils/types.js';

export function phCoordinates(options: CoordinateOptions = {}) {
  return z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
  }).refine(
    (coords) => {
      if (!options.requireInsidePhilippines) return true;
      const { lat, lng } = coords;
      return lat >= 4.5 && lat <= 21.5 && lng >= 116 && lng <= 127;
    },
    {
      message: 'Coordinates must be within the Philippine bounding box',
    }
  );
}
