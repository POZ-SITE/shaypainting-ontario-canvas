
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link = '/services',
  className,
}: ServiceCardProps) => {
  const content = (
    <div className={cn('service-card bg-white p-6 rounded-lg shadow group', className)}>
      <div className="mb-4 text-shay-gray service-card-icon text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-shay-blue">{title}</h3>
      <p className="text-shay-gray mb-4">{description}</p>
      <span className="text-shay-blue font-medium inline-flex items-center group-hover:underline">
        Learn more
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </div>
  );

  return link ? (
    <Link to={link} className="block h-full">
      {content}
    </Link>
  ) : (
    content
  );
};

export default ServiceCard;
