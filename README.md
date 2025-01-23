# RoleBasedAuthorization_API

Role-Based Authorization API - README


Introduction

This is a role-based authorization API built with Node.js, Express.js, and MongoDB. The API supports user authentication, registration, and access control based on user roles. It features secure password handling and JSON Web Token (JWT) authentication.
Features

- User authentication with JWT.
- Role-based access control for protected routes.
- Password hashing using bcrypt.
- Organized and modular code structure.

Technologies Used

- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose ODM)
- Authentication: JSON Web Tokens (JWT)
- Password Security: bcrypt.js
- Environment Variables: dotenv


Installation

1. Clone the Repository:
   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   Create a `.env` file with the following content:
   ```env
   CONNECTION_STRING=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   PORT=7001
   ```
4. Start the Server:
   ```bash
   npm start
   ```


Usage

### Authentication Endpoints
- Register: POST `/api/auth/register`
  ```json
  {
      "username": "user1",
      "password": "user123",
      "role": "user"
  }
  ```
- Login: POST `/api/auth/login`
  ```json
  {
      "username": "user1",
      "password": "user123"
  }
  ```


API Endpoints

### Auth Routes
| Route              | Method | Description              |
|--------------------|--------|--------------------------|
| `/api/auth/register` | POST   | Register a new user      |
| `/api/auth/login`    | POST   | Login and get JWT token  |

### Protected Routes
| Route            | Method | Description                |
|------------------|--------|----------------------------|
| `/api/users/`     | GET    | Get all users (Admin only) |
| `/api/users/:id`  | GET    | Get a specific user        |
| `/api/users/:id`  | PUT    | Update user details        |
| `/api/users/:id`  | DELETE | Delete a user              |



Error Handling

The API provides consistent error messages:
- **401 Unauthorized:** Missing or invalid authentication token.
- **403 Forbidden:** Access denied for the requested resource.
- **404 Not Found:** Resource does not exist.
- **500 Internal Server Error:** General server issues.



Contributing

Contributions are welcome! Please fork this repository and submit pull requests for new features, bug fixes, or improvements.

