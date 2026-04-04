export interface RefurbishedItem {
  id: string;
  name: string;
  brand: string;
  category: "phones" | "laptops" | "tablets" | "watches";
  originalPrice: number;
  refurbishedPrice: number;
  condition: "Excellent" | "Good" | "Fair";
  warranty: string;
  image: string;
  specs: string[];
  stock: number;
}

export const refurbishedItems: RefurbishedItem[] = [
  // Phones
  { id: "ref-iphone-15-pro", name: "iPhone 15 Pro", brand: "Apple", category: "phones", originalPrice: 134900, refurbishedPrice: 84999, condition: "Excellent", warranty: "6 months", image: "", specs: ["256GB", "A17 Pro", "48MP Camera"], stock: 12 },
  { id: "ref-iphone-14", name: "iPhone 14", brand: "Apple", category: "phones", originalPrice: 79900, refurbishedPrice: 46999, condition: "Good", warranty: "6 months", image: "", specs: ["128GB", "A15 Bionic", "12MP Camera"], stock: 18 },
  { id: "ref-iphone-13", name: "iPhone 13", brand: "Apple", category: "phones", originalPrice: 69900, refurbishedPrice: 35999, condition: "Good", warranty: "6 months", image: "", specs: ["128GB", "A15 Bionic", "12MP Camera"], stock: 25 },
  { id: "ref-galaxy-s24-ultra", name: "Galaxy S24 Ultra", brand: "Samsung", category: "phones", originalPrice: 129999, refurbishedPrice: 79999, condition: "Excellent", warranty: "6 months", image: "", specs: ["256GB", "Snapdragon 8 Gen 3", "200MP Camera"], stock: 8 },
  { id: "ref-galaxy-s23", name: "Galaxy S23", brand: "Samsung", category: "phones", originalPrice: 74999, refurbishedPrice: 39999, condition: "Good", warranty: "6 months", image: "", specs: ["128GB", "Snapdragon 8 Gen 2", "50MP Camera"], stock: 15 },
  { id: "ref-galaxy-z-flip-5", name: "Galaxy Z Flip 5", brand: "Samsung", category: "phones", originalPrice: 99999, refurbishedPrice: 54999, condition: "Excellent", warranty: "6 months", image: "", specs: ["256GB", "Foldable", "12MP Camera"], stock: 6 },
  { id: "ref-oneplus-12", name: "OnePlus 12", brand: "OnePlus", category: "phones", originalPrice: 64999, refurbishedPrice: 42999, condition: "Excellent", warranty: "6 months", image: "", specs: ["256GB", "Snapdragon 8 Gen 3", "50MP Camera"], stock: 10 },
  { id: "ref-pixel-8", name: "Pixel 8", brand: "Google", category: "phones", originalPrice: 75999, refurbishedPrice: 42999, condition: "Good", warranty: "6 months", image: "", specs: ["128GB", "Tensor G3", "50MP Camera"], stock: 7 },
  { id: "ref-xiaomi-14", name: "Xiaomi 14", brand: "Xiaomi", category: "phones", originalPrice: 69999, refurbishedPrice: 38999, condition: "Good", warranty: "6 months", image: "", specs: ["256GB", "Snapdragon 8 Gen 3", "50MP Leica"], stock: 9 },
  { id: "ref-nothing-phone-2", name: "Nothing Phone (2)", brand: "Nothing", category: "phones", originalPrice: 44999, refurbishedPrice: 26999, condition: "Good", warranty: "6 months", image: "", specs: ["128GB", "Snapdragon 8+ Gen 1", "Glyph Interface"], stock: 11 },

  // Laptops
  { id: "ref-macbook-air-m2", name: "MacBook Air M2", brand: "Apple", category: "laptops", originalPrice: 119900, refurbishedPrice: 72999, condition: "Excellent", warranty: "12 months", image: "", specs: ["8GB RAM", "256GB SSD", "M2 Chip"], stock: 5 },
  { id: "ref-macbook-pro-m2", name: "MacBook Pro M2", brand: "Apple", category: "laptops", originalPrice: 149900, refurbishedPrice: 95999, condition: "Excellent", warranty: "12 months", image: "", specs: ["16GB RAM", "512GB SSD", "M2 Pro"], stock: 3 },
  { id: "ref-dell-xps-13", name: "Dell XPS 13", brand: "Dell", category: "laptops", originalPrice: 109999, refurbishedPrice: 59999, condition: "Good", warranty: "12 months", image: "", specs: ["16GB RAM", "512GB SSD", "Intel i7-13th"], stock: 7 },
  { id: "ref-hp-spectre", name: "HP Spectre x360", brand: "HP", category: "laptops", originalPrice: 139999, refurbishedPrice: 74999, condition: "Excellent", warranty: "12 months", image: "", specs: ["16GB RAM", "1TB SSD", "OLED Touch"], stock: 4 },
  { id: "ref-lenovo-thinkpad", name: "Lenovo ThinkPad X1 Carbon", brand: "Lenovo", category: "laptops", originalPrice: 159999, refurbishedPrice: 82999, condition: "Good", warranty: "12 months", image: "", specs: ["16GB RAM", "512GB SSD", "Intel i7-13th"], stock: 6 },
  { id: "ref-asus-zenbook", name: "ASUS ZenBook 14", brand: "ASUS", category: "laptops", originalPrice: 89999, refurbishedPrice: 49999, condition: "Good", warranty: "12 months", image: "", specs: ["16GB RAM", "512GB SSD", "OLED Display"], stock: 8 },
  { id: "ref-acer-swift", name: "Acer Swift 3", brand: "Acer", category: "laptops", originalPrice: 69999, refurbishedPrice: 38999, condition: "Fair", warranty: "6 months", image: "", specs: ["8GB RAM", "512GB SSD", "Ryzen 7"], stock: 10 },
  { id: "ref-msi-katana", name: "MSI Katana 15", brand: "MSI", category: "laptops", originalPrice: 109999, refurbishedPrice: 62999, condition: "Good", warranty: "12 months", image: "", specs: ["16GB RAM", "512GB SSD", "RTX 4060"], stock: 4 },

  // Tablets
  { id: "ref-ipad-pro-m2", name: "iPad Pro M2 12.9\"", brand: "Apple", category: "tablets", originalPrice: 112900, refurbishedPrice: 69999, condition: "Excellent", warranty: "6 months", image: "", specs: ["256GB", "M2 Chip", "Liquid Retina XDR"], stock: 5 },
  { id: "ref-ipad-air-m1", name: "iPad Air M1", brand: "Apple", category: "tablets", originalPrice: 59900, refurbishedPrice: 36999, condition: "Good", warranty: "6 months", image: "", specs: ["64GB", "M1 Chip", "10.9\" Display"], stock: 12 },
  { id: "ref-ipad-10th", name: "iPad 10th Gen", brand: "Apple", category: "tablets", originalPrice: 44900, refurbishedPrice: 28999, condition: "Good", warranty: "6 months", image: "", specs: ["64GB", "A14 Bionic", "10.9\" Display"], stock: 15 },
  { id: "ref-galaxy-tab-s9", name: "Galaxy Tab S9", brand: "Samsung", category: "tablets", originalPrice: 74999, refurbishedPrice: 44999, condition: "Excellent", warranty: "6 months", image: "", specs: ["128GB", "Snapdragon 8 Gen 2", "S Pen"], stock: 7 },
  { id: "ref-galaxy-tab-a9", name: "Galaxy Tab A9", brand: "Samsung", category: "tablets", originalPrice: 16999, refurbishedPrice: 10999, condition: "Good", warranty: "6 months", image: "", specs: ["64GB", "Helio G99", "8.7\" Display"], stock: 20 },
  { id: "ref-xiaomi-pad-6", name: "Xiaomi Pad 6", brand: "Xiaomi", category: "tablets", originalPrice: 26999, refurbishedPrice: 17999, condition: "Good", warranty: "6 months", image: "", specs: ["128GB", "Snapdragon 870", "11\" Display"], stock: 9 },
  { id: "ref-oneplus-pad", name: "OnePlus Pad", brand: "OnePlus", category: "tablets", originalPrice: 37999, refurbishedPrice: 24999, condition: "Good", warranty: "6 months", image: "", specs: ["128GB", "Dimensity 9000", "11.6\" Display"], stock: 6 },
  { id: "ref-lenovo-tab-p12", name: "Lenovo Tab P12", brand: "Lenovo", category: "tablets", originalPrice: 32999, refurbishedPrice: 19999, condition: "Fair", warranty: "6 months", image: "", specs: ["128GB", "Dimensity 7050", "12.7\" Display"], stock: 8 },

  // Watches
  { id: "ref-apple-watch-s8", name: "Apple Watch Series 8", brand: "Apple", category: "watches", originalPrice: 45900, refurbishedPrice: 22999, condition: "Good", warranty: "3 months", image: "", specs: ["GPS", "45mm", "Always-On Display"], stock: 10 },
  { id: "ref-apple-watch-ultra", name: "Apple Watch Ultra", brand: "Apple", category: "watches", originalPrice: 89900, refurbishedPrice: 48999, condition: "Excellent", warranty: "6 months", image: "", specs: ["GPS+Cellular", "49mm", "Titanium"], stock: 4 },
  { id: "ref-apple-watch-se", name: "Apple Watch SE 2", brand: "Apple", category: "watches", originalPrice: 29900, refurbishedPrice: 17999, condition: "Good", warranty: "3 months", image: "", specs: ["GPS", "44mm", "S8 Chip"], stock: 14 },
  { id: "ref-galaxy-watch-5-pro", name: "Galaxy Watch 5 Pro", brand: "Samsung", category: "watches", originalPrice: 44999, refurbishedPrice: 19999, condition: "Good", warranty: "3 months", image: "", specs: ["GPS", "45mm", "Sapphire Crystal"], stock: 8 },
  { id: "ref-galaxy-watch-6", name: "Galaxy Watch 6", brand: "Samsung", category: "watches", originalPrice: 29999, refurbishedPrice: 14999, condition: "Good", warranty: "3 months", image: "", specs: ["GPS", "44mm", "BioActive Sensor"], stock: 12 },
  { id: "ref-pixel-watch", name: "Pixel Watch", brand: "Google", category: "watches", originalPrice: 29999, refurbishedPrice: 13999, condition: "Fair", warranty: "3 months", image: "", specs: ["GPS", "41mm", "Fitbit Integration"], stock: 6 },
  { id: "ref-garmin-venu-2", name: "Garmin Venu 2", brand: "Garmin", category: "watches", originalPrice: 37990, refurbishedPrice: 19999, condition: "Good", warranty: "6 months", image: "", specs: ["GPS", "45mm", "AMOLED Display"], stock: 5 },
  { id: "ref-fitbit-sense", name: "Fitbit Sense 2", brand: "Fitbit", category: "watches", originalPrice: 24999, refurbishedPrice: 12999, condition: "Good", warranty: "3 months", image: "", specs: ["GPS", "40mm", "Stress Tracking"], stock: 9 },
];

export const getRefurbishedByCategory = (category: string) => {
  return refurbishedItems.filter(item => item.category === category);
};

export const refurbishedCategories = [
  { id: "phones", name: "Refurbished Phones", icon: "📱", count: refurbishedItems.filter(i => i.category === "phones").length },
  { id: "laptops", name: "Refurbished Laptops", icon: "💻", count: refurbishedItems.filter(i => i.category === "laptops").length },
  { id: "tablets", name: "Refurbished Tablets", icon: "📟", count: refurbishedItems.filter(i => i.category === "tablets").length },
  { id: "watches", name: "Refurbished Watches", icon: "⌚", count: refurbishedItems.filter(i => i.category === "watches").length },
];
