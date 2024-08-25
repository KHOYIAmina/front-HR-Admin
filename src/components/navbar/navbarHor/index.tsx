import { BellIcon, MagnifyingGlassIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const NavbarHorizental = () => {
  const [modePage, setModePage] = useState<boolean>(false);

  const toggleMode = () => {
    setModePage(!modePage);
  };

  return (
      <div className="flex items-center justify-between bg-white py-2 px-4 rounded-full shadow-md w-full max-w-4xl mx-auto space-x-2">
        <div className="flex items-center h-12 w-64 rounded-full bg-page text-navy-700 dark:bg-navy-900 dark:text-white">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-white mx-2" />
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-page text-sm font-medium text-navy-700 outline-none placeholder:text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:text-white"
          />
        </div>
        <div className="flex items-center space-x-2">
          <BellIcon className='h-5 w-5 text-gray-500' />
          {modePage ? (
            <SunIcon 
              className="h-5 w-5 text-yellow-500 cursor-pointer" 
              onClick={toggleMode} 
            />
          ) : (
            <MoonIcon 
              className="h-5 w-5 text-gray-500 cursor-pointer" 
              onClick={toggleMode} 
            />
          )}
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>      
    </div>
  );
};

export default NavbarHorizental;
