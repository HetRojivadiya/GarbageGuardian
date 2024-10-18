import React from 'react';

import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function About() {
  return (
    <div className="about-page-bg">
      <div className="about-page">
        <h2>About Us</h2>
        <p>
          Garbage Guardian is dedicated to making cities cleaner and more sustainable by providing a platform where citizens can report waste issues in real time. We aim to create a healthier, cleaner environment for all by empowering individuals, organizations, and municipal bodies to work together efficiently.
        </p>
        <p>
          Our team consists of environmental enthusiasts, waste management experts, and developers who believe in the power of technology to solve real-world problems. By harnessing the collective efforts of citizens and local authorities, we aim to make waste management more effective and accessible.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our mission is to transform urban waste management by facilitating community involvement and rapid response systems. By bridging the gap between citizens and municipalities, we ensure faster action and more accountability in managing waste.
        </p>

        <h3>Meet Our Team</h3>
        <p>
          Our dedicated team of professionals in environmental science and technology are committed to ensuring the success of Garbage Guardian. Learn more about our team and their contributions to urban waste solutions.
        </p>

        <h3>Join Our Movement</h3>
        <p>
          Garbage Guardian is not just a platform—it's a movement to create cleaner cities for future generations. Join our community of eco-conscious individuals and be part of the solution. Together, we can make a difference.
        </p>

        <h3>Stay Informed</h3>
        <p>
          Sign up for our newsletter to stay updated on waste management tips, success stories, and updates on how Garbage Guardian is making an impact. Don’t miss out on ways to contribute to a cleaner future.
        </p>

        <h3 align="center">Connect with us on Social Media</h3>
        <div className="social-media-icons">
          <a href="https://twitter.com/GarbageGuardian" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.facebook.com/GarbageGuardian" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://www.instagram.com/garbageguardian/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/garbageguardian" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;