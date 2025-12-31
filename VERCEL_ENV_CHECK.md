# Vercel Environment Variable Check

## Current Error
"Backend API URL is not configured. Please set VITE_API_URL in Vercel environment variables."

## Quick Fix Steps

### 1. Verify Variable is Set in Vercel

1. Go to your **frontend project** in Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Look for `VITE_API_URL`
4. If it's missing, add it:
   - **Key**: `VITE_API_URL`
   - **Value**: Your backend URL (e.g., `https://your-backend.vercel.app`)
   - **Environment**: Select **ALL** (Production, Preview, Development)

### 2. Important: Redeploy After Adding Variable

**Critical**: After adding or updating environment variables, you MUST redeploy:

1. Go to **Deployments** tab
2. Click the **three dots (⋯)** on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

### 3. Verify the Variable is Available

After redeploying, check the browser console:
- Open your deployed site
- Press F12 to open DevTools
- Go to Console tab
- Look for `[API Config]` messages
- You should see: `[API Config] Production mode - API URL configured`

### 4. Common Issues

**Issue**: Variable set but still showing error
- **Solution**: Make sure you redeployed after setting the variable
- Vite replaces env variables at BUILD time, not runtime

**Issue**: Variable only set for Production
- **Solution**: Set it for ALL environments (Production, Preview, Development)

**Issue**: Typo in variable name
- **Solution**: Must be exactly `VITE_API_URL` (case-sensitive, starts with `VITE_`)

**Issue**: Variable value has trailing spaces
- **Solution**: Remove any spaces before/after the URL

### 5. Testing

After setting and redeploying:
1. Visit your deployed site
2. Go to `/admin/login`
3. The error should be gone
4. Check browser console for `[API Config]` logs

## Backend URL Format

Your `VITE_API_URL` should be:
- Full URL: `https://your-backend.vercel.app`
- No trailing slash
- Include `https://` or `http://`
- Example: `https://svn-backend-abc123.vercel.app`

## Still Not Working?

1. Check Vercel build logs for any errors
2. Verify the variable appears in build logs (Vercel shows env vars in logs)
3. Try setting it again and redeploying
4. Check browser console for the debug messages

