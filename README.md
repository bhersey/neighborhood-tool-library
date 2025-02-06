# Neighborhood Tool Library

A web application for managing a community tool-sharing library. Built with TypeScript, Express, MongoDB, and vanilla JavaScript.

## Features

- 🛠️ Tool Management
  - Add new tools with name, description, and category
  - View all available tools in a responsive grid layout
  - Edit existing tool information
  - Delete tools from the library
- 💾 MongoDB Integration
  - Secure database connection with authentication
  - Structured data model for tools
- 🎨 Modern UI
  - Responsive design
  - Interactive edit/delete functionality
  - Clean and intuitive interface

## Tech Stack

- **Backend**
  - Node.js with Express
  - TypeScript
  - MongoDB with Mongoose
  - dotenv for configuration

- **Frontend**
  - Vanilla JavaScript
  - CSS3 with Grid/Flexbox
  - HTML5

## Project Structure

```
neighborhood-library
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   └── toolsController.ts # Controller for tool-related operations
│   ├── models                # Contains Mongoose models
│   │   └── tool.ts           # Model for tool schema
│   ├── routes                # Contains route definitions
│   │   └── toolsRoutes.ts    # Routes for tool API
│   └── services              # Contains business logic
│       └── toolsService.ts   # Service for tool management
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd neighborhood-library
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up MongoDB:**
   Ensure you have a MongoDB instance running. Update the connection string in `src/app.ts` to point to your MongoDB database.

4. **Run the application:**
   ```
   npm start
   ```

## API Usage

### Tools API

- **GET /api/tools**: Retrieve all tools.
- **GET /api/tools/:id**: Retrieve a tool by its ID.
- **POST /api/tools**: Create a new tool.
- **PUT /api/tools/:id**: Update an existing tool.
- **DELETE /api/tools/:id**: Delete a tool.

## License

This project is licensed under the MIT License.