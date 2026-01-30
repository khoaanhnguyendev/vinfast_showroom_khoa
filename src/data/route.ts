// type VNLocation = {
//   commune: string;
//   province: string;
// };

// /**
//  * Reverse geocode VN – toàn quốc
//  * Không gắn với Đồng Nai
//  */
// export async function reverseVNLocation(
//   lat: number,
//   lng: number
// ): Promise<VNLocation | null> {
//   try {
//     const res = await fetch(
//       `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=vi`
//     );

//     if (!res.ok) return null;

//     const data = await res.json();
//     const addr = data.address;

//     if (!addr) return null;

//     return {
//       commune:
//         addr.suburb ||
//         addr.village ||
//         addr.town ||
//         addr.city_district ||
//         addr.county ||
//         "Không rõ xã/phường",
//       province:
//         addr.state ||
//         addr.province ||
//         addr.city ||
//         "Không rõ tỉnh"
//     };
//   } catch {
//     return null;
//   }
// }
