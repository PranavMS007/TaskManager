import { saveTasks, loadTasks } from './storage.js';

let tasks = loadTasks();

export const getTasks = () => tasks;

export const addTask = (task) => {
  tasks.push(task);
  saveTasks(tasks);
};

export const updateTask = (updatedTask) => {
  tasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
  saveTasks(tasks);
};

export const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks(tasks);
};

export const toggleTaskStatus = (id) => {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      const updated = {
        ...task,
        status: task.status === 'active' ? 'completed' : 'active',
        updatedAt: new Date().toISOString(),
      };
      return updated;
    }
    return task;
  });
  saveTasks(tasks);
};

export const getFilteredTasks = (status, priority, keyword = '') => {
  return getTasks().filter(task => {
    const matchesStatus = status === 'all' || task.status === status;
    const matchesPriority = priority === 'all' || task.priority === priority;
    const matchesSearch = task.title.toLowerCase().includes(keyword.toLowerCase()) ||
                          task.description.toLowerCase().includes(keyword.toLowerCase());
    return matchesStatus && matchesPriority && matchesSearch;
  });
};
