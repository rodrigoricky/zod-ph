import { z } from 'zod';

export function phPersonName() {
  return z.string().min(1).max(200).refine(
    (val) => {
      if (val !== val.trim()) return false;
      if (/\s{2,}/.test(val)) return false;
      if (!/^[a-zA-ZñÑà-üÀ-Ü'.\- ]+$/.test(val)) return false;
      return true;
    },
    { message: 'Invalid name format' }
  );
}
