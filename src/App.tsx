import React, { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import EmptyState from './components/EmptyState';
import { TaskProvider, useTasks } from './contexts/TaskContext';
import './styles/glass.css';

const TaskApp: React.FC = () => {
  const { tasks, addTask, toggleTaskComplete, deleteTask, editTask } = useTasks();
  const [showWelcome, setShowWelcome] = useState(tasks.length === 0);

  if (showWelcome) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Header />
        <EmptyState onGetStarted={() => setShowWelcome(false)} />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Header />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleTaskComplete}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-pattern bg-cover bg-center bg-fixed transition-colors duration-500">
      <div className="backdrop-blur-sm min-h-screen py-4">
        <TaskProvider>
          <TaskApp />
        </TaskProvider>
      </div>
    </div>
  );
}

export default App;