# Quick Action Checklist

## ✅ Step 1: Set VITE_API_URL in Vercel

**Location**: Vercel Dashboard → Your Frontend Project → Settings → Environment Variables

**Action**:
- [ ] Click "Add New"
- [ ] Key: `VITE_API_URL`
- [ ] Value: `https://svn-ten.vercel.app`
- [ ] Environment: ✅ Production ✅ Preview ✅ Development
- [ ] Click "Save"
- [ ] Verify it appears in the list

**Time**: 2 minutes

---

## ✅ Step 2: Redeploy Application

**Location**: Vercel Dashboard → Your Frontend Project → Deployments

**Action**:
- [ ] Go to "Deployments" tab
- [ ] Find latest deployment
- [ ] Click three dots (⋯) → "Redeploy"
- [ ] Wait for deployment to complete (2-5 minutes)
- [ ] Verify status shows "Ready"

**Time**: 3-5 minutes

---

## ✅ Step 3: Verify It's Working

**Location**: Your deployed frontend site

**Action**:
- [ ] Open your frontend URL in browser
- [ ] Press F12 → Console tab
- [ ] Look for `[API Configuration]` group
- [ ] Verify: `VITE_API_URL from env: https://svn-ten.vercel.app`
- [ ] Verify: `✅ API URL is configured correctly`
- [ ] Go to `/admin/login`
- [ ] Verify: No error message appears
- [ ] Test login with: admin@svnglobal.com / admin123
- [ ] Verify: Login works successfully

**Time**: 2 minutes

---

## Total Time: ~10 minutes

## If Any Step Fails:

1. **Step 1 fails**: Double-check variable name is exactly `VITE_API_URL`
2. **Step 2 fails**: Make sure you clicked "Redeploy" and waited for completion
3. **Step 3 fails**: Check browser console for specific error messages

## Success Indicators:

✅ Browser console shows: `✅ API URL is configured correctly`
✅ Login page loads without error
✅ Login works with correct credentials
✅ API calls succeed (no network errors)

