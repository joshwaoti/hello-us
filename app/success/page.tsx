'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SuccessPage() {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#F8C8D4', '#F5F0E8', '#FAFAFA', '#333333']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#F8C8D4', '#F5F0E8', '#FAFAFA', '#333333']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-cream min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg bg-white p-12 rounded-3xl shadow-xl border border-brand-pink/20"
      >
        <div className="w-24 h-24 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center shadow-lg">
            <Check className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-charcoal">Thank You!</h1>
        <p className="text-lg text-brand-charcoal/80 mb-8 font-sans">
          Your order has been confirmed. We&apos;ve sent a confirmation email with your order details. 
          Your custom pieces will be crafted and shipped within 48 hours.
        </p>
        <Link 
          href="/collections"
          className="inline-flex items-center space-x-2 bg-brand-charcoal text-white px-8 py-4 rounded-full hover:bg-black transition-colors font-medium shadow-lg"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
