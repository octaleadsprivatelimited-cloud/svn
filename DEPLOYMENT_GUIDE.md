# Complete Deployment Guide for SVN Global Website

## Quick Fix for "Cannot connect to server" Error

### The Problem
After deploying to Vercel, the admin login page shows: "Cannot connect to server. Please make sure the backend server is running on port 3001."

This happens because the frontend is trying to connect to `localhost:3001`, which doesn't exist in production.

### The Solution

You need to:
1. **Deploy your backend** to a hosting service (Vercel, Railway, Render, etc.)
2. **Set the backend URL** in your frontend's Vercel environment variables

---

## Step-by-Step Deployment

### Part 1: Deploy Backend to Vercel

1. **Create a new Vercel project** for the backend:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click **Add New Project**
   - Import your GitHub repository
   - **Important**: Set **Root Directory** to `backend`

2. **Configure Build Settings**:
   - Framework Preset: **Other**
   - Build Command: Leave empty (or `npm install`)
   - Output Directory: Leave empty
   - Install Command: `npm install`

3. **Add Environment Variables** in Vercel:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
     ```
     mongodb+srv://svnglobal:Svnglobal%402025@svnglobal.5vlys7w.mongodb.net/svn-global?retryWrites=true&w=majority&appName=svnglobal
     ```
   - `JWT_SECRET`: A secure random string (e.g., generate with `openssl rand -base64 32`)
   - `FRONTEND_URL`: Your frontend Vercel URL (e.g., `https://your-frontend.vercel.app`)

4. **Deploy** and copy the backend URL (e.g., `https://your-backend.vercel.app`)

### Part 2: Configure Frontend

1. **In your frontend Vercel project**:
   - Go to **Settings** → **Environment Variables**
   - Add new variable:
     - **Key**: `VITE_API_URL`
     - **Value**: Your backend URL from Part 1 (e.g., `https://your-backend.vercel.app`)
     - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**

2. **Redeploy** your frontend:
   - Go to **Deployments**
   - Click the three dots on the latest deployment
   - Click **Redeploy**

### Part 3: Verify

1. Visit your frontend URL
2. Go to `/admin/login`
3. The error should be gone
4. Try logging in with:
   - Email: `admin@svnglobal.com`
   - Password: `admin123`

---

## Alternative: Deploy Backend to Railway or Render

### Railway

1. Go to [Railway](https://railway.app)
2. Create new project from GitHub
3. Select your repository
4. Set **Root Directory** to `backend`
5. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `FRONTEND_URL`
6. Deploy and copy the URL
7. Use this URL as `VITE_API_URL` in your frontend Vercel project

### Render

1. Go to [Render](https://render.com)
2. Create new **Web Service**
3. Connect GitHub repository
4. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node src/server.js`
5. Add environment variables
6. Deploy and use the URL

---

## Files Created

- ✅ `backend/vercel.json` - Backend Vercel configuration
- ✅ `VERCEL_ENV_SETUP.md` - Environment variables guide
- ✅ Updated CORS in `backend/src/app.js` to allow Vercel domains

---

## Troubleshooting

### Still seeing localhost error?
- ✅ Make sure you **redeployed** after adding `VITE_API_URL`
- ✅ Check Vercel environment variables are set correctly
- ✅ Verify the backend URL is accessible (visit it in browser)

### CORS errors?
- ✅ Update `FRONTEND_URL` in backend environment variables
- ✅ Backend CORS is configured to allow Vercel domains

### Backend not responding?
- ✅ Check backend logs in Vercel dashboard
- ✅ Verify MongoDB connection string is correct
- ✅ Ensure all environment variables are set

---

## Summary

1. Deploy backend → Get backend URL
2. Set `VITE_API_URL` in frontend Vercel project
3. Redeploy frontend
4. Test login

Your admin panel should now work! 🎉

