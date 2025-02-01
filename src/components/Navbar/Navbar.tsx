'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onSearch?: (searchTerm: string) => void; // Make onSearch optional
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pages', href: '/pages' },
    { name: 'About', href: '/about' },
    { name: 'Shop', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shop Food', href: '/shopfood' },
    { name: 'Our Chefs', href: '/chef' },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term); // Call onSearch only if it exists
    }
  };

  return (
    <header className="w-full bg-black fixed top-0 px-6 lg:px-20 py-4 lg:py-6 shadow-md z-50">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Food<span className="text-orange-500">Tuck</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed inset-0 bg-black flex flex-col items-center justify-center space-y-6 
          lg:static lg:flex-row lg:bg-transparent lg:space-x-8 lg:space-y-0 
          transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}`}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-lg text-white hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons & Search */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Search Input */}
          {onSearch && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="px-3 py-1 border border-gray-600 bg-black text-white rounded-lg focus:outline-none"
              />
              <Image
                src="/search.png"
                alt="search"
                width={20}
                height={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
          )}

          {/* User & Cart Icons */}
          <Link href="/" className="text-white hover:text-orange-500 transition-colors">
            <Image src="/user.png" alt="User" width={24} height={24} />
          </Link>
          <Link href="/" className="text-white hover:text-orange-500 transition-colors">
            <Image src="/tote.png" alt="Cart" width={24} height={24} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
