// dongnaiCommunes.ts

export type Commune = {
  name: string;        // tên xã / phường mới
  oldNames: string[];  // danh sách đơn vị cũ (đúng nghị quyết)
};

// Danh sách 95 đơn vị cấp xã (Đồng Nai mới, hiệu lực 01/07/2025)
export const dongnaiCommunes: Commune[] = [
  { name: "Phường Biên Hòa", oldNames: ["Tân Hạnh", "Hóa An", "Bửu Hòa", "Tân Vạn"] },
  { name: "Phường Trấn Biên", oldNames: ["Bửu Long", "Quang Vinh", "Trung Dũng", "Thống Nhất", "Hiệp Hòa", "An Bình"] },
  { name: "Phường Tam Hiệp", oldNames: ["Tân Hiệp", "Tân Mai", "Bình Đa", "Tam Hiệp"] },
  { name: "Phường Long Bình", oldNames: ["Hố Nai", "Tân Biên", "Long Bình"] },
  { name: "Phường Trảng Dài", oldNames: ["Trảng Dài", "Thiện Tân"] },
  { name: "Phường Hố Nai", oldNames: ["Tân Hòa", "Hố Nai 3"] },
  { name: "Phường Long Hưng", oldNames: ["Long Bình Tân", "An Hòa", "Long Hưng"] },
  { name: "Phường Phước Tân", oldNames: ["Phước Tân"] },
  { name: "Phường Tam Phước", oldNames: ["Tam Phước"] },
  { name: "Phường Bình Lộc", oldNames: ["Suối Tre", "Xuân Thiện", "Bình Lộc"] },
  { name: "Phường Long Khánh", oldNames: ["Xuân An", "Xuân Bình", "Xuân Hòa", "Phú Bình", "Bàu Trâm"] },
  { name: "Phường Bảo Vinh", oldNames: ["Bảo Vinh", "Bảo Quang"] },
  { name: "Phường Xuân Lập", oldNames: ["Bàu Sen", "Xuân Lập"] },
  { name: "Phường Hàng Gòn", oldNames: ["Xuân Tân", "Hàng Gòn"] },
  { name: "Phường Tân Triều", oldNames: ["Tân Phong", "Tân Bình", "Bình Lợi", "Thạnh Phú"] },

  // ===== NHƠN TRẠCH =====
  { name: "Xã Đại Phước", oldNames: ["Phú Hữu", "Phú Đông", "Phước Khánh", "Đại Phước"] },
  { name: "Xã Nhơn Trạch", oldNames: ["Hiệp Phước", "Long Tân (Nhơn Trạch)", "Phú Thạnh", "Phú Hội", "Phước Thiền"] },
  { name: "Xã Phước An", oldNames: ["Phước An (Nhơn Trạch)", "Vĩnh Thanh", "Long Thọ"] },

  // ===== LONG THÀNH =====
  { name: "Xã Phước Thái", oldNames: ["Tân Hiệp (Long Thành)", "Phước Bình", "Phước Thái"] },
  { name: "Xã Long Phước", oldNames: ["Bàu Cạn", "Long Phước"] },
  { name: "Xã Long Thành", oldNames: ["Thị trấn Long Thành", "Lộc An", "Bình Sơn (Long Thành)", "Long An"] },
  { name: "Xã Bình An", oldNames: ["Long Đức", "Bình An"] },
  { name: "Xã An Phước", oldNames: ["Tam An", "An Phước"] },
  { name: "Xã An Viễn", oldNames: ["Đồi 61", "An Viễn"] },

  // ===== TRẢNG BOM =====
  { name: "Xã Bình Minh", oldNames: ["Bình Minh (Trảng Bom)", "Bắc Sơn"] },
  { name: "Xã Trảng Bom", oldNames: ["Thị trấn Trảng Bom", "Quảng Tiến", "Sông Trầu", "Giang Điền"] },
  { name: "Xã Bàu Hàm", oldNames: ["Thanh Bình (Trảng Bom)", "Cây Gáo", "Sông Thao", "Bàu Hàm"] },
  { name: "Xã Hưng Thịnh", oldNames: ["Đông Hòa", "Tây Hòa", "Trung Hòa", "Hưng Thịnh"] },

  // ===== THỐNG NHẤT =====
  { name: "Xã Dầu Giây", oldNames: ["Thị trấn Dầu Giây", "Hưng Lộc", "Bàu Hàm 2", "Lộ 25"] },
  { name: "Xã Gia Kiệm", oldNames: ["Quang Trung", "Gia Tân 3", "Gia Kiệm"] },
  { name: "Xã Thống Nhất", oldNames: ["Gia Tân 1", "Gia Tân 2", "Phú Cường", "Phú Túc"] },
  { name: "Xã Xuân Quế", oldNames: ["Sông Nhạn", "Xuân Quế"] },
  { name: "Xã Xuân Đường", oldNames: ["Cẩm Đường", "Thừa Đức", "Xuân Đường"] },

  // ===== CẨM MỸ =====
  { name: "Xã Cẩm Mỹ", oldNames: ["Long Giao", "Nhân Nghĩa", "Xuân Mỹ", "Bảo Bình"] },
  { name: "Xã Sông Ray", oldNames: ["Lâm San", "Sông Ray"] },

  // ===== XUÂN LỘC =====
  { name: "Xã Xuân Đông", oldNames: ["Xuân Tây", "Xuân Đông", "một phần Xuân Tâm"] },
  { name: "Xã Xuân Định", oldNames: ["Xuân Bảo", "Bảo Hòa", "Xuân Định"] },
  { name: "Xã Xuân Phú", oldNames: ["Lang Minh", "Xuân Phú"] },
  { name: "Xã Xuân Lộc", oldNames: ["Thị trấn Gia Ray", "Xuân Thọ", "Xuân Trường", "Suối Cát", "Xuân Hiệp"] },
  { name: "Xã Xuân Hòa", oldNames: ["Xuân Hưng", "Xuân Hòa", "phần còn lại của Xuân Tâm"] },
  { name: "Xã Xuân Thành", oldNames: ["Suối Cao", "Xuân Thành"] },
  { name: "Xã Xuân Bắc", oldNames: ["Suối Nho", "Xuân Bắc"] },

  // ===== ĐỊNH QUÁN =====
  { name: "Xã La Ngà", oldNames: ["Túc Trưng", "La Ngà"] },
  { name: "Xã Định Quán", oldNames: ["Thị trấn Định Quán", "Phú Ngọc", "Gia Canh", "Ngọc Định"] },
  { name: "Xã Thanh Sơn", oldNames: ["Thanh Sơn (Định Quán)"] },

  // ===== TÂN PHÚ =====
  { name: "Xã Đak Lua", oldNames: ["Đak Lua"] },
  { name: "Xã Phú Lý", oldNames: ["Phú Lý"] },
  { name: "Xã Phú Vinh", oldNames: ["Phú Tân", "Phú Vinh"] },
  { name: "Xã Phú Hòa", oldNames: ["Phú Điền", "Phú Lợi", "Phú Hòa"] },
  { name: "Xã Tà Lài", oldNames: ["Phú Thịnh", "Phú Lập", "Tà Lài"] },
  { name: "Xã Nam Cát Tiên", oldNames: ["Phú An", "Nam Cát Tiên"] },
  { name: "Xã Tân Phú", oldNames: ["Thị trấn Tân Phú", "Phú Lộc", "Trà Cổ", "Phú Thanh", "Phú Xuân"] },
  { name: "Xã Phú Lâm", oldNames: ["Thanh Sơn (Tân Phú)", "Phú Sơn (Tân Phú)", "Phú Bình", "Phú Lâm"] },

  // ===== VĨNH CỬU =====
  { name: "Xã Trị An", oldNames: ["Vĩnh An", "Mã Đà", "Trị An"] },
  { name: "Xã Tân An", oldNames: ["Vĩnh Tân", "Tân An"] },

  // ===== BÌNH PHƯỚC (CŨ) =====
  { name: "Phường Bình Phước", oldNames: ["Tân Phú", "Tân Đồng", "Tân Thiện", "Tân Bình", "Tân Xuân", "Tiến Hưng"] },
  { name: "Phường Đồng Xoài", oldNames: ["Tiến Thành", "Tân Thành (Đồng Xoài)"] },
  { name: "Phường Minh Hưng", oldNames: ["Minh Long", "Minh Hưng"] },
  { name: "Phường Chơn Thành", oldNames: ["Hưng Long", "Thành Tâm", "Minh Thành"] },
  { name: "Phường Bình Long", oldNames: ["An Lộc", "Hưng Chiến", "Phú Đức", "Thanh Bình (Hớn Quản)"] },
  { name: "Phường An Lộc", oldNames: ["Phú Thịnh", "Thanh Phú", "Thanh Lương"] },
  { name: "Phường Phước Bình", oldNames: ["Long Phước", "Phước Bình", "Bình Sơn (Phú Riềng)", "Long Giang"] },
  { name: "Phường Phước Long", oldNames: ["Long Thủy", "Thác Mơ", "Sơn Giang", "Phước Tín"] },

  { name: "Xã Nha Bích", oldNames: ["Minh Thắng", "Minh Lập", "Nha Bích"] },
  { name: "Xã Tân Quan", oldNames: ["Phước An (Hớn Quản)", "Tân Lợi (Hớn Quản)", "Quang Minh", "Tân Quan"] },
  { name: "Xã Tân Hưng", oldNames: ["Tân Hưng (Hớn Quản)", "An Khương", "Thanh An"] },
  { name: "Xã Tân Khai", oldNames: ["Thị trấn Tân Khai", "Tân Hiệp (Hớn Quản)", "Đồng Nơ"] },
  { name: "Xã Minh Đức", oldNames: ["An Phú", "Minh Tâm", "Minh Đức"] },
  { name: "Xã Phú Nghĩa", oldNames: ["Phú Văn", "Đức Hạnh", "Phú Nghĩa"] },
  { name: "Xã Đa Kia", oldNames: ["Phước Minh", "Bình Thắng", "Đa Kia"] },
  { name: "Xã Bình Tân", oldNames: ["Long Hưng (Phú Riềng)", "Long Bình", "Bình Tân"] },
  { name: "Xã Long Hà", oldNames: ["Long Tân (Phú Riềng)", "Long Hà"] },
  { name: "Xã Phú Riềng", oldNames: ["Bù Nho", "Phú Riềng"] },
  { name: "Xã Phú Trung", oldNames: ["Phước Tân", "Phú Trung"] },
  { name: "Xã Thuận Lợi", oldNames: ["Thuận Phú", "Thuận Lợi"] },
  { name: "Xã Đồng Tâm", oldNames: ["Đồng Tiến", "Tân Phước", "Đồng Tâm"] },
  { name: "Xã Tân Lợi", oldNames: ["Tân Hưng (Đồng Phú)", "Tân Lợi", "Tân Hòa"] },
  { name: "Xã Đồng Phú", oldNames: ["Thị trấn Tân Phú", "Tân Tiến (Đồng Phú)", "Tân Lập"] },
  { name: "Xã Lộc Thành", oldNames: ["Lộc Thịnh", "Lộc Thành"] },
  { name: "Xã Lộc Ninh", oldNames: ["Thị trấn Lộc Ninh", "Lộc Thái", "Lộc Thuận"] },
  { name: "Xã Lộc Hưng", oldNames: ["Lộc Khánh", "Lộc Điền", "Lộc Hưng"] },
  { name: "Xã Lộc Tấn", oldNames: ["Lộc Thiện", "Lộc Tấn"] },
  { name: "Xã Lộc Thạnh", oldNames: ["Lộc Hòa", "Lộc Thạnh"] },
  { name: "Xã Lộc Quang", oldNames: ["Lộc Phú", "Lộc Hiệp", "Lộc Quang"] },
  { name: "Xã Tân Tiến", oldNames: ["Tân Thành", "Tân Tiến (Bù Đốp)", "Lộc An (Lộc Ninh)"] },
  { name: "Xã Thiện Hưng", oldNames: ["Thị trấn Thanh Bình", "Thanh Hòa", "Thiện Hưng"] },
  { name: "Xã Hưng Phước", oldNames: ["Phước Thiện", "Hưng Phước"] },
  { name: "Xã Bù Gia Mập", oldNames: ["Bù Gia Mập"] },
  { name: "Xã Đăk Ơ", oldNames: ["Đăk Ơ"] },
  { name: "Xã Phước Sơn", oldNames: ["Đăng Hà", "Thống Nhất", "Phước Sơn"] },
  { name: "Xã Nghĩa Trung", oldNames: ["Đức Liễu", "Nghĩa Bình", "Nghĩa Trung"] },
  { name: "Xã Bù Đăng", oldNames: ["Thị trấn Đức Phong", "Đoàn Kết", "Minh Hưng"] },
  { name: "Xã Thọ Sơn", oldNames: ["Phú Sơn (Bù Đăng)", "Đồng Nai", "Thọ Sơn"] },
  { name: "Xã Đak Nhau", oldNames: ["Đường 10", "Đak Nhau"] },
  { name: "Xã Bom Bo", oldNames: ["Bình Minh (Bù Đăng)", "Bom Bo"] }
];
