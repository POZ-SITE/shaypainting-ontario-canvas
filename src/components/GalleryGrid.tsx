
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

// Sample gallery data - in a real application, this might come from an API or CMS
const galleryItems = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Interior',
    imageSrc: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=1000&auto=format&fit=crop',
    description: 'Complete interior repaint with custom accent wall'
  },
  {
    id: 2,
    title: 'Contemporary Kitchen',
    category: 'Interior',
    imageSrc: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=1000&auto=format&fit=crop',
    description: 'Bright white kitchen with modern finishes'
  },
  {
    id: 3,
    title: 'Exterior Home Transformation',
    category: 'Exterior',
    imageSrc: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop',
    description: 'Complete exterior repaint with trim detail'
  },
  {
    id: 4,
    title: 'Commercial Office Space',
    category: 'Commercial',
    imageSrc: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1000&auto=format&fit=crop',
    description: 'Modern office space with accent colors'
  },
  {
    id: 5,
    title: 'Victorian Home Restoration',
    category: 'Exterior',
    imageSrc: 'https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=1000&auto=format&fit=crop',
    description: 'Historical restoration with period-appropriate colors'
  },
  {
    id: 6,
    title: 'Master Bedroom Suite',
    category: 'Interior',
    imageSrc: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1000&auto=format&fit=crop',
    description: 'Calming color palette for bedroom retreat'
  }
];

const GalleryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryItems.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

interface GalleryItemProps {
  item: {
    id: number;
    title: string;
    category: string;
    imageSrc: string;
    description: string;
  };
}

const GalleryItem = ({ item }: GalleryItemProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        {item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Image className="h-16 w-16 text-gray-400" />
          </div>
        )}
        <div className="absolute top-2 right-2 bg-shay-blue text-white text-xs px-2 py-1 rounded">
          {item.category}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1 text-shay-blue">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </CardContent>
    </Card>
  );
};

export default GalleryGrid;
