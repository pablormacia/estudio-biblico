export function dateFromYear(year: number): Date {
  const d = new Date(Date.UTC(1970, 0, 1));
  d.setUTCFullYear(year);
  return d;
}