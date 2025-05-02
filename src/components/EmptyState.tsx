import React from 'react';
import { ListChecks } from 'lucide-react';

const EmptyState: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  return (
    <div className="glass-card py-12 px-6 rounded-lg flex flex-col items-center text-center">
      <div className="bg-primary-100 dark:bg-primary-900/50 p-4 rounded-full mb-4">
        <ListChecks className="w-10 h-10 text-primary-600 dark:text-primary-400" />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Welcome to GlassTasks
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        Keep track of your tasks with this beautiful, glass-effect task manager. 
        Add your first task to get started.
      </p>
      <button
        onClick={onGetStarted}
        className="px-5 py-2.5 rounded-lg bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-medium transition-colors"
      >
        Get Started
      </button>
    </div>
  );
};

export default EmptyState;