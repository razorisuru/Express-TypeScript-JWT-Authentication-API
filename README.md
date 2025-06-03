# Express TypeScript JWT Authentication API

A secure and robust authentication API built with Express.js and TypeScript, featuring JWT-based authentication, MongoDB integration, and user management.

## Features

- 🔐 Secure JWT-based authentication
- 📝 TypeScript for type safety
- 🗄️ MongoDB integration with Mongoose
- 👤 User registration and login
- 🛡️ Protected route middleware
- 🔑 Password hashing with bcrypt
- ⚡ Fast development with ts-node-dev
- 🌍 Environment variable configuration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/express-ts-jwt-auth.git
cd express-ts-jwt-auth
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
JWT_SECRET=your_jwt_secret_here
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

## Development

To start the development server with hot-reload:

```bash
npm run dev
```

The server will start at `http://localhost:5000` by default.

## API Endpoints

### Authentication

#### Register a new user
- **POST** `/api/auth/register`
- **Body:**
```json
{
  "username": "string",
  "password": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string"
}
```

#### Login
- **POST** `/api/auth/login`
- **Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

### Protected Routes

To access protected routes, include the JWT token in the Authorization header:
```
Authorization: Bearer your_jwt_token_here
```

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middlewares/    # Custom middleware functions
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── index.ts       # Application entry point
```

## Environment Variables

- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Server port number
- `MONGODB_URI`: MongoDB connection string

## Security Features

- Password hashing using bcrypt
- JWT token authentication
- Protected routes middleware
- Environment variable configuration
- TypeScript type safety

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Express.js
- TypeScript
- MongoDB
- Mongoose
- JSON Web Tokens
- bcrypt

