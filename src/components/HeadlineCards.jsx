import React, { useState } from 'react';

const HeadlineCards = () => {
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [itemDescription, setItemDescription] = useState('');
  const [itemImageUrl, setItemImageUrl] = useState('');
  const [orderNowMsg, setOrderNowMsg] = useState('');

  const handleOrderNowClick = (description, imageUrl, orderMsg) => {
    setShowItemDetails(true);
    setItemDescription(description);
    setItemImageUrl(imageUrl);
    setOrderNowMsg(orderMsg);
  };

  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card 1 */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Highly Rated Dish</p>
          <button
            className='border-white bg-white text-black mx-2 absolute bottom-4'
            onClick={() =>
              handleOrderNowClick(
                "Sun's Out, BOGO's Out",
                'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
                'Your order for Sun\'s Out, BOGO\'s Out has been placed!'
              )
            }
          >
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>
      {/* Card 2 */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Restaurants special platter</p>
          <p className='px-2'>Added Daily</p>
          <button
            className='border-white bg-white text-black mx-2 absolute bottom-4'
            onClick={() =>
              handleOrderNowClick(
                'New Restaurants todays special platter',
                'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
                'Your order for todays platter has been placed!'
              )
            }
          >
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>
      {/* Card 3 */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
          <p className='px-2'>Tasty Treats</p>
          <button
            className='border-white bg-white text-black mx-2 absolute bottom-4'
            onClick={() =>
              handleOrderNowClick(
                'We Deliver Desserts Too',
                'https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
                'Your order for We Deliver Desserts Too has been placed!'
              )
            }
          >
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>

      {/* Show item details */}
      {showItemDetails && (
        <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50'>
          <div className='bg-white p-4 rounded-xl text-black'>
            <h2 className='font-bold text-2xl mb-2'>{itemDescription}</h2>
            <img
              className='max-h-[400px] w-full object-cover mb-2 rounded-xl'
              src={itemImageUrl}
              alt='Item'
            />
            <p>{orderNowMsg}</p>
            <button className='border-black bg-white text-black mx-2' onClick={() => setShowItemDetails(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadlineCards;
