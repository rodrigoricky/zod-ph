import { describe, it, expect } from 'vitest';
import { phPesoAmount } from '../validators/peso.js';
import { formatPeso } from '../format/peso.js';

describe('phPesoAmount', () => {
  it('accepts positive numbers with up to 2 decimals', () => {
    expect(() => phPesoAmount().parse(100)).not.toThrow();
    expect(() => phPesoAmount().parse(0.5)).not.toThrow();
    expect(() => phPesoAmount().parse(100.25)).not.toThrow();
  });

  it('rejects negative numbers', () => {
    expect(() => phPesoAmount().parse(-1)).toThrow();
  });

  it('rejects numbers with more than 2 decimals', () => {
    expect(() => phPesoAmount().parse(100.123)).toThrow();
  });
});

describe('formatPeso', () => {
  it('formats with default settings', () => {
    expect(formatPeso(1250)).toBe('₱1,250.00');
  });

  it('formats without decimal fractions when requested', () => {
    expect(formatPeso(1250, { minimumFractionDigits: 0, maximumFractionDigits: 0 })).toBe('₱1,250');
  });

  it('handles centavos', () => {
    expect(formatPeso(1250.5)).toBe('₱1,250.50');
  });
});
