import { z } from 'zod';

export function phZipCode() {
  return z.string().regex(/^\d{4}$/, 'ZIP code must be exactly 4 digits');
}
