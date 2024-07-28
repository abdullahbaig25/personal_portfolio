import React, { useState } from 'react';

const menuItems = [
  "Dashboard",
  "Activity",
  "Schedule",
  "Integration",
  "Settings"
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderMenuItems = (isMobile = false) => (
    menuItems.map((item) => (
      <li key={item} className={`px-3 py-2 ${isMobile ? "w-full" : ""} hover:bg-blue-600  hover:text-white  rounded-lg transition-all cursor-pointer`}>
        <a href="#" className={isMobile ? "block" : "text-black hover:text-white"}>{item}</a>
      </li>
    ))
  );

  return (
    <div className="w-full bg-white ">
      <nav className="container mx-auto flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-4">
          <span className="px-3 py-2 text-black text-xl font-bold">AB</span>
        </div>
        <ul className="hidden md:flex items-center gap-4">
          {renderMenuItems()}
        </ul>
        <button className="bg-blue-600   px-3 py-2 rounded-lg md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <ul className="md:hidden bg-white py-2 flex flex-col items-start gap-2 px-4">
          {renderMenuItems(true)}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
