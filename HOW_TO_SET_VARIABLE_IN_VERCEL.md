# How to Set VITE_API_URL in Vercel - Complete Guide

## Step-by-Step Instructions

### Step 1: Access Vercel Dashboard

1. **Open your browser**
2. **Go to**: https://vercel.com/dashboard
3. **Sign in** with your Vercel account (if not already signed in)

---

### Step 2: Select Your Frontend Project

1. **On the Vercel Dashboard**, you'll see a list of all your projects
2. **Find your frontend project** (the one that shows your React/Vite frontend)
   - It might be named something like: `svn-frontend`, `svn-global`, or similar
   - Look for the project that has the frontend code
3. **Click on the project name** to open it

---

### Step 3: Navigate to Settings

1. **In your project page**, look at the **left sidebar menu**
2. You'll see options like:
   - Overview
   - Deployments
   - **Settings** ← Click this one
   - Analytics
   - etc.
3. **Click "Settings"**

---

### Step 4: Go to Environment Variables

1. **In the Settings page**, you'll see several sections:
   - General
   - **Environment Variables** ← Click this one
   - Git
   - Domains
   - Functions
   - etc.
2. **Click "Environment Variables"** in the left sidebar (under Settings)

---

### Step 5: Add the Environment Variable

1. **You'll see a page with a list of environment variables** (might be empty if none are set)
2. **Look for a button** that says:
   - **"Add New"** (top right corner)
   - OR **"Create"**
   - OR **"+"** button
3. **Click that button**

---

### Step 6: Fill in the Variable Details

A form or modal will appear. Fill it in:

1. **Key** (or Name) field:
   - Type exactly: `VITE_API_URL`
   - ⚠️ Must be exactly this (case-sensitive, no spaces)

2. **Value** field:
   - Type: `https://svn-ten.vercel.app`
   - ⚠️ No trailing slash, no quotes, no spaces

3. **Environment** section:
   - You'll see checkboxes or toggles for:
     - ✅ **Production** - Check this
     - ✅ **Preview** - Check this
     - ✅ **Development** - Check this
   - ⚠️ **IMPORTANT**: Select ALL THREE environments

4. **Click "Save"** or "Add" button

---

### Step 7: Verify It's Added

1. **After saving**, you should see `VITE_API_URL` in the list
2. **Check that it shows**:
   - Key: `VITE_API_URL`
   - Value: `https://svn-ten.vercel.app` (might be partially hidden for security)
   - Environments: Production, Preview, Development (all three should be listed)

---

## Visual Path Summary

```
Vercel Dashboard
  └── Your Frontend Project (click on it)
      └── Settings (left sidebar)
          └── Environment Variables (left sidebar, under Settings)
              └── Add New (button)
                  └── Fill form:
                      Key: VITE_API_URL
                      Value: https://svn-ten.vercel.app
                      Environment: ✅ All three
                  └── Save
```

---

## Screenshot Descriptions

### What You'll See:

**Step 1 - Dashboard:**
- List of projects with names and deployment status

**Step 2 - Project Page:**
- Left sidebar with: Overview, Deployments, Settings, etc.
- Main area shows deployment history

**Step 3 - Settings Page:**
- Left sidebar shows: General, Environment Variables, Git, etc.
- Main area shows project settings

**Step 4 - Environment Variables Page:**
- Table or list showing environment variables
- "Add New" button (usually top right)
- Columns: Key, Value, Environment, Actions

**Step 5 - Add Variable Form:**
- Input field for "Key" or "Name"
- Input field for "Value"
- Checkboxes or toggles for Production, Preview, Development
- Save/Cancel buttons

---

## Common Issues & Solutions

### Issue: Can't find "Environment Variables" option
**Solution**: Make sure you're in the **Settings** section, not Overview or Deployments

### Issue: "Add New" button not visible
**Solution**: 
- Scroll up if the list is long
- Check if you have permission to edit (you need to be project owner/admin)

### Issue: Variable saved but not working
**Solution**: 
- Make sure you selected ALL three environments
- You MUST redeploy after adding the variable (see next section)

### Issue: Typo in variable name
**Solution**: 
- Must be exactly: `VITE_API_URL` (capital letters, underscore, no spaces)
- Delete the wrong one and add it again

---

## After Setting the Variable - IMPORTANT!

### You MUST Redeploy:

1. **Go to "Deployments" tab** (left sidebar)
2. **Find the latest deployment**
3. **Click the three dots (⋯)** on the right
4. **Click "Redeploy"**
5. **Wait for it to complete** (2-5 minutes)

⚠️ **Without redeploying, the variable won't be available!**

---

## Quick Checklist

- [ ] Opened Vercel Dashboard
- [ ] Selected frontend project
- [ ] Went to Settings → Environment Variables
- [ ] Clicked "Add New"
- [ ] Set Key: `VITE_API_URL`
- [ ] Set Value: `https://svn-ten.vercel.app`
- [ ] Selected ALL three environments (Production, Preview, Development)
- [ ] Clicked Save
- [ ] Verified it appears in the list
- [ ] **REDEPLOYED the application** (most important!)

---

## Alternative: Using Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login
vercel login

# Set environment variable
vercel env add VITE_API_URL production
# When prompted, enter: https://svn-ten.vercel.app

# Repeat for preview and development
vercel env add VITE_API_URL preview
vercel env add VITE_API_URL development
```

---

## Need Help?

If you're stuck:
1. Check the browser console on your deployed site (F12)
2. Look for `[API Configuration]` logs
3. The logs will tell you if the variable is set or not

