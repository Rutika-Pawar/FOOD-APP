import React, { useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa'; // Import the heart icons
import { data } from '../data/data.js';

const Food = () => {
  const [foods, setFoods] = useState(data.map((food) => ({ ...food, selectedRating: 0, isLiked: false })));
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const searchFoods = (query) => {
    setSearchQuery(query);
    setFoods(
      data.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
      .map((food) => ({ ...food, selectedRating: 0 }))
    );
  };

  const addToCart = (item) => {
    setSelectedItem(item);
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleStarClick = (itemId, rating) => {
    setFoods((prevFoods) =>
      prevFoods.map((food) =>
        food.id === itemId ? { ...food, selectedRating: rating } : food
      )
    );
  };

  const handleLikeClick = (itemId) => {
    setFoods((prevFoods) =>
      prevFoods.map((food) =>
        food.id === itemId ? { ...food, isLiked: !food.isLiked } : food
      )
    );
  };

  const placeOrder = () => {
    // Place your order logic here
    setIsOrderPlaced(true);
  };
  const showDeliveryTime = () => {
    alert('Estimated delivery time: 30-45 mins');
  };

  const showPickupTime = () => {
    alert('Ready for pickup in 15 mins');
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      {/* Search and Cart */}
      <div className='flex justify-between items-center mt-8'>
        <div className='flex flex-col'>
          <p className='font-bold text-gray-700'>Search:</p>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => searchFoods(e.target.value)}
            placeholder='Search for food or category...'
            className='w-[200px] lg:w-[400px] px-2 py-1 border rounded-lg'
          />
        </div>

        {/* Cart button */}
        <button
          onClick={() => setShowCartModal(true)}
          className='bg-black text-white px-4 py-2 rounded-full flex items-center'
        >
          <BsFillCartFill size={20} className='mr-2' /> Cart ({cartItems.length})
        </button>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border border-gray-300 rounded-lg hover:scale-105 duration-300 flex flex-col'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='p-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
            <div className='flex justify-between items-center px-4 py-2'>
              <div className='flex'>
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    size={20}
                    color={i < Math.floor(item.selectedRating) ? '#FFD700' : '#A0A0A0'}
                    onClick={() => handleStarClick(item.id, i + 1)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
              <button
                onClick={() => handleLikeClick(item.id)}
                className='bg-transparent p-1 rounded-full'
              >
                {item.isLiked ? (
                  <FaHeart size={20} color='red' />
                ) : (
                  <FaRegHeart size={20} color='black' />
                )}
              </button>
            </div>
            <button
              onClick={() => addToCart(item)}
              className='bg-orange-500 text-white px-4 py-2 rounded-full mb-4 mx-4'
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Delivery and Pickup buttons */}
      <div className='flex justify-center mt-8'>
        <button
          onClick={showDeliveryTime}
          className='bg-green-500 text-white px-6 py-2 rounded-full mr-4'
        >
          Delivery
        </button>
        <button
          onClick={showPickupTime}
          className='bg-blue-500 text-white px-6 py-2 rounded-full'
        >
          Pickup
        </button>
      </div>
      {/* Cart Modal */}
      {showCartModal && (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50'>
      <div className='bg-white p-4 rounded-lg'>
        <h2 className='text-xl font-bold mb-4'>Cart</h2>
        {cartItems.length > 0 ? (
          <div className='space-y-4'>
            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className='border border-gray-300 p-2 rounded-lg'>
                <div className='flex items-center'>
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className='w-16 h-16 object-cover rounded-full mr-4'
                  />
                  <p className='font-bold'>{cartItem.name}</p>
                </div>
                <button
                  onClick={() => removeFromCart(cartItem.id)}
                  className='text-red-500 mt-2'
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
        {selectedItem && (
          <>
            <div className='mt-4'>
              <h3 className='font-bold mb-2'>Selected Item:</h3>
              <div className='flex items-center'>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className='w-16 h-16 object-cover rounded-full mr-4'
                />
                <p>{selectedItem.name}</p>
              </div>
            </div>
            <button
              onClick={placeOrder}
              className='bg-black-500 text-black px-5 py-2 rounded-full mt-4'
            >
              Order Now
            </button>
            <button
              onClick={() => {
                setShowCartModal(false);
                setSelectedItem(null);
                setIsOrderPlaced(false);
              }}
              className='bg-black-500 text-black px-9 py-2 rounded-full mt-2'
            >
              Close
            </button>
          </>
        )}
        {isOrderPlaced && (
          <p className='text-green-500 font-bold mt-4'>Order Placed Successfully!</p>
        )}
      </div>
    </div>
  )}
</div>
);
};

export default Food;