import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import { Transition } from '@headlessui/react';
import navItems from './navItems';

import Link from 'next/link';
import React, { useState } from 'react';

const NavLinks = ({ ulStyles, liStyles }) => {
  return (
    <div className={ulStyles}>
      {navItems.map(item => (
        <React.Fragment key={item.id}>
          <Link href={`/${item.href}`}>
            <a className={liStyles}>{item.title}</a>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className='sticky top-0 bg-white navbar sm:px-6 md:px-20 lg:px-40'>
      <nav className='p-2 mx-4 '>
        <div className='flex items-center justify-between h-16'>
          <div className='z-20 text-3xl font-bold logo'>HS</div>
          <div className='flex gap-3 text-2xl nav-links sm:hidden'>
            <div
              className='p-1 bg-gray-200 rounded-md cursor-pointer'
              onClick={() => setIsToggle(isToggle => !isToggle)}>
              {isToggle ? '🌤️' : '🌙'}
            </div>
            <div className='flex items-center p-2 bg-gray-200 rounded-md'>
              {isShowing ? (
                <IoClose
                  onClick={() => setIsShowing(isShowing => !isShowing)}
                />
              ) : (
                <IoMenuSharp
                  onClick={() => setIsShowing(isShowing => !isShowing)}
                />
              )}
            </div>
          </div>
          <div className='hidden sm:flex sm:gap-6 sm:items-center '>
            <NavLinks
              ulStyles={'flex flex-row gap-6'}
              liStyles={'p-4 hover:bg-gray-100 rounded-xl'}
            />
            <div
              className='hidden p-1 bg-gray-200 rounded-md cursor-pointer mode-icon sm:flex sm:text-2xl'
              onClick={() => setIsToggle(isToggle => !isToggle)}>
              {isToggle ? '🌤️' : '🌙'}
            </div>
          </div>
        </div>
      </nav>

      <Transition
        show={isShowing}
        enter='transition-opacity duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-500'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
        <NavLinks
          ulStyles={
            'flex justify-center items-center flex-col sm:hidden absolute w-screen shadow-md bg-white'
          }
          liStyles={'p-4 hover:bg-gray-100 rounded-xl w-screen text-center'}
        />
      </Transition>
    </div>
  );
};

export default Navbar;
