import React from 'react';
import { PlusCircle, BookOpen, Search } from 'lucide-react';

interface NavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'view', label: 'View Recipes', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'add', label: 'Add Recipe', icon: <PlusCircle className="w-5 h-5" /> },
    { id: 'search', label: 'Search', icon: <Search className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto">
        <ul className="flex">
          {tabs.map((tab) => (
            <li key={tab.id} className="flex-1">
              <button
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center w-full p-4 transition-colors ${
                  activeTab === tab.id
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-600 hover:bg-amber-50'
                }`}
              >
                {tab.icon}
                <span className="mt-1 text-sm">{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;