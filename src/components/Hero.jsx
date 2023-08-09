import React, { useState } from 'react';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-center'>
          <h1
            className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fadeIn'
            style={{ animationDelay: '0.5s' }}
          >
            The <span className='text-orange-500'>Best</span>
          </h1>
          <h1
            className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fadeIn'
            style={{ animationDelay: '1s' }}
          >
            <span className='text-orange-500'>Foods</span> Delivered
          </h1>
          <p
            className='px-4 py-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center animate-fadeIn'
            style={{ animationDelay: '1.5s' }}
          >
            Welcome to Rutika's Kitchen, where flavors come to life! Enjoy a culinary journey
            with our delectable dishes prepared with love and care. From traditional recipes to
            modern twists, we have something to satisfy every craving. Order now and treat your
            taste buds to an unforgettable experience!
          </p>
          <button
            onClick={toggleModal}
            className='px-4 py-2 mt-6 bg-orange-500 text-white rounded-lg shadow-lg font-semibold animate-bounce'
            style={{ animationDelay: '2s' }}
          >
            Learn More
          </button>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='/'
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50'>
          <div className='bg-white p-6 rounded-md text-black'>
            <h2 className='text-2xl font-bold mb-4'>Rutika's Kitchen</h2>
            <p className='text-base'>
              At Rutika's Kitchen, we take pride in serving the most delicious and authentic dishes
              made from the freshest ingredients. Our culinary experts craft each recipe with love
              and passion to ensure you have a memorable dining experience.
            </p>
            <p className='text-base mt-4'>
              Whether you're craving traditional favorites or exploring new flavors, we have a wide
              selection of mouthwatering dishes to choose from. Come and savor the taste of
              perfection at Rutika's Kitchen!
            </p>
            <button
              className='px-4 py-2 mt-6 bg-orange-500 text-white rounded-lg shadow-lg font-semibold'
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
