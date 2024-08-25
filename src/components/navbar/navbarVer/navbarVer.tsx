import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemActive from './item';
import { navbarItems } from '../../../constants/constants';

const NavbarVer: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Dashboard');
  const [activeSubtitle, setActiveSubtitle] = useState<string | null>(null); // State for the active subtitle
  const navigate = useNavigate(); 
  const location = useLocation();

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setActiveSubtitle(null); // Reset subtitle when a main item is clicked
  };

  const handleNavigateClick = (path: string) => {
    navigate(path);
  }

  useEffect(() => {
    const currentPath = location.pathname;
    let foundActiveItem = false;

    navbarItems.forEach((navItem) => {
      if (navItem.itemLink === currentPath) {
        setActiveItem(navItem.item);
        setActiveSubtitle(null);
        foundActiveItem = true;
      } else if (navItem.listSubtitles) {
        const foundSubtitle = navItem.listSubtitles.find(subtitle => subtitle.path === currentPath);
        if (foundSubtitle) {
          setActiveItem(navItem.item);
          setActiveSubtitle(foundSubtitle.name);
          foundActiveItem = true;
        }
      }
    });

    if (!foundActiveItem) {
      setActiveItem('Dashboard'); // Default to Dashboard if no match is found
    }
  }, [location.pathname]);

  return (
    <nav className="fixed min-h-screen flex flex-col w-64 bg-white rounded-r-2xl">
      <div className="flex flex-row mt-4 mb-10">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="h-12 w-12 rounded-full object-cover ml-3"
        />
        <div className='flex flex-col'>
          <div className='font-bold ml-4'>khoyi Amina</div>
          <div className='text-sm ml-4'>poste, Département</div>
        </div>
      </div>
      {navbarItems.map(({ item, Icon, itemLink, listSubtitles }) => (
        <ItemActive
          key={item}
          isActive={activeItem === item}
          Icon={Icon}
          item={item}
          listSubtitles={listSubtitles}
          selectedSubtitle={activeSubtitle} // Pass selected subtitle
          onClick={() => handleItemClick(item)}
          navigateTo={() => handleNavigateClick(itemLink)}
        />
      ))}
    </nav>
  );
};

export default NavbarVer;
