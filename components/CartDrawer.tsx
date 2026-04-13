'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ArrowRight, Heart, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
              <h2 className="font-serif text-2xl">Your Cart</h2>
              <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-6">
                  <Heart className="w-16 h-16 text-brand-pink/50" strokeWidth={1} />
                  <p className="text-lg text-brand-charcoal">Your cart is empty — let&apos;s fix that</p>
                  <Link 
                    href="/collections" 
                    onClick={closeCart} 
                    className="text-brand-pink font-medium hover:underline"
                  >
                    Shop Collections
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex space-x-4">
                      <div className="relative w-24 h-32 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <p className="text-sm text-gray-500">Size: {item.size}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <p className="font-medium">${item.price.toFixed(2)}</p>
                          <button 
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-medium text-lg">Subtotal</span>
                  <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
                </div>
                <Link 
                  href="/checkout" 
                  onClick={closeCart}
                  className="w-full bg-brand-charcoal text-white py-4 rounded-full flex items-center justify-center space-x-2 hover:bg-brand-pink transition-colors mb-6"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <div className="flex flex-col space-y-3 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-brand-charcoal" />
                    <span>Made in 48hrs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-brand-charcoal" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <a href="https://wa.me/254746704132" target="_blank" rel="noreferrer" className="hover:text-brand-pink transition-colors">
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
