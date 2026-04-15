import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <Image 
          src="/images/hero-bg.webp" 
          alt="Mother and daughter" 
          fill 
          className="object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-brand-charcoal/30 mix-blend-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-serif italic">
            Born from a Mother&apos;s Love
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-charcoal prose-p:text-brand-charcoal/80 mx-auto">
          <p className="lead text-2xl font-serif italic text-brand-charcoal text-center mb-12">
            Shop Hellous began with a simple desire: to create beautiful, matching moments that don&apos;t compromise on quality.
          </p>
          
          <h2 className="text-3xl mt-12 mb-6">The Vision</h2>
          <p>
            We believe that clothing should be more than just fabric; it should be a vessel for memories. When a mother and daughter wear matching pieces, it&apos;s a shared experience, a tangible expression of their bond. We wanted to create pieces that celebrate this connection with elegance and grace.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Craftsmanship & Quality</h2>
          <p>
            Every piece is made-to-order in our Nairobi studio. We focus on using premium, earthy materials like heavy cotton and 100% raw linen. These fabrics are chosen not just for their beautiful drape and texture, but for their longevity. We want our pieces to be cherished and passed down.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Sustainable by Design</h2>
          <p>
            By operating on a made-to-order model, we ensure zero waste. Your piece is cut and sewn specifically for you within 48 hours of your order. This approach allows us to maintain exceptional quality control and reduce our environmental footprint.
          </p>

          <div className="mt-16 text-center">
            <Link 
              href="/collections" 
              className="inline-flex items-center space-x-2 bg-brand-charcoal text-white px-8 py-4 rounded-full hover:bg-brand-pink transition-colors text-lg font-medium shadow-lg"
            >
              <span>Explore Our Collections</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
