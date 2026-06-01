import { z } from 'zod';
import type { LandlineOptions } from '../utils/types.js';
import { normaliseDigits } from '../utils/normalize.js';

export function phLandline(options: LandlineOptions = {}) {
  return z.string().refine(
    (val) => {
      const digits = normaliseDigits(val);
      let localDigits = digits;
      if (localDigits.startsWith('63')) {
        localDigits = '0' + localDigits.slice(2);
      }
      // Reject mobile numbers (starting with 09)
      if (localDigits.startsWith('09')) return false;
      // Pattern: 0 + area code (1-3 digits) + 7-8 digits
      return /^0[2-9]\d{1,2}\d{7,8}$/.test(localDigits);
    },
    {
      message: options.message ?? 'Invalid Philippine landline number',
    }
  );
}
