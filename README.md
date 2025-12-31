# SVN Global - Corporate Website

A professional corporate website for SVN Global, built with React + Vite frontend and Node.js + Express backend, using MongoDB Atlas for data storage.

## Technology Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB Atlas (Mongoose)
- **Port**: Backend runs on port 3001

## Project Structure

```
project-root/
├── backend/          # Node.js + Express backend
├── frontend/         # React + Vite frontend
├── .gitignore
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (for database)
- npm or yarn package manager

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in `backend/` directory (copy from `.env.example` if available):
```
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key_here
PORT=3001
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:3001`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in `frontend/` directory:
```
VITE_API_URL=http://localhost:3001
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

### Creating Admin User

To create an admin user, you can use the registration endpoint:
```bash
POST /api/admin/register
Body: {
  "email": "admin@example.com",
  "password": "yourpassword",
  "role": "admin"
}
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/admin/login` - Admin authentication
- `GET /api/health` - Health check

## Features

- Responsive design for desktop, tablet, and mobile
- Contact form with backend integration
- Admin-ready architecture
- MongoDB Atlas integration
- Professional corporate design

