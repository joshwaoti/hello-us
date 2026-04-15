export default function SizeGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-8">Sizing Guide</h1>
      <div className="prose prose-lg text-brand-charcoal/80">
        <p className="mb-8">Find your perfect fit with our comprehensive sizing guide. All measurements are in inches.</p>
        
        <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">Women&apos;s Sizes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-brand-charcoal/20">
                <th className="text-left py-3 px-4 font-medium">Size</th>
                <th className="text-left py-3 px-4 font-medium">Bust</th>
                <th className="text-left py-3 px-4 font-medium">Waist</th>
                <th className="text-left py-3 px-4 font-medium">Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-charcoal/10">
                <td className="py-3 px-4">XS</td>
                <td className="py-3 px-4">32-34</td>
                <td className="py-3 px-4">24-26</td>
                <td className="py-3 px-4">34-36</td>
              </tr>
              <tr className="border-b border-brand-charcoal/10">
                <td className="py-3 px-4">S</td>
                <td className="py-3 px-4">34-36</td>
                <td className="py-3 px-4">26-28</td>
                <td className="py-3 px-4">36-38</td>
              </tr>
              <tr className="border-b border-brand-charcoal/10">
                <td className="py-3 px-4">M</td>
                <td className="py-3 px-4">36-38</td>
                <td className="py-3 px-4">28-30</td>
                <td className="py-3 px-4">38-40</td>
              </tr>
              <tr className="border-b border-brand-charcoal/10">
                <td className="py-3 px-4">L</td>
                <td className="py-3 px-4">38-40</td>
                <td className="py-3 px-4">30-32</td>
                <td className="py-3 px-4">40-42</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">Kids Sizes (Ages 2-12)</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-brand-charcoal/20">
                <th className="text-left py-3 px-4 font-medium">Age</th>
                <th className="text-left py-3 px-4 font-medium">Height</th>
                <th className="text-left py-3 px-4 font-medium">Chest</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-charcoal/10">
                <td className="py-3 px-4">2-3 yrs</td>
                <td className="py-3 px-4">34-38</td>
                <td className="py-3 px-4">20-22</td>
              </tr>
              <tr className="border-b border-brand-charcoal/10">
                <td className="py-3 px-4">4-5 yrs</td>
                <td className="py-3 px-4">38-44</td>
                <td className="py-3 px-4">22-24</td>
              </tr>
              <tr className="border-b border-brand-charcoal/10">
                <td className="py-3 px-4">6-7 yrs</td>
                <td className="py-3 px-4">44-48</td>
                <td className="py-3 px-4">24-26</td>
              </tr>
              <tr className="border-b border-brand-charcoal/10">
                <td className="py-3 px-4">8-10 yrs</td>
                <td className="py-3 px-4">48-54</td>
                <td className="py-3 px-4">26-28</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-brand-pink/10 p-6 rounded-lg mt-8">
          <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-2">Need Help?</h3>
          <p className="mb-4">Our pieces are made to order. If you&apos;re between sizes or need alterations, please contact us and we&apos;ll help you find the perfect fit.</p>
          <a href="/contact" className="text-brand-pink hover:underline font-medium">Contact Us &rarr;</a>
        </div>
      </div>
    </div>
  );
}