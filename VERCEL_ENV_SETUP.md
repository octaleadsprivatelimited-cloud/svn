# Vercel Environment Variables Setup

## Problem
After deploying to Vercel, the frontend is trying to connect to `http://localhost:3001`, which doesn't work in production.

## Solution

You need to set the `VITE_API_URL` environment variable in Vercel to point to your backend server.

### Option 1: Backend Deployed on Vercel

If you've deployed your backend to Vercel:

1. Go to your **backend project** in Vercel dashboard
2. Copy the deployment URL (e.g., `https://your-backend.vercel.app`)
3. Go to your **frontend project** in Vercel dashboard
4. Navigate to **Settings** → **Environment Variables**
5. Add a new variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend.vercel.app`
   - **Environment**: Production, Preview, Development (select all)
6. Click **Save**
7. **Redeploy** your frontend application

### Option 2: Backend on Another Service

If your backend is deployed elsewhere (Railway, Render, etc.):

1. Get your backend URL (e.g., `https://your-backend.railway.app`)
2. In Vercel frontend project → **Settings** → **Environment Variables**
3. Add:
   - **Key**: `VITE_API_URL`
   - **Value**: Your backend URL (e.g., `https://your-backend.railway.app`)
4. **Redeploy**

### Option 3: Deploy Backend to Vercel

If you haven't deployed the backend yet:

1. Create a new Vercel project
2. Connect your GitHub repository
3. Set **Root Directory** to `backend`
4. Set **Build Command**: Leave empty (or `npm install` if needed)
5. Set **Output Directory**: Leave empty (backend doesn't need output)
6. Add environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your JWT secret key
   - `PORT`: `3001` (optional, Vercel sets this automatically)
7. Deploy
8. Copy the backend URL
9. Set `VITE_API_URL` in your frontend Vercel project (as in Option 1)

## Backend Vercel Configuration

For the backend, you'll need a `vercel.json` in the `backend` directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/server.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

## Testing

After setting the environment variable and redeploying:

1. Visit your frontend URL
2. Go to `/admin/login`
3. The error should be gone
4. Login should work

## Troubleshooting

- **Still seeing localhost error?** Make sure you redeployed after adding the environment variable
- **CORS errors?** Update backend CORS to allow your frontend domain
- **Backend not responding?** Check backend logs in Vercel dashboard

