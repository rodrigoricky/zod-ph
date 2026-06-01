import { describe, it, expect } from 'vitest';
import { phPersonName } from '../validators/name.js';
import { normalizeName } from '../format/name.js';

describe('phPersonName', () => {
  it('accepts valid names', () => {
    expect(() => phPersonName().parse('Juan Dela Cruz')).not.toThrow();
    expect(() => phPersonName().parse("Nena O'Malley")).not.toThrow();
    expect(() => phPersonName().parse('José Rizal')).not.toThrow();
    expect(() => phPersonName().parse('Ma. Clara')).not.toThrow();
  });

  it('rejects empty string', () => {
    expect(() => phPersonName().parse('')).toThrow();
  });

  it('rejects names with leading/trailing spaces', () => {
    expect(() => phPersonName().parse(' Juan ')).toThrow();
  });

  it('rejects double spaces', () => {
    expect(() => phPersonName().parse('Juan  Dela Cruz')).toThrow();
  });
});

describe('normalizeName', () => {
  it('trims and collapses spaces', () => {
    expect(normalizeName('  Juan   Dela   Cruz  ')).toBe('Juan Dela Cruz');
  });
});
