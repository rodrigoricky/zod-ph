import { describe, it, expect } from 'vitest';
import { phCoordinates } from '../validators/coordinates.js';

describe('phCoordinates', () => {
  it('accepts any lat/lng', () => {
    expect(() => phCoordinates().parse({ lat: 14.5, lng: 121 })).not.toThrow();
    expect(() => phCoordinates().parse({ lat: -10, lng: -150 })).not.toThrow();
  });

  it('requires inside PH bounding box when option is set', () => {
    const validator = phCoordinates({ requireInsidePhilippines: true });
    expect(() => validator.parse({ lat: 14.5, lng: 121 })).not.toThrow();
    expect(() => validator.parse({ lat: 0, lng: 121 })).toThrow();
    expect(() => validator.parse({ lat: 14.5, lng: 130 })).toThrow();
  });
});
