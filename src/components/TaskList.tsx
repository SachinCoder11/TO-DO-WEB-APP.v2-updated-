import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';
import { ClipboardList } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onDelete,
  onEdit,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="glass-card py-8 px-4 rounded-lg flex flex-col items-center justify-center text-center">
        <ClipboardList className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-3" />
        <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-1">No tasks yet</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Add a new task to get started
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          Your Tasks ({tasks.length})
        </h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {tasks.filter(t => t.completed).length} completed
        </div>
      </div>
      
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;