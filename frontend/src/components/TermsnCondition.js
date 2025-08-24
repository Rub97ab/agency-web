import React from "react";

const TermsnCondition = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <section
        id="terms"
        className="py-24 px-4 lg:px-8 bg-gray-900 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Terms & Conditions – KCoders</h2>
          <p className="text-sm text-gray-400 mb-8">
            Effective Date: August 24, 2025
          </p>

          <p className="mb-6">
            Welcome to <strong>KCoders</strong>. By accessing or using our
            website and services, you agree to be bound by the following Terms &
            Conditions.
          </p>

          <h2 className="text-xl font-semibold mb-2">1. Services</h2>
          <p className="mb-6">
            KCoders provides software development and related IT services. The
            scope, timeline, and fees for projects will be defined in a written
            agreement with each client.
          </p>

          <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
          <p className="mb-6">
            All content, designs, code, and materials provided by KCoders remain
            our intellectual property unless otherwise agreed in writing.
            Clients retain rights to their own data, trademarks, and proprietary
            materials.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. Payments</h2>
          <p className="mb-6">
            Payments must be made as agreed in the project contract. Late
            payments may result in suspension or termination of services.
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Confidentiality</h2>
          <p className="mb-6">
            Both parties agree to maintain confidentiality of sensitive
            project-related information unless required by law.
          </p>

          <h2 className="text-xl font-semibold mb-2">5. Warranties & Liability</h2>
          <p className="mb-6">
            KCoders will deliver services with reasonable skill and care.
            However, we are not liable for damages caused by misuse of delivered
            software, third-party issues, or client-provided data.
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
          <p className="mb-6">
            Either party may terminate services with written notice, subject to
            the terms in the service agreement.
          </p>

          <h2 className="text-xl font-semibold mb-2">7. Limitation of Use</h2>
          <p className="mb-6">
            You agree not to misuse our website or services for unlawful
            purposes, reverse-engineer our code, or infringe on intellectual
            property rights.
          </p>

          <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
          <p className="mb-6">
            These Terms & Conditions are governed by the laws of [Insert Your
            Country/Region].
          </p>

          <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
          <p className="mb-6">
            KCoders reserves the right to modify these Terms at any time.
            Continued use of our services indicates acceptance of the updated
            Terms.
          </p>

          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p className="mb-2">
            For questions about these Terms, please contact:
          </p>
          <p className="font-medium">📧 info@kcoders.com</p>
        </div>
      </section>
    </div>
  );
};

export default TermsnCondition;
