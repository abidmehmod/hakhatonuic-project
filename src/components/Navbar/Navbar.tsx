'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onSearch?: (searchTerm: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Load cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cart.reduce((total: number, item: any) => total + item.quantity, 0));
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.reduce((total: number, item: any) => total + item.quantity, 0));
    };

    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  return (
    <header className="w-full bg-black fixed top-0 px-6 lg:px-20 py-4 lg:py-6 shadow-md z-50">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Food<span className="text-orange-500">Tuck</span>
        </Link>

        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`fixed inset-0 bg-black flex flex-col items-center justify-center space-y-6 
          lg:static lg:flex-row lg:bg-transparent lg:space-x-8 lg:space-y-0 
          transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}`}>
          <li><Link href="/" className="text-lg text-white hover:text-orange-500 transition-colors">Home</Link></li>
          <li><Link href="/products" className="text-lg text-white hover:text-orange-500 transition-colors">Shop</Link></li>
          <li><Link href="/menu" className="text-lg text-white hover:text-orange-500 transition-colors">Menu</Link></li>
          <li><Link href="/blog" className="text-lg text-white hover:text-orange-500 transition-colors">Blog</Link></li>
          <li><Link href="/pages" className="text-lg text-white hover:text-orange-500 transition-colors">Pages</Link></li>
          <li><Link href="/about" className="text-lg text-white hover:text-orange-500 transition-colors">About</Link></li>
          <li><Link href="/contact" className="text-lg text-white hover:text-orange-500 transition-colors">Contact </Link></li>
          <li><Link href="/shopfood" className="text-lg text-white hover:text-orange-500 transition-colors">Shop Food</Link></li>
          <li><Link href="/chef" className="text-lg text-white hover:text-orange-500 transition-colors" >Our Chefs</Link></li>
        </ul>

        

        <div className="hidden lg:flex items-center space-x-6">
          {/* Cart Icon with Count */}
          <Link href="/shop" className="relative text-white hover:text-orange-500 transition-colors">
            <Image src="/tote.png" alt="Cart" width={24} height={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">{cartCount}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
} 