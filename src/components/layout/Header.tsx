import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/next.svg" 
            alt="CAD Market Logo" 
            width={120} 
            height={30} 
            className="dark:invert"
          />
          <span className="font-bold text-xl text-gray-800">CAD Market</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            Home
          </Link>
          <Link href="/categories" className="text-gray-600 hover:text-gray-900 font-medium">
            Categories
          </Link>
          <Link href="/sellers" className="text-gray-600 hover:text-gray-900 font-medium">
            Sellers
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
            About
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Sign In
          </button>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;