import React from 'react';
import { CookingPot } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Recipe Maker' }) => {
  return (
    <header className="bg-amber-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center">
        <CookingPot className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;