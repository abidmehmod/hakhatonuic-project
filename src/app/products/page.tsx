// pages/shoplist.tsx (Updated)

'use client';

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar'; // Import the updated Navbar component

const ProductsPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "food"] {
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        image {
          asset -> { url }
        },
        description,
        available
      }`;

      try {
        const data = await client.fetch(query);
        setProducts(data);
        setFilteredProducts(data); // Initially, all products are shown
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle search input from Navbar
  const handleSearch = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredProducts(products); // Reset to all products if search is empty
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  if (loading) return <div className="text-center text-lg mt-10">Loading...</div>;

  return (
    <>
      <Navbar onSearch={handleSearch} /> {/* Pass search function to Navbar */}
      <div className="container mx-auto p-4 mt-32">
        <h1 className="text-3xl font-bold mb-6 text-center">Food Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="border rounded-lg p-4 shadow-md">
                <Link href={`/products/${product._id}`}>
                  <img
                    src={product.image?.asset?.url}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                </Link>
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-lg font-semibold mb-2">{product.price}$</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
