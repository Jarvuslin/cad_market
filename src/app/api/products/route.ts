import { NextResponse } from 'next/server';

// Sample product data
const products = [
  {
    id: '1',
    title: 'Professional CAD Software License',
    price: 299.99,
    description: 'Full-featured CAD software license for professional designers and engineers. Includes 1 year of updates and support.',
    image: '/file.svg',
    category: 'Software'
  },
  {
    id: '2',
    title: 'Architectural Blueprint Templates',
    price: 49.99,
    description: 'Collection of 50+ premium architectural blueprint templates for residential and commercial projects.',
    image: '/window.svg',
    category: 'Templates'
  },
  {
    id: '3',
    title: 'Engineering Component Library',
    price: 129.99,
    description: 'Extensive library of 3D engineering components and parts for mechanical and electrical design projects.',
    image: '/globe.svg',
    category: 'Libraries'
  },
  {
    id: '4',
    title: 'Interior Design Package',
    price: 79.99,
    description: 'Complete interior design package with furniture models, textures, and lighting presets for residential spaces.',
    image: '/next.svg',
    category: 'Design'
  },
  {
    id: '5',
    title: 'CAD Training Course Bundle',
    price: 199.99,
    description: 'Comprehensive training course bundle covering advanced CAD techniques for various industries. Includes 40+ hours of video content.',
    image: '/vercel.svg',
    category: 'Education'
  },
  {
    id: '6',
    title: 'Custom 3D Printing Service',
    price: 149.99,
    description: 'Professional 3D printing service for your CAD models. Fast turnaround and high-quality materials available.',
    image: '/file.svg',
    category: 'Services'
  }
];

// GET handler for /api/products
export async function GET(request: Request) {
  // Get the product ID from the URL if it exists
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  // If an ID is provided, return the specific product
  if (id) {
    const product = products.find(p => p.id === id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(product);
  }

  // Otherwise return all products
  return NextResponse.json(products);
}