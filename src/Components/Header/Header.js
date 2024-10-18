import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaExclamationTriangle, FaUser, FaPhone } from 'react-icons/fa'; // Import icons
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode to decode the token
import Logo from '../../Assets/GG/logo.png';

const Header = () => {
  const [user, setUser] = useState(null);

  // Function to check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    if (token) {
      const decodedToken = jwtDecode(token); // Decode the token to get user data
      console.log(decodedToken);
      setUser(decodedToken); // Store user data (e.g., name, email, etc.)
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from local storage
    setUser(null); // Reset the user state
    // Optional: You can redirect to the login page or home after logout
  };

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 mr-3 " /> 
          <div className="text-green-600 font-bold text-xl">Garbage Guardian</div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="flex items-center text-gray-700 hover:text-green-600 transition duration-200">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/about" className="flex items-center text-gray-700 hover:text-green-600 transition duration-200">
            <FaInfoCircle className="mr-1" /> About
          </Link>
          <Link to="/report" className="flex items-center text-gray-700 hover:text-green-600 transition duration-200">
            <FaExclamationTriangle className="mr-1" /> Report Issue
          </Link>
          <Link to="/contactus" className="flex items-center text-gray-700 hover:text-green-600 transition duration-200">
            <FaPhone className="mr-1" /> Contact Us
          </Link>

          {/* Conditionally render Login/Signup or User Info */}
          {user ? (
            <div className="flex items-center space-x-4">
              <FaUser className="text-gray-700" />
              <span className="text-gray-700 font-semibold">{user.userName}</span>
              <button 
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-200 flex items-center">
              <FaUser className="mr-1" /> Login/Signup
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button (Optional) */}
        <div className="md:hidden">
          <button className="text-green-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
