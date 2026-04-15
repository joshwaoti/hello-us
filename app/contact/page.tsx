import Image from 'next/image';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-16">
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
        <div className="relative z-10 text-center px-4 pt-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-3">Get in Touch</h1>
          <p className="text-white/80 font-sans text-lg max-w-xl mx-auto">
            We&apos;re here to help with sizing, custom orders, or any questions about our pieces.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div className="space-y-10">
            <h2 className="text-3xl font-serif text-brand-charcoal mb-6">Contact Information</h2>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-brand-pink" />
              </div>
              <div>
                <h3 className="font-medium text-brand-charcoal text-lg mb-1">WhatsApp</h3>
                <p className="text-brand-charcoal/80 mb-2">The fastest way to reach us for quick questions.</p>
                <a href="https://wa.me/254746704132" target="_blank" rel="noreferrer" className="text-brand-pink hover:underline font-medium">
                  +254 746 704 132
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-brand-pink" />
              </div>
              <div>
                <h3 className="font-medium text-brand-charcoal text-lg mb-1">Email</h3>
                <p className="text-brand-charcoal/80 mb-2">For order inquiries and detailed questions.</p>
                <a href="mailto:hello@shophellous.com" className="text-brand-pink hover:underline font-medium">
                  hello@shophellous.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-brand-pink" />
              </div>
              <div>
                <h3 className="font-medium text-brand-charcoal text-lg mb-1">Studio</h3>
                <p className="text-brand-charcoal/80">
                  Nairobi, Kenya<br />
                  (By appointment only)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-brand-pink/10">
            <h2 className="text-2xl font-serif text-brand-charcoal mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <input required type="text" id="name" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">Name</label>
                </div>
                <div className="relative">
                  <input required type="email" id="email" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">Email</label>
                </div>
              </div>
              <div className="relative">
                <input type="text" id="orderNumber" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent" placeholder="Order Number (Optional)" />
                <label htmlFor="orderNumber" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">Order Number (Optional)</label>
              </div>
              <div className="relative pt-2">
                <textarea required id="message" rows={4} className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">Message</label>
              </div>
              <button type="button" className="w-full bg-brand-charcoal text-white py-4 rounded-full font-medium hover:bg-brand-pink transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
