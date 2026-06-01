import type { PesoFormatOptions } from '../utils/types.js';

export function formatPeso(value: number, options: PesoFormatOptions = {}): string {
  const {
    symbol = '₱',
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
    useGrouping = true,
  } = options;

  const formatter = new Intl.NumberFormat('en-PH', {
    style: 'decimal',
    minimumFractionDigits,
    maximumFractionDigits,
    useGrouping,
  });

  return symbol + formatter.format(value);
}
