
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | ShayPainting";
  }, []);

  return (
    <div className="min-h-screen">
      <Hero
        title="Our Services"
        subtitle="Professional painting solutions for any project"
        backgroundImage="https://images.unsplash.com/photo-1558618078-f44061756dc5?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-700">
              From cozy home interiors to large-scale commercial buildings, ShayPainting offers a complete range of professional painting services across Ontario. Our skilled team uses high-quality materials and expert techniques to ensure lasting results.
            </p>
          </div>

          <div className="space-y-20">
            {/* Interior Painting */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070&auto=format&fit=crop" 
                  alt="Interior Painting" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-shay-blue">Interior Painting</h2>
                <p className="text-gray-700 mb-6">
                  Freshen up your walls, ceilings, trims, and more. We offer clean lines, smooth finishes, and minimal disruption to your daily life.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Expert surface preparation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Premium quality paints and materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Careful protection of furniture and floors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Thorough cleanup after completion</span>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-block bg-shay-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Exterior Painting */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1565876427310-bf7f49597d68?q=80&w=2070&auto=format&fit=crop" 
                    alt="Exterior Painting" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4 text-shay-blue">Exterior Painting</h2>
                <p className="text-gray-700 mb-6">
                  Protect and beautify your home or business with weather-resistant, professional-grade coatings that stand the test of time.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Thorough power washing and preparation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Weather-resistant, UV-protected paints</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Protection of landscaping and outdoor features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Long-lasting finish with warranty options</span>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-block bg-shay-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Drywall Repair */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600566752355-35803d47f1f2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Drywall Repair" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-shay-blue">Drywall Repair</h2>
                <p className="text-gray-700 mb-6">
                  Cracks, holes, and water damage? We restore your walls to like-new condition before applying the perfect coat of paint.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Patch and repair holes of any size</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Fix water damage and stains</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Texture matching for seamless repairs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Prime and paint to match existing walls</span>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-block bg-shay-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Wallpaper Removal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1631132329892-578aa42429b0?q=80&w=2071&auto=format&fit=crop" 
                    alt="Wallpaper Removal" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4 text-shay-blue">Wallpaper Removal</h2>
                <p className="text-gray-700 mb-6">
                  We safely and efficiently remove old wallpaper, preparing your walls for a flawless new finish.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Careful removal without wall damage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Complete cleaning of adhesive residue</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Wall preparation for new paint or wallpaper</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Efficient and mess-free process</span>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-block bg-shay-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Deck & Fence Staining */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1591101761702-0c344bd6a9b6?q=80&w=2071&auto=format&fit=crop" 
                  alt="Deck & Fence Staining" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-shay-blue">Deck & Fence Staining</h2>
                <p className="text-gray-700 mb-6">
                  Extend the life of your outdoor wood surfaces while enhancing their natural beauty with expert staining services.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Professional cleaning and preparation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Weather-resistant, high-quality stains</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Protection against UV rays and moisture</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-shay-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Custom color matching and finish options</span>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-block bg-shay-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-shay-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-shay-blue">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Our team is ready to bring your vision to life!
          </p>
          <Link 
            to="/contact" 
            className="bg-shay-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
