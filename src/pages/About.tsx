
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    document.title = "About Us | ShayPainting";
  }, []);

  return (
    <div className="min-h-screen">
      <Hero
        title="About ShayPainting"
        subtitle="Built on Trust. Backed by Craftsmanship."
        backgroundImage="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1770&auto=format&fit=crop"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              At ShayPainting, we believe a great paint job is more than just color — it's about confidence, care, and customer satisfaction.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Founded in Ontario, our mission is simple: provide professional, affordable painting services that make people proud of their spaces. From small touch-ups to full renovations, we treat every project with respect, precision, and pride.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We're fully insured, locally trusted, and dedicated to exceeding expectations.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-shay-blue">Our Approach</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We understand that inviting painters into your home or business requires trust. That's why we approach every project with respect, professionalism, and attention to detail.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our process begins with a thorough consultation to understand your vision and needs. We provide transparent pricing, detailed timelines, and regular updates throughout your project.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From surface preparation to final inspection, we follow best practices and use premium materials to ensure lasting results that you'll love for years to come.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=1770&auto=format&fit=crop" 
                alt="Professional Painting Approach" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-shay-blue">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="bg-white rounded-xl shadow-md border-0 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="text-shay-blue mb-6 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M176,56A64.07,64.07,0,0,0,112,120v58.13A24,24,0,0,0,100,200v16a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V200a24,24,0,0,0-12-20.82V120a32,32,0,0,1,64,0v16a8,8,0,0,0,16,0V120A64.07,64.07,0,0,0,176,56Zm-36,152H116v-8a8,8,0,0,1,16,0v8Zm-12-40a8,8,0,0,0-8,8v0a8,8,0,0,1-16,0V120a56,56,0,0,1,112,0v12H204V120a44,44,0,0,0-88,0v48Zm108,16a8,8,0,0,1-8,8H28a8,8,0,0,1,0-16H228A8,8,0,0,1,236,184Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Quality Workmanship</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We don't cut corners. Our painters are skilled professionals who take pride in their craft and deliver exceptional results.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-xl shadow-md border-0 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="text-shay-blue mb-6 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V88a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm24,36a12,12,0,1,1-12-12A12,12,0,0,1,144,172Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Transparent Pricing</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  No surprises or hidden costs. We provide detailed estimates upfront and stick to our quotes with integrity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-xl shadow-md border-0 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="text-shay-blue mb-6 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192ZM164,96a12,12,0,1,1-12-12A12,12,0,0,1,164,96Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,204,96Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Respect for Your Space</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We treat your property with care, maintaining cleanliness throughout the project and thoroughly cleaning up when we're done.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-shay-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contact our team today to discuss your project and experience the ShayPainting difference.
          </p>
          <Button asChild size="lg" className="bg-white text-shay-blue hover:bg-gray-100 px-8 py-6 text-lg font-medium">
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
