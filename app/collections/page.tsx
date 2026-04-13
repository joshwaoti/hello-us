'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const FILTERS = ['All', 'Mommy & Me', 'Maxi Sets', 'Mini Sets', 'Linen Collection', 'New Arrivals'];

const PRODUCTS = [
  { id: '1', name: 'The Coastal Linen Set', price: 8999, category: 'Mommy & Me', tag: 'LINEN COLLECTION', image1: 'https://picsum.photos/seed/dress1a/600/800', image2: 'https://picsum.photos/seed/dress1b/600/800' },
  { id: '2', name: 'Vintage Puff Sleeve Dress', price: 12000, category: 'Maxi Sets', tag: 'NEW ARRIVAL', image1: 'https://picsum.photos/seed/dress2a/600/800', image2: 'https://picsum.photos/seed/dress2b/600/800' },
  { id: '3', name: 'Earthy Cotton Midi', price: 8999, category: 'New Arrivals', tag: 'BEST SELLER', image1: 'https://picsum.photos/seed/dress3a/600/800', image2: 'https://picsum.photos/seed/dress3b/600/800' },
  { id: '4', name: 'Matching Mini Dress', price: 7499, category: 'Mini Sets', tag: 'MINI COLLECTION', image1: 'https://picsum.photos/seed/dress4a/600/800', image2: 'https://picsum.photos/seed/dress4b/600/800' },
  { id: '5', name: 'Classic Tie-Strap Gown', price: 12000, category: 'Maxi Sets', tag: 'LINEN COLLECTION', image1: 'https://picsum.photos/seed/dress5a/600/800', image2: 'https://picsum.photos/seed/dress5b/600/800' },
  { id: '6', name: 'Linen Wrap Skirt Set', price: 8999, category: 'Linen Collection', tag: 'NEW ARRIVAL', image1: 'https://picsum.photos/seed/dress6a/600/800', image2: 'https://picsum.photos/seed/dress6b/600/800' },
];

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = PRODUCTS.filter(p => activeFilter === 'All' || p.category === activeFilter);

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-beige w-full py-16 text-center">
        <h1 className="text-[56px] font-serif font-bold text-brand-charcoal mb-2">Our Collections</h1>
        <p className="text-brand-charcoal font-sans">Made to Order. Ready in 48 Hours.</p>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex overflow-x-auto gap-3 pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {FILTERS.map(filter => (
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

      {/* Masonry-style Grid */}
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

function ProductCard({ product, index }: { product: typeof PRODUCTS[0], index: number }) {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col"
    >
      <Link href={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-300">
        {/* Crossfade Images */}
        <Image 
          src={product.image1} 
          alt={product.name} 
          fill 
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image 
          src={product.image2} 
          alt={`${product.name} Lifestyle`} 
          fill 
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        
        {/* Wishlist Icon */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <motion.div whileTap={{ scale: 0.8 }}>
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-brand-pink text-brand-pink' : 'text-brand-charcoal'}`} />
          </motion.div>
        </button>

        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image1,
                size: 'M'
              });
            }}
            className="w-full bg-brand-charcoal text-brand-pink py-4 font-sans text-[13px] uppercase tracking-wider font-bold hover:bg-black transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col items-center text-center">
        <span className="font-accent text-[11px] uppercase tracking-widest text-brand-pink mb-1">{product.tag}</span>
        <h3 className="font-sans font-medium text-[15px] text-brand-charcoal mb-1">{product.name}</h3>
        <p className="font-sans font-semibold text-[16px] text-brand-charcoal">From KSh {product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
}
