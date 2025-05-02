import React, { createContext, useContext } from 'react';
import { Task } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, category: string, dueDate?: number, estimatedMinutes?: number) => void;
  toggleTaskComplete: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, title: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  const addTask = (title: string, category: string, dueDate?: number, estimatedMinutes?: number) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      category,
      createdAt: Date.now(),
      dueDate,
      estimatedMinutes,
    };
    
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const toggleTaskComplete = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const editTask = (id: string, title: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, title } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskComplete,
        deleteTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};