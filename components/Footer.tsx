import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-beige py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-brand-pink/30 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-bold tracking-tight mb-6 block text-brand-pink">
              Hello Us
            </Link>
            <p className="text-brand-beige max-w-sm text-sm font-sans font-light">
              Mommy & Me Fashion | Timeless Women&apos;s Sets
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-white">Shop</h4>
            <ul className="space-y-3 text-brand-beige font-sans font-light">
              <li><Link href="/collections" className="hover:text-brand-pink transition-colors">Collections</Link></li>
              <li><Link href="/collections?category=new" className="hover:text-brand-pink transition-colors">New Arrivals</Link></li>
              <li><Link href="/about" className="hover:text-brand-pink transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-white">Support</h4>
            <ul className="space-y-3 text-brand-beige font-sans font-light">
              <li><Link href="/size-guide" className="hover:text-brand-pink transition-colors">Sizing Guide</Link></li>
              <li><Link href="/faq" className="hover:text-brand-pink transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-brand-pink transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-white">Follow Us</h4>
            <ul className="space-y-3 text-brand-beige font-sans font-light">
              <li><a href="https://instagram.com/shophellous" target="_blank" rel="noreferrer" className="hover:text-brand-pink transition-colors">Instagram @shophellous</a></li>
              <li><a href="https://wa.me/254746704132" target="_blank" rel="noreferrer" className="hover:text-brand-pink transition-colors">WhatsApp +254 746 704 132</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-pink/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-brand-beige/60 text-xs font-sans">
          <p>&copy; {new Date().getFullYear()} Hello Us. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-brand-pink transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-pink transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}