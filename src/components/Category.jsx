import React, { useState } from 'react';
import { categories } from '../data/data.js';
import MapComponent from './MapComponent';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const handleExploreClick = (category) => {
    setSelectedCategory(category);
    setShowMap(false); // Hide the map when a category is explored
  };

  const handleMapButtonClick = () => {
    setShowMap(true);
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        "Rutika's Kitchen Eat-Bite Items - Savor the Flavor!"
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 animate-fade-in'>
        {categories.map((item, index) => (
          <div key={index} className='bg-gray-100 rounded-lg p-4 flex flex-col justify-between items-center animate-slide-in'>
            <div>
              <h2 className='font-bold text-xl text-center mb-2'>{item.name}</h2>
              <img src={item.image} alt={item.name} className='w-20 h-20 object-contain mb-2 animate-zoom-in' />
              <p className='text-sm text-gray-600 text-center'>{item.description}</p>
            </div>
            <button
              className='bg-orange-500 text-white px-4 py-2 rounded-full mt-4'
              onClick={() => handleExploreClick(item)}
            >
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* Product description */}
      {selectedCategory && (
        <div className='bg-gray-100 rounded-lg p-4 mt-6 animate-fade-in'>
          <h2 className='font-bold text-xl text-center mb-4'>{selectedCategory.name}</h2>
          <img src={selectedCategory.image} alt={selectedCategory.name} className='w-40 h-40 object-contain mx-auto mb-4 animate-zoom-in' />
          <p className='text-gray-600 text-center'>
            {selectedCategory.description}
            {/* Sample description text */}
            <br />
            <br />
            Enjoy the delectable taste of Rutika's Kitchen Eat-Bite Items! Our handcrafted dishes are made with love and finest ingredients to satisfy your taste buds. From savory delights to sweet treats, we offer a wide range of culinary delights that will leave you craving for more. Come and experience the delightful journey of flavors and let your taste buds savor the richness of our dishes. Bon Appétit!
          </p>
          <button
            className='bg-orange-500 text-white px-4 py-2 rounded-full mt-4 mx-auto block'
            onClick={() => setSelectedCategory(null)}
          >
            Close
          </button>
        </div>
      )}

      {/* Show Map button */}
      {selectedCategory && (
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-full mt-4 mx-auto block'
          onClick={handleMapButtonClick}
        >
          Show Map
        </button>
      )}

      {/* Map with route */}
      {showMap && <MapComponent />}

      {/* Made with love note */}
      <footer className='text-center text-gray-500 mt-6'>
        Made with ❤️ © 2023 Rutika's Kitchen
      </footer>
    </div>
  );
};

export default Category;
