export function normalizeName(name: string): string {
  return name.trim().replace(/\s{2,}/g, ' ');
}
