import { z } from 'zod';
import type { MobileNumberOptions } from '../utils/types.js';

export function phMobileNumber(options: MobileNumberOptions = {}) {
  return z.string().refine(
    (val) => {
      // Only accept raw digits with optional leading +
      if (!/^(\+?63\d{10}|09\d{9})$/.test(val)) return false;
      // After leading + or 0, the first digit after country code/local prefix must be 9
      const digits = val.replace(/\D/g, '');
      if (!digits.startsWith('63') && !digits.startsWith('09')) return false;
      const withoutPrefix = digits.startsWith('63') ? digits.slice(2) : digits.slice(1);
      return withoutPrefix.startsWith('9');
    },
    {
      message: options.message ?? 'Invalid Philippine mobile number',
    }
  );
}
