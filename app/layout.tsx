import type {Metadata, Viewport} from 'next';
import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Hello Us | Matching Mother Daughter Dresses Kenya — Shop Hellous',
  description: 'Mommy & Me Fashion | Timeless Women\'s Sets — Made to Order in 48 Hours. Premium matching outfits for mothers and daughters.',
  keywords: ['matching dresses', 'mommy and me', 'mother daughter outfits', 'linen dresses', 'Kenya fashion', 'made to order'],
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Hello Us | Shop Hellous — Mommy & Me Fashion',
    description: "Mommy's & Me Fashion | Timeless Women's Sets — Made to Order in 48 Hours",
    url: 'https://shophellous.com',
    siteName: 'Hello Us',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hello Us — Mommy & Me Fashion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello Us | Shop Hellous',
    description: "Mommy's & Me Fashion | Timeless Women's Sets — Made to Order in 48 Hours",
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#F8C8D4',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-brand-cream text-brand-charcoal selection:bg-brand-pink selection:text-brand-charcoal" suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}