# Step-by-Step Setup Guide

## Step 1: Set Environment Variable in Vercel

### Detailed Instructions:

1. **Open Vercel Dashboard**
   - Go to: https://vercel.com/dashboard
   - Sign in if needed

2. **Select Your Frontend Project**
   - Find your frontend project in the list
   - Click on it to open project settings

3. **Navigate to Environment Variables**
   - Click **"Settings"** in the left sidebar
   - Click **"Environment Variables"** under Configuration

4. **Add New Variable**
   - Click **"Add New"** button (top right)
   - Fill in the form:
     ```
     Key: VITE_API_URL
     Value: https://svn-ten.vercel.app
     ```
   - **IMPORTANT**: Under "Environment", select ALL THREE:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
   - Click **"Save"**

5. **Verify It's Added**
   - You should see `VITE_API_URL` in the list
   - Check that all three environments are selected

---

## Step 2: Redeploy Your Application

### Why This is Critical:
Vite replaces environment variables at **BUILD TIME**, not runtime. You MUST redeploy after setting the variable.

### Instructions:

1. **Go to Deployments Tab**
   - Click **"Deployments"** in the left sidebar
   - You'll see a list of all deployments

2. **Find Latest Deployment**
   - Look for the most recent deployment (top of the list)
   - It should show "Ready" status

3. **Redeploy**
   - Click the **three dots (⋯)** menu on the right side of the deployment
   - Click **"Redeploy"** from the dropdown menu
   - Confirm if prompted

4. **Wait for Deployment**
   - You'll see a new deployment starting
   - Status will change: Building → Deploying → Ready
   - This takes 2-5 minutes
   - **DO NOT** close the page until it's complete

5. **Verify Build Logs**
   - Click on the new deployment
   - Check the build logs
   - Look for any errors (there shouldn't be any)
   - The build should complete successfully

---

## Step 3: Verify It's Working

### Check Browser Console:

1. **Open Your Deployed Site**
   - Go to your frontend Vercel URL
   - Example: `https://your-frontend.vercel.app`

2. **Open Developer Tools**
   - Press **F12** (or Right-click → Inspect)
   - Click the **"Console"** tab

3. **Look for API Configuration Logs**
   - You should see a group: `[API Configuration]`
   - Expand it to see:
     ```
     Mode: production
     Is Production: true
     Is Development: false
     VITE_API_URL from env: https://svn-ten.vercel.app
     Resolved API_URL: https://svn-ten.vercel.app
     Is Configured: true
     ✅ API URL is configured correctly
     ```

4. **Test the Login Page**
   - Navigate to `/admin/login`
   - The error message should be **GONE**
   - Try logging in:
     - Email: `admin@svnglobal.com`
     - Password: `admin123`
   - Login should work now!

### If You See Errors:

**Error: "VITE_API_URL from env: (not set or empty)"**
- The variable wasn't set correctly
- Go back to Step 1 and verify the variable name is exactly `VITE_API_URL`

**Error: Still shows configuration error**
- You might not have redeployed
- Go back to Step 2 and make sure you redeployed AFTER setting the variable

**Error: API calls failing**
- Check that your backend is running at `https://svn-ten.vercel.app`
- Test the backend directly: Visit `https://svn-ten.vercel.app/api/health`
- Should return: `{"success":true,"message":"Server is running"}`

---

## Quick Checklist

- [ ] Step 1: Set `VITE_API_URL` in Vercel
- [ ] Step 1: Selected ALL environments (Production, Preview, Development)
- [ ] Step 2: Redeployed the application
- [ ] Step 2: Waited for deployment to complete
- [ ] Step 3: Checked browser console - see `✅ API URL is configured correctly`
- [ ] Step 3: Tested login page - no error message
- [ ] Step 3: Successfully logged in

---

## Troubleshooting

### Still Not Working?

1. **Double-check variable name**: Must be exactly `VITE_API_URL` (case-sensitive)
2. **Check variable value**: Should be `https://svn-ten.vercel.app` (no trailing slash, no quotes)
3. **Verify redeploy**: Make sure you redeployed AFTER setting the variable
4. **Check build logs**: Look for any errors during build
5. **Clear browser cache**: Hard refresh (Ctrl+Shift+R) or clear cache
6. **Check backend**: Verify `https://svn-ten.vercel.app/api/health` is accessible

### Need Help?

Check the browser console logs - they will tell you exactly what's wrong:
- If `VITE_API_URL from env` shows the URL → Variable is set correctly
- If it shows `(not set or empty)` → Variable is not set or not being read
- If `Resolved API_URL` is null → Configuration logic issue

