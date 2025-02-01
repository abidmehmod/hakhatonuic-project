'use client';

import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';

const ChefsPage = () => {
  const [chefs, setChefs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const query = `*[_type == "chef"] {
      _id,
      name,
      position,
      experience,
      specialty,
      image {
        asset -> {
          _id,
          url
        }
      },
      description,
      available
    }`;

    client.fetch(query)
      .then((data) => {
        setChefs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching chefs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-32">
      <h1 className="text-3xl font-bold mb-4">Meet Our Chefs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {chefs.map((chef) => (
          <div key={chef._id} className="border rounded-lg p-4 shadow-md">
            <img
              src={chef.image?.asset?.url}
              alt={chef.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{chef.name}</h2>
            <p className="text-gray-600">{chef.position}</p>
            <p className="text-gray-800">Experience: {chef.experience} years</p>
            <p className="text-gray-700">Specialty: {chef.specialty}</p>
            <p className={`mt-2 ${chef.available ? 'text-green-600' : 'text-red-600'}`}>
              {chef.available ? 'Currently Active' : 'Not Available'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefsPage;
