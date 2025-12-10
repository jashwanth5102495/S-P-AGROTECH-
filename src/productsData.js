export const GAZETTE = 'SO:3922(E), Dated:12-09-2024';

export const PRODUCTS = [
  { brand: 'SP ROOT POWER', specification: '', dosage: [], crops: [], gazette: GAZETTE },
  { brand: 'SP MAGIC', specification: 'Humic substances 6% (Liquid)', crops: ['Soybean'], dosage: ['Two foliar applications at 1250 ml/ha'], gazette: GAZETTE },
  { brand: 'SP SOIL STRUCTURE', specification: 'Humic acid 19.6 % (Liquid)', crops: ['Tomato'], dosage: ['Two foliar applications at 7.5 litre/ha'], gazette: GAZETTE },
  { brand: 'SP BIO BOOSTER', specification: 'Seaweed Extract: Kappaphycus alvarezii 24% (Liquid)', crops: ['Cucumber'], dosage: ['One foliar application at 2 ml/l'], gazette: GAZETTE },
  { brand: 'SP BIO PARI', specification: 'Ascophyllum nodosum 7% (Liquid)', crops: ['Tomato'], dosage: ['One soil application as drenching', 'Three foliar applications at 2.5 l/ha'], gazette: GAZETTE },
  { brand: 'SP SUPERGOLD', specification: 'Seaweed (Sargassum wightii) extract 10 % (Liquid)', crops: ['Chilli'], dosage: ['Four foliar application at 2000 ml/ha'], gazette: GAZETTE },
  { brand: 'SP SUPER UPTAKE', specification: 'Seaweed (Ascophyllum nodosum) extract 99.52 % (Liquid)', crops: ['Grapes', 'Cotton'], dosage: ['Grapes: Three foliar applications at 300 ml/ha', 'Cotton: Three foliar applications at 300 ml/ha'], gazette: GAZETTE },
  { brand: 'SP ULTRACANE SPECIAL', specification: 'Botanical Extract: Adhatoda vasica extract 2% (Liquid)', crops: ['Chilli', 'Tomato'], dosage: ['Chilli: Three foliar applications at 1000 ml/ha', 'Tomato: Three foliar applications at 1250 ml/ha'], gazette: GAZETTE },
  { brand: 'SP PLANT FLOWERING', specification: 'Cytokinin (Zea mays kernel) 0.2% (Liquid)', crops: ['Capsicum'], dosage: ['Three foliar applications at 750 ml/ha'], gazette: GAZETTE },
  { brand: 'SP TARZAN', specification: 'Mixed Formulation: Mixture of seaweed extract and algal extract (Liquid)', crops: ['Brinjal'], dosage: ['Two foliar applications at 500 mL/ha'], gazette: GAZETTE },
  { brand: 'SP BOSS', specification: 'Mixture of Humic acid and Seaweed extract (Liquid)', crops: ['Tomato'], dosage: ['Three foliar applications at 1.25 l/ha'], gazette: GAZETTE },
  { brand: 'SP SUKRUTH', specification: 'Mixture of Botanical extract and Seaweed extract (Liquid)', crops: ['Tomato'], dosage: ['Three foliar applications at 3.75 l/ha'], gazette: GAZETTE },
  { brand: 'SP RUDRA', specification: 'Mixture of Seaweed extract, Protein Hydrolysate and Humic acid (Liquid)', crops: ['Onion', 'Paddy', 'Potato', 'Chilli'], dosage: ['Onion: Three foliar sprays at 500 ml/ha', 'Paddy: Three foliar sprays at 500 ml/ha', 'Potato: Three foliar sprays at 500 ml/ha', 'Chilli: Three foliar sprays at 500 ml/ha'], gazette: GAZETTE },
  { brand: 'SP BOOMI BOOSTER', specification: 'Sargassum tenerrimum 1.2% (Granules)', crops: ['Tomato', 'Rice'], dosage: ['Rice: Two soil applications at 15 kg/ha', 'Tomato: Two soil applications at 17.5 kg/ha'], gazette: GAZETTE },
  { brand: 'SP TIGER', specification: 'Humate 7.15 % (Liquid)', crops: ['Rice', 'Chilli'], dosage: ['Rice: Three foliar applications at 1250 ml/ha', 'Chilli: Three foliar applications at 1500 ml/ha'], gazette: GAZETTE },
  { brand: 'SP GROWTH BOOSTER', specification: 'Bacterial biomass hydrolysate (Amino acids 2%) (Liquid)', crops: ['Grape', 'Chilli', 'Soyabean', 'Cotton'], dosage: ['Grape: Four foliar sprays at 1.25 l/ha to 2.0 l/ha depending on canopy size', 'Chilli: Three foliar applications at 3.75 l/ha', 'Soyabean: Three foliar applications at 2.5 l/ha', 'Cotton: Three foliar applications at 2.5 l/ha'], gazette: GAZETTE },
  { brand: 'SP SIZER', specification: 'Protein Hydrolysate 18% (Animal source) (Liquid)', crops: ['Paddy', 'Chilli', 'Tomato', 'Grape', 'Cotton', 'Blackgram'], dosage: ['Paddy: Two foliar applications at 1200 ml/ha', 'Chilli: Four foliar applications at 1000 ml/ha', 'Tomato: Three foliar applications at 1000 ml/ha', 'Grape: Two foliar applications at 1000 ml/ha', 'Cotton: One foliar application at 625 ml/ha', 'Black gram: Three foliar applications at 750 ml/ha'], gazette: GAZETTE },
  { brand: 'SP POWERGOLD', specification: 'L-Pyroglutamic acid (Pidolic acid) 10 % (Liquid)', crops: ['Grape'], dosage: ['Four foliar applications at 1000 ml/ha'], gazette: GAZETTE },
  { brand: 'SP NANOPOWER', specification: 'Homobrassinolide- 0.04% (Liquid)', crops: ['Tea', 'Grape', 'Groundnut', 'Soybean', 'Paddy', 'Cotton', 'Tomato'], dosage: ['Tea: Three foliar applications at 250 ml/ha', 'Grape: Two foliar applications at 1000 ml/ha', 'Groundnut: Two foliar applications at 250 ml/ha', 'Soybean: Two foliar applications at 250 ml/ha', 'Paddy: Two foliar applications at 250 ml/ha', 'Cotton: Two foliar applications at 250 ml/ha', 'Tomato: Two foliar applications at 250 ml/ha'], gazette: GAZETTE },
  { brand: 'SP BOOMI SHAKTHI', specification: 'Seaweed (Sargassum wightii) extract 5 % (Granuler)', crops: ['Chilli'], dosage: ['Four soil applications at 20 kg/ha'], gazette: GAZETTE },
];

export const SLUG_TO_BRAND = {
  'SP ROOT POWER': 'SP ROOT POWER',
  'SP%20ROOT%20POWER': 'SP ROOT POWER',
  'HUMICID': 'SP ROOT POWER',
};

export function findProductBySlug(slug) {
  const decoded = decodeURIComponent(slug);
  const normalized = decoded.replace(/\+/g, ' ');
  const brand = SLUG_TO_BRAND[normalized] || SLUG_TO_BRAND[slug] || normalized;
  const found = PRODUCTS.find(p => p.brand.toUpperCase() === brand.toUpperCase());
  return found || PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => p.brand === brand) || PRODUCTS[0];
}