import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaTruck, FaHeart, FaWallet, FaQuestionCircle } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dummy data for the sidebar menu
  const sidebarData = [
    { title: 'Orders', icon: FaTruck, content: 'List of your orders goes here.' },
    { title: 'Favorites', icon: FaHeart, content: 'Your favorite items go here.' },
    { title: 'Wallet', icon: FaWallet, content: 'Your wallet information goes here.' },
    {
      title: 'Help',
      icon: FaQuestionCircle,
      content: 'If you need any help, contact our support team.',
    },
  ];

  const toggleMenu = () => {
    setNav(!nav);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowModal(true);
  };

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={toggleMenu} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Rutika's <span className='font-bold'>Kitchen</span>
        </h1>
      </div>

      {/* Right side - Login element */}
      <div className='flex items-center'>
        {isLoggedIn ? (
          <div className='flex items-center'>
            <div className='px-4 py-2 text-gray-800'>Welcome, User!</div>
            {/* User Avatar */}
            <img
              src="/path/to/user/avatar.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full ml-2 cursor-pointer"
            />
            {/* Logout Button */}
            <button
              onClick={handleLogoutClick}
              className='px-4 py-2 text-gray-800 bg-red-500 hover:bg-red-600 rounded-md ml-4'
            >
              Logout
            </button>
          </div>
        ) : (
          <div
            onClick={handleLoginClick}
            className='px-4 py-2 text-gray-800 cursor-pointer'
          >
            Login
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div
          className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'
          onClick={toggleMenu}
        ></div>
      ) : null}

      {/* Side drawer menu */}
      <div
        className={`${
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }`}
      >
        <AiOutlineClose
          onClick={toggleMenu}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Rutika's <span className='font-bold'>Kitchen</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            {sidebarData.map((item) => (
              <li
                key={item.title}
                className={`text-xl py-4 flex ${
                  selectedOption === item.title ? 'text-black' : ''
                }`}
                onClick={() => handleOptionClick(item.title)}
              >
                <item.icon size={25} className='mr-4' />
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50'>
          <div className='bg-white p-4 rounded-lg'>
            <h3 className='text-xl font-bold mb-2'>{selectedOption}</h3>
            <p className='text-gray-800'>{sidebarData.find((item) => item.title === selectedOption)?.content}</p>
            {/* Add more information, maps, etc. here */}
            <button
              onClick={() => setShowModal(false)}
              className='bg-orange-500 text-white px-4 py-2 rounded-full mt-4'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
