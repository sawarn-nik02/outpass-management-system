import React from 'react';
import logo from '../images/logo.jpg';

const Header = () => {
  return (
    <header className="flex items-start justify-between px-5 pt-5 pb-2 bg-white">
      <div>
        <h1 className="mt-1 text-4xl font-medium text-gray-800 leading-tight">Outpass</h1>
        <p className="text-sm text-gray-700 -mt-1">Management Platform</p>
      </div>
      <img src={logo} alt="Institute Logo" className="h-14 w-auto object-contain" />
    </header>
  );
};

export default Header;
