'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, User, Menu, X, ChevronDown, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const { openCart, items } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-cream/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-brand-pink transition-colors">
                <span>Collections</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isCollectionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden py-2"
                  >
                    <Link href="/collections?category=mommy-and-me" className="block px-4 py-2 hover:bg-brand-pink/10 transition-colors">
                      Mommy &amp; Me
                    </Link>
                    <Link href="/collections?category=womens" className="block px-4 py-2 hover:bg-brand-pink/10 transition-colors">
                      Women&apos;s Sets
                    </Link>
                    <Link href="/collections?category=new" className="block px-4 py-2 hover:bg-brand-pink/10 transition-colors">
                      New Arrivals
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/about" className="hover:text-brand-pink transition-colors">About</Link>
            <Link href="/contact" className="hover:text-brand-pink transition-colors">Contact</Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif font-bold tracking-tight">
            Hello Us
          </Link>

          {/* Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="hover:text-brand-pink transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block hover:text-brand-pink transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="relative hover:text-brand-pink transition-colors" onClick={openCart}>
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-brand-cream flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-200">
              <span className="font-serif text-xl font-bold">Hello Us</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col p-6 space-y-6 text-lg">
              <Link href="/collections" onClick={() => setIsMobileMenuOpen(false)}>All Collections</Link>
              <Link href="/collections?category=mommy-and-me" onClick={() => setIsMobileMenuOpen(false)}>Mommy &amp; Me</Link>
              <Link href="/collections?category=womens" onClick={() => setIsMobileMenuOpen(false)}>Women&apos;s Sets</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link href="/account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Account</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer />
    </>
  );
}
