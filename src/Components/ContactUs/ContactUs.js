import React from 'react';
import backgroundImage from '../../Assets/HeroSection/3.jpg'; // Adjust the path as needed

const ContactUs = () => {
  return (
    <div className="relative min-h-screen bg-gray-800 overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Contact Us</h2>
          <p className="mt-2 text-center text-gray-600">
            We're here to help! Fill out the form below to reach us.
          </p>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
          <div className="mt-4 text-center text-gray-600">
            <p>Email: support@garbageguardian.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
