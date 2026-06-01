import { describe, it, expect } from 'vitest';
import { phZipCode } from '../validators/zip.js';

describe('phZipCode', () => {
  it('accepts valid 4‑digit string', () => {
    expect(() => phZipCode().parse('6000')).not.toThrow();
    expect(() => phZipCode().parse('1000')).not.toThrow();
    expect(() => phZipCode().parse('9999')).not.toThrow();
  });

  it('rejects non‑4‑digit string', () => {
    expect(() => phZipCode().parse('123')).toThrow();
    expect(() => phZipCode().parse('12345')).toThrow();
    expect(() => phZipCode().parse('abcd')).toThrow();
  });
});
