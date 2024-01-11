# Task Board - Ascend Assignment

## Features

- Users can create an account and log in using their unique username and password. User credentials are stored securely in the PostgreSQL database.

- Users can create multiple task lists, and these lists are saved in the PostgreSQL database. Each list is associated with a user.

- Users can easily move tasks from one list to another using HTML's draggable properties. When tasks are moved, the data is automatically updated and saved in the database.

- When a user moves a task to another list, the corresponding list ID is updated in the database to reflect the change.

- Users can scroll through multiple task lists horizontally, allowing for efficient management of tasks.

- Users can mark tasks as completed, and completed tasks are automatically removed from the list, improving task organization.

## Prerequisites

- Node.js and npm installed on your local machine
- PostgreSQL database set up with Sequelize configured


## Technologies

- **Frontend:**
  - React
  - Context API (for state management)
  - Axios (for API requests)
  - React Router (for navigation)
  - Shadcn ui (for UI creation)
  - Tailwind css (for Styling)

- **Backend:**
  - Node.js
  - Express.js
  - Postgres (for data storage)
  - Sequelize


## Usage

- Create a user account or log in using your existing credentials.
- Create multiple task lists and start adding tasks to them.
- Drag and drop tasks between lists to update and save the data.
- Use horizontal scrolling to navigate through your task lists efficiently.
- Mark tasks as completed to remove them from your lists.

