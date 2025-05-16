
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-shay-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShayPainting</h3>
            <p className="mb-4">
              Ontario's trusted residential & commercial painting experts.
            </p>
            <p className="mb-2">
              5 Wellington Street S
            </p>
            <p>
              Kitchener, ON N2G 0E3
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-shay-light-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-shay-light-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-shay-light-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-shay-light-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">
              <span className="inline-block mr-2">✉️</span>
              <a href="mailto:info@shaypainting.com" className="hover:text-shay-light-blue transition-colors">
                info@shaypainting.com
              </a>
            </p>
            <p className="mb-2">
              <span className="inline-block mr-2">⏰</span>
              Mon-Fri: 8AM-6PM
            </p>
            <p className="mb-4">
              <span className="inline-block mr-2">⏰</span>
              Sat: 10AM-2PM
            </p>
            <Link to="/contact" className="inline-block mt-2 bg-white text-shay-blue px-6 py-2 rounded-md hover:bg-opacity-90 transition-all">
              Get a Free Estimate
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p>&copy; {currentYear} ShayPainting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

