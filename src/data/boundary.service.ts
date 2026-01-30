import PRELOADED_BOUNDARIES from "./preloaded-boundaries.json";

/**
 * Trả về ranh giới hành chính đã preload theo tên xã/phường.
 * KHÔNG fetch runtime – tuyệt đối ổn định.
 */
export async function getCommuneBoundary(
  communeName: string
): Promise<any | null> {
  const preloaded = (PRELOADED_BOUNDARIES as Record<string, any>)[communeName];

  if (preloaded) {
    return preloaded;
  }

  console.warn(
    `[Boundary] Chưa có boundary preload cho: ${communeName}`
  );

  return null;
}

/* =========================================================
   PHẦN CODE MỚI THÊM – TUYỆT ĐỐI KHÔNG ĐỤNG CODE CŨ
   ========================================================= */

/**
 * Kiểm tra point nằm trong polygon (Ray Casting)
 * GeoJSON dùng [lng, lat]
 */
function isPointInPolygon(
  point: [number, number],
  polygon: [number, number][]
): boolean {
  let inside = false;
  const [x, y] = point;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0];
    const yi = polygon[i][1];
    const xj = polygon[j][0];
    const yj = polygon[j][1];

    const intersect =
      yi > y !== yj > y &&
      x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) inside = !inside;
  }

  return inside;
}

/**
 * Kiểm tra point với Polygon / MultiPolygon
 */
function isPointInGeometry(
  point: [number, number],
  geometry: any
): boolean {
  if (!geometry) return false;

  if (geometry.type === "Polygon") {
    return geometry.coordinates.some(
      (ring: [number, number][]) =>
        isPointInPolygon(point, ring)
    );
  }

  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.some(
      (polygon: [number, number][][]) =>
        polygon.some((ring) =>
          isPointInPolygon(point, ring)
        )
    );
  }

  return false;
}

/**
 * Xác định xã/phường của trạm dựa trên lat/lng
 * CHỈ chấp nhận các xã/phường thuộc tỉnh Đồng Nai
 * Ngoài Đồng Nai → trả null
 */
export function findDongNaiCommuneByLatLng(
  lat: number,
  lng: number
): { commune: string; province: string } | null {
  const point: [number, number] = [lng, lat];

  for (const [communeName, boundary] of Object.entries(
    PRELOADED_BOUNDARIES as Record<string, any>
  )) {
    const feature = boundary?.features?.[0];
    const geometry = feature?.geometry;

    if (!geometry) continue;

    if (isPointInGeometry(point, geometry)) {
      return {
        commune: communeName,
        province: "Đồng Nai",
      };
    }
  }

  return null;
}
