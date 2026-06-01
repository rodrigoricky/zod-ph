import { describe, it, expect } from 'vitest';
import { phLandline } from '../validators/landline.js';

describe('phLandline', () => {
  const validNumbers = [
    '0281234567',
    '02 8123 4567',
    '(02) 8123 4567',
    '032-123-4567',
    '+63 2 8123 4567',
    '044 123 4567',
  ];

  const invalidNumbers = [
    '',
    '09171234567',   // mobile number
    '02',
    '1234567',
  ];

  it.each(validNumbers)('accepts valid landline: %s', (num) => {
    expect(() => phLandline().parse(num)).not.toThrow();
  });

  it.each(invalidNumbers)('rejects invalid landline: %s', (num) => {
    expect(() => phLandline().parse(num)).toThrow();
  });
});
