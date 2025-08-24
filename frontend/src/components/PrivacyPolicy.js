import React from "react";


const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
    <section id="privacy" className="py-24 px-4 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Privacy Policy – KCoders</h2>
        <p className="text-sm text-gray-400 mb-8">Effective Date: August 24, 2025</p>

      <p className="mb-6">
        At <strong>KCoders</strong>, we respect your privacy and are committed
        to protecting your personal information. This Privacy Policy explains
        how we collect, use, and safeguard the data you share with us when you
        visit our website or use our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Personal Information:</strong> Name, email address, billing
          details, etc. (when you contact us or request our services).
        </li>
        <li>
          <strong>Non-Personal Information:</strong> Browser type, device
          information, IP address, and usage data.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Provide and improve our services</li>
        <li>Respond to your inquiries and requests</li>
        <li>Process payments and invoices</li>
        <li>
          Communicate updates, offers, and promotions (if you have opted in)
        </li>
        <li>Ensure website security and prevent fraud</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
      <p className="mb-6">
        We use industry-standard security measures to protect your personal
        information. However, no method of transmission over the Internet is
        100% secure.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Sharing of Information</h2>
      <p className="mb-6">
        We do not sell or trade your personal information. We may share it with:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Trusted third-party service providers (payment processors, hosting, etc.)</li>
        <li>Legal authorities, if required by law</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">5. Cookies & Tracking Technologies</h2>
      <p className="mb-6">
        Our website may use cookies to enhance user experience and analyze site
        traffic. You can disable cookies in your browser settings.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Access, update, or delete your personal data</li>
        <li>Opt out of marketing emails</li>
        <li>Request a copy of your stored information</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Updates will be
        posted on this page with a revised “Effective Date.”
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
      <p className="mb-2">If you have any questions, please contact us at:</p>
      <p className="font-medium">📧 info@kcoders.com</p>
    </div>
    </section>
    </div>
  );
};

export default PrivacyPolicy;
