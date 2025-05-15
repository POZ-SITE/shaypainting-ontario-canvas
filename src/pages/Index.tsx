
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    document.title = "ShayPainting | Ontario's Trusted Painting Experts";
  }, []);

  return (
    <div className="min-h-screen">
      <Hero
        title="Transform Your Space with ShayPainting"
        subtitle="Ontario's Trusted Residential & Commercial Painting Experts"
        ctaText="Get a Free Estimate"
        fullHeight
      />

      <section className="py-16 bg-shay-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-shay-blue">Welcome to ShayPainting</h2>
            <p className="text-lg text-gray-700 mb-10">
              At ShayPainting, we bring color, craftsmanship, and care to every brushstroke. Whether you're refreshing a single room or repainting an entire property, our professional painters deliver stunning results — on time and on budget.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/services" 
                className="bg-shay-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-shay-blue">Our Services</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Professional painting services tailored to your needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Interior & Exterior Painting" 
              description="Transform your home or business with our professional painting services, inside and out."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M232,92a12,12,0,0,1-12,12,12.44,12.44,0,0,1-2.36-.24,4,4,0,0,0-4.45,2.52A44.07,44.07,0,0,1,124.8,98a4,4,0,0,0-7,2.57,44.09,44.09,0,0,1-50.67,47.47,4,4,0,0,0-4.74,4.39A36,36,0,1,0,24,172a4,4,0,0,0,5.42-1.87A44.11,44.11,0,0,1,93.6,124.8a4,4,0,0,0,7-2.57A44.09,44.09,0,0,1,151.25,74.9a4,4,0,0,0,4.75-4.47A36,36,0,1,0,196,48a4,4,0,0,0-5.55,1.82A44,44,0,0,1,120.09,86.2a4,4,0,0,0,3.67,6.25A36.06,36.06,0,0,0,195.83,168l-43.31,43.31a8,8,0,0,1-11.31,0L93.17,163.26a8,8,0,0,1,0-11.31l48.69-48.69a8,8,0,0,1,11.31,0L168,118.07a8,8,0,0,0,11.31-11.32l-14.83-14.82a24,24,0,0,0-33.94,0L82,140.62a24,24,0,0,0,0,34L130.21,223a24,24,0,0,0,33.94,0L208,179.17a36.2,36.2,0,0,0,7.34.75,36,36,0,0,0,35.07-44.33,4,4,0,0,0-4.74-3.13A12,12,0,0,1,232,92ZM36,196a20,20,0,0,1-19.19-25.78A60.07,60.07,0,0,0,51,125.38,60.09,60.09,0,0,0,96.43,180,20,20,0,0,1,36,196Zm140-28a20,20,0,0,1,19.19,25.79,60.06,60.06,0,0,0-34.22,44.82A60.09,60.09,0,0,0,115.56,192,20,20,0,0,1,176,168ZM220,128a20,20,0,0,1-19.19-25.76,60.11,60.11,0,0,0,34.22-44.82A60.09,60.09,0,0,0,180.44,12,20,20,0,0,1,220,64,20,20,0,0,1,200.81,38.2a4,4,0,0,0-4.46,3.52,44.07,44.07,0,0,1-88.62,10.11,4,4,0,0,0-7.46-.56A44.08,44.08,0,0,1,61.47,52.92,4,4,0,0,0,56.6,56,36,36,0,0,0,96.43,108a4,4,0,0,0,3.7-2.47A44.08,44.08,0,0,1,153.14,77a4,4,0,0,0,7.46.54A44.09,44.09,0,0,1,195.9,68.11a4,4,0,0,0,4.94-3,20,20,0,0,1,39.07,15.12A60.11,60.11,0,0,0,205.7,125.09,20,20,0,0,1,220,128Z"></path>
                </svg>
              }
            />
            <ServiceCard 
              title="Drywall Repair" 
              description="Cracks, holes, and water damage? We restore your walls to like-new condition."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V96H32V64ZM32,192V112H224v80Z"></path>
                </svg>
              }
            />
            <ServiceCard 
              title="Wallpaper Removal" 
              description="We safely and efficiently remove old wallpaper for a flawless new finish."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,96V48a8,8,0,0,0-8-8H160a8,8,0,0,0-5.66,2.34L74.34,122.34a8,8,0,0,0,0,11.32l48,48a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,216,96ZM128,164.69,91.31,128,160,59.31V88h28.69ZM53.17,114.83a8,8,0,0,1,11.31-11.32L98.67,137.7a8,8,0,0,1-11.31,11.31ZM69.33,155.5a8,8,0,0,1,0,11.31l-5.66,5.66a8,8,0,1,1-11.31-11.31l5.65-5.66A8,8,0,0,1,69.33,155.5ZM34.83,98.83,40.5,93.17a8,8,0,0,1,11.31,11.31L46.14,110.2A8,8,0,0,1,34.83,98.83Z"></path>
                </svg>
              }
            />
            <ServiceCard 
              title="Deck & Fence Staining" 
              description="Extend the life of your outdoor wood surfaces with expert staining services."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M232,64H191.5L175,47.52a16,16,0,0,0-11.31-4.69H92.31A16,16,0,0,0,81,47.52L64.5,64H24A16,16,0,0,0,8,80V176a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V80A16,16,0,0,0,232,64Zm0,112H24V80H72l21.17-21.17a3.9,3.9,0,0,1,2.77-1.15c.18,0,.36,0,.54,0h62.87a3.9,3.9,0,0,1,2.77,1.18L184,80h48ZM128,96a40,40,0,1,0,40,40A40,40,0,0,0,128,96Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,160Z"></path>
                </svg>
              }
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center text-shay-blue font-semibold hover:underline"
            >
              View All Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-shay-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="ShayPainting transformed my house! Their team was punctual, professional, and the results are beautiful."
              author="Sarah L."
              location="Toronto"
              className="bg-white/10 text-white border border-white/20"
            />
            <TestimonialCard 
              quote="I was amazed at the attention to detail. They went above and beyond what I expected."
              author="Michael R."
              location="Ottawa"
              className="bg-white/10 text-white border border-white/20"
            />
            <TestimonialCard 
              quote="The team at ShayPainting were true professionals. Clean, efficient, and the quality is outstanding."
              author="Jennifer T."
              location="Hamilton"
              className="bg-white/10 text-white border border-white/20"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-shay-blue">Ready to Transform Your Space?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate. Let's bring your vision to life!
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

export default Index;
