
import React from 'react';
import { cn } from '@/lib/utils';
import { MessageSquareQuote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  location,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn('bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl', className)}>
      <div className="mb-4 text-shay-blue">
        <MessageSquareQuote className="h-8 w-8 opacity-40" />
      </div>
      <p className="text-lg mb-4 text-gray-700">{quote}</p>
      <div>
        <p className="font-bold text-shay-blue">{author}</p>
        {location && <p className="text-shay-gray">{location}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
