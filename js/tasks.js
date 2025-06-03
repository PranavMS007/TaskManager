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

export const getFilteredTasks = (status, priority) => {
  return tasks.filter((task) => {
    const statusMatch = status === 'all' || task.status === status;
    const priorityMatch = priority === 'all' || task.priority === priority;
    return statusMatch && priorityMatch;
  });
};

// export const getSearchedTasks=(seatchText, taskList)=>{
//     return taskList.filter(task => {
//     return (
//       task.title.toLowerCase().includes(seatchText) ||
//       task.description.toLowerCase().includes(seatchText)
//     );
//   });
// };