
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = "About Us | ShayPainting";
  }, []);

  return (
    <div className="min-h-screen">
      <Hero
        title="About ShayPainting"
        subtitle="Built on Trust. Backed by Craftsmanship."
        backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              At ShayPainting, we believe a great paint job is more than just color — it's about confidence, care, and customer satisfaction.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Founded in Ontario, our mission is simple: provide professional, affordable painting services that make people proud of their spaces. From small touch-ups to full renovations, we treat every project with respect, precision, and pride.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We're fully insured, locally trusted, and dedicated to exceeding expectations.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-shay-blue">Our Approach</h2>
              <p className="text-gray-700 mb-4">
                We understand that inviting painters into your home or business requires trust. That's why we approach every project with respect, professionalism, and attention to detail.
              </p>
              <p className="text-gray-700 mb-4">
                Our process begins with a thorough consultation to understand your vision and needs. We provide transparent pricing, detailed timelines, and regular updates throughout your project.
              </p>
              <p className="text-gray-700">
                From surface preparation to final inspection, we follow best practices and use premium materials to ensure lasting results that you'll love for years to come.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581088382991-83277d5fb6af?q=80&w=2071&auto=format&fit=crop" 
                alt="Our Approach" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-shay-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-shay-blue">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
              <div className="text-shay-blue mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M176,56A64.07,64.07,0,0,0,112,120v58.13A24,24,0,0,0,100,200v16a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V200a24,24,0,0,0-12-20.82V120a32,32,0,0,1,64,0v16a8,8,0,0,0,16,0V120A64.07,64.07,0,0,0,176,56Zm-36,152H116v-8a8,8,0,0,1,16,0v8Zm-12-40a8,8,0,0,0-8,8v0a8,8,0,0,1-16,0V120a56,56,0,0,1,112,0v12H204V120a44,44,0,0,0-88,0v48Zm108,16a8,8,0,0,1-8,8H28a8,8,0,0,1,0-16H228A8,8,0,0,1,236,184Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Workmanship</h3>
              <p className="text-gray-700">
                We don't cut corners. Our painters are skilled professionals who take pride in their craft and deliver exceptional results on every project.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{animationDelay: '0.4s'}}>
              <div className="text-shay-blue mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V88a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm24,36a12,12,0,1,1-12-12A12,12,0,0,1,144,172Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-700">
                No surprises or hidden costs. We provide detailed estimates upfront and stick to our quotes, ensuring you know exactly what to expect.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{animationDelay: '0.6s'}}>
              <div className="text-shay-blue mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192ZM164,96a12,12,0,1,1-12-12A12,12,0,0,1,164,96Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,204,96Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Respect for Your Space</h3>
              <p className="text-gray-700">
                We treat your property with care, maintaining cleanliness throughout the project and thoroughly cleaning up when we're done.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-shay-blue">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your project and experience the ShayPainting difference.
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

export default About;
