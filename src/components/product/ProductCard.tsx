import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  description,
  image,
  category
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link href={`/products/${id}`}>
        <div className="relative h-48 w-full">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">${price.toFixed(2)} CAD</span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;