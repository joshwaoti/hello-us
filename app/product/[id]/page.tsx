'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronDown, Star, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProductById, products } from '@/lib/products';
import { getReviewsByProductId, getAverageRating, getRatingBreakdown } from '@/lib/reviews';
import type { LengthVariant } from '@/lib/types';

const SIZES = ['8', '10', '12', '14', '16', '18', '20+'];

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);

  const [selectedLength, setSelectedLength] = useState<LengthVariant | null>(
    product?.prices.Mini && product?.prices.Maxi ? 'Maxi' : product?.prices.Maxi ? 'Maxi' : 'Mini'
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');
  const [showCustomMeasurements, setShowCustomMeasurements] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [customColor, setCustomColor] = useState('');
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="bg-brand-cream min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-serif text-brand-charcoal mb-4">Product not found</h1>
          <Link href="/collections" className="text-brand-pink hover:underline">
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  const currentPrice = selectedLength
    ? product.prices[selectedLength]
    : Object.values(product.prices)[0];

  const relatedProduct = products.find((p) => p.id === product.relatedProductId);

  const handleAddToCart = () => {
    if (!selectedSize && !showCustomMeasurements) {
      alert('Please select a size or enter custom measurements');
      return;
    }
    if (!currentPrice) return;

    addToCart({
      id: product.id,
      name: product.name,
      price: currentPrice,
      quantity: 1,
      image: product.images[0].src,
      size: selectedSize || 'Custom',
      length: selectedLength || undefined,
      color: customColor || undefined,
    });
  };

  const priceEntries = Object.entries(product.prices);
  const productReviews = getReviewsByProductId(product.id);
  const avgRating = getAverageRating(product.id);

  return (
    <div className="bg-brand-cream min-h-screen">
      <section className="relative h-[17vh] flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 text-center px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white">{product.name}</h2>
          <p className="text-white/80 font-sans text-sm mt-1">{product.tag}</p>
        </div>

        <div className="absolute top-4 left-4 sm:top-6 sm:left-8 z-20">
          <div className="text-[10px] sm:text-xs font-sans text-white flex items-center space-x-1.5">
            <Link href="/" className="hover:text-brand-pink transition-colors whitespace-nowrap">Home</Link>
            <span>&gt;</span>
            <Link href="/collections" className="hover:text-brand-pink transition-colors whitespace-nowrap">Collections</Link>
            <span>&gt;</span>
            <span className="truncate">{product.name}</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-start">

          {/* Desktop: vertical thumbnail + main image */}
          <div className="hidden lg:flex gap-4 lg:sticky lg:top-24 self-start">
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[600px] scrollbar-hide w-20 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-full h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImageIndex === idx ? 'border-brand-pink' : 'border-gray-200 hover:border-brand-pink/50'
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>

            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100 group flex-1">
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
                    src={product.images[activeImageIndex].src}
                    alt={product.images[activeImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-4 left-4 bg-brand-charcoal text-white px-4 py-1.5 rounded-full text-xs font-medium z-10">
                {product.tag}
              </div>
              <div className="absolute top-4 right-4 bg-brand-pink text-brand-charcoal px-4 py-1.5 rounded-full text-xs font-medium shadow-sm z-10">
                48hr
              </div>
            </div>
          </div>

          {/* Mobile: main image + horizontal thumbnail strip */}
          <div className="lg:hidden">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100 mb-3">
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
                    src={product.images[activeImageIndex].src}
                    alt={product.images[activeImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-3 left-3 bg-brand-charcoal text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                {product.tag}
              </div>
              <div className="absolute top-3 right-3 bg-brand-pink text-brand-charcoal px-3 py-1 rounded-full text-xs font-medium z-10">
                48hr
              </div>
            </div>
            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImageIndex === idx ? 'border-brand-pink' : 'border-gray-200'
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-accent text-[10px] sm:text-xs uppercase tracking-widest text-brand-pink mb-1 sm:mb-2">
              {product.tag}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-serif font-bold text-brand-charcoal mb-3 sm:mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center space-x-2 mb-5 sm:mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${star <= Math.round(avgRating) ? 'fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <a href="#reviews" className="text-xs sm:text-sm text-gray-500 hover:text-brand-pink underline">
                ({productReviews.length} reviews)
              </a>
            </div>

            <div className="mb-5 sm:mb-8">
              {priceEntries.map(([length, price]) => (
                <p
                  key={length}
                  className={`font-sans font-semibold text-lg sm:text-[18px] text-brand-charcoal ${
                    priceEntries.length > 1 ? (selectedLength === length ? 'block' : 'hidden') : 'block'
                  }`}
                >
                  {length} — KSh {price?.toLocaleString()}
                </p>
              ))}
              {priceEntries.length > 1 && (
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Select {priceEntries.map(([l]) => l).join(' or ')} above
                </p>
              )}
            </div>

            <div className="w-full bg-brand-pink rounded-xl p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8 shadow-sm">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-brand-charcoal flex-shrink-0" />
              <div>
                <p className="font-sans font-semibold text-[13px] sm:text-[15px] text-brand-charcoal leading-snug">
                  Made to Order: Ready in 48 Hours
                </p>
                <p className="font-sans text-[11px] sm:text-[13px] text-brand-charcoal/80">
                  Custom-crafted exclusively for you
                </p>
              </div>
            </div>

            {priceEntries.length > 1 && (
              <div className="mb-6 sm:mb-8">
                <h3 className="font-sans font-medium text-[13px] sm:text-[14px] text-brand-charcoal mb-3">Length</h3>
                <div className="grid grid-cols-2 gap-3">
                  {priceEntries.map(([length, price]) => (
                    <button
                      key={length}
                      onClick={() => setSelectedLength(length as LengthVariant)}
                      className={`py-3 px-2 border rounded-xl text-[13px] sm:text-sm font-medium transition-all ${
                        selectedLength === length
                          ? 'border-brand-charcoal bg-brand-charcoal text-white'
                          : 'border-gray-300 hover:border-brand-pink hover:text-brand-pink bg-white'
                      }`}
                    >
                      {length}
                      <span className="block text-[11px] sm:text-xs mt-0.5 opacity-80">KSh {price?.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6 sm:mb-8">
              <h3 className="font-sans font-medium text-[13px] sm:text-[14px] text-brand-charcoal mb-3">Color</h3>
              <p className="text-[11px] sm:text-sm text-gray-500 mb-3">{product.colors[0]}</p>
              <input
                type="text"
                placeholder="Enter your preferred color (e.g. dusty rose, ivory)"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                className="w-full border border-gray-300 rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-[13px] sm:text-sm focus:border-brand-pink outline-none bg-white"
              />
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="font-sans font-medium text-[13px] sm:text-[14px] text-brand-charcoal mb-3">Your Custom Size</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setShowCustomMeasurements(false);
                    }}
                    className={`min-w-[52px] sm:min-w-[56px] px-3 sm:px-4 py-2 border rounded-full text-[12px] sm:text-sm transition-all ${
                      selectedSize === size && !showCustomMeasurements
                        ? 'border-brand-charcoal bg-brand-charcoal text-white'
                        : 'border-gray-300 hover:border-brand-pink hover:text-brand-pink bg-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setShowCustomMeasurements(!showCustomMeasurements);
                  setSelectedSize(null);
                }}
                className="text-[11px] sm:text-sm text-brand-charcoal underline hover:text-brand-pink transition-colors"
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
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-gray-100">
                      {['Bust', 'Waist', 'Hips', 'Height'].map((measure) => (
                        <div key={measure}>
                          <label className="block text-[10px] sm:text-xs font-medium text-gray-500 mb-1">{measure}</label>
                          <input
                            type="text"
                            placeholder="e.g. 36 in"
                            className="w-full border-b border-gray-300 py-2 focus:border-brand-pink outline-none bg-transparent text-[12px] sm:text-sm"
                          />
                        </div>
                      ))}
                      <div className="col-span-2 mt-1">
                        <button className="text-[10px] sm:text-xs text-brand-pink flex items-center space-x-1 hover:underline">
                          <span>Measurement guide</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col space-y-3 mb-6">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="w-full bg-brand-charcoal text-white py-3 sm:py-4 rounded-full font-medium hover:bg-brand-pink hover:text-brand-charcoal transition-colors text-[14px] sm:text-base"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="w-full border border-brand-charcoal text-brand-charcoal py-3 sm:py-4 rounded-full font-medium hover:bg-brand-charcoal hover:text-white transition-colors text-[14px] sm:text-base"
              >
                Buy Now
              </motion.button>
            </div>

            <a
              href="https://wa.me/254746704132"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 text-brand-charcoal hover:text-green-600 transition-colors mb-8 sm:mb-12"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366]" />
              <span className="font-medium text-[12px] sm:text-sm">Chat with us on WhatsApp</span>
            </a>

            {relatedProduct && (
              <div className="mb-8 sm:mb-12">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal mb-3 sm:mb-4">Complete the Set</h3>
                <div className="flex items-center sm:items-start space-x-3 sm:space-x-4 bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm">
                  <Link href={`/product/${relatedProduct.id}`} className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={relatedProduct.images[0].src}
                      alt={relatedProduct.images[0].alt}
                      fill
                      className="object-cover hover:opacity-90 transition-opacity"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-brand-charcoal mb-1 text-[13px] sm:text-sm">{relatedProduct.name}</h4>
                    <p className="text-[11px] sm:text-sm text-gray-500 mb-2 sm:mb-3">
                      {relatedProduct.prices.Mini && relatedProduct.prices.Maxi
                        ? `From KSh ${Math.min(relatedProduct.prices.Mini, relatedProduct.prices.Maxi).toLocaleString()}`
                        : `KSh ${Object.values(relatedProduct.prices)[0]?.toLocaleString()}`}
                    </p>
                    <Link
                      href={`/product/${relatedProduct.id}`}
                      className="text-[11px] sm:text-xs font-medium bg-brand-charcoal text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-brand-pink hover:text-brand-charcoal transition-colors"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <div className="border-t border-gray-200">
              <AccordionItem
                title="Signature Details"
                isOpen={openAccordion === 'details'}
                onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
              >
                <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-gray-600 font-sans text-[12px] sm:text-sm">
                  {product.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </AccordionItem>
              <AccordionItem
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onClick={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <p className="text-gray-600 mb-2 font-sans text-[12px] sm:text-sm">{product.materials}</p>
                <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-gray-600 font-sans text-[12px] sm:text-sm">
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
                <p className="text-gray-600 font-sans text-[12px] sm:text-sm">{product.sizingNote}</p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div id="reviews">
          <ReviewsSection productId={product.id} />
        </div>
      </div>
    </div>
  );
}

function ReviewsSection({ productId }: { productId: string }) {
  const productReviews = getReviewsByProductId(productId);
  const avgRating = getAverageRating(productId);
  const breakdown = getRatingBreakdown(productId);
  const total = productReviews.length;

  if (total === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-brand-charcoal/60 font-serif italic text-lg">No reviews yet — be the first!</p>
      </div>
    );
  }

  return (
    <div className="border-t border-gray-200 pt-10 sm:pt-12">
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mb-6 sm:mb-8">Customer Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[280px_1fr] gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12">
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-brand-charcoal mb-2">
            {avgRating.toFixed(1)}
          </div>
          <div className="flex text-yellow-400 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 sm:w-4 lg:w-5 sm:h-4 lg:h-5 ${star <= Math.round(avgRating) ? 'fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <p className="text-[12px] sm:text-sm text-gray-500 mb-5 sm:mb-6">{total} reviews</p>

          <div className="w-full space-y-1.5 sm:space-y-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = breakdown[star] || 0;
              const pct = total > 0 ? (count / total) * 100 : 0;
              return (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs text-gray-500 w-3">{star}</span>
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-current" />
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5 sm:h-2 overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400 w-5 sm:w-8 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {productReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-medium text-brand-charcoal text-[13px] sm:text-sm">{review.author}</span>
                  {review.verified && (
                    <span className="hidden sm:inline text-[10px] font-accent uppercase tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded">
                      Verified
                    </span>
                  )}
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-0">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-400">{review.date}</span>
                  </div>
                  {review.verified && (
                    <span className="sm:hidden text-[10px] font-accent uppercase tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded w-fit">
                      Verified
                    </span>
                  )}
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full w-fit">
                  {review.fit}
                </span>
              </div>
              <p className="font-medium text-brand-charcoal mb-1.5 sm:mb-2 text-[13px] sm:text-sm">{review.title}</p>
              <p className="text-gray-600 font-sans text-[12px] sm:text-sm leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AccordionItem({
  title,
  isOpen,
  onClick,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-200">
      <button onClick={onClick} className="w-full py-4 sm:py-5 flex justify-between items-center text-left focus:outline-none">
        <span className="font-serif text-[14px] sm:text-[16px] text-brand-charcoal">{title}</span>
        <ChevronDown
          className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 sm:pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
