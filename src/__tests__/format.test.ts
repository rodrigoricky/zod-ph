import { describe, it, expect } from 'vitest';
import { normalizePHMobileNumber } from '../format/mobile.js';
import { formatPHAddress } from '../format/address.js';

describe('normalizePHMobileNumber', () => {
  it('converts local to e164', () => {
    expect(normalizePHMobileNumber('09171234567')).toBe('+639171234567');
  });

  it('converts with +63 to e164', () => {
    expect(normalizePHMobileNumber('+639171234567')).toBe('+639171234567');
  });

  it('outputs digits only', () => {
    expect(normalizePHMobileNumber('0917-123-4567', 'digits')).toBe('639171234567');
  });

  it('throws on invalid number', () => {
    expect(() => normalizePHMobileNumber('12345')).toThrow();
  });
});

describe('formatPHAddress', () => {
  it('combines components', () => {
    const result = formatPHAddress({
      line1: '123 Mabini St.',
      barangay: 'Lahug',
      cityMunicipality: 'Cebu City',
      province: 'Cebu',
      zipCode: '6000',
    });
    expect(result).toBe('123 Mabini St., Brgy. Lahug, Cebu City, Cebu, 6000');
  });
});
