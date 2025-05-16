
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import GalleryGrid from '@/components/GalleryGrid';

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery | ShayPainting";
  }, []);

  return (
    <div className="min-h-screen">
      <Hero
        title="Our Work"
        subtitle="See Our Painting Projects"
        backgroundImage="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-shay-blue">Project Gallery</h2>
            <p className="text-lg text-gray-700">
              Browse through our collection of completed painting projects. From residential to commercial, 
              interior to exterior, we take pride in our quality workmanship.
            </p>
          </div>
          
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
