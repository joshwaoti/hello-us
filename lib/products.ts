import { Product } from './types';

export const products: Product[] = [
  {
    id: 'muse-dress',
    slug: 'muse-dress',
    name: 'The Muse Dress',
    tag: 'BEST SELLER',
    description:
      'A timeless piece that gives elegance, confidence and is effortlessly beautiful. Available in both short and long versions, and the best part — it can be customized in any color you love to match your personal style. It\'s time to meet your new favorite dress.',
    category: 'New Arrivals',
    prices: { Maxi: 8999, Mini: 7499 },
    colors: ['Customizable — any color of your choice'],
    sizes: ['8', '10', '12', '14', '16', '18', '20+'],
    images: [
      { src: '/images/products/muse-dress/post_8_media_1_47c5532e.jpg', alt: 'Muse Dress — front view' },
      { src: '/images/products/muse-dress/post_8_media_2_a7dedc95.jpg', alt: 'Muse Dress — angle view' },
      { src: '/images/products/muse-dress/post_1_media_1_2848fe29.jpg', alt: 'Muse Dress — studio shot' },
      { src: '/images/products/muse-dress/post_5_media_1_ca1a5c4a.jpg', alt: 'Muse Dress — lifestyle' },
      { src: '/images/products/muse-dress/post_7_media_2_b3ef2ab2.jpg', alt: 'Muse Dress — detail' },
      { src: '/images/products/muse-dress/post_8_media_3_067838f5.jpg', alt: 'Muse Dress — back view' },
      { src: '/images/products/muse-dress/post_1_media_3_909e90d3.jpg', alt: 'Muse Dress — fabric detail' },
      { src: '/images/products/muse-dress/post_7_media_4_73db3d4c.jpg', alt: 'Muse Dress — worn shot' },
    ],
    details: [
      'Available in Maxi (full length) and Mini (above knee) lengths',
      'Customizable in any color of your choice',
      'Perfect fabric and textures throughout',
      'Designed to flow with you and make every moment feel special',
    ],
    materials: 'Premium fabric — perfect for all-day comfort and elegant occasions',
    sizingNote:
      'Our Maxi pieces are designed to be generous and flowing. If you prefer a more tailored fit, we recommend selecting your size carefully or providing custom measurements.',
    relatedProductId: 'mommy-me-set',
  },
  {
    id: 'linen-maxi',
    slug: 'linen-maxi',
    name: 'Linen Maxi Dress',
    tag: 'LINEN COLLECTION',
    description:
      'Effortless elegance in linen. The Linen Maxi is a piece designed for days you want to feel both comfortable and beautifully put together. A hundred percent cotton linen fabric — perfect for a picnic vibe, brunch, coastal vibes, weddings, and more. Available in your preferred color.',
    category: 'Linen Collection',
    prices: { Maxi: 11999 },
    colors: ['Customizable — any color of your choice'],
    sizes: ['8', '10', '12', '14', '16', '18', '20+'],
    images: [
      { src: '/images/products/linen-maxi/post_6_media_1_28c42ed5.jpg', alt: 'Linen Maxi — front view' },
      { src: '/images/products/linen-maxi/post_6_media_3_d8d44992.jpg', alt: 'Linen Maxi — studio shot' },
      { src: '/images/products/linen-maxi/post_2_media_1_0f3267fe.jpg', alt: 'Linen Maxi — lifestyle' },
      { src: '/images/products/linen-maxi/post_4_media_1_e269301c.jpg', alt: 'Linen Maxi — worn shot' },
      { src: '/images/products/linen-maxi/post_6_media_5_9c0d7273.jpg', alt: 'Linen Maxi — detail' },
      { src: '/images/products/linen-maxi/post_2_media_3_a0f5320b.jpg', alt: 'Linen Maxi — fabric close-up' },
      { src: '/images/products/linen-maxi/post_4_media_4_e9ed1021.jpg', alt: 'Linen Maxi — side view' },
      { src: '/images/products/linen-maxi/post_6_media_9_1e52331d.jpg', alt: 'Linen Maxi — styling shot' },
    ],
    details: [
      '100% cotton linen fabric',
      'Maxi length — designed to flow beautifully',
      'Available in all sizes and your preferred color',
      'Perfect for picnics, brunch, coastal vibes, and weddings',
    ],
    materials: '100% premium cotton linen — breathable, durable, and beautifully textured',
    sizingNote:
      'Our Maxi pieces are designed to be generous and flowing. If you prefer a more tailored fit, we recommend providing custom measurements.',
    relatedProductId: 'muse-dress',
  },
  {
    id: 'mommy-me-set',
    slug: 'mommy-me-set',
    name: 'Mommy & Me Set',
    tag: 'MOMMY & ME',
    description:
      'Mother\'s Day special matching outfits for you and your mini me. Colors are also customizable so you can create the perfect coordinated look for your family moments. Get any of our outfits for you and your mini me — because some moments are meant to be matching.',
    category: 'Mommy & Me',
    prices: { Maxi: 8999, Mini: 7499 },
    colors: ['Customizable — coordinate with your mini me'],
    sizes: ['8', '10', '12', '14', '16', '18', '20+'],
    images: [
      { src: '/images/products/mommy-me-set/post_3_media_1_6dc41adf.jpg', alt: 'Mommy & Me Set — mother and daughter' },
      { src: '/images/products/mommy-me-set/post_3_media_2_c2b6eed2.jpg', alt: 'Mommy & Me Set — matching outfit detail' },
      { src: '/images/products/mommy-me-set/post_3_media_3_745ca7e6.jpg', alt: 'Mommy & Me Set — fabric' },
      { src: '/images/products/mommy-me-set/post_3_media_4_d3b87227.jpg', alt: 'Mommy & Me Set — lifestyle' },
      { src: '/images/products/mommy-me-set/post_3_media_5_51e5a915.jpg', alt: 'Mommy & Me Set — worn together' },
      { src: '/images/products/mommy-me-set/post_3_media_6_b72e89f1.jpg', alt: 'Mommy & Me Set — detail shot' },
      { src: '/images/products/mommy-me-set/post_3_media_7_0f4dfbd4.jpg', alt: 'Mommy & Me Set — mini me view' },
      { src: '/images/products/mommy-me-set/post_3_media_8_430b30eb.jpg', alt: 'Mommy & Me Set — pair shot' },
    ],
    details: [
      'Matching outfit set for mother and child',
      'Colors customizable — create your perfect coordinated look',
      'Available in both Maxi (mother) and Mini (daughter) lengths',
      'Perfect for Mother\'s Day, family photos, and special occasions',
    ],
    materials: 'Premium fabric — elegant and comfortable for both mother and child',
    sizingNote:
      'Mini pieces are true to age size. Maxi pieces follow the same generous, flowing silhouette as our adult collection.',
    relatedProductId: 'muse-dress',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products;
  return products.filter((p) => p.category === category);
}

export const FILTERS = ['All', 'New Arrivals', 'Linen Collection', 'Mommy & Me'] as const;
export type FilterType = (typeof FILTERS)[number];
