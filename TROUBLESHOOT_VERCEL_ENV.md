# Troubleshooting VITE_API_URL in Vercel

## The Problem
Still seeing: "Backend API URL is not configured. Please set VITE_API_URL in Vercel environment variables."

## Critical Steps (Must Do All)

### Step 1: Verify Variable is Set Correctly

1. **Go to Vercel Dashboard** → Your Frontend Project
2. **Settings** → **Environment Variables**
3. **Check if `VITE_API_URL` exists:**
   - If NO → Add it (see Step 2)
   - If YES → Check the value and environment selection

### Step 2: Add/Update the Variable

**If variable doesn't exist or needs updating:**

1. Click **"Add New"** or edit existing
2. **Key**: `VITE_API_URL` (exactly this, case-sensitive)
3. **Value**: Your backend URL (e.g., `https://your-backend.vercel.app`)
   - Must start with `http://` or `https://`
   - No trailing slash
   - Example: `https://svn-backend-abc123.vercel.app`
4. **Environment**: Select **ALL THREE**:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development
5. **Click Save**

### Step 3: REDEPLOY (CRITICAL!)

**This is the most important step!**

Vite replaces environment variables at **BUILD TIME**, not runtime. You MUST redeploy:

1. Go to **Deployments** tab
2. Find the **latest deployment**
3. Click the **three dots (⋯)** menu
4. Click **"Redeploy"**
5. **Wait for deployment to complete** (2-5 minutes)

### Step 4: Verify in Browser Console

After redeploying:

1. Open your deployed site
2. Press **F12** to open DevTools
3. Go to **Console** tab
4. Look for `[API Configuration]` group
5. You should see:
   ```
   [API Configuration]
   Mode: production
   Is Production: true
   VITE_API_URL from env: https://your-backend.vercel.app
   Resolved API_URL: https://your-backend.vercel.app
   Is Configured: true
   ✅ API URL configured: https://your-backend.vercel.app
   ```

### Step 5: Check Vercel Build Logs

1. Go to **Deployments** → Latest deployment
2. Click on the deployment
3. Check **Build Logs**
4. Look for environment variables being loaded
5. Verify `VITE_API_URL` appears in the logs

## Common Mistakes

### ❌ Mistake 1: Variable set but not redeployed
- **Symptom**: Variable exists in Vercel but error persists
- **Fix**: REDEPLOY after setting variable

### ❌ Mistake 2: Variable only set for Production
- **Symptom**: Works in production but not preview
- **Fix**: Set for ALL environments

### ❌ Mistake 3: Wrong variable name
- **Symptom**: Variable set but not recognized
- **Fix**: Must be exactly `VITE_API_URL` (not `API_URL`, not `VITE_API`)

### ❌ Mistake 4: Variable value has spaces
- **Symptom**: URL not recognized
- **Fix**: Remove all spaces before/after URL

### ❌ Mistake 5: Using wrong project
- **Symptom**: Variable set but not working
- **Fix**: Make sure you're setting it in the **FRONTEND** project, not backend

## Quick Test

After redeploying, test in browser console:

```javascript
// Run this in browser console
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
```

If it shows `undefined`, the variable is not set or build didn't pick it up.

## Still Not Working?

1. **Double-check variable name**: Must be `VITE_API_URL`
2. **Check backend URL**: Make sure backend is deployed and accessible
3. **Verify redeploy**: Make sure you redeployed AFTER setting the variable
4. **Check build logs**: Look for any errors during build
5. **Try clearing cache**: Hard refresh (Ctrl+Shift+R) or clear browser cache

## Alternative: Check via Vercel CLI

If you have Vercel CLI installed:

```bash
vercel env ls
```

This will show all environment variables for your project.

