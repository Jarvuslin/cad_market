'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products?id=${params.id}`);
        
        if (!response.ok) {
          throw new Error('Product not found');
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 flex justify-center items-center h-96">
          <p className="text-xl text-gray-500">Loading product...</p>
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 flex flex-col items-center h-96">
          <p className="text-xl text-red-500 mb-6">{error || 'Product not found'}</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Return to Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-md">
              <Image 
                src={product.image} 
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)} CAD</span>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">(24 reviews)</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex-1 text-center">
                  Add to Cart
                </button>
                <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors flex-1 text-center">
                  Contact Seller
                </button>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Product Details</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Format</h3>
                  <p className="text-gray-600">Digital Download</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">License</h3>
                  <p className="text-gray-600">Standard License</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Support</h3>
                  <p className="text-gray-600">6 months</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Last Updated</h3>
                  <p className="text-gray-600">April 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would typically be populated with actual related products */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Related Product {i}</h3>
                  <p className="text-gray-600 text-sm mb-3">Brief description of the related product.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">$99.99 CAD</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}