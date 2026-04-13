'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "How long does production take?",
    answer: "All our pieces are made-to-order. Production takes exactly 48 hours from the time your order is confirmed. Once completed, your order will be shipped immediately."
  },
  {
    question: "Do you offer custom sizing?",
    answer: "Yes! We highly encourage custom sizing for the perfect fit. When adding an item to your cart, you can select 'Custom' and provide your measurements (Bust, Waist, Hips, Height)."
  },
  {
    question: "Where do you ship?",
    answer: "Currently, we offer delivery within Nairobi (24-48 hours after production) and across Kenya. International shipping is coming soon."
  },
  {
    question: "What is your return policy?",
    answer: "Because our pieces are made-to-order specifically for you, we do not accept returns. However, if there is an issue with the fit or quality, please contact us within 7 days of receiving your order, and we will work with you to make it right through alterations."
  },
  {
    question: "How should I care for my linen pieces?",
    answer: "We recommend machine washing cold on a gentle cycle and laying flat to dry. You can use a warm iron if needed. Avoid bleach and tumble drying to preserve the quality of the raw linen."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-brand-cream min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-brand-charcoal mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-brand-charcoal/80">
            Everything you need to know about our made-to-order process, sizing, and shipping.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-brand-pink/10 overflow-hidden">
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 px-8 flex justify-between items-center text-left focus:outline-none hover:bg-brand-pink/5 transition-colors"
              >
                <span className="font-serif text-lg text-brand-charcoal font-medium">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-brand-pink transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 px-8 text-brand-charcoal/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-charcoal/80 mb-4">Still have questions?</p>
          <a href="https://wa.me/254746704132" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 bg-brand-charcoal text-white px-8 py-4 rounded-full hover:bg-brand-pink transition-colors font-medium shadow-lg">
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
