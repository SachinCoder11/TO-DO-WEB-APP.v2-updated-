import React, { useState } from 'react';
import { Plus, Clock } from 'lucide-react';

const CATEGORIES = ['Work', 'Personal', 'Shopping', 'Health', 'Learning'];

interface TaskFormProps {
  onAddTask: (title: string, category: string, dueDate?: number, estimatedMinutes?: number) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Personal');
  const [isExpanded, setIsExpanded] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [estimatedMinutes, setEstimatedMinutes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== '') {
      onAddTask(
        title.trim(),
        category,
        dueDate ? new Date(dueDate).getTime() : undefined,
        estimatedMinutes ? parseInt(estimatedMinutes) : undefined
      );
      setTitle('');
      setDueDate('');
      setEstimatedMinutes('');
      setIsExpanded(false);
    }
  };

  return (
    <div className="glass-card mb-6 p-4 rounded-lg transition-all duration-300">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-500 dark:bg-primary-600 text-white flex items-center justify-center hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors"
            aria-label={isExpanded ? "Collapse form" : "Expand form"}
          >
            <Plus className="w-5 h-5" />
          </button>
          
          <input
            type="text"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            className="flex-1 bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none py-1 px-2 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
          />
          
          {isExpanded && (
            <button
              type="submit"
              disabled={!title.trim()}
              className="px-4 py-1.5 rounded-md bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Add
            </button>
          )}
        </div>
        
        {isExpanded && (
          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`text-xs px-3 py-1 rounded-full transition-colors ${
                    category === cat
                      ? 'bg-primary-500 dark:bg-primary-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm text-white dark:text-white mb-1">Due Date</label>
                <input
                  type="datetime-local"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full bg-transparent border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-white dark:text-white mb-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Estimated Time (minutes)
                  </span>
                </label>
                <input
                  type="number"
                  min="1"
                  value={estimatedMinutes}
                  onChange={(e) => setEstimatedMinutes(e.target.value)}
                  placeholder="30"
                  className="w-full bg-transparent border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default TaskForm