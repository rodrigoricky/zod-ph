export {
  phMobileNumber,
  phLandline,
  phZipCode,
  phPesoAmount,
  phCoordinates,
  phPersonName,
} from './validators/index.js';

export {
  formatPeso,
  normalizePHMobileNumber,
  formatPHAddress,
  normalizeName,
} from './format/index.js';

export type {
  MobileNumberOptions,
  LandlineOptions,
  CoordinateOptions,
  PesoFormatOptions,
} from './utils/types.js';
