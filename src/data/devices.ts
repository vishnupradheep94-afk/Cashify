export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface DeviceModel {
  id: string;
  brandId: string;
  name: string;
  image: string;
  basePrice: number;
  category: string;
}

export const categories = [
  { id: "phones", name: "Sell Phone", icon: "Smartphone" },
  { id: "laptops", name: "Sell Laptop", icon: "Laptop" },
  { id: "tablets", name: "Sell Tablet", icon: "Tablet" },
  { id: "watches", name: "Sell Watch", icon: "Watch" },
  { id: "consoles", name: "Sell Console", icon: "Gamepad2" },
];

export const brands: Brand[] = [
  // Phone brands
  { id: "apple", name: "Apple", logo: "🍎" },
  { id: "samsung", name: "Samsung", logo: "📱" },
  { id: "xiaomi", name: "Xiaomi", logo: "📲" },
  { id: "oneplus", name: "OnePlus", logo: "📳" },
  { id: "google", name: "Google", logo: "🔍" },
  { id: "oppo", name: "OPPO", logo: "📴" },
  { id: "vivo", name: "Vivo", logo: "📵" },
  { id: "realme", name: "Realme", logo: "⚡" },
  { id: "motorola", name: "Motorola", logo: "📡" },
  { id: "nothing", name: "Nothing", logo: "⭕" },
  // Laptop brands
  { id: "hp", name: "HP", logo: "💻" },
  { id: "dell", name: "Dell", logo: "🖥️" },
  { id: "lenovo", name: "Lenovo", logo: "💼" },
  { id: "asus", name: "ASUS", logo: "🎮" },
  { id: "acer", name: "Acer", logo: "🖱️" },
  { id: "msi", name: "MSI", logo: "🐉" },
  // Console brands
  { id: "sony", name: "Sony", logo: "🎵" },
  { id: "microsoft", name: "Microsoft", logo: "🪟" },
  { id: "nintendo", name: "Nintendo", logo: "🕹️" },
  // Watch brands
  { id: "garmin", name: "Garmin", logo: "🏃" },
  { id: "fitbit", name: "Fitbit", logo: "💪" },
  { id: "noise", name: "Noise", logo: "🔊" },
  { id: "boat", name: "boAt", logo: "🚣" },
];

export const deviceModels: DeviceModel[] = [
  // Apple Phones
  { id: "iphone-16-pro-max", brandId: "apple", name: "iPhone 16 Pro Max", image: "", basePrice: 65000, category: "phones" },
  { id: "iphone-16-pro", brandId: "apple", name: "iPhone 16 Pro", image: "", basePrice: 55000, category: "phones" },
  { id: "iphone-16", brandId: "apple", name: "iPhone 16", image: "", basePrice: 42000, category: "phones" },
  { id: "iphone-15-pro-max", brandId: "apple", name: "iPhone 15 Pro Max", image: "", basePrice: 52000, category: "phones" },
  { id: "iphone-15-pro", brandId: "apple", name: "iPhone 15 Pro", image: "", basePrice: 45000, category: "phones" },
  { id: "iphone-15", brandId: "apple", name: "iPhone 15", image: "", basePrice: 35000, category: "phones" },
  { id: "iphone-14-pro-max", brandId: "apple", name: "iPhone 14 Pro Max", image: "", basePrice: 42000, category: "phones" },
  { id: "iphone-14", brandId: "apple", name: "iPhone 14", image: "", basePrice: 28000, category: "phones" },
  { id: "iphone-13", brandId: "apple", name: "iPhone 13", image: "", basePrice: 22000, category: "phones" },
  { id: "iphone-12", brandId: "apple", name: "iPhone 12", image: "", basePrice: 16000, category: "phones" },
  // Samsung Phones
  { id: "galaxy-s24-ultra", brandId: "samsung", name: "Galaxy S24 Ultra", image: "", basePrice: 52000, category: "phones" },
  { id: "galaxy-s24-plus", brandId: "samsung", name: "Galaxy S24+", image: "", basePrice: 38000, category: "phones" },
  { id: "galaxy-s24", brandId: "samsung", name: "Galaxy S24", image: "", basePrice: 28000, category: "phones" },
  { id: "galaxy-s23-ultra", brandId: "samsung", name: "Galaxy S23 Ultra", image: "", basePrice: 40000, category: "phones" },
  { id: "galaxy-z-fold-5", brandId: "samsung", name: "Galaxy Z Fold 5", image: "", basePrice: 55000, category: "phones" },
  { id: "galaxy-z-flip-5", brandId: "samsung", name: "Galaxy Z Flip 5", image: "", basePrice: 28000, category: "phones" },
  { id: "galaxy-a54", brandId: "samsung", name: "Galaxy A54", image: "", basePrice: 12000, category: "phones" },
  // OnePlus
  { id: "oneplus-12", brandId: "oneplus", name: "OnePlus 12", image: "", basePrice: 28000, category: "phones" },
  { id: "oneplus-12r", brandId: "oneplus", name: "OnePlus 12R", image: "", basePrice: 18000, category: "phones" },
  { id: "oneplus-nord-4", brandId: "oneplus", name: "OnePlus Nord 4", image: "", basePrice: 12000, category: "phones" },
  // Xiaomi
  { id: "xiaomi-14-ultra", brandId: "xiaomi", name: "Xiaomi 14 Ultra", image: "", basePrice: 32000, category: "phones" },
  { id: "xiaomi-14", brandId: "xiaomi", name: "Xiaomi 14", image: "", basePrice: 22000, category: "phones" },
  { id: "redmi-note-13-pro", brandId: "xiaomi", name: "Redmi Note 13 Pro+", image: "", basePrice: 12000, category: "phones" },
  // Google
  { id: "pixel-9-pro", brandId: "google", name: "Pixel 9 Pro", image: "", basePrice: 38000, category: "phones" },
  { id: "pixel-9", brandId: "google", name: "Pixel 9", image: "", basePrice: 28000, category: "phones" },
  { id: "pixel-8", brandId: "google", name: "Pixel 8", image: "", basePrice: 20000, category: "phones" },
  // OPPO
  { id: "oppo-find-x7", brandId: "oppo", name: "OPPO Find X7", image: "", basePrice: 28000, category: "phones" },
  { id: "oppo-reno-11", brandId: "oppo", name: "OPPO Reno 11 Pro", image: "", basePrice: 16000, category: "phones" },
  { id: "oppo-a79", brandId: "oppo", name: "OPPO A79", image: "", basePrice: 8000, category: "phones" },
  // Vivo
  { id: "vivo-x100-pro", brandId: "vivo", name: "Vivo X100 Pro", image: "", basePrice: 30000, category: "phones" },
  { id: "vivo-v30-pro", brandId: "vivo", name: "Vivo V30 Pro", image: "", basePrice: 18000, category: "phones" },
  { id: "vivo-t3", brandId: "vivo", name: "Vivo T3", image: "", basePrice: 8000, category: "phones" },
  // Realme
  { id: "realme-gt-5-pro", brandId: "realme", name: "Realme GT 5 Pro", image: "", basePrice: 20000, category: "phones" },
  { id: "realme-12-pro", brandId: "realme", name: "Realme 12 Pro+", image: "", basePrice: 14000, category: "phones" },
  { id: "realme-narzo-70", brandId: "realme", name: "Realme Narzo 70", image: "", basePrice: 6000, category: "phones" },
  // Motorola
  { id: "moto-edge-50-pro", brandId: "motorola", name: "Moto Edge 50 Pro", image: "", basePrice: 16000, category: "phones" },
  { id: "moto-g84", brandId: "motorola", name: "Moto G84", image: "", basePrice: 8000, category: "phones" },
  { id: "moto-razr-40", brandId: "motorola", name: "Moto Razr 40", image: "", basePrice: 18000, category: "phones" },
  // Nothing
  { id: "nothing-phone-2", brandId: "nothing", name: "Nothing Phone (2)", image: "", basePrice: 18000, category: "phones" },
  { id: "nothing-phone-2a", brandId: "nothing", name: "Nothing Phone (2a)", image: "", basePrice: 10000, category: "phones" },

  // Laptops
  { id: "macbook-air-m3", brandId: "apple", name: "MacBook Air M3", image: "", basePrice: 55000, category: "laptops" },
  { id: "macbook-pro-m3", brandId: "apple", name: "MacBook Pro M3", image: "", basePrice: 75000, category: "laptops" },
  { id: "macbook-pro-m3-pro", brandId: "apple", name: "MacBook Pro M3 Pro", image: "", basePrice: 95000, category: "laptops" },
  { id: "hp-pavilion-15", brandId: "hp", name: "HP Pavilion 15", image: "", basePrice: 22000, category: "laptops" },
  { id: "hp-spectre-x360", brandId: "hp", name: "HP Spectre x360", image: "", basePrice: 40000, category: "laptops" },
  { id: "hp-omen-16", brandId: "hp", name: "HP Omen 16", image: "", basePrice: 45000, category: "laptops" },
  { id: "dell-xps-13", brandId: "dell", name: "Dell XPS 13", image: "", basePrice: 38000, category: "laptops" },
  { id: "dell-inspiron-15", brandId: "dell", name: "Dell Inspiron 15", image: "", basePrice: 18000, category: "laptops" },
  { id: "dell-g15", brandId: "dell", name: "Dell G15 Gaming", image: "", basePrice: 35000, category: "laptops" },
  { id: "lenovo-thinkpad-x1", brandId: "lenovo", name: "Lenovo ThinkPad X1", image: "", basePrice: 42000, category: "laptops" },
  { id: "lenovo-ideapad-5", brandId: "lenovo", name: "Lenovo IdeaPad 5", image: "", basePrice: 22000, category: "laptops" },
  { id: "lenovo-legion-5", brandId: "lenovo", name: "Lenovo Legion 5", image: "", basePrice: 48000, category: "laptops" },
  { id: "asus-rog-zephyrus", brandId: "asus", name: "ASUS ROG Zephyrus", image: "", basePrice: 55000, category: "laptops" },
  { id: "asus-vivobook-15", brandId: "asus", name: "ASUS VivoBook 15", image: "", basePrice: 20000, category: "laptops" },
  { id: "asus-zenbook-14", brandId: "asus", name: "ASUS ZenBook 14", image: "", basePrice: 35000, category: "laptops" },
  { id: "acer-aspire-5", brandId: "acer", name: "Acer Aspire 5", image: "", basePrice: 18000, category: "laptops" },
  { id: "acer-nitro-5", brandId: "acer", name: "Acer Nitro 5", image: "", basePrice: 32000, category: "laptops" },
  { id: "acer-swift-3", brandId: "acer", name: "Acer Swift 3", image: "", basePrice: 25000, category: "laptops" },
  { id: "msi-gf63", brandId: "msi", name: "MSI GF63 Thin", image: "", basePrice: 28000, category: "laptops" },
  { id: "msi-katana-15", brandId: "msi", name: "MSI Katana 15", image: "", basePrice: 38000, category: "laptops" },
  { id: "samsung-galaxy-book3", brandId: "samsung", name: "Samsung Galaxy Book3", image: "", basePrice: 30000, category: "laptops" },
  { id: "xiaomi-notebook-pro", brandId: "xiaomi", name: "Xiaomi Notebook Pro", image: "", basePrice: 28000, category: "laptops" },

  // Tablets
  { id: "ipad-pro-m4", brandId: "apple", name: "iPad Pro M4", image: "", basePrice: 48000, category: "tablets" },
  { id: "ipad-air-m2", brandId: "apple", name: "iPad Air M2", image: "", basePrice: 28000, category: "tablets" },
  { id: "ipad-10th", brandId: "apple", name: "iPad 10th Gen", image: "", basePrice: 18000, category: "tablets" },
  { id: "ipad-mini-6", brandId: "apple", name: "iPad Mini 6", image: "", basePrice: 22000, category: "tablets" },
  { id: "galaxy-tab-s9-ultra", brandId: "samsung", name: "Galaxy Tab S9 Ultra", image: "", basePrice: 42000, category: "tablets" },
  { id: "galaxy-tab-s9", brandId: "samsung", name: "Galaxy Tab S9", image: "", basePrice: 28000, category: "tablets" },
  { id: "galaxy-tab-a9", brandId: "samsung", name: "Galaxy Tab A9", image: "", basePrice: 8000, category: "tablets" },
  { id: "xiaomi-pad-6", brandId: "xiaomi", name: "Xiaomi Pad 6", image: "", basePrice: 14000, category: "tablets" },
  { id: "oneplus-pad", brandId: "oneplus", name: "OnePlus Pad", image: "", basePrice: 16000, category: "tablets" },
  { id: "lenovo-tab-p12", brandId: "lenovo", name: "Lenovo Tab P12", image: "", basePrice: 12000, category: "tablets" },
  { id: "realme-pad-2", brandId: "realme", name: "Realme Pad 2", image: "", basePrice: 8000, category: "tablets" },
  { id: "oppo-pad-air2", brandId: "oppo", name: "OPPO Pad Air2", image: "", basePrice: 10000, category: "tablets" },
  { id: "motorola-tab-g84", brandId: "motorola", name: "Motorola Tab G84", image: "", basePrice: 9000, category: "tablets" },
  { id: "nokia-t21", brandId: "nothing", name: "Nothing Pad (concept)", image: "", basePrice: 12000, category: "tablets" },

  // Watches
  { id: "apple-watch-ultra-2", brandId: "apple", name: "Apple Watch Ultra 2", image: "", basePrice: 32000, category: "watches" },
  { id: "apple-watch-s9", brandId: "apple", name: "Apple Watch Series 9", image: "", basePrice: 18000, category: "watches" },
  { id: "apple-watch-se-2", brandId: "apple", name: "Apple Watch SE 2", image: "", basePrice: 12000, category: "watches" },
  { id: "galaxy-watch-6-classic", brandId: "samsung", name: "Galaxy Watch 6 Classic", image: "", basePrice: 14000, category: "watches" },
  { id: "galaxy-watch-6", brandId: "samsung", name: "Galaxy Watch 6", image: "", basePrice: 8000, category: "watches" },
  { id: "galaxy-watch-fe", brandId: "samsung", name: "Galaxy Watch FE", image: "", basePrice: 5000, category: "watches" },
  { id: "pixel-watch-2", brandId: "google", name: "Pixel Watch 2", image: "", basePrice: 12000, category: "watches" },
  { id: "oneplus-watch-2", brandId: "oneplus", name: "OnePlus Watch 2", image: "", basePrice: 10000, category: "watches" },
  { id: "garmin-venu-3", brandId: "garmin", name: "Garmin Venu 3", image: "", basePrice: 16000, category: "watches" },
  { id: "garmin-forerunner-265", brandId: "garmin", name: "Garmin Forerunner 265", image: "", basePrice: 14000, category: "watches" },
  { id: "fitbit-sense-2", brandId: "fitbit", name: "Fitbit Sense 2", image: "", basePrice: 8000, category: "watches" },
  { id: "fitbit-versa-4", brandId: "fitbit", name: "Fitbit Versa 4", image: "", basePrice: 6000, category: "watches" },
  { id: "noise-colorfit-pro-5", brandId: "noise", name: "Noise ColorFit Pro 5", image: "", basePrice: 2000, category: "watches" },
  { id: "boat-wave-sigma", brandId: "boat", name: "boAt Wave Sigma", image: "", basePrice: 1500, category: "watches" },

  // Consoles
  { id: "ps5", brandId: "sony", name: "PlayStation 5", image: "", basePrice: 22000, category: "consoles" },
  { id: "ps5-digital", brandId: "sony", name: "PS5 Digital Edition", image: "", basePrice: 18000, category: "consoles" },
  { id: "ps5-slim", brandId: "sony", name: "PS5 Slim", image: "", basePrice: 20000, category: "consoles" },
  { id: "xbox-series-x", brandId: "microsoft", name: "Xbox Series X", image: "", basePrice: 20000, category: "consoles" },
  { id: "xbox-series-s", brandId: "microsoft", name: "Xbox Series S", image: "", basePrice: 12000, category: "consoles" },
  { id: "nintendo-switch-oled", brandId: "nintendo", name: "Nintendo Switch OLED", image: "", basePrice: 12000, category: "consoles" },
  { id: "nintendo-switch-lite", brandId: "nintendo", name: "Nintendo Switch Lite", image: "", basePrice: 8000, category: "consoles" },
];

export const conditions = [
  { id: "excellent", label: "Excellent", description: "Like new, no scratches or dents", multiplier: 1.0 },
  { id: "good", label: "Good", description: "Minor scratches, fully functional", multiplier: 0.85 },
  { id: "fair", label: "Fair", description: "Visible wear, works fine", multiplier: 0.65 },
  { id: "poor", label: "Poor", description: "Heavy wear, may have issues", multiplier: 0.4 },
];

export const getBrandsForCategory = (categoryId: string) => {
  const brandIds = [...new Set(deviceModels.filter(d => d.category === categoryId).map(d => d.brandId))];
  return brands.filter(b => brandIds.includes(b.id));
};

export const getModelsForBrand = (brandId: string, categoryId: string) => {
  return deviceModels.filter(d => d.brandId === brandId && d.category === categoryId);
};
