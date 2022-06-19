import { GiHamburgerMenu } from 'react-icons/gi';
import { ImSun } from 'react-icons/im';

import Link from 'next/link';
import { useState } from 'react';

const NavLinks = ({ ulStyles, liStyles }) => {
  return (
    <ul className={`${ulStyles}`}>
      <li className={liStyles}>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </li>
      <li className={liStyles}>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </li>
      <li className={liStyles}>
        <Link href={'/projects'}>
          <a>Projects</a>
        </Link>
      </li>
      <li className={liStyles}>
        <Link href={'/contacts'}>
          <a>Contacts</a>
        </Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleMenu = () => {
    console.log(showLinks);
    setShowLinks(!showLinks);
  };

  return (
    <div className='navbar'>
      <nav className='p-2 mx-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='z-20 text-2xl font-bold logo'>HS</div>
          <div className='flex gap-3 text-2xl nav-links sm:hidden'>
            <ImSun />
            <GiHamburgerMenu onClick={handleMenu} />
          </div>
          <div className='hidden sm:flex sm:gap-4 sm:items-center'>
            <NavLinks
              ulStyles={'flex flex-row gap-6'}
              liStyles={'p-4 hover:bg-gray-100 rounded-xl'}
            />
            <div className='hidden mode-icon sm:flex sm:text-2xl'>
              <ImSun />
            </div>
          </div>
        </div>
      </nav>
      {showLinks && (
        <NavLinks
          ulStyles={'flex justify-center items-center flex-col sm:hidden'}
          liStyles={'p-4 hover:bg-gray-100 rounded-xl'}
        />
      )}
      <div className='b hover:bg-gray-400'></div>
    </div>
  );
};

export default Navbar;
