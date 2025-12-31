# Vercel UI Walkthrough - Setting Environment Variables

## Exact Navigation Path

### 1. Login to Vercel
- URL: https://vercel.com/dashboard
- Sign in with your account

### 2. Find Your Project
- Look for your frontend project in the dashboard
- Project name might be: `svn-global`, `svn-frontend`, or similar
- Click on the project card/name

### 3. Open Settings
- Left sidebar menu appears
- Click **"Settings"** (usually has a gear icon ⚙️)

### 4. Open Environment Variables
- In Settings page, left sidebar shows sub-menu:
  - General
  - **Environment Variables** ← Click here
  - Git
  - Domains
  - Functions
  - etc.

### 5. Add New Variable
- You'll see a table/list of environment variables
- Top right corner: **"Add New"** button (or **"Create"** or **"+"**)
- Click it

### 6. Fill the Form

**Form Fields:**

```
┌─────────────────────────────────────┐
│ Add Environment Variable            │
├─────────────────────────────────────┤
│                                     │
│ Key:                                │
│ [VITE_API_URL              ]        │
│                                     │
│ Value:                              │
│ [https://svn-ten.vercel.app]        │
│                                     │
│ Environment:                        │
│ ☑ Production                        │
│ ☑ Preview                           │
│ ☑ Development                       │
│                                     │
│          [Cancel]  [Save]           │
└─────────────────────────────────────┘
```

**Fill in:**
- **Key**: `VITE_API_URL`
- **Value**: `https://svn-ten.vercel.app`
- **Check all three**: Production, Preview, Development
- **Click "Save"**

### 7. Confirm It's Added

After saving, you should see in the table:

```
┌──────────────┬──────────────────────────┬─────────────────────┐
│ Key          │ Value                    │ Environment         │
├──────────────┼──────────────────────────┼─────────────────────┤
│ VITE_API_URL │ https://svn-ten.vercel...│ Production, Preview,│
│              │                          │ Development         │
└──────────────┴──────────────────────────┴─────────────────────┘
```

---

## What Each Field Means

### Key
- **What it is**: The name of the environment variable
- **Must be**: Exactly `VITE_API_URL`
- **Why**: Vite only reads variables that start with `VITE_`

### Value
- **What it is**: The actual URL value
- **Should be**: `https://svn-ten.vercel.app`
- **No**: Trailing slash, quotes, or spaces

### Environment
- **What it is**: Which deployments use this variable
- **Production**: Live site (your main URL)
- **Preview**: Preview deployments (from pull requests)
- **Development**: Local development (if using Vercel CLI)
- **Must select**: All three for it to work everywhere

---

## After Adding - Critical Step!

### Redeploy Your Application

1. **Go to "Deployments"** tab (left sidebar)
2. **Find the most recent deployment** (top of list)
3. **Click the three dots (⋯)** on the right side
4. **Select "Redeploy"** from dropdown
5. **Confirm** if asked
6. **Wait** for deployment to finish (status changes to "Ready")

**Why?** Vite replaces environment variables during the BUILD process. If you don't redeploy, the new variable won't be available.

---

## Verification

After redeploying:

1. **Open your deployed site**
2. **Press F12** (open browser console)
3. **Look for**: `[API Configuration]` group
4. **Should see**: `VITE_API_URL from env: https://svn-ten.vercel.app`
5. **Should see**: `✅ API URL is configured correctly`

If you see this, it's working! ✅

---

## Troubleshooting

### "I don't see Environment Variables option"
- Make sure you're in **Settings**, not Overview
- Check you're the project owner/admin

### "Add New button is grayed out"
- You might not have edit permissions
- Contact project owner to add you as admin

### "Variable is there but not working"
- Did you redeploy? (Most common issue!)
- Check all three environments are selected
- Verify the value has no typos

### "Still seeing error after redeploy"
- Check browser console for `[API Configuration]` logs
- Verify the variable name is exactly `VITE_API_URL`
- Make sure value is `https://svn-ten.vercel.app` (no trailing slash)

