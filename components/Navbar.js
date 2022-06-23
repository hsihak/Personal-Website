import { IoClose, IoMenuSharp } from 'react-icons/io5'; // React Icons
import SlideDown from './SlideDown';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import navItems from './navItems';
// Render out Navigation items
const NavLinks = ({ ulStyles, liStyles }) => {
  const [isActive, setIsActive] = useState();

  const handleActive = e => {
    setIsActive(e.target.id);
  };

  // Handle scroll Active

  return (
    <div className={`${ulStyles}`}>
      {navItems.map(item => (
        <React.Fragment key={item.id}>
          <Link href={`/${item.href}`}>
            <a
              aria-hidden='true'
              onClick={e => {
                handleActive(e);
              }}
              id={item.title}
              className={`${liStyles} ${
                isActive === item.title ? 'active' : ''
              } `}>
              {item.title}
            </a>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false); // Control state of close mobile menu (open/close)
  const [isMounted, setIsMounted] = useState(false); // Control state of items render
  const { theme, setTheme } = useTheme(); // Control state of website theme (dark/light mode)

  // Check to ensure items are mounted to avoid Hydration Mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If it is not mounted then return null
  if (!isMounted) {
    return null;
  }

  return (
    <div className='fixed z-50 w-screen bg-white navbar sm:px-6 md:px-20 lg:px-40 dark:bg-gray-900 dark:border-b dark:border-b-zinc-800'>
      <nav className='p-2 mx-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='text-3xl font-bold logo'>
            <Link href={'/'}>HS</Link>
          </div>
          <div className='flex gap-3 text-2xl cursor-pointer nav-links sm:hidden'>
            <div
              className='p-1 bg-gray-200 rounded-md dark:bg-gray-700'
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}>
              {theme === 'dark' ? '🌤️' : '🌙'}
            </div>
            <div className='flex items-center p-2 bg-gray-200 rounded-md dark:bg-gray-700'>
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
              liStyles={
                'p-4 hover:bg-gray-100 rounded-xl active:bg-violet-300 active:text-white hover:text-violet-500'
              }
            />
            <div
              className='hidden p-1 bg-gray-200 rounded-md cursor-pointer cursor-pointe dark:shadow-md mode-icon sm:flex sm:text-2xl'
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}>
              {theme === 'dark' ? '🌤️' : '🌙'}
            </div>
          </div>
        </div>
      </nav>

      {/* Handle Animation for mobile menu via Tailwind library (Headless UI) */}
      <SlideDown isShowing={isShowing}>
        <NavLinks
          ulStyles={
            'flex justify-center items-center flex-col sm:hidden absolute w-screen shadow-md bg-white dark:bg-gray-900 '
          }
          liStyles={'p-4 hover:bg-gray-100 rounded-xl w-screen text-center '}
        />
      </SlideDown>
    </div>
  );
};

export default Navbar;
