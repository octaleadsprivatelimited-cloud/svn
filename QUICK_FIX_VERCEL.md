# Quick Fix: Set VITE_API_URL in Vercel

## Current Error
```
Cannot connect to backend server at http://localhost:3001. 
Please check your VITE_API_URL environment variable in Vercel settings.
```

## Solution (5 minutes)

### Step 1: Get Your Backend URL

**Option A: If backend is already deployed on Vercel**
- Go to your backend project in Vercel dashboard
- Copy the deployment URL (e.g., `https://svn-backend.vercel.app`)

**Option B: If backend is NOT deployed yet**
- Deploy backend first (see Step 2 below)
- Then come back to Step 1

### Step 2: Deploy Backend (If Not Done)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click "Add New Project"**
3. **Import your GitHub repository** (same repo)
4. **Configure**:
   - **Project Name**: `svn-backend` (or any name)
   - **Root Directory**: Click "Edit" → Type `backend`
   - **Framework Preset**: Select "Other"
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
5. **Click "Environment Variables"** (or "Add" button)
6. **Add these variables**:
   ```
   MONGODB_URI = mongodb+srv://svnglobal:Svnglobal%402025@svnglobal.5vlys7w.mongodb.net/svn-global?retryWrites=true&w=majority&appName=svnglobal
   
   JWT_SECRET = your-secret-key-here (generate a random string)
   
   FRONTEND_URL = https://your-frontend.vercel.app (your frontend URL)
   ```
7. **Click "Deploy"**
8. **Wait for deployment** (2-3 minutes)
9. **Copy the backend URL** from the deployment page (e.g., `https://svn-backend-abc123.vercel.app`)

### Step 3: Set VITE_API_URL in Frontend

1. **Go to your FRONTEND project** in Vercel dashboard
2. **Click "Settings"** (left sidebar)
3. **Click "Environment Variables"**
4. **Click "Add New"**
5. **Fill in**:
   - **Key**: `VITE_API_URL`
   - **Value**: Your backend URL from Step 2 (e.g., `https://svn-backend-abc123.vercel.app`)
   - **Environment**: Select **ALL** (Production, Preview, Development)
6. **Click "Save"**

### Step 4: Redeploy Frontend

1. **Go to "Deployments"** tab
2. **Find the latest deployment**
3. **Click the three dots (⋯)** next to it
4. **Click "Redeploy"**
5. **Wait for deployment** (1-2 minutes)

### Step 5: Test

1. Visit your frontend URL
2. Go to `/admin/login`
3. The error should be **GONE** ✅
4. Try logging in:
   - Email: `admin@svnglobal.com`
   - Password: `admin123`

---

## Visual Guide

### Finding Environment Variables in Vercel:

```
Vercel Dashboard
  └── Your Project
      └── Settings (left sidebar)
          └── Environment Variables
              └── Add New
                  ├── Key: VITE_API_URL
                  ├── Value: https://your-backend.vercel.app
                  └── Environment: ✓ Production ✓ Preview ✓ Development
```

### Setting Root Directory for Backend:

```
Add New Project
  └── Configure Project
      └── Root Directory: [Click "Edit"]
          └── Type: backend
```

---

## Troubleshooting

### Still seeing the error?
- ✅ Make sure you **redeployed** after adding the variable
- ✅ Check the variable name is exactly `VITE_API_URL` (case-sensitive)
- ✅ Verify backend URL is correct (visit it in browser - should show health check)
- ✅ Check all environments are selected (Production, Preview, Development)

### Backend not working?
- ✅ Check backend logs in Vercel dashboard
- ✅ Verify MongoDB connection string is correct
- ✅ Ensure JWT_SECRET is set

### Need to generate JWT_SECRET?
Run this in terminal:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## Quick Checklist

- [ ] Backend deployed on Vercel
- [ ] Backend URL copied
- [ ] `VITE_API_URL` added to frontend Vercel project
- [ ] All environments selected (Production, Preview, Development)
- [ ] Frontend redeployed
- [ ] Tested login page

---

**After completing these steps, your admin panel should work!** 🎉

