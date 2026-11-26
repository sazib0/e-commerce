import type { Offer } from '../types';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Spring Vegetables Bundle',
    description: 'Get 20% off on fresh spring vegetables',
    discount: 20,
    validUntil: '2024-04-30',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
    category: 'seasonal'
  },
  {
    id: '2',
    title: 'Flash Sale: Fresh Milk',
    description: 'Limited time offer: 15% off on fresh milk',
    discount: 15,
    validUntil: '2024-03-25',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150',
    category: 'flash'
  },
  {
    id: '3',
    title: 'Weekend Special Bundle',
    description: 'Save 25% on weekend grocery bundle',
    discount: 25,
    validUntil: '2024-03-31',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
    category: 'bundle'
  }
];