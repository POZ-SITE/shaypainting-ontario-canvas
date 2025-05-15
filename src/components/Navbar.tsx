
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-shay-blue">
          ShayPainting
        </NavLink>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-shay-gray focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              cn(
                'font-medium transition-colors duration-200',
                isActive ? 'text-shay-blue' : 'text-shay-gray hover:text-shay-blue'
              )
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              cn(
                'font-medium transition-colors duration-200',
                isActive ? 'text-shay-blue' : 'text-shay-gray hover:text-shay-blue'
              )
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              cn(
                'font-medium transition-colors duration-200',
                isActive ? 'text-shay-blue' : 'text-shay-gray hover:text-shay-blue'
              )
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              cn(
                'font-medium transition-colors duration-200',
                isActive ? 'text-shay-blue' : 'text-shay-gray hover:text-shay-blue'
              )
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/contact" 
            className="bg-shay-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
          >
            Get a Free Estimate
          </NavLink>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
            <div className="flex flex-col space-y-3 px-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  cn(
                    'font-medium py-2 transition-colors duration-200',
                    isActive ? 'text-shay-blue' : 'text-shay-gray hover:text-shay-blue'
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  cn(
                    'font-medium py-2 transition-colors duration-200',
                    isActive ? 'text-shay-blue' : 'text-shay-gray hover:text-shay-blue'
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  cn(
                    'font-medium py-2 transition-colors duration-200',
                    isActive ? 'text-shay-blue' : 'text-shay-gray hover:text-shay-blue'
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  cn(
                    'font-medium py-2 transition-colors duration-200',
                    isActive ? 'text-shay-blue' : 'text-shay-gray hover:text-shay-blue'
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink 
                to="/contact" 
                className="bg-shay-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Free Estimate
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
