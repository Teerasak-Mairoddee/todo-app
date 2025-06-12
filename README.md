# Task Management Application

This is a lightweight yet robust web application built using Node.js, Express, and EJS. It helps users manage tasks efficiently with a simple user interface that allows adding, completing, viewing, and deleting tasks. The project reflects a clean separation of concerns between frontend presentation and backend logic, making it ideal for learning full-stack development.

## Features

- **Add Tasks**: Quickly add new tasks via a form.
- **Complete Tasks**: Mark tasks as complete with a timestamp recorded.
- **View Completed Tasks**: View a list of finished tasks, including when each was completed.
- **Delete Completed Tasks**: Remove tasks that are no longer needed.

## Project Structure

- `public/css/styles.css`  
  Contains styles to make the interface visually appealing and mobile-friendly.

- `public/js/script.js`  
  Handles client-side interactivity such as task deletion.

- `views/index.ejs`  
  The EJS template for rendering the main task list dynamically.

- `index.js`  
  The main backend server file. Handles routing and task logic using Express.

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Teerasak-Mairoddee/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   node index.js
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Usage Guide

### Adding a Task
- Type your task into the input field
- Click “Add Task”

### Completing a Task
- Click the checkbox next to the task
- The task will move to the completed list with a timestamp

### Deleting a Completed Task
- Click the delete button beside any completed task

## Technologies Used

- **Node.js**: JavaScript runtime for building backend logic
- **Express.js**: Lightweight web framework for routing and middleware
- **EJS**: Templating engine to inject dynamic content into HTML
- **Body-Parser**: Parses incoming request bodies
- **CSS and JavaScript**: Handles frontend styling and interactivity

## Planned Improvements

- User authentication and session management
- Persistent task storage using a database
- Task priority levels and due dates
- Email reminders and notifications

## Contribution

Contributions are welcome. Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Developer Notes

This app was inspired by a Codecademy project requirement to build something without guided instructions. It reflects practical knowledge of Node.js and frontend-backend integration. The project uses publicly available tutorials and open-source libraries to accelerate development and learning.

Original inspiration and resources:
- https://medium.com/@atingenkay/creating-a-todo-app-with-node-js-express-8fa51f39b16f
- OpenAI (for occasional logic support and learning aid)

## Contact

For feedback or collaboration, contact:  
**teerasakmairoddee556@gmail.com**

To explore more of my work:  
https://linktr.ee/teerasakmairoddee
