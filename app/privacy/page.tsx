export default function PrivacyPage() {
  return (
    <div className="bg-brand-cream min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-serif font-bold text-brand-charcoal mb-4">Privacy Policy</h1>
          <p className="text-brand-charcoal/60">Last updated: April 2024</p>
        </div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-charcoal prose-p:text-brand-charcoal/80">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you make a purchase, create an account, sign up for our newsletter, or contact us for support. This may include your name, email address, phone number, shipping address, and payment information.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to process your orders, communicate with you about your purchases, provide customer support, and send you marketing communications (if you have opted in). We also use this information to improve our products and services.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. All sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. If you wish to exercise any of these rights, please contact us at hello@shophellous.com.
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.
          </p>
        </div>
      </div>
    </div>
  );
}
