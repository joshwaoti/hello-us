'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { openCart, items } = useCart();
  const navRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 60], ['rgba(0,0,0,0)', 'rgba(255,255,255,0.8)']);
  const navBorder = useTransform(scrollY, [0, 60], ['rgba(0,0,0,0)', 'rgba(248,200,212,1)']);
  const navTextColor = useTransform(scrollY, [0, 60], ['#FFFFFF', '#333333']);
  const logoColor = useTransform(scrollY, [0, 60], ['#FFFFFF', '#333333']);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 60);
      if (currentY > lastScrollY.current && currentY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const itemCount = items.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);

  const navLinks = [
    { href: '/collections', label: 'Collections' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const mobileLinks = [
    { href: '/collections', label: 'Collections' },
    { href: '/collections?category=mommy-and-me', label: 'Mommy & Me' },
    { href: '/collections?category=womens', label: "Women's Sets" },
    { href: '/collections?category=new', label: 'New Arrivals' },
    { href: '/about', label: 'Our Story' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.header
        ref={navRef}
        style={{
          backgroundColor: navBg,
          borderBottomColor: navBorder,
        }}
        animate={{
          y: isVisible ? 0 : -100,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 backdrop-blur-[20px] border-b ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
          <motion.button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ color: isScrolled ? '#333333' : '#FFFFFF' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </motion.button>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <motion.span
                  style={{ color: isScrolled ? '#333333' : '#FFFFFF' }}
                  className="text-[14px] font-sans font-normal tracking-wide"
                >
                  {link.label}
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-pink transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-serif font-bold tracking-tight text-xl md:text-[28px]">
            <motion.span style={{ color: isScrolled ? '#333333' : '#FFFFFF' }}>
              Hell
            </motion.span>
            <motion.span style={{ color: isScrolled ? '#333333' : '#FFFFFF' }} className="relative">
              o
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] text-brand-pink">
                <svg width="10" height="8" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1 left-1/2 -translate-x-1/2">
                  <path d="M6 2C6 0 3 -0.5 3 2C3 4 6 5 6 5C6 5 9 4 9 2C9 -0.5 6 0 6 2Z" fill="currentColor"/>
                </svg>
              </span>
            </motion.span>
            <motion.span style={{ color: isScrolled ? '#333333' : '#FFFFFF' }}>
               Us
            </motion.span>
          </Link>

          <div className="flex items-center space-x-4 md:space-x-5">
            <motion.button
              style={{ color: isScrolled ? '#333333' : '#FFFFFF' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:block"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button
              style={{ color: isScrolled ? '#333333' : '#FFFFFF' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={openCart}
              className="relative"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="absolute -top-2 -right-2 bg-brand-pink text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-50 bg-brand-cream flex flex-col"
            >
              <div className="p-4 flex justify-between items-center border-b border-gray-200">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-2xl font-bold text-brand-charcoal">
                  Hello Us
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Close menu">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col p-6 space-y-6 text-lg">
                {mobileLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-brand-charcoal hover:text-brand-pink transition-colors font-sans"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CartDrawer />
    </>
  );
}