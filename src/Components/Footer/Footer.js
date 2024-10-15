import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6 mt-16">
      <div className="container mx-auto flex justify-between">
        <p>© 2024 Waste Management</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
