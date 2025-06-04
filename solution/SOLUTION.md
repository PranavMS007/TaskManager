# Solution Documentation

## Candidate Information

- **Name:** Pranav Madathil Sasi
- **Email:** pranav.madathil08@gmail.com
- **Date:** 04-06-2025

## Approach Overview
I approached this project by first planning the core structure, splitting the code into separate modules for data handling (storage.js), business logic (tasks.js) and UI rendering (app.js). I used semantic HTML and CSS to keep the layout clean and accessible, then progressively added functionality like filtering, local storage, and editing. Throughout the build, I aimed to keep the code modular, readable, and easy to maintain while focusing on delivering all core features with a responsive and intuitive UI.

### Architecture Decisions

- **Module Structure:**  I broke the logic into three separate JavaScript modules for better separation of concerns: storage.js handles persistence, tasks.js handles business logic (add/edit/delete/filter), and app.js binds everything together and manages the UI rendering.

- **State Management:** Tasks are managed in a local array in memory, synchronized with localStorage. Changes to tasks trigger a re-render of the UI and an update to localStorage.

- **Event Handling:** I used standard DOM event listeners and delegated some events for dynamically created elements like edit/save buttons and filter inputs. This kept the event management simple and efficient.

### Implementation Details

#### Core Features

1. **Task Display**
   - The tasks are shown as list items in the <ul> tag with classes based on their priority and status. Each task includes title, description, priority, status, and action buttons.
   - I used CSS to color code tasks by priority and added conditional styling for completed tasks like strike through on buttons.
   - I avoided unnecessary reflows by using innerHTML batch updates for rendering.

2. **Task Creation**
   - The task form validates input fields (required) using HTML5 validation and prevents submission without valid entries.
   - After successful creation, the form resets and the task list is re-rendered.

3. **Filtering System**
   - Tasks can be filtered by status and priority. Filters are combined, meaning both filters apply simultaneously.
   - A search input field was added to filter tasks by title and description using includes() matching.
   - Filter state is preserved during runtime but not persisted

4. **Local Storage**
   - Tasks are stored in localStorage as JSON strings.
   - On page load, tasks are parsed and loaded into memory. Every create, update, or delete action updates the storage.

#### Code Organization
   - storage.js: Responsible for reading and writing to localStorage..
   - tasks.js: Contains all logic for managing task data like create, edit, delete, toggle, and filtering.
   - app.js: Handles DOM rendering, event listeners, and tying together the storage and logic layers.

### Trade-offs and Decisions

1. **Vanilla JavaScript Over Frameworks:** Sticking with vanilla JS was a requirement, but it did limit reusability and state reactivity compared to frameworks.
2. **Inline Event Handlers:** For simplicity and clarity in a small app, I used inline handlers for actions like toggle and delete, knowing that in a real app I’d prefer event delegation.
3. **CSS-Only Layout:** I didn’t use CSS Grid or frameworks. Instead, I kept it responsive using basic flexbox for simplicity and compatibility.

### Challenges Faced

1. **Challenge:** Getting the layout to follow the required UI structure where filters are on top, form is on the left, and task list is on the right.
   **Solution:** I used flexbox with wrapping and adjusted the media queries for mobile responsiveness. It took a few iterations to get the layout visually consistent across screen sizes.
2. **Challenge:** Ensuring filter and search features work in combination.
   **Solution:** I made sure filtering is centralized inside the `renderTasks()` function and applied all conditions sequentially.
3. **Challenge:** DOM manipulation with dynamic event binding.
   **Solution:** Used addEventListener on the document or parent containers and delegated to child elements when necessary.
4. **Challenge:** Inline edit mode clashing with completed task styling.
   **Solution:** Adjusted the rendering logic to show/hide input fields and re-use the form template inside each task conditionally..

### Future Improvements

1. **Performance:**Add debouncing for the search input to reduce re-renders.
2. **Features:** Drag-and-drop reordering, task exporting, dark mode toggle, and task stats would be valuable additions.
3. **Code Quality:** I’d like to abstract some repetitive DOM code and make utility functions reusable.
4. **Testing:** Introduce unit tests using a basic test runner and use mock localStorage for integration testing.


### Browser Compatibility

List the browsers you tested on:
- Chrome Version 137.0.7151.55 (Official Build) (64-bit)
- Firefox version 139.0.1 (64-bit)
- Edge Version 136.0.3240.92 (Official build) (64-bit)

### Accessibility Considerations

Accessibility features implemented listed below.
- Keyboard navigation
- ARIA labels (for forms, filters, and lists)
- Color contrast (priority badges are color coded)
- Focus indicators (relies on browser defaults, no override)

### Performance Metrics 

I measured these manually using dev tools console and performance tab
- Initial load time: ~120ms
- Task creation time: <50ms
- Filter update time: ~30ms

### Additional Notes

I tried to keep the UI clean and the experience smooth. Working without any frameworks was refreshing and brought me back to fundamentals. I also aimed for maintainability, so anyone reviewing this should find it easy to follow and extend.

## Self-Assessment

Rate your solution on each criterion (1-5 scale):

- **Functionality Completeness:** 5/5
- **Code Quality:** 4.5/5
- **UI/UX Design:** 4/5
- **Performance:** 4.5/5
- **Accessibility:** 4/5

## Questions for the Review

1. Would you prefer a framework-based approach if time and scope allowed?
2. Is there a preferred structure or standard for naming modules in your team?
3. Any suggestions on improving the accessibility layer further?
