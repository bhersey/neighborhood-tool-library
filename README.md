# Neighborhood Library Tool Management

This project is a simple web application that serves as a neighborhood library for tools. It allows users to manage tools available for borrowing, including adding, updating, and deleting tool entries.

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