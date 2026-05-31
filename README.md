# Pro Backend API

A production-ready REST API built with Node.js and Express, featuring complete authentication system with JWT, input validation, and error handling.

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- Bcrypt (password hashing)
- Zod (input validation)

## Features
- User registration and login
- Password hashing with bcrypt
- JWT authentication
- Protected routes with auth middleware
- Input validation with Zod
- Global error handling
- Duplicate email detection

## How to Run Locally

1. Clone the repository
   git clone https://github.com/kusumithatadavarthi/pro-backend.git

2. Install dependencies
   npm install

3. Create a .env file with these variables
   DB_URL=your_mongodb_url
   JWT_KEY=your_jwt_secret

4. Start the server
   node src/index.js

## API Endpoints

| Method | Endpoint   | Description          | Protected |
|--------|------------|----------------------|-----------|
| POST   | /signup    | Register a new user  | No        |
| POST   | /login     | Login and get token  | No        |
| GET    | /profile   | Get logged in user   | Yes       |
