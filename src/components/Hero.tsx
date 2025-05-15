
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  fullHeight?: boolean;
}

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink = '/contact',
  backgroundImage = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070&auto=format&fit=crop',
  fullHeight = false,
}: HeroProps) => {
  return (
    <div 
      className={`relative w-full flex items-center justify-center ${fullHeight ? 'min-h-screen' : 'min-h-[70vh]'}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 overflow-hidden">
          <span className="block animate-text-reveal opacity-0">{title}</span>
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto overflow-hidden">
            <span className="block animate-text-reveal-delay-1 opacity-0">{subtitle}</span>
          </p>
        )}
        
        {ctaText && (
          <div className="overflow-hidden">
            <span className="block animate-text-reveal-delay-2 opacity-0">
              <Link 
                to={ctaLink}
                className="inline-block bg-shay-blue text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-all"
              >
                {ctaText}
              </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
