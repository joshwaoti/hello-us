export default function Account() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-8">My Account</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-charcoal/10">
          <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-4">Order History</h2>
          <p className="text-brand-charcoal/60 mb-4">You haven&apos;t placed any orders yet.</p>
          <a href="/collections" className="text-brand-pink hover:underline font-medium">Start Shopping &rarr;</a>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-charcoal/10">
          <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-4">Track Order</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-brand-charcoal mb-1">Order Number</label>
              <input 
                type="text" 
                placeholder="e.g. HLO-12345"
                className="w-full px-4 py-2 border border-brand-charcoal/20 rounded-lg focus:outline-none focus:border-brand-pink"
              />
            </div>
            <button 
              type="submit"
              className="bg-brand-charcoal text-brand-beige px-6 py-2 rounded-full hover:bg-brand-pink hover:text-brand-charcoal transition-colors font-medium"
            >
              Track Order
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <div className="bg-brand-beige p-6 rounded-2xl">
          <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">Need Help?</h2>
          <p className="text-brand-charcoal/70 mb-4">For any account or order inquiries, please contact our support team.</p>
          <a href="/contact" className="text-brand-pink hover:underline font-medium">Contact Support &rarr;</a>
        </div>
      </div>
    </div>
  );
}