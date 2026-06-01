import { describe, it, expect } from 'vitest';
import { phMobileNumber } from '../validators/mobile.js';

describe('phMobileNumber', () => {
  const validNumbers = [
    '09171234567',
    '+639171234567',
    '639171234567',
    '09981234567',
    '+639981234567',
  ];

  const invalidNumbers = [
    '',
    '0917123456',
    '091712345678',
    '+6391712345678',
    '0281234567',
    '0917-123-4567',    // dashes not allowed
    '0917123456a',
  ];

  it.each(validNumbers)('accepts valid mobile number: %s', (num) => {
    expect(() => phMobileNumber().parse(num)).not.toThrow();
  });

  it.each(invalidNumbers)('rejects invalid mobile number: %s', (num) => {
    expect(() => phMobileNumber().parse(num)).toThrow();
  });

  it('rejects non‑string', () => {
    expect(() => phMobileNumber().parse(123)).toThrow();
  });
});
