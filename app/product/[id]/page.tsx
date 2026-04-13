'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronDown, Sparkles, Heart, Star, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const SIZES = ['8', '10', '12', '14', '16', '18', '20+'];

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');
  const [isTryOnOpen, setIsTryOnOpen] = useState(false);
  const [showCustomMeasurements, setShowCustomMeasurements] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addToCart } = useCart();

  const product = {
    id: '1',
    name: 'The Coastal Linen Set',
    price: 8999,
    tag: 'LINEN COLLECTION',
    description: 'A timeless two-piece set crafted from 100% raw linen. Features our signature elegant tie straps and a flattering gathered skirt. Perfect for coastal getaways or elegant everyday wear.',
    images: [
      'https://picsum.photos/seed/dress1a/800/1200',
      'https://picsum.photos/seed/dress1b/800/1200',
      'https://picsum.photos/seed/dress1c/800/1200',
    ]
  };

  const handleAddToCart = () => {
    if (!selectedSize && !showCustomMeasurements) {
      alert('Please select a size or enter custom measurements');
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0],
      size: selectedSize || 'Custom'
    });
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-[12px] font-sans text-gray-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-brand-pink transition-colors">Home</Link>
          <span>&gt;</span>
          <Link href="/collections" className="hover:text-brand-pink transition-colors">Collections</Link>
          <span>&gt;</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col md:flex-row gap-4 h-fit md:sticky md:top-24">
            {/* Thumbnail Strip */}
            <div className="flex md:flex-col gap-4 overflow-auto scrollbar-hide order-2 md:order-1">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-24 md:w-24 md:h-32 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${activeImageIndex === idx ? 'border-brand-pink' : 'border-transparent'}`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100 order-1 md:order-2 group cursor-zoom-in">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={product.images[activeImageIndex]} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-150 origin-center" 
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 bg-brand-charcoal text-white px-4 py-1.5 rounded-full text-xs font-medium">
                Maxi
              </div>
              <div className="absolute top-4 right-4 bg-brand-pink text-brand-charcoal px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">
                48hr Production
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col pt-4">
            <span className="font-accent text-[12px] uppercase tracking-widest text-brand-pink mb-2">{product.tag}</span>
            <h1 className="text-4xl md:text-[36px] font-serif font-bold text-brand-charcoal mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <a href="#reviews" className="text-sm text-gray-500 hover:text-brand-pink underline">(12 reviews)</a>
            </div>

            {/* Price Section */}
            <div className="mb-8">
              <p className="font-sans font-semibold text-[18px] text-brand-charcoal mb-1">Maxi — KSh 8,999</p>
              <p className="font-sans font-semibold text-[18px] text-brand-charcoal mb-2">Mini — KSh 7,499</p>
              <p className="text-sm text-gray-500">Linen variant from KSh 12,000</p>
            </div>

            {/* Production Badge */}
            <div className="w-full bg-brand-pink rounded-xl p-4 flex items-center space-x-4 mb-8 shadow-sm">
              <Clock className="w-6 h-6 text-brand-charcoal" />
              <div>
                <p className="font-sans font-semibold text-[15px] text-brand-charcoal">Made to Order: Ready in 48 Hours</p>
                <p className="font-sans text-[13px] text-brand-charcoal/80">Custom-crafted exclusively for you</p>
              </div>
            </div>

            {/* Size Customisation */}
            <div className="mb-8">
              <h3 className="font-sans font-medium text-[14px] text-brand-charcoal mb-4">Your Custom Size</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {SIZES.map(size => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setShowCustomMeasurements(false); }}
                    className={`px-4 py-2 border rounded-full text-sm transition-all ${
                      selectedSize === size && !showCustomMeasurements
                        ? 'border-brand-charcoal bg-brand-charcoal text-white' 
                        : 'border-gray-300 hover:border-brand-pink hover:text-brand-pink bg-white'
                    }`}
                  >
                    Size {size}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={() => { setShowCustomMeasurements(!showCustomMeasurements); setSelectedSize(null); }}
                className="text-sm text-brand-charcoal underline hover:text-brand-pink transition-colors"
              >
                Need a custom fit? Enter your measurements
              </button>

              <AnimatePresence>
                {showCustomMeasurements && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-xl border border-gray-100">
                      {['Bust', 'Waist', 'Hips', 'Height'].map(measure => (
                        <div key={measure}>
                          <label className="block text-xs font-medium text-gray-500 mb-1">{measure}</label>
                          <input type="text" placeholder="e.g. 36 inches" className="w-full border-b border-gray-300 py-2 focus:border-brand-pink outline-none bg-transparent text-sm" />
                        </div>
                      ))}
                      <div className="col-span-2 mt-2">
                        <button className="text-xs text-brand-pink flex items-center space-x-1 hover:underline">
                          <span>Measurement guide</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-3 mb-6">
              <motion.button 
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="w-full bg-brand-charcoal text-white py-4 rounded-full font-medium hover:bg-brand-pink transition-colors"
              >
                Add to Cart
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.97 }}
                className="w-full border border-brand-charcoal text-brand-charcoal py-4 rounded-full font-medium hover:bg-brand-charcoal hover:text-white transition-colors"
              >
                Buy Now
              </motion.button>
            </div>

            {/* WhatsApp Inquiry */}
            <a href="https://wa.me/254746704132" target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-2 text-brand-charcoal hover:text-green-600 transition-colors mb-12">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span className="font-medium text-sm">Chat with us on WhatsApp</span>
            </a>

            {/* Make it a Match */}
            <div className="mb-12">
              <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-4">Complete the Set</h3>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="relative w-20 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src="https://picsum.photos/seed/mini/400/600" alt="Mini Dress" fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-brand-charcoal mb-1">Mini Coastal Linen Dress</h4>
                  <p className="text-sm text-gray-500 mb-3">KSh 7,499</p>
                  <button className="text-xs font-medium bg-brand-charcoal text-white px-4 py-2 rounded-full hover:bg-brand-pink transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Animated Accordion */}
            <div className="border-t border-gray-200">
              <AccordionItem 
                title="Signature Details" 
                isOpen={openAccordion === 'details'} 
                onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
              >
                <ul className="list-disc pl-5 space-y-2 text-gray-600 font-sans text-sm">
                  <li>Elegant tie straps adjustable for perfect fit</li>
                  <li>Classic puff sleeves with elastic cuffs</li>
                  <li>Gathered skirt for a flowing silhouette</li>
                </ul>
              </AccordionItem>
              <AccordionItem 
                title="Materials & Care" 
                isOpen={openAccordion === 'materials'} 
                onClick={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <p className="text-gray-600 mb-2 font-sans text-sm">Crafted from 100% premium heavy linen.</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 font-sans text-sm">
                  <li>Machine wash cold on gentle cycle</li>
                  <li>Lay flat to dry</li>
                  <li>Warm iron if needed</li>
                </ul>
              </AccordionItem>
              <AccordionItem 
                title="Sizing & Fit" 
                isOpen={openAccordion === 'sizing'} 
                onClick={() => setOpenAccordion(openAccordion === 'sizing' ? null : 'sizing')}
              >
                <p className="text-gray-600 font-sans text-sm">
                  Our Maxi pieces are designed to be generous and flowing. If you prefer a more tailored fit, we recommend providing custom measurements. Mini pieces are true to age size.
                </p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ title, isOpen, onClick, children }: { title: string, isOpen: boolean, onClick: () => void, children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={onClick}
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-serif text-[16px] text-brand-charcoal">{title}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
