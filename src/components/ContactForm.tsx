
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to your server or email service
      console.log('Form submitted:', formData);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shay-blue focus:border-transparent"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shay-blue focus:border-transparent"
          placeholder="Your email"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message / Project Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shay-blue focus:border-transparent"
          placeholder="Tell us about your project"
        />
      </div>
      
      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-shay-blue text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all font-medium disabled:opacity-70"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
