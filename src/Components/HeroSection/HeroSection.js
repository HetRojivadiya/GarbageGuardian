import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import { FaExclamationTriangle } from 'react-icons/fa';

import Image1 from '../../Assets/HeroSection/1.jpg';
import Image2 from '../../Assets/HeroSection/2.jpg';
import Image3 from '../../Assets/HeroSection/3.jpg';

import Image4 from '../../Assets/HeroSection/4.jpg';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <img src={Image4} alt="Clean City" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      {/* Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-transparent opacity-80" />
      <div className="container mx-auto text-center relative z-10 py-12"> {/* Reduced padding */}
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
      <span className="text-emerald-800">Building Today,</span>
      <span className="text-green-600"> For Tomorrow</span>
</h1>

        <p className="mt-2 text-lg text-green-800 mb-6 drop-shadow-lg">Report waste, recycle, and make your community a better place.</p> {/* Reduced margin bottom */}

        {/* Image Carousel */}
        <div className="mt-6"> {/* Reduced margin top */}
          <Carousel 
            autoPlay 
            infiniteLoop 
            showThumbs={false} 
            showStatus={false} 
            interval={5000} 
            className="mt-6"
          >
            <div>
              <img src={Image1} alt="Clean City 1" className="h-64 w-full object-contain" /> {/* Reduced height */}
            </div>
            <div>
              <img src={Image2} alt="Clean City 2" className="h-64 w-full object-contain" /> {/* Reduced height */}
            </div>
            <div>
              <img src={Image3} alt="Clean City 3" className="h-64 w-full object-contain" /> {/* Reduced height */}
            </div>
          </Carousel>
        </div>

        {/* Call to Action with Enhanced Styles */}
        <div className="mt-6 flex justify-center space-x-6"> {/* Reduced margin top */}
          <Link to="/report" className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:bg-green-700 flex items-center"> {/* Reduced padding */}
          <FaExclamationTriangle className="mr-1" />
            Report an Issue
          </Link>

          <Link to="/about" className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:bg-green-600 hover:text-white flex items-center"> {/* Reduced padding */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z" />
            </svg>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
