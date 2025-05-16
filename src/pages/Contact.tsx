
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | ShayPainting";
  }, []);

  return (
    <div className="min-h-screen">
      <Hero
        title="Contact Us"
        subtitle="Ready to Refresh Your Space?"
        backgroundImage="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-shay-blue">Get in Touch</h2>
            <p className="text-lg text-gray-700">
              Get in touch today for a free estimate or to ask us a question. We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            
            <div className="lg:col-span-2 bg-shay-light p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-shay-blue">Business Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-shay-blue mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.21a254.19,254.19,0,0,0,41.45,38.28,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.21c27.45-31.53,42-64.81,42-96.21A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Our Address</h4>
                    <p className="mt-1 text-gray-600">5 Wellington Street S</p>
                    <p className="text-gray-600">Kitchener, ON N2G 0E3</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-shay-blue mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Email</h4>
                    <a href="mailto:info@shaypainting.com" className="mt-1 text-shay-blue hover:underline">
                      info@shaypainting.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-shay-blue mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h40A8,8,0,0,1,176,128Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Business Hours</h4>
                    <p className="mt-1 text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-shay-blue">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-shay-blue hover:text-opacity-80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-shay-blue hover:text-opacity-80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M184,64H72A56,56,0,0,0,16,120v16a56,56,0,0,0,56,56H184a56,56,0,0,0,56-56V120A56,56,0,0,0,184,64Zm40,72a40,40,0,0,1-40,40H72a40,40,0,0,1-40-40V120a40,40,0,0,1,40-40H184a40,40,0,0,1,40,40Zm-56-4a12,12,0,1,1-12-12A12,12,0,0,1,168,132Zm-80,0a12,12,0,1,1-12-12A12,12,0,0,1,88,132Zm72.27,32a8,8,0,1,1-13.8-8.14,28,28,0,0,0,48.06,0,8,8,0,1,1,13.8,8.14A44,44,0,0,1,160.27,164Z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-shay-blue hover:text-opacity-80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8,8,8,0,0,0-8-8H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v75.28a4,4,0,0,1-4.45,4A104,104,0,1,1,232,128Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-shay-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-shay-blue">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.570548654352!2d-80.49573502402908!3d43.44968166605935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f35dcd9e3b%3A0x908774edd00245dc!2s5%20Wellington%20St%20S%2C%20Kitchener%2C%20ON%20N2G%200E3%2C%20Canada!5e0!3m2!1sen!2sus!4v1716440684972!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

