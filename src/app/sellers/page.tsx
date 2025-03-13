'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function SellerDashboard() {
  // This is a placeholder for future seller functionalities
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Seller Dashboard</h1>
        
        {/* Dashboard Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Welcome to Your Seller Dashboard</h2>
          <p className="text-gray-600 mb-6">
            This is a placeholder for the seller dashboard. In the future, this page will include 
            tools and features to help you manage your CAD marketplace listings, track sales, 
            and communicate with buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Create New Listing
            </button>
            <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors">
              View Analytics
            </button>
          </div>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Listings</h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-sm text-gray-600 mt-2">You haven&apos;t created any listings yet.</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Sales</h3>
            <p className="text-3xl font-bold text-green-600">$0.00 CAD</p>
            <p className="text-sm text-gray-600 mt-2">Start selling to see your revenue here.</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Status</h3>
            <p className="text-xl font-semibold text-purple-600">Free Tier</p>
            <p className="text-sm text-gray-600 mt-2">Upgrade to Pro for more features.</p>
          </div>
        </div>
        
        {/* Getting Started Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Seller Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Seller Guidelines
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Pricing Strategies
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Product Photography Tips
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Marketing Your Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Complete your seller profile with business details</li>
                <li>Set up your payment information to receive funds</li>
                <li>Create your first product listing</li>
                <li>Share your store with your network</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
