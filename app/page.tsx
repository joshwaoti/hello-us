'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Star, Instagram, Heart } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const fabricRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Vinyl expansion effect
  const vinylScale = useTransform(scrollYProgress, [0, 0.3], [1, 5]);
  const vinylOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0.5, 0]);
  const vinylRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Fabric Parallax effect (tied to its own section)
  const { scrollYProgress: fabricScroll } = useScroll({
    target: fabricRef,
    offset: ["start end", "end start"]
  });
  
  const fabricScale = useTransform(fabricScroll, [0, 1], [0.8, 1.1]);
  const fabricRotateX = useTransform(fabricScroll, [0, 0.5], [20, 0]);
  const fabricOpacity = useTransform(fabricScroll, [0, 0.3], [0, 1]);
  const textY = useTransform(fabricScroll, [0.2, 0.5], [50, 0]);
  const textOpacity = useTransform(fabricScroll, [0.2, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-brand-cream overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,var(--color-brand-pink)_0%,var(--color-brand-beige)_100%)]">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            style={{ 
              scale: vinylScale, 
              opacity: vinylOpacity,
              rotate: vinylRotate
            }}
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-[20px] border-brand-charcoal/10 flex items-center justify-center"
          >
            {/* Vinyl Record Mockup */}
            <div className="absolute inset-0 rounded-full border border-brand-charcoal/20" />
            <div className="absolute inset-4 rounded-full border border-brand-charcoal/10" />
            <div className="absolute inset-8 rounded-full border border-brand-charcoal/5" />
            <div className="w-24 h-24 bg-brand-pink rounded-full flex items-center justify-center text-white font-serif text-sm text-center p-2 shadow-inner">
              Hello Us
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 text-center px-4 mt-[-10vh]">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-serif font-bold text-brand-charcoal mb-6"
          >
            Hello Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-brand-charcoal/80 max-w-2xl mx-auto mb-10 font-light"
          >
            Mommy &amp; Me Fashion | Timeless Women&apos;s Sets — Made to Order in 48 Hours
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link 
              href="/collections" 
              className="inline-flex items-center space-x-2 bg-brand-charcoal text-brand-beige px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform text-lg font-medium shadow-lg"
            >
              <span>Shop the Collection</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-brand-charcoal/60"
        >
          <span className="text-sm uppercase tracking-widest mb-2 font-accent">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Fabric Parallax Section */}
      <section ref={fabricRef} className="relative min-h-[100vh] flex items-center justify-center perspective-[1000px] bg-brand-cream">
        <motion.div 
          style={{ 
            scale: fabricScale, 
            rotateX: fabricRotateX,
            opacity: fabricOpacity
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="https://picsum.photos/seed/linen/1920/1080" 
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
          <h2 className="text-4xl md:text-[48px] font-serif font-bold text-brand-charcoal mb-6">
            Crafted from 100% Linen
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 font-serif italic">
            Made to Order in 48 Hours
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Puff Sleeve', 'Tie Strap', 'Gathered Skirt'].map((tag, i) => (
              <span key={i} className="bg-brand-pink text-brand-charcoal px-4 py-1.5 rounded-full text-xs font-accent uppercase tracking-wider shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Category Teasers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <CategoryCard 
            title="Mommy & Me" 
            image="https://picsum.photos/seed/mommy/800/1000" 
            link="/collections?category=mommy-and-me"
            delay={0}
          />
          <CategoryCard 
            title="Timeless Women's Sets" 
            image="https://picsum.photos/seed/elegant/800/1000" 
            link="/collections?category=womens"
            delay={0.2}
          />
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="bg-brand-beige py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-[60%] relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://picsum.photos/seed/story/1000/800" 
                alt="Mother and daughter in matching linen sets" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-charcoal/10 mix-blend-overlay" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-[40%]"
            >
              <span className="font-accent text-xs uppercase tracking-widest text-brand-pink mb-4 block">Our Story</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
                Born from a Mother&apos;s Love
              </h2>
              <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-8">
                Shop Hellous began with a simple desire: to create beautiful, matching moments that don&apos;t compromise on quality. Every piece is made-to-order in our Nairobi studio, ensuring perfect fits and zero waste.
              </p>
              <Link 
                href="/about" 
                className="inline-block border-b-2 border-brand-charcoal pb-1 text-brand-charcoal font-medium hover:text-brand-pink hover:border-brand-pink transition-colors"
              >
                Read Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center text-brand-charcoal mb-16">What Our Mothers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(248,200,212,0.3)] overflow-hidden">
                <div className="h-1 bg-brand-pink w-full" />
                <div className="p-8">
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="font-serif italic text-lg text-brand-charcoal mb-6">
                    &quot;The linen set arrived in exactly 48 hours and the quality is stunning. My daughter and I got so many compliments.&quot;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-brand-charcoal">Sarah K.</span>
                    <span className="text-xs font-accent uppercase text-brand-pink bg-brand-pink/10 px-2 py-1 rounded">Verified Purchase</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Strip */}
      <section className="py-16 overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-brand-charcoal flex items-center justify-center space-x-3">
            <Instagram className="w-8 h-8" />
            <span>@shophellous on Instagram</span>
          </h2>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-8 px-4 snap-x scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="relative w-40 h-40 md:w-60 md:h-60 flex-shrink-0 rounded-xl overflow-hidden snap-center group cursor-pointer">
              <Image src={`https://picsum.photos/seed/insta${i}/400/400`} alt="Instagram post" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-brand-pink/0 group-hover:bg-brand-pink/20 transition-colors duration-300 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" />
              </div>
            </div>
          ))}
          <div className="relative w-40 h-40 md:w-60 md:h-60 flex-shrink-0 rounded-xl overflow-hidden snap-center bg-brand-charcoal flex flex-col items-center justify-center text-white p-6 text-center group cursor-pointer">
            <Instagram className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
            <span className="font-medium mb-2">@shophellous</span>
            <span className="text-sm bg-brand-pink px-4 py-2 rounded-full mt-2">Follow</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ title, image, link, delay }: { title: string, image: string, link: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
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
          <h3 className="text-3xl md:text-[40px] font-serif text-white mb-6">{title}</h3>
          <span className="inline-flex items-center space-x-2 text-brand-charcoal bg-white px-6 py-3 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-8 group-hover:translate-y-0">
            <span>Shop Sets</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
