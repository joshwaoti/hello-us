'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { CreditCard, Smartphone, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Step = 'shipping' | 'payment' | 'confirmation';

export default function CheckoutPage() {
  const [step, setStep] = useState<Step>('shipping');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mpesa'>('mpesa');
  const { items, cartTotal } = useCart();
  const router = useRouter();

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/success');
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      <section className="relative h-[17vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.webp" alt="" fill priority className="object-cover object-center" sizes="100vw" quality={80} />
          <div className="absolute inset-0 bg-brand-charcoal/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white">Checkout</h1>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Form Steps */}
          <div className="lg:col-span-7">
            {/* Progress Indicator */}
            <div className="flex items-center space-x-4 mb-12">
              <div className={`flex items-center space-x-2 ${step === 'shipping' || step === 'payment' || step === 'confirmation' ? 'text-brand-charcoal' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 'shipping' ? 'bg-brand-charcoal text-white' : step === 'payment' || step === 'confirmation' ? 'bg-brand-pink text-brand-charcoal' : 'bg-gray-200'}`}>
                  {step === 'payment' || step === 'confirmation' ? <CheckCircle2 className="w-5 h-5" /> : '1'}
                </div>
                <span className="font-medium font-sans text-sm">Shipping</span>
              </div>
              <div className={`h-px w-12 ${step === 'payment' || step === 'confirmation' ? 'bg-brand-pink' : 'bg-gray-300'}`} />
              <div className={`flex items-center space-x-2 ${step === 'payment' || step === 'confirmation' ? 'text-brand-charcoal' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 'payment' ? 'bg-brand-charcoal text-white' : step === 'confirmation' ? 'bg-brand-pink text-brand-charcoal' : 'bg-gray-200'}`}>
                  {step === 'confirmation' ? <CheckCircle2 className="w-5 h-5" /> : '2'}
                </div>
                <span className="font-medium font-sans text-sm">Payment</span>
              </div>
              <div className={`h-px w-12 ${step === 'confirmation' ? 'bg-brand-pink' : 'bg-gray-300'}`} />
              <div className={`flex items-center space-x-2 ${step === 'confirmation' ? 'text-brand-charcoal' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 'confirmation' ? 'bg-brand-charcoal text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className="font-medium font-sans text-sm">Confirmation</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 'shipping' && (
                <motion.form
                  key="shipping"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={(e) => { e.preventDefault(); setStep('payment'); }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="font-serif text-[32px] text-brand-charcoal mb-2">Where should we send your order?</h2>
                    <p className="text-gray-500 font-sans text-sm">Delivery within Nairobi takes 24-48 hours after production.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="relative">
                        <input required type="text" id="firstName" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent" placeholder="First Name" />
                        <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">First Name</label>
                      </div>
                      <div className="relative">
                        <input required type="text" id="lastName" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent" placeholder="Last Name" />
                        <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">Last Name</label>
                      </div>
                    </div>
                    <div className="relative">
                      <input required type="email" id="email" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent" placeholder="Email Address" />
                      <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">Email Address</label>
                    </div>
                    <div className="relative">
                      <input required type="tel" id="phone" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent" placeholder="Phone Number" />
                      <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">Phone Number</label>
                    </div>
                    <div className="relative">
                      <input required type="text" id="address" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent" placeholder="Delivery Address (e.g. Apartment, Street)" />
                      <label htmlFor="address" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">Delivery Address</label>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="relative">
                        <input required type="text" id="city" defaultValue="Nairobi" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent" placeholder="City" />
                        <label htmlFor="city" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">City</label>
                      </div>
                      <div className="relative">
                        <input type="text" id="instructions" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-pink focus:outline-none transition-colors placeholder-transparent" placeholder="Delivery Instructions (Optional)" />
                        <label htmlFor="instructions" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-pink">Delivery Instructions (Optional)</label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-brand-charcoal text-white py-4 rounded-full font-medium hover:bg-black transition-colors mt-8">
                    Continue to Payment
                  </button>
                </motion.form>
              )}

              {step === 'payment' && (
                <motion.form
                  key="payment"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleComplete}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="font-serif text-[32px] text-brand-charcoal mb-2">How would you like to pay?</h2>
                    <p className="text-gray-500 font-sans text-sm">All transactions are secure and encrypted.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('mpesa')}
                      className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${
                        paymentMethod === 'mpesa' ? 'border-[#25D366] bg-[#25D366]/5' : 'border-gray-200 hover:border-[#25D366]/50 bg-white'
                      }`}
                    >
                      <Smartphone className={`w-8 h-8 mb-3 ${paymentMethod === 'mpesa' ? 'text-[#25D366]' : 'text-gray-400'}`} />
                      <span className={`font-medium ${paymentMethod === 'mpesa' ? 'text-[#25D366]' : 'text-gray-600'}`}>M-Pesa</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${
                        paymentMethod === 'card' ? 'border-brand-charcoal bg-gray-50' : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <CreditCard className={`w-8 h-8 mb-3 ${paymentMethod === 'card' ? 'text-brand-charcoal' : 'text-gray-400'}`} />
                      <span className={`font-medium ${paymentMethod === 'card' ? 'text-brand-charcoal' : 'text-gray-600'}`}>Credit Card</span>
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {paymentMethod === 'mpesa' ? (
                      <motion.div
                        key="mpesa-form"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-6 overflow-hidden"
                      >
                        <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg p-4">
                          <p className="text-[#128C7E] text-sm font-medium">
                            Enter your M-Pesa registered phone number. A prompt will be sent to your phone to complete the payment.
                          </p>
                        </div>
                        <div className="relative">
                          <div className="flex items-end">
                            <span className="inline-flex items-center pb-2 border-b border-gray-300 bg-transparent text-gray-500 text-base pr-2">
                              +254
                            </span>
                            <div className="relative flex-1">
                              <input required type="tel" id="mpesaPhone" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-[#25D366] focus:outline-none transition-colors placeholder-transparent" placeholder="7XX XXX XXX" />
                              <label htmlFor="mpesaPhone" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#25D366]">Phone Number</label>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="card-form"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-6 overflow-hidden"
                      >
                        <div className="relative">
                          <input required type="text" id="cardNumber" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-charcoal focus:outline-none transition-colors placeholder-transparent" placeholder="0000 0000 0000 0000" />
                          <label htmlFor="cardNumber" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-charcoal">Card Number</label>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="relative">
                            <input required type="text" id="expiry" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-charcoal focus:outline-none transition-colors placeholder-transparent" placeholder="MM/YY" />
                            <label htmlFor="expiry" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-charcoal">Expiry Date</label>
                          </div>
                          <div className="relative">
                            <input required type="text" id="cvc" className="peer w-full border-b border-gray-300 bg-transparent py-2 text-brand-charcoal focus:border-brand-charcoal focus:outline-none transition-colors placeholder-transparent" placeholder="123" />
                            <label htmlFor="cvc" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-charcoal">CVC</label>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex space-x-4 pt-8">
                    <button type="button" onClick={() => setStep('shipping')} className="px-8 py-4 border border-brand-charcoal text-brand-charcoal rounded-full font-medium hover:bg-brand-charcoal hover:text-white transition-colors">
                      Back
                    </button>
                    <button type="submit" className={`flex-1 text-white py-4 rounded-full font-medium transition-colors ${paymentMethod === 'mpesa' ? 'bg-[#25D366] hover:bg-[#128C7E]' : 'bg-brand-charcoal hover:bg-black'}`}>
                      Pay KSh {cartTotal.toLocaleString()}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 md:p-8 sticky top-28 sm:top-24 shadow-sm border border-gray-100">
              <h3 className="font-serif text-xl mb-6 text-brand-charcoal">Order Summary</h3>
              <div className="space-y-6 mb-6 max-h-[40vh] overflow-y-auto pr-2 scrollbar-hide">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex space-x-4">
                    <div className="relative w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="font-medium text-sm text-brand-charcoal">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1 font-accent uppercase tracking-wider">Size: {item.size}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        <p className="font-medium text-sm text-brand-charcoal">KSh {(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium text-brand-charcoal">KSh {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping (Nairobi)</span>
                  <span className="font-medium text-brand-charcoal">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-4 border-t border-gray-100 text-brand-charcoal">
                  <span>Total</span>
                  <span>KSh {cartTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
