import React from 'react';
import ThemeToggle from './ThemeToggle';
import { CheckSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="mb-8 space-y-4">
      <header className="glass-panel flex items-center justify-between py-4 px-6 rounded-xl">
        <div className="flex items-center gap-3">
          <CheckSquare className="w-7 h-7 text-primary-600 dark:text-primary-400" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200">
            GlassTasks
          </h1>
        </div>
        <ThemeToggle />
      </header>
      
      <div className="glass-panel p-4 rounded-xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Due Today</h3>
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="text-right">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Time Today</h3>
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              0 min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;