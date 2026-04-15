export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  fit: 'True to size' | 'Runs small' | 'Runs large';
};

export const reviews: Review[] = [
  {
    id: 'r1',
    productId: 'muse-dress',
    author: 'Amara K.',
    rating: 5,
    date: 'April 10, 2026',
    title: 'My new favorite dress!',
    comment:
      "I have been wearing my Muse Dress almost every weekend since it arrived. The fabric feels luxurious and the length options are perfect. I got the Maxi and it's absolutely stunning. The customizable color was exactly what I wanted — a dusty rose that photographs beautifully.",
    verified: true,
    fit: 'True to size',
  },
  {
    id: 'r2',
    productId: 'muse-dress',
    author: 'Wanjiku M.',
    rating: 5,
    date: 'April 8, 2026',
    title: 'Exceeded expectations',
    comment:
      'The craftsmanship is remarkable. The textures and fabric details are even better than what I saw in the Instagram photos. I ordered for my daughter and me — we got so many compliments at a family wedding. The mini length on my daughter was adorable.',
    verified: true,
    fit: 'True to size',
  },
  {
    id: 'r3',
    productId: 'muse-dress',
    author: 'Zuri T.',
    rating: 4,
    date: 'April 5, 2026',
    title: 'Beautiful dress, slight delay',
    comment:
      "The dress itself is gorgeous — exactly as described. The customization process via WhatsApp was smooth and the team was very helpful. It took 5 days instead of 48 hours, but the result was worth the wait. Would have given 5 stars if it arrived within the promised window.",
    verified: true,
    fit: 'True to size',
  },
  {
    id: 'r4',
    productId: 'muse-dress',
    author: 'Lena O.',
    rating: 5,
    date: 'April 3, 2026',
    title: 'Effortlessly elegant',
    comment:
      "Exactly the kind of vibes the Instagram posts promised. I styled mine with simple gold jewelry and it elevated the whole look. The fact that you can customize any color makes this feel truly personal. Already planning my next one in a different color.",
    verified: true,
    fit: 'True to size',
  },
  {
    id: 'r5',
    productId: 'muse-dress',
    author: 'Fatima H.',
    rating: 5,
    date: 'March 28, 2026',
    title: 'Perfect for every occasion',
    comment:
      "Bought the Muse Dress for a bridal shower and it was perfect. Comfortable enough for a full afternoon event yet elegant enough to feel special. The open back detail mentioned in the posts is such a beautiful touch. Highly recommend the Maxi length.",
    verified: true,
    fit: 'True to size',
  },
  {
    id: 'r6',
    productId: 'linen-maxi',
    author: 'Grace N.',
    rating: 5,
    date: 'April 9, 2026',
    title: 'Best linen dress I have owned',
    comment:
      "I was skeptical about the 100% linen claim but the moment I touched it, I knew this was different. Heavy, quality linen that drapes beautifully. I wore mine to a coastal brunch and felt both comfortable and beautifully put together. Worth every shilling.",
    verified: true,
    fit: 'True to size',
  },
  {
    id: 'r7',
    productId: 'linen-maxi',
    author: 'Nadia S.',
    rating: 5,
    date: 'April 7, 2026',
    title: 'Picnic perfection',
    comment:
      "Took this to a weekend picnic and it was perfect for the vibe. The linen fabric is breathable in the heat but still looks polished. The customizable color option meant I could get exactly the sage green I had in mind. Already planning my next color.",
    verified: true,
    fit: 'True to size',
  },
  {
    id: 'r8',
    productId: 'linen-maxi',
    author: 'Halima A.',
    rating: 5,
    date: 'April 4, 2026',
    title: 'Wedding guest ready',
    comment:
      "Wore the Linen Maxi to two different weddings in the same month — no one could tell! The quality is exceptional. I appreciate that it is made to order so the fit was exactly what I wanted. The 48-hour production is not an exaggeration — mine arrived in two days exactly.",
    verified: true,
    fit: 'True to size',
  },
  {
    id: 'r9',
    productId: 'linen-maxi',
    author: 'Ayra B.',
    rating: 4,
    date: 'March 30, 2026',
    title: 'Stunning but needs ironing',
    comment:
      "The dress itself is absolutely gorgeous and the linen quality is evident. My only note is that linen wrinkles easily — which is expected but something to plan for if you are going somewhere formal. A quick iron solved it. The color I got was custom ivory and it was perfect.",
    verified: true,
    fit: 'Runs small',
  },
  {
    id: 'r10',
    productId: 'mommy-me-set',
    author: 'Shirley M.',
    rating: 5,
    date: 'April 11, 2026',
    title: 'The sweetest mother-daughter moment',
    comment:
      "Ordered the Mommy & Me Set in matching dusty pink for Mother\'s Day and it arrived just in time. My daughter and I wore them to brunch and the amount of love we got was overwhelming. The quality is consistent on both pieces — the mini fits my daughter perfectly and the Maxi fits me beautifully.",
    verified: true,
    fit: 'True to size',
  },
  {
    id: 'r11',
    productId: 'mommy-me-set',
    author: 'Diana K.',
    rating: 5,
    date: 'April 6, 2026',
    title: 'Perfect for family photos',
    comment:
      "We booked a family photoshoot and I wanted us to match without being too kitsch. This set was exactly what we needed. Elegant enough for the adults, cute enough for the kids. The customizable colors meant we could pick something that suited everyone\'s skin tone.",
    verified: true,
    fit: 'True to size',
  },
  {
    id: 'r12',
    productId: 'mommy-me-set',
    author: 'Rachael W.',
    rating: 5,
    date: 'April 2, 2026',
    title: 'Daughter will not take hers off!',
    comment:
      "My daughter is obsessed with her Mini Muse Dress. She calls it her special dress and wants to wear it everywhere. The fabric is gentle on her sensitive skin and the fit allows her to play freely while still looking adorable. We ordered different colors for different occasions.",
    verified: true,
    fit: 'True to size',
  },
];

export function getReviewsByProductId(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function getAverageRating(productId: string): number {
  const productReviews = getReviewsByProductId(productId);
  if (productReviews.length === 0) return 0;
  const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
  return sum / productReviews.length;
}

export function getRatingBreakdown(productId: string): Record<number, number> {
  const productReviews = getReviewsByProductId(productId);
  const breakdown: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  productReviews.forEach((r) => {
    breakdown[r.rating] = (breakdown[r.rating] || 0) + 1;
  });
  return breakdown;
}
