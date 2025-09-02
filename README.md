# MERN Product Store CRUD

This project is a full-stack CRUD application for managing products, built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- Create, Read, Update, Delete (CRUD) products
- RESTful API backend with Express and Mongoose
- React frontend with Chakra UI for styling
- Zustand for state management
- Toast notifications for user feedback
- Production-ready static serving

## Project Structure
```
mern_crashCourse/
├── backend/
│   ├── config/db.js         # MongoDB connection logic
│   ├── controllers/         # Express route controllers
│   ├── models/              # Mongoose models
│   ├── routes/              # Express routes
│   └── server.js            # Express server entry point
├── frontend/
│   ├── src/                 # React source code
│   ├── dist/                # Production build output
│   └── ...                  # Other frontend files
├── package.json             # Project scripts and dependencies
└── .env                     # Environment variables
```

## Setup Instructions

### 1. Clone the repository
```sh
git clone <https://github.com/Cathal-McHale/Product_Store-CRUD-MERN-stack>
cd mern_crashCourse
```

### 2. Install dependencies
```sh
npm install
cd frontend
npm install
```

### 3. Configure environment variables
Create a `.env` file in the project root:
```
MONGO_URI=mongodb://localhost:27017/yourdbname
PORT=5000
```
Replace `yourdbname` with your MongoDB database name.

### 4. Run the backend (development)
```sh
npm run dev
```

### 5. Run the frontend (development)
```sh
cd frontend
npm run dev
```

### 6. Build frontend for production
```sh
cd frontend
npm install vite --save-dev # If not already installed
npm run build
```

### 7. Start in production mode
```sh
npm start
```

## API Endpoints
- `GET /api/products` - List all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Technologies Used
- **Backend:** Node.js, Express, Mongoose, dotenv
- **Frontend:** React, Chakra UI, Zustand, Vite
- **Other:** cross-env

## Troubleshooting
- Ensure MongoDB is running and accessible via `MONGO_URI`
- If you see `vite not recognized`, run `npm install vite --save-dev` in the frontend folder
- For static frontend serving, build the frontend and start the backend in production mode

