export interface MobileNumberOptions {
  message?: string;
}

export interface LandlineOptions {
  message?: string;
}

export interface CoordinateOptions {
  requireInsidePhilippines?: boolean;
}

export interface PesoFormatOptions {
  symbol?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  useGrouping?: boolean;
}
