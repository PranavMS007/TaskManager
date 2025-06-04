import {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
  toggleTaskStatus,
  getFilteredTasks
} from './tasks.js';

const taskForm = document.getElementById('taskForm');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priorityInput = document.getElementById('priority');
const statusFilter = document.getElementById('statusFilter');
const priorityFilter = document.getElementById('priorityFilter');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');

const generateId = () => '_' + Math.random().toString(36).substr(2, 9);
let editingTaskId = null;


const renderTasks = () => {
    const filteredTasks = getFilteredTasks(statusFilter.value, priorityFilter.value, searchInput.value);

    taskList.innerHTML = '';

    filteredTasks.forEach((task) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.priority} ${task.status === 'completed' ? 'completed' : ''}`;

        li.innerHTML = `
        <strong>${task.title}</strong>
        <p>${task.description}</p>
        <small>Priority: ${task.priority}</small>
        <small>Status: ${task.status}</small>
        <div class="task-item-actions">
            <button onclick="toggleTask('${task.id}')">${
            task.status === 'completed' ? 'Mark Active' : 'Mark Completed'
            }</button>
            <button onclick="editTask('${task.id}')">Edit</button>
            <button onclick="removeTask('${task.id}')">Delete</button>
        </div>
        `;

        taskList.appendChild(li);
  });
};

window.toggleTask = (id) => {
  toggleTaskStatus(id);
  renderTasks();
};

window.removeTask = (id) => {
  deleteTask(id);
  renderTasks();
};
window.editTask = (id) => {
  editTask(id);
  renderTasks();
};

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const priority = priorityInput.value;

  if (!title || !description || !priority) return;

  
  if (editingTaskId) {
    const updatedTask = {
      id: editingTaskId,
      title,
      description,
      priority,
      status: 'active',
      updatedAt: new Date().toISOString(),
    };
    updateTask(updatedTask);
    editingTaskId = null;
  } else {
    const newTask = {
      id: generateId(),
      title,
      description,
      priority,
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    addTask(newTask);
  }

  taskForm.reset();
  renderTasks();
});

const editTask = (id) => {
  const task = getTasks().find(t => t.id === id);
  if (!task) return;

  document.getElementById('title').value = task.title;
  document.getElementById('description').value = task.description;
  document.getElementById('priority').value = task.priority;

  editingTaskId = id;
  taskForm.scrollIntoView({ behavior: 'smooth' });
};

statusFilter.addEventListener('change', renderTasks);
priorityFilter.addEventListener('change', renderTasks);
searchInput.addEventListener('input', renderTasks);

document.addEventListener('DOMContentLoaded', renderTasks);

