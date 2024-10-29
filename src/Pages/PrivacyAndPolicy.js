import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const PrivacyPolicy = () => {
  return (
    <>
   <Header/>
    <div className="min-h-screen bg-gray-100 p-8 md:p-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-12">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Garbage Guardian Privacy Policy</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            Garbage Guardian respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines the data we collect, how we use it, and your rights regarding your personal information.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Data Collection</h2>
          <p className="text-gray-600">We collect certain data to provide a seamless and efficient experience for all users. Types of data collected include:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li><strong>Personal Information:</strong> Such as your name, email address, and phone number when you create an account or contact us.</li>
            <li><strong>Location Information:</strong> To support waste reporting and service requests, we may collect your location data (if you grant permission).</li>
            <li><strong>Usage Data:</strong> Information about your interactions on the platform, such as features accessed, reports submitted, and device information (e.g., IP address, browser type).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. How We Use Your Data</h2>
          <p className="text-gray-600">Your data helps us improve the platform and provide better service. Specifically, we use your information for:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li><strong>Service Requests and Waste Reports:</strong> To process and respond to your requests effectively.</li>
            <li><strong>Platform Improvement:</strong> To analyze usage trends, improve platform performance, and add relevant features.</li>
            <li><strong>Notifications:</strong> To send updates regarding your reports, service requests, and new platform features.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Data Sharing and Disclosure</h2>
          <p className="text-gray-600">We value your privacy and do not share your personal data with third parties except:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li><strong>With Municipal Authorities:</strong> Necessary information may be shared to resolve waste management issues effectively.</li>
            <li><strong>For Legal Compliance:</strong> If required by law or to protect the rights, property, or safety of Garbage Guardian, our users, or the public.</li>
            <li><strong>With Service Providers:</strong> Third-party providers who assist us in operating the platform (e.g., hosting services, analytics) may have access to your data but are bound by confidentiality agreements.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Data Storage and Security</h2>
          <p className="text-gray-600">
            We take data security seriously. Your data is stored on secure servers and we implement technical and organizational measures to protect it against unauthorized access, alteration, or destruction. However, please note that no internet transmission is entirely secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Your Rights</h2>
          <p className="text-gray-600">As a user of Garbage Guardian, you have the right to:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li><strong>Access:</strong> Request access to the data we have collected about you.</li>
            <li><strong>Rectify:</strong> Request corrections to any inaccurate or incomplete information.</li>
            <li><strong>Delete:</strong> Request deletion of your account and personal information from our records.</li>
            <li><strong>Restrict Processing:</strong> Opt out of certain data processing activities where possible.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600">
            Garbage Guardian may use cookies or similar technologies to enhance user experience, remember preferences, and improve the platform. You may choose to disable cookies, but this could affect the functionality of certain features.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">8. Updates to This Policy</h2>
          <p className="text-gray-600">
            We may periodically update this Privacy Policy to reflect changes in our practices or for legal compliance. Users will be notified of major changes, and continued use of the platform constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">9. Contact Us</h2>
          <p className="text-gray-600">
            For questions or concerns about this Privacy Policy or your personal data, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> support@garbageguardian.com <br />
            <strong>Phone:</strong> +123-456-7890 <br />
            <strong>Address:</strong> Garbage Guardian Support Center, [Your Location]
          </p>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
