import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import backGroundImage from '../../Assets/HeroSection/4.jpg';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/contact', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                setSuccessMessage('Your message has been sent successfully! We will get back to you shortly.');
                setErrorMessage('');
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setErrorMessage('Failed to send the message. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="relative min-h-screen">
            {/* Background Image with Blur */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backGroundImage})`, filter: 'blur(8px)' }}
            />
            {/* Optional overlay for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-green-600 opacity-60"></div>

            {/* Content Container */}
            <div className="relative max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8 mt-16 transform transition-transform hover:scale-102">
                <h2 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-400 animate-text">
                    Contact Garbage Guardian
                </h2>

                <p className="text-md text-center text-gray-700 mb-4 font-light">
                    Have questions or feedback? We’d love to hear from you!
                </p>

                <div className="text-center mb-6">
                    <p className="text-gray-700 font-medium text-md">
                        <span className="block text-green-500">Email:</span> garbageguardian@support.com
                    </p>
                    <p className="text-gray-700 font-medium text-md">
                        <span className="block text-green-500">Phone:</span> +91 9876543210
                    </p>
                    <p className="text-gray-700 font-medium text-md">
                        <span className="block text-green-500">Address:</span> City Hall, Gujarat, India
                    </p>
                </div>

                <div className="mt-4">
                    <h3 className="text-lg font-bold text-emerald-600 text-center mb-4">
                        Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4 my-4">
                        <div className="relative">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <div className="relative">
                                <FaComment className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600" />
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    required
                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                                ></textarea>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-block bg-gradient-to-r from-emerald-600 to-green-400 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-emerald-700 hover:to-green-500 transition duration-200 transform hover:scale-102"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Success and Error Messages */}
                    {successMessage && (
                        <div className="mt-4 text-center text-green-600 font-semibold text-md">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="mt-4 text-center text-red-600 font-semibold text-md">
                            {errorMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
