interface AddressComponents {
  line1?: string;
  line2?: string;
  barangay?: string;
  cityMunicipality?: string;
  province?: string;
  zipCode?: string;
  region?: string;
}

export function formatPHAddress(components: AddressComponents): string {
  const parts: string[] = [];
  if (components.line1) parts.push(components.line1);
  if (components.line2) parts.push(components.line2);
  if (components.barangay) parts.push('Brgy. ' + components.barangay);
  if (components.cityMunicipality) parts.push(components.cityMunicipality);
  if (components.province) parts.push(components.province);
  if (components.region) parts.push(components.region);
  if (components.zipCode) parts.push(components.zipCode);
  return parts.join(', ');
}
