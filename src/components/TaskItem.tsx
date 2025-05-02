import React, { useState } from 'react';
import { Check, Trash, Edit, X, Save, Clock, Calendar } from 'lucide-react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    if (editedTitle.trim() !== '') {
      onEdit(task.id, editedTitle);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditedTitle(task.title);
      setIsEditing(false);
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);
  };

  const isOverdue = task.dueDate && !task.completed && task.dueDate < Date.now();
  const timeLeft = task.dueDate ? task.dueDate - Date.now() : null;
  const hoursLeft = timeLeft ? Math.floor(timeLeft / (1000 * 60 * 60)) : null;

  return (
    <div 
      className={`glass-card mb-3 p-4 rounded-lg transition-all duration-300 ${
        task.completed ? 'opacity-75 bg-opacity-30' : 'bg-opacity-50'
      } ${isOverdue ? 'border-red-500 dark:border-red-400' : ''}`}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
            task.completed 
              ? 'bg-green-500 border-green-600 dark:bg-green-600 dark:border-green-500' 
              : 'border-gray-400 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400'
          }`}
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {task.completed && <Check className="w-4 h-4 text-white" />}
        </button>
        
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent border-b-2 border-primary-400 dark:border-primary-300 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 px-1 py-0.5"
              autoFocus
            />
          ) : (
            <>
              <p className={`text-gray-800 dark:text-gray-100 transition-all duration-300 ${
                task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
              }`}>
                {task.title}
              </p>
              
              {task.dueDate && !task.completed && (
                <p className={`text-sm mt-1 ${
                  isOverdue 
                    ? 'text-red-600 dark:text-red-400' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {isOverdue 
                    ? 'Overdue!' 
                    : hoursLeft !== null && hoursLeft < 24 
                      ? `Due in ${hoursLeft} hours` 
                      : `Due ${formatDate(task.dueDate)}`
                  }
                </p>
              )}
            </>
          )}
          
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
              {task.category}
            </span>
            
            {task.dueDate && (
              <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${
                isOverdue ? 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}>
                <Calendar className="w-3 h-3" />
                {formatDate(task.dueDate)}
              </span>
            )}
            
            {task.estimatedMinutes && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <Clock className="w-3 h-3" />
                {task.estimatedMinutes} min
              </span>
            )}
            
            <span className="text-gray-500 dark:text-gray-400">
              Created {formatDate(task.createdAt)}
            </span>
          </div>
        </div>
        
        <div className="flex gap-1">
          {isEditing ? (
            <>
              <button
                onClick={handleEdit}
                className="p-1.5 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-full transition-colors"
                aria-label="Save"
              >
                <Save size={16} />
              </button>
              <button
                onClick={() => {
                  setEditedTitle(task.title);
                  setIsEditing(false);
                }}
                className="p-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/30 rounded-full transition-colors"
                aria-label="Cancel"
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-1.5 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full transition-colors"
                aria-label="Edit"
              >
                <Edit size={16} />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="p-1.5 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full transition-colors"
                aria-label="Delete"
              >
                <Trash size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;