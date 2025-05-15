
import React from 'react';
import { cn } from '@/lib/utils';

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
    <div className={cn('bg-white p-6 rounded-lg shadow-md', className)}>
      <div className="mb-4 text-shay-blue">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="36" 
          height="36" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="opacity-40"
        >
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
        </svg>
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
