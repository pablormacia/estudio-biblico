export function formatYearLabel(value: Date | number): string {
  const date =
    value instanceof Date ? value : new Date(value);

  const year = date.getUTCFullYear();

  if (year === 0) return "0";

  if (year < 0) {
    return `${Math.abs(year)} a.C.`;
  }

  return year.toString();
}
