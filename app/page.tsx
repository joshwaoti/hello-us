'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Star, Instagram, Heart } from 'lucide-react';

const INSTAGRAM_IMAGES = [
  { src: '/images/products/muse-dress/post_8_media_1_47c5532e.jpg', alt: 'Muse Dress' },
  { src: '/images/products/muse-dress/post_1_media_1_2848fe29.jpg', alt: 'Muse Dress detail' },
  { src: '/images/products/linen-maxi/post_6_media_1_28c42ed5.jpg', alt: 'Linen Maxi' },
  { src: '/images/products/linen-maxi/post_2_media_1_0f3267fe.jpg', alt: 'Linen Maxi lifestyle' },
  { src: '/images/products/mommy-me-set/post_3_media_1_6dc41adf.jpg', alt: 'Mommy & Me Set' },
  { src: '/images/products/muse-dress/post_5_media_1_ca1a5c4a.jpg', alt: 'Muse Dress worn' },
  { src: '/images/products/linen-maxi/post_4_media_1_e269301c.jpg', alt: 'Linen Maxi worn' },
  { src: '/images/products/mommy-me-set/post_3_media_2_c2b6eed2.jpg', alt: 'Mommy & Me detail' },
];

export default function Home() {
  const containerRef = useRef(null);
  const fabricRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const vinylScale = useTransform(scrollYProgress, [0, 0.3], [1, 5]);
  const vinylOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0.5, 0]);
  const vinylRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const { scrollYProgress: fabricScroll } = useScroll({
    target: fabricRef,
    offset: ['start end', 'end start'],
  });

  const fabricScale = useTransform(fabricScroll, [0, 1], [0.8, 1.1]);
  const fabricRotateX = useTransform(fabricScroll, [0, 0.5], [20, 0]);
  const fabricOpacity = useTransform(fabricScroll, [0, 0.3], [0, 1]);
  const textY = useTransform(fabricScroll, [0.2, 0.5], [50, 0]);
  const textOpacity = useTransform(fabricScroll, [0.2, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-brand-cream overflow-hidden">
      <section className="relative h-[100svh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-brand-charcoal/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{
              scale: vinylScale,
              opacity: vinylOpacity,
              rotate: vinylRotate,
            }}
            className="relative w-48 h-48 md:w-96 md:h-96 rounded-full border-[12px] md:border-[20px] border-white/10 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <div className="absolute inset-2 md:inset-4 rounded-full border border-white/10" />
            <div className="absolute inset-4 md:inset-8 rounded-full border border-white/5" />
            <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-pink/70 rounded-full shadow-inner" />
          </motion.div>
        </div>

        <div className="md:hidden absolute top-[14vh] inset-x-0 z-10 flex flex-col items-center px-4">
          <motion.h1
            className="text-5xl font-serif font-bold text-white text-center leading-[1.05] tracking-tight mb-3"
          >
            {(['Softness', '&', 'Elegance'] as const).map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.2em]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

<motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="md:hidden absolute inset-x-0 z-10 text-center pointer-events-none px-6"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <span className="text-base text-white/95 max-w-xl mx-auto font-serif italic leading-relaxed">
            Celebrating togetherness through beautifully crafted matching sets.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="md:hidden absolute bottom-32 z-10 w-full px-6"
        >
          <Link
            href="/collections"
            className="flex items-center justify-center space-x-3 bg-brand-charcoal text-brand-beige w-full py-4 rounded-full hover:bg-brand-pink hover:text-brand-charcoal transition-all duration-300 text-base font-medium shadow-lg active:scale-95 font-sans"
          >
            <span>Shop the Collection</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="hidden md:flex relative z-10 flex-1 flex-col items-center justify-start pt-32 px-4">
<motion.h1
            className="text-7xl lg:text-[96px] font-serif font-bold text-white text-center leading-[1.05] tracking-tight"
          >
            {(['Softness', '&', 'Elegance'] as const).map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 text-2xl text-white/95 max-w-xl mx-auto text-center font-serif italic leading-relaxed"
          >
            Celebrating togetherness through beautifully crafted matching sets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <Link
              href="/collections"
              className="inline-flex items-center space-x-3 bg-brand-charcoal text-brand-beige px-10 py-4 rounded-full hover:bg-brand-pink hover:text-brand-charcoal transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-sans"
            >
              <span>Shop the Collection</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-10"
        >
          <span className="font-accent text-[9px] md:text-xs font-light md:font-normal uppercase tracking-[0.2em] text-white/25 md:text-white/50 block">
            Mommy &amp; Me Fashion
          </span>
          <span className="font-accent text-[9px] md:text-xs font-light md:font-normal uppercase tracking-[0.2em] text-white/25 md:text-white/50 block mt-1">
            Timeless Women&apos;s Sets
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-10 text-right"
        >
          <span className="font-accent text-[9px] md:text-xs font-light md:font-normal uppercase tracking-[0.2em] text-white/25 md:text-white/50 block">
            Made to Order
          </span>
          <span className="font-accent text-[9px] md:text-xs font-light md:font-normal uppercase tracking-[0.2em] text-brand-pink/30 md:text-brand-pink/60 block mt-1">
            48 Hours
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 z-10"
        >
          <span className="text-[9px] md:text-xs uppercase tracking-[0.25em] mb-1 font-accent">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
            <ChevronDown className="w-3 h-3 md:w-5 md:h-5" />
          </motion.div>
        </motion.div>
      </section>

      <section ref={fabricRef} className="relative min-h-[100vh] flex items-center justify-center perspective-[1000px] bg-brand-cream">
        <motion.div
          style={{
            scale: fabricScale,
            rotateX: fabricRotateX,
            opacity: fabricOpacity,
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/products/muse-dress/post_1_media_5_ea73c4bc.jpg"
            alt="Raw Linen Fabric"
            fill
            className="object-cover opacity-60 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-transparent to-brand-cream" />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-4xl md:text-[48px] lg:text-[64px] font-serif font-bold text-brand-charcoal mb-6"
          >
            {("Timeless Women's Sets" as const).split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-brand-charcoal/80 mb-12 font-serif italic leading-relaxed"
          >
            Crafted from raw, earthy materials like heavy cotton and 100% linen. Designed for longevity, elegance, and
            comfort.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Puff Sleeve', 'Tie Strap', 'Gathered Skirt'].map((tag, i) => (
              <span
                key={i}
                className="bg-brand-pink text-brand-charcoal px-4 py-1.5 rounded-full text-xs font-accent uppercase tracking-wider shadow-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <CategoryCard
            title="Mommy & Me"
            image="/images/products/mommy-me-set/post_3_media_1_6dc41adf.jpg"
            link="/collections?category=mommy-and-me"
            delay={0}
          />
          <CategoryCard
            title="Timeless Women's Sets"
            image="/images/products/muse-dress/post_8_media_3_067838f5.jpg"
            link="/collections?category=womens"
            delay={0.2}
          />
        </div>
      </section>

      <section className="bg-brand-beige py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-[60%] relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/products/muse-dress/post_7_media_4_73db3d4c.jpg"
                alt="Mother and daughter in matching linen sets"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-charcoal/10 mix-blend-overlay rounded-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-[40%]"
            >
              <span className="font-accent text-xs uppercase tracking-[0.2em] text-brand-pink mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
                Born from a Mother&apos;s Love
              </h2>
              <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-8 font-sans font-light">
                Shop Hellous began with a simple desire: to create beautiful, matching moments that don&apos;t
                compromise on quality. Every piece is made-to-order in our Nairobi studio, ensuring perfect fits and
                zero waste.
              </p>
              <Link
                href="/about"
                className="inline-block border-b-2 border-brand-charcoal pb-1 text-brand-charcoal font-medium hover:text-brand-pink hover:border-brand-pink transition-colors font-sans"
              >
                Read Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-[48px] text-center text-brand-charcoal mb-16"
          >
            What Our Mothers Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah K.',
                quote:
                  'The linen set arrived in exactly 48 hours and the quality is stunning. My daughter and I got so many compliments.',
                rating: 5,
              },
              {
                name: 'Grace M.',
                quote:
                  'The matching sets are perfect for our family photos. The fabric quality is incredible and the fit was spot on.',
                rating: 5,
              },
              {
                name: 'Amina W.',
                quote:
                  "I love that each piece is made to order. The tie-up straps and puff sleeves are exactly what I was looking for.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(248,200,212,0.3)] overflow-hidden"
              >
                <div className="h-1 bg-brand-pink w-full" />
                <div className="p-8">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-serif italic text-lg text-brand-charcoal mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-brand-charcoal font-sans">{testimonial.name}</span>
                    <span className="text-xs font-accent uppercase tracking-wider text-brand-pink bg-brand-pink/10 px-2 py-1 rounded">
                      Verified Purchase
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 overflow-hidden">
        <div className="text-center mb-10 px-4">
          <a
            href="https://www.instagram.com/shophellous"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 group"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Instagram className="w-8 h-8 text-brand-charcoal group-hover:text-brand-pink transition-colors" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-[48px] text-brand-charcoal group-hover:text-brand-pink transition-colors"
            >
              @shophellous
            </motion.h2>
          </a>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-8 px-4 snap-x scrollbar-hide md:flex-wrap md:overflow-visible md:pb-0 md:px-0 md:justify-center">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-xl overflow-hidden snap-center group cursor-pointer"
            >
              <a href="https://www.instagram.com/shophellous" target="_blank" rel="noreferrer" className="absolute inset-0 z-10">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </a>
              <div className="absolute inset-0 bg-brand-pink/0 group-hover:bg-brand-pink/20 group-active:bg-brand-pink/30 transition-colors duration-300 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" fill="currentColor" />
              </div>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-xl overflow-hidden snap-center bg-brand-charcoal flex flex-col items-center justify-center text-white p-6 text-center group cursor-pointer"
          >
            <a href="https://www.instagram.com/shophellous" target="_blank" rel="noreferrer" className="absolute inset-0 z-10" />
            <Instagram className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
            <span className="font-medium mb-2 font-sans">@shophellous</span>
            <span className="text-sm bg-brand-pink px-4 py-2 rounded-full font-accent">Follow</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  title,
  image,
  link,
  delay,
}: {
  title: string;
  image: string;
  link: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.02 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer shadow-xl"
    >
      <Link href={link}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-500" />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-10 text-center">
          <h3 className="text-3xl md:text-[40px] font-serif font-bold text-white mb-6">{title}</h3>
          <span className="inline-flex items-center space-x-2 text-brand-charcoal bg-white px-6 py-3 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-8 group-hover:translate-y-0 font-sans">
            <span>Shop Sets</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
