'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products, FILTERS } from '@/lib/products';
import type { Product, LengthVariant } from '@/lib/types';

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const displayProducts: (typeof products[0])[] = [
    products[0],
    { ...products[0], id: 'muse-dress-b', images: [products[0].images[2], products[0].images[3]] },
    products[1],
    { ...products[1], id: 'linen-maxi-b', images: [products[1].images[2], products[1].images[4]] },
    products[2],
    { ...products[2], id: 'mommy-me-set-b', images: [products[2].images[2], products[2].images[4]] },
  ];

  const filteredProducts = displayProducts.filter(
    (p) => activeFilter === 'All' || p.category === activeFilter
  );

  return (
    <div className="bg-brand-cream min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-brand-charcoal/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 pt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-2">Our Collections</h1>
          <p className="text-white/80 font-sans text-base sm:text-lg">Made to Order. Ready in 48 Hours.</p>
        </div>
      </section>

      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex overflow-x-auto gap-3 pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap border ${
                  activeFilter === filter
                    ? 'border-brand-charcoal text-white'
                    : 'border-brand-pink bg-white text-brand-charcoal hover:bg-brand-pink/5'
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-brand-charcoal rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-sm font-medium text-brand-charcoal cursor-pointer">
            <span>Sort by: Featured</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedLength, setSelectedLength] = useState<LengthVariant | null>(
    product.prices.Maxi && product.prices.Mini ? 'Maxi' : null
  );

  const prices = Object.entries(product.prices);
  const minPrice = Math.min(...prices.map(([, p]) => p));
  const productSlug = product.id.endsWith('-b') ? product.id.slice(0, -2) : product.id;

  const handleQuickAdd = () => {
    const length = selectedLength || (product.prices.Maxi ? 'Maxi' : 'Mini');
    const price = product.prices[length as LengthVariant] ?? minPrice;
    addToCart({
      id: product.id,
      name: product.name,
      price,
      quantity: 1,
      image: product.images[0].src,
      size: 'M',
      length,
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col"
    >
      <Link
        href={`/product/${productSlug}`}
        className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-300"
      >
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {product.images[1] && (
          <Image
            src={product.images[1].src}
            alt={product.images[1].alt}
            fill
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <motion.div whileTap={{ scale: 0.8 }}>
            <Heart
              className={`w-5 h-5 ${isWishlisted ? 'fill-brand-pink text-brand-pink' : 'text-brand-charcoal'}`}
            />
          </motion.div>
        </button>

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleQuickAdd();
            }}
            className="w-full bg-brand-charcoal text-brand-pink py-4 font-sans text-[13px] uppercase tracking-wider font-bold hover:bg-black transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="flex flex-col items-center text-center">
        <span className="font-accent text-[11px] uppercase tracking-widest text-brand-pink mb-1">
          {product.tag}
        </span>
        <h3 className="font-sans font-medium text-[15px] text-brand-charcoal mb-1">{product.name}</h3>
        <p className="font-sans font-semibold text-[16px] text-brand-charcoal">
          {prices.length === 1
            ? `KSh ${prices[0][1].toLocaleString()}`
            : `From KSh ${minPrice.toLocaleString()}`}
        </p>
        {prices.length > 1 && (
          <div className="flex gap-2 mt-1">
            {prices.map(([length, price]) => (
              <button
                key={length}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedLength(length as LengthVariant);
                }}
                className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${
                  selectedLength === length
                    ? 'border-brand-charcoal bg-brand-charcoal text-white'
                    : 'border-gray-300 text-gray-500 hover:border-brand-pink'
                }`}
              >
                {length} KSh {price.toLocaleString()}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
