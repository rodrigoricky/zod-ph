import { z } from 'zod';

export function phPesoAmount() {
  return z.number().positive().refine(
    (val) => {
      const parts = val.toString().split('.');
      if (parts.length === 2 && parts[1].length > 2) return false;
      return true;
    },
    { message: 'Amount must have at most 2 decimal places' }
  );
}
