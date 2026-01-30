import fs from "fs";
import path from "path";

/**
 * NGUỒN DUY NHẤT
 * File KML export từ Google My Maps
 */
const KML_PATH = path.resolve("src/data/vinfast_charge_station.kml");

/**
 * OUTPUT GIỮ NGUYÊN TÊN CŨ
 */
const OUTPUT_JSON = path.resolve(
  "src/data/charging-stations.raw.json"
);

function parseCoordinates(coordText: string) {
  // KML format: lng,lat[,alt]
  const [lng, lat] = coordText.trim().split(",").map(Number);
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null;
  return { lat, lng };
}

/**
 * Lọc thô Việt Nam để tránh Philippines / TQ / rác
 */
function isInVietnam(lat: number, lng: number) {
  return (
    lat >= 8 &&
    lat <= 24 &&
    lng >= 102 &&
    lng <= 110
  );
}
function extractExtendedData(block: string): Record<string, string> {
  const dataRegex = /<Data name="([^"]+)">[\s\S]*?<value>([\s\S]*?)<\/value>/g;
  const result: Record<string, string> = {};
  let match;

  while ((match = dataRegex.exec(block))) {
    result[match[1]] = match[2].trim();
  }

  return result;
}

function parseChargingPorts(text: string) {
  // ví dụ: "2 cổng 180KW\n8 cổng 60KW"
  const lines = text.split(/\r?\n/);
  const ports = [];

  for (const line of lines) {
    const m = line.match(/(\d+)\s*cổng\s*(\d+)\s*KW/i);
    if (m) {
      ports.push({
        count: Number(m[1]),
        powerKW: Number(m[2])
      });
    }
  }

  return ports;
}

function run() {
  console.log("🔌 Parsing VinFast charging stations from KML...");

  if (!fs.existsSync(KML_PATH)) {
    throw new Error("❌ Không tìm thấy file KML");
  }

  const kml = fs.readFileSync(KML_PATH, "utf-8");

  const placemarkRegex = /<Placemark[\s\S]*?<\/Placemark>/g;
  const placemarks = kml.match(placemarkRegex) || [];

  const stations = placemarks
  .map((block, index) => {
    const nameMatch = block.match(/<name>([\s\S]*?)<\/name>/);
    const coordMatch = block.match(/<coordinates>([\s\S]*?)<\/coordinates>/);

    if (!coordMatch) return null;

    const coord = parseCoordinates(coordMatch[1]);
    if (!coord) return null;
    if (!isInVietnam(coord.lat, coord.lng)) return null;

    const ext = extractExtendedData(block);

    const portsRaw = ext["Cổng sạc"];
    const ports = portsRaw ? parseChargingPorts(portsRaw) : [];

    const socketCount = ports.reduce((s, p) => s + p.count, 0);
    const maxPower = ports.reduce(
      (m, p) => Math.max(m, p.powerKW),
      0
    );

    return {
      id: `vf-kml-${index + 1}`,
      name: nameMatch?.[1]?.trim() || "Trạm sạc VinFast",

      lat: coord.lat,
      lng: coord.lng,

      address: ext["Địa Chỉ"] || null,
      operatingTime: ext["Thời gian hoạt động"] || null,
      parking: ext["Gửi xe"] || null,
      stationType: ext["Trạm sạc"] || null,
      lastUpdated: ext["Cập nhật lần cuối"] || null,

      operator: "VinFast",
      brand: "VinFast",

      chargingPorts: ports,               // dữ liệu thật
      socketCount: socketCount || null,
      maxPowerKW: maxPower || null,

      source: "Google My Maps (KML)"
    };
  })
  .filter(Boolean);


  fs.writeFileSync(
    OUTPUT_JSON,
    JSON.stringify(stations, null, 2),
    "utf-8"
  );

  console.log(
    `✅ Xuất ${stations.length} trạm → charging-stations.raw.json`
  );
}

run();
