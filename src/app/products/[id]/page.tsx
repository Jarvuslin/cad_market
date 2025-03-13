'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import Layout from '@/components/layout/Layout';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    { name: 'Software', icon: '💻', color: 'bg-blue-100' },
    { name: 'Templates', icon: '📐', color: 'bg-green-100' },
    { name: 'Libraries', icon: '📚', color: 'bg-yellow-100' },
    { name: 'Design', icon: '🎨', color: 'bg-purple-100' },
    { name: 'Education', icon: '🎓', color: 'bg-red-100' },
    { name: 'Services', icon: '🛠️', color: 'bg-indigo-100' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Canada&#39;s Premier Digital Marketplace
            </h1>
            <p className="text-xl mb-8">
              Buy and sell CAD designs, templates, and services exclusively for Canadians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/categories"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg transition-colors inline-block text-center"
              >
                Browse Categories
              </Link>
              <Link
                href="/sellers"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium text-lg transition-colors inline-block text-center"
              >
                Become a Seller
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-64 md:h-80">
              <Image 
                src="/globe.svg"
                alt="Canadian Marketplace"
                fill
                className="object-contain dark:invert"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link 
                href={`/categories?category=${category.name}`} 
                key={category.name}
                className={`${category.color} rounded-lg p-6 text-center hover:shadow-md transition-shadow`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-800">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-xl text-gray-500">Loading products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Canada&#39;s Digital Marketplace?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you&#39;re looking to buy premium CAD resources or sell your expertise, 
            CAD Market connects Canadians with the digital tools they need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categories"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium text-lg transition-colors inline-block"
            >
              Start Shopping
            </Link>
            <Link
              href="/sellers"
              className="bg-gray-800 text-white hover:bg-gray-900 px-8 py-3 rounded-md font-medium text-lg transition-colors inline-block"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
