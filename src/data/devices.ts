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
  { id: "apple", name: "Apple", logo: "🍎" },
  { id: "samsung", name: "Samsung", logo: "📱" },
  { id: "xiaomi", name: "Xiaomi", logo: "📲" },
  { id: "oneplus", name: "OnePlus", logo: "📳" },
  { id: "google", name: "Google", logo: "🔍" },
  { id: "oppo", name: "OPPO", logo: "📴" },
  { id: "vivo", name: "Vivo", logo: "📵" },
  { id: "realme", name: "Realme", logo: "⚡" },
  { id: "hp", name: "HP", logo: "💻" },
  { id: "dell", name: "Dell", logo: "🖥️" },
  { id: "lenovo", name: "Lenovo", logo: "💼" },
  { id: "asus", name: "ASUS", logo: "🎮" },
  { id: "sony", name: "Sony", logo: "🎵" },
  { id: "microsoft", name: "Microsoft", logo: "🪟" },
  { id: "nintendo", name: "Nintendo", logo: "🕹️" },
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
  // Laptops
  { id: "macbook-air-m3", brandId: "apple", name: "MacBook Air M3", image: "", basePrice: 55000, category: "laptops" },
  { id: "macbook-pro-m3", brandId: "apple", name: "MacBook Pro M3", image: "", basePrice: 75000, category: "laptops" },
  { id: "macbook-pro-m3-pro", brandId: "apple", name: "MacBook Pro M3 Pro", image: "", basePrice: 95000, category: "laptops" },
  { id: "hp-pavilion-15", brandId: "hp", name: "HP Pavilion 15", image: "", basePrice: 22000, category: "laptops" },
  { id: "hp-spectre-x360", brandId: "hp", name: "HP Spectre x360", image: "", basePrice: 40000, category: "laptops" },
  { id: "dell-xps-13", brandId: "dell", name: "Dell XPS 13", image: "", basePrice: 38000, category: "laptops" },
  { id: "dell-inspiron-15", brandId: "dell", name: "Dell Inspiron 15", image: "", basePrice: 18000, category: "laptops" },
  { id: "lenovo-thinkpad-x1", brandId: "lenovo", name: "Lenovo ThinkPad X1", image: "", basePrice: 42000, category: "laptops" },
  { id: "asus-rog-zephyrus", brandId: "asus", name: "ASUS ROG Zephyrus", image: "", basePrice: 55000, category: "laptops" },
  // Tablets
  { id: "ipad-pro-m4", brandId: "apple", name: "iPad Pro M4", image: "", basePrice: 48000, category: "tablets" },
  { id: "ipad-air-m2", brandId: "apple", name: "iPad Air M2", image: "", basePrice: 28000, category: "tablets" },
  { id: "ipad-10th", brandId: "apple", name: "iPad 10th Gen", image: "", basePrice: 18000, category: "tablets" },
  { id: "galaxy-tab-s9", brandId: "samsung", name: "Galaxy Tab S9", image: "", basePrice: 28000, category: "tablets" },
  // Watches
  { id: "apple-watch-ultra-2", brandId: "apple", name: "Apple Watch Ultra 2", image: "", basePrice: 32000, category: "watches" },
  { id: "apple-watch-s9", brandId: "apple", name: "Apple Watch Series 9", image: "", basePrice: 18000, category: "watches" },
  { id: "galaxy-watch-6", brandId: "samsung", name: "Galaxy Watch 6", image: "", basePrice: 8000, category: "watches" },
  // Consoles
  { id: "ps5", brandId: "sony", name: "PlayStation 5", image: "", basePrice: 22000, category: "consoles" },
  { id: "ps5-digital", brandId: "sony", name: "PS5 Digital Edition", image: "", basePrice: 18000, category: "consoles" },
  { id: "xbox-series-x", brandId: "microsoft", name: "Xbox Series X", image: "", basePrice: 20000, category: "consoles" },
  { id: "xbox-series-s", brandId: "microsoft", name: "Xbox Series S", image: "", basePrice: 12000, category: "consoles" },
  { id: "nintendo-switch-oled", brandId: "nintendo", name: "Nintendo Switch OLED", image: "", basePrice: 12000, category: "consoles" },
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
