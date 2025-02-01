'use client';

import { client } from '@/sanity/lib/client';
import { useParams } from 'next/navigation'; // ✅ Use useParams instead of useRouter
import { useState, useEffect } from 'react';

const ProductDetailPage = () => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams(); // ✅ Get product ID from URL params in App Router

  useEffect(() => {
    if (!id) return;

    const fetchProductData = async () => {
      const query = `*[_type == "food" && _id == $id][0] {
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        image {
          asset -> {
            _id,
            url
          }
        },
        description,
        available
      }`;

      try {
        const data = await client.fetch(query, { id });
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data: ', error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-32">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={product.image?.asset?.url}
          alt={product.name}
          className="w-full h-96 object-cover rounded-md"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">Category: {product.category}</h2>
          <p className="text-lg font-semibold mb-2">Price: {product.price}$</p>
          {product.originalPrice && product.originalPrice !== product.price && (
            <p className="text-sm line-through text-gray-500 mb-2">
              Original Price: {product.originalPrice}$
            </p>
          )}
          <p className="mb-4">{product.description}</p>

          <div>
            <p className="font-semibold">Tags:</p>
            <ul className="list-disc pl-4">
              {product.tags?.map((tag: string) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => alert('Added to Cart!')} // Replace with actual add-to-cart logic
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
