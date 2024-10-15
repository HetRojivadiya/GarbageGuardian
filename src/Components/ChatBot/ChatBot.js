import React, { useState } from 'react';
// Import your logo
import Logo from '../../Assets/GG/logo.png'; // Adjust this path to your logo image

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-4 z-50">
      {/* Chatbot Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-green-600 text-white p-6 rounded-full shadow-lg hover:bg-green-700 transition-transform duration-300 text-2xl"
        >
          💬
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-gray-100 w-[400px] h-[600px] rounded-xl shadow-2xl flex flex-col">
          {/* Chatbot Header */}
          <div className="bg-green-500 text-white p-4 flex justify-between items-center rounded-t-xl">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="GG Logo" className="w-14 h-8 rounded-full border-2 border-white" />
              <h2 className="text-lg font-bold">GG Virtual Assistance</h2>
            </div>
            {/* Close Button */}
            <button onClick={toggleChat} className="text-white font-bold text-xl">X</button>
          </div>

          {/* Chatbot Body */}
          <div className="flex-grow p-6 overflow-y-auto">
            {/* Bot Message */}
            <div className="mb-6">
              <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
                Hi, I'm the GarbageGuardian Virtual Assistant chatbot. If you need assistance with anything, I'm here to help! Your chat may be monitored and recorded for quality purposes. For information about our privacy practices, review the GarbageGuardian Privacy Policy.
              </div>
            </div>

            {/* User Options */}
            <div className="flex flex-col items-start space-y-3">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">Service Request</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">Who We Are</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">How to Issue Report</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">How to Purchase Recycle Products</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">Contact Us Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
