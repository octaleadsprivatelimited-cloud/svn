# Vercel Deployment Guide

## Fixing 404 Errors for Admin Routes

The 404 error on admin pages occurs because Vercel needs to be configured to handle Single Page Application (SPA) routing.

## Solution

I've created the necessary configuration files:

1. **`vercel.json`** (root) - Main Vercel configuration
2. **`frontend/vercel.json`** - Frontend-specific configuration
3. **`frontend/public/_redirects`** - Netlify-style redirects (backup)

## Deployment Steps

### Option 1: Deploy from Root Directory (Recommended)

1. In Vercel dashboard, set:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

2. Or use the `vercel.json` in the root with:
   ```json
   {
     "buildCommand": "cd frontend && npm install && npm run build",
     "outputDirectory": "frontend/dist",
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

### Option 2: Deploy Frontend Directory Directly

1. In Vercel, connect your GitHub repository
2. Set the **Root Directory** to `frontend`
3. Vercel will automatically use `frontend/vercel.json`
4. The rewrite rule will handle all routes

## Environment Variables

Make sure to set these in Vercel:

- `VITE_API_URL` - Your backend API URL (e.g., `https://your-backend.vercel.app`)

## Testing

After deployment:

1. ✅ Home page: `https://your-app.vercel.app/`
2. ✅ Admin login: `https://your-app.vercel.app/admin/login`
3. ✅ Admin dashboard: `https://your-app.vercel.app/admin/dashboard`
4. ✅ All routes should work without 404 errors

## Troubleshooting

If you still get 404 errors:

1. **Check Vercel Build Logs**: Ensure the build completes successfully
2. **Verify Output Directory**: Should be `dist` (or `frontend/dist` if deploying from root)
3. **Check vercel.json**: Make sure the rewrite rule is present
4. **Clear Cache**: Try a hard refresh (Ctrl+Shift+R) or clear browser cache

## Files Created

- ✅ `vercel.json` - Root configuration
- ✅ `frontend/vercel.json` - Frontend-specific configuration
- ✅ `frontend/public/_redirects` - Backup redirects file

