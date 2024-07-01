# Task Management Application

Welcome to the Task Management Application! This project is a simple yet powerful web application built with Node.js, Express, and EJS. It allows users to add, complete, and delete tasks, making task management straightforward and efficient. The application also features a sleek and responsive UI built with HTML, CSS, and JavaScript.

## Features

- **Add Tasks**: Users can add new tasks to their to-do list.
- **Complete Tasks**: Tasks can be marked as complete, capturing the completion time.
- **Delete Completed Tasks**: Completed tasks can be removed from the list.
- **View Completed Tasks**: Users can view a list of all completed tasks along with their completion timestamps.

### `public/css/styles.css`

Contains the CSS for styling the application. The styles ensure the application is user-friendly, visually appealing, and responsive.

### `public/js/script.js`

Handles the client-side JavaScript for the application. It includes functionality for deleting completed tasks and other interactive features.

### `views/index.ejs`

The EJS template for rendering the main page of the application. It dynamically displays the list of tasks and completed tasks.

### `index.js`

The main server file. It sets up the Express application, defines routes for adding, completing, and deleting tasks, and renders the EJS template.

## Setup Instructions

### Prerequisites

- Node.js (v12 or later)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/task-management-app.git
    cd task-management-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the application**:

    ```bash
    node index.js
    ```

4. **Open your browser** and go to `http://localhost:3000` to view the application.

## Usage

### Adding a Task

1. Enter the task description in the input field.
2. Click the "Add Task" button.

### Completing a Task

1. Check the checkbox next to the task you want to complete.
2. The task will be moved to the completed tasks list with a timestamp.

### Deleting a Completed Task

1. Click the delete button next to the completed task.
2. The task will be removed from the completed tasks list.

## Key Technologies

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **EJS**: Embedded JavaScript templating for rendering HTML with dynamic content.
- **Body-Parser**: Middleware to parse incoming request bodies.
- **CSS**: For styling the application.
- **JavaScript**: For client-side interactivity.

## Future Enhancements

- **User Authentication**: Add user login and registration functionality.
- **Persistent Storage**: Integrate a database to persist tasks across sessions.
- **Email Notifications**: Allow users to receive email notifications for tasks.
- **Priority Levels**: Add the ability to set priority levels for tasks.
- **Due Dates**: Enable users to set and view due dates for tasks.

## Contribution

Contributions are welcome! Please fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.

---

This Task Management Application showcases a blend of simplicity and functionality, ideal for those looking to manage their tasks effectively. If you have any questions or feedback, feel free to reach out. Happy tasking!

---

For any inquiries or collaboration opportunities, please contact [your-email@example.com].

---

*Thank you for checking out the Task Management Application! If you found this project impressive or useful, please star the repository and share it with others.*

---

resources:
https://medium.com/@atingenkay/creating-a-todo-app-with-node-js-express-8fa51f39b16f
OpenAi
