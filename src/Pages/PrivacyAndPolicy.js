import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import BackgroundImage from '../Assets/About/bgimage3.jpg'; // Import your background image

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat p-8 md:p-16 relative"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Background Overlay for Opacity */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Content Container */}
        <div className="relative max-w-[1000px] mx-auto bg-white bg-opacity-75 rounded-lg shadow-lg p-6 md:p-12 border border-gray-300">
          <h1 className="text-3xl font-bold text-green-700 mb-6 border-b pb-4 border-gray-200">Garbage Guardian Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Garbage Guardian respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines the data we collect, how we use it, and your rights regarding your personal information.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Data Collection</h2>
            <p className="text-gray-700 leading-relaxed text-justify">We collect certain data to provide a seamless and efficient experience for all users. Types of data collected include:</p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 pl-4 text-justify">
              <li><strong>Personal Information:</strong> Such as your name, email address, and phone number when you create an account or contact us.</li>
              <li><strong>Location Information:</strong> To support waste reporting and service requests, we may collect your location data (if you grant permission).</li>
              <li><strong>Usage Data:</strong> Information about your interactions on the platform, such as features accessed, reports submitted, and device information (e.g., IP address, browser type).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. How We Use Your Data</h2>
            <p className="text-gray-700 leading-relaxed text-justify">Your data helps us improve the platform and provide better service. Specifically, we use your information for:</p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 pl-4 text-justify">
              <li><strong>Service Requests and Waste Reports:</strong> To process and respond to your requests effectively.</li>
              <li><strong>Platform Improvement:</strong> To analyze usage trends, improve platform performance, and add relevant features.</li>
              <li><strong>Notifications:</strong> To send updates regarding your reports, service requests, and new platform features.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed text-justify">We value your privacy and do not share your personal data with third parties except:</p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 pl-4 text-justify">
              <li><strong>With Municipal Authorities:</strong> Necessary information may be shared to resolve waste management issues effectively.</li>
              <li><strong>For Legal Compliance:</strong> If required by law or to protect the rights, property, or safety of Garbage Guardian, our users, or the public.</li>
              <li><strong>With Service Providers:</strong> Third-party providers who assist us in operating the platform (e.g., hosting services, analytics) may have access to your data but are bound by confidentiality agreements.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Data Storage and Security</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              We take data security seriously. Your data is stored on secure servers, and we implement technical and organizational measures to protect it against unauthorized access, alteration, or destruction. However, please note that no internet transmission is entirely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed text-justify">As a user of Garbage Guardian, you have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 pl-4 text-justify">
              <li><strong>Access:</strong> Request access to the data we have collected about you.</li>
              <li><strong>Rectify:</strong> Request corrections to any inaccurate or incomplete information.</li>
              <li><strong>Delete:</strong> Request deletion of your account and personal information from our records.</li>
              <li><strong>Restrict Processing:</strong> Opt out of certain data processing activities where possible.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Garbage Guardian may use cookies or similar technologies to enhance user experience, remember preferences, and improve the platform. You may choose to disable cookies, but this could affect the functionality of certain features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              We may periodically update this Privacy Policy to reflect changes in our practices or for legal compliance. Users will be notified of major changes, and continued use of the platform constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">9. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              For questions or concerns about this Privacy Policy or your personal data, please contact us at:
            </p>
            <p className="text-gray-700 mt-3">
              <strong>Email:</strong> support@garbageguardian.com <br />
              <strong>Phone:</strong> +91 98765 43210 <br />
              <strong>Address:</strong> Garbage Guardian Support Center, Rajkot
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
