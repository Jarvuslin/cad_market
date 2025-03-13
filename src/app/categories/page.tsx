'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';

// Wrapper component that uses useSearchParams
function CategoryContent() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  
  const categories = [
    { name: 'Software', icon: '💻', color: 'bg-blue-100', description: 'Professional CAD software and plugins for designers and engineers.' },
    { name: 'Templates', icon: '📐', color: 'bg-green-100', description: 'Ready-to-use templates for architectural, mechanical, and electrical designs.' },
    { name: 'Libraries', icon: '📚', color: 'bg-yellow-100', description: 'Component libraries and asset collections for various CAD applications.' },
    { name: 'Design', icon: '🎨', color: 'bg-purple-100', description: 'Custom design services and pre-made design assets.' },
    { name: 'Education', icon: '🎓', color: 'bg-red-100', description: 'Courses, tutorials, and educational resources for CAD professionals.' },
    { name: 'Services', icon: '🛠️', color: 'bg-indigo-100', description: 'Professional services including 3D printing, consulting, and custom development.' },
  ];
  
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'All');
  
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  
  const displayedCategories = activeCategory === 'All' 
    ? categories 
    : categories.filter(cat => cat.name === activeCategory);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Browse Categories</h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => handleCategoryClick('All')}
          className={`px-4 py-2 rounded-full ${activeCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          All Categories
        </button>
        
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`px-4 py-2 rounded-full ${activeCategory === category.name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedCategories.map((category) => (
          <div key={category.name} className={`${category.color} rounded-lg p-8 shadow-md`}>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{category.icon}</span>
              <h2 className="text-2xl font-semibold text-gray-800">{category.name}</h2>
            </div>
            <p className="text-gray-700 mb-6">{category.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">50+ listings</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Business Type Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Business Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-3">B2C (Business to Consumer)</h3>
            <p className="text-gray-600 mb-4">Products and services designed for individual consumers and end-users.</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">View B2C Listings →</button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3">B2B (Business to Business)</h3>
            <p className="text-gray-600 mb-4">Enterprise solutions and services for other businesses and organizations.</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">View B2B Listings →</button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-3">P2P (Peer to Peer)</h3>
            <p className="text-gray-600 mb-4">Direct exchange of CAD resources between individual professionals and creators.</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">View P2P Listings →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <Layout>
      <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading categories...</div>}>
        <CategoryContent />
      </Suspense>
    </Layout>
  );
}