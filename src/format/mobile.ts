import { normaliseDigits } from '../utils/normalize.js';

export function normalizePHMobileNumber(
  input: string,
  format: 'e164' | 'local' | 'digits' = 'e164'
): string {
  const digits = normaliseDigits(input);

  if (!/^63\d{10}$/.test(digits)) {
    throw new Error('Invalid Philippine mobile number');
  }

  switch (format) {
    case 'e164':
      return '+' + digits;
    case 'local':
      return '0' + digits.slice(2, 5) + ' ' + digits.slice(5, 8) + ' ' + digits.slice(8, 12);
    case 'digits':
      return digits;
    default:
      return '+' + digits;
  }
}
