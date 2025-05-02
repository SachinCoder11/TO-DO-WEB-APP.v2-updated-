export interface Task {
  id: string;
  title: string;
  completed: boolean;
  category: string;
  createdAt: number;
  dueDate?: number;
  estimatedMinutes?: number;
}

export type ThemeMode = 'light' | 'dark';