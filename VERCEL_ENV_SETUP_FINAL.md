# Vercel Environment Variable Setup - Final Instructions

## Your Backend URL
```
https://svn-ten.vercel.app
```

## Steps to Fix the Error

### Step 1: Set Environment Variable in Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your FRONTEND project** (not backend)
3. **Click "Settings"** (left sidebar)
4. **Click "Environment Variables"**
5. **Click "Add New"**
6. **Fill in:**
   - **Key**: `VITE_API_URL`
   - **Value**: `https://svn-ten.vercel.app` (no trailing slash)
   - **Environment**: Select **ALL THREE**:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
7. **Click "Save"**

### Step 2: REDEPLOY (CRITICAL!)

**You MUST redeploy after setting the variable:**

1. Go to **"Deployments"** tab
2. Find the **latest deployment**
3. Click the **three dots (⋯)** menu
4. Click **"Redeploy"**
5. **Wait for deployment to complete** (2-5 minutes)

### Step 3: Verify

After redeploying:

1. Open your deployed frontend site
2. Press **F12** → **Console** tab
3. Look for `[API Configuration]` group
4. You should see:
   ```
   [API Configuration]
   Mode: production
   VITE_API_URL from env: https://svn-ten.vercel.app
   Resolved API_URL: https://svn-ten.vercel.app
   Is Configured: true
   ✅ API URL is configured correctly
   ```

## Important Notes

- **No trailing slash**: Use `https://svn-ten.vercel.app` (not `https://svn-ten.vercel.app/`)
- **Must redeploy**: Vite replaces env variables at BUILD TIME
- **All environments**: Set for Production, Preview, AND Development
- **Case sensitive**: Must be exactly `VITE_API_URL`

## Quick Test

After redeploying, test the login:
1. Go to `/admin/login`
2. The error should be gone
3. Try logging in with:
   - Email: `admin@svnglobal.com`
   - Password: `admin123`

## Troubleshooting

If still not working:
1. Check browser console for `[API Configuration]` logs
2. Verify variable is set in Vercel (Settings → Environment Variables)
3. Make sure you redeployed AFTER setting the variable
4. Check Vercel build logs to confirm variable is being used

