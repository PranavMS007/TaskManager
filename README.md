# Frontend Engineer Take-Home Challenge

## Overview
Welcome to our Frontend Engineering challenge! This project simulates a real-world scenario where you'll build a **Task Management Dashboard** using vanilla JavaScript, HTML, and CSS.

## Time Expectation
This challenge is designed to take **2-4 hours** to complete. Please don't spend more than 4 hours on it.

## The Challenge
Build a single-page task management application with the following features:

### Core Requirements (Must Have)
1. **Task List Display**
   - Display tasks in a clean, organized layout
   - Each task should show: title, description, priority, and status
   - Tasks should be visually distinguished by priority (High, Medium, Low)

2. **Add New Tasks**
   - Form to create new tasks
   - Validation for required fields
   - Clear form after successful submission

3. **Task Filtering**
   - Filter tasks by status (All, Active, Completed)
   - Filter tasks by priority
   - Filters should work together

4. **Task Actions**
   - Mark tasks as complete/incomplete
   - Delete tasks
   - Edit existing tasks (inline or modal)

5. **Local Storage**
   - Persist tasks in localStorage
   - Load tasks on page refresh

### Bonus Features (Nice to Have)
- Search functionality
- Drag and drop to reorder tasks
- Task counters/statistics
- Keyboard shortcuts
- Export tasks to JSON
- Dark mode toggle

## Technical Requirements

### Must Use
- **Vanilla JavaScript** (ES6+)
- **Plain CSS** (CSS3 features encouraged)
- **Semantic HTML5**
- **No frameworks or libraries** (React, Vue, jQuery, Bootstrap, etc.)

### Project Structure
```
/
├── README.md
├── Makefile
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── tasks.js
│   └── storage.js
└── solution/
    └── SOLUTION.md
```

### Code Quality Expectations
- Clean, readable code with meaningful variable names
- Modular JavaScript with separation of concerns
- Responsive design that works on desktop and mobile
- Cross-browser compatibility (Chrome, Firefox, Safari)
- Basic accessibility considerations (ARIA labels, keyboard navigation)

## Evaluation Criteria

We'll evaluate your submission based on:

1. **Functionality** (40%)
   - Do all features work as expected?
   - Is the application stable and bug-free?

2. **Code Quality** (30%)
   - Is the code well-organized and maintainable?
   - Are there clear separations of concerns?
   - Is the code DRY (Don't Repeat Yourself)?

3. **UI/UX** (20%)
   - Is the interface intuitive and user-friendly?
   - Does it look professional and polished?
   - Is it responsive across devices?

4. **Documentation** (10%)
   - Is your SOLUTION.md comprehensive?
   - Are there helpful code comments?
   - Is the setup process clear?

## Getting Started

1. Clone this repository
2. Run `make serve` to start a local development server
3. Open `http://localhost:8000` in your browser
4. Start coding!

## Submission Instructions

1. Complete the challenge
2. Fill out the `SOLUTION.md` with your approach and any trade-offs
3. Ensure all code is committed
4. Create a ZIP file or provide a GitHub repository link
5. Send your submission to [email@company.com]

## Example Data Structure

Here's a suggested task object structure:

```javascript
const task = {
    id: "unique-id-here",
    title: "Task title",
    description: "Task description",
    priority: "high", // "high", "medium", "low"
    status: "active", // "active", "completed"
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z"
};
```

## Questions?

If you have any questions or run into issues, please email [email@company.com].

Good luck! We're excited to see what you build.
