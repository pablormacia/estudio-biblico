const KM_PER_DEGREE = 111;

export function toXY(
  lat: number,
  lng: number,
  originLat: number,
  originLng: number
) {
  const x =
    (lng - originLng) *
    KM_PER_DEGREE *
    Math.cos((originLat * Math.PI) / 180);

  const y = (lat - originLat) * KM_PER_DEGREE;

  return { x, y };
}
