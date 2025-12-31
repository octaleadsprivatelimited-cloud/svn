# MongoDB Atlas API Credentials Setup

## Credentials Provided
- **Public Key**: `jyawplmf`
- **Private Key**: `28a8cbb6-990b-4b96-a1c6-b78719b75ac6`

## How to Add These Credentials

### Option 1: Local Development (.env file)

Add these to `backend/.env`:

```env
MONGODB_ATLAS_PUBLIC_KEY=jyawplmf
MONGODB_ATLAS_PRIVATE_KEY=28a8cbb6-990b-4b96-a1c6-b78719b75ac6
```

### Option 2: Vercel Deployment

1. Go to your **backend Vercel project**
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - **Key**: `MONGODB_ATLAS_PUBLIC_KEY`
     **Value**: `jyawplmf`
     **Environment**: All (Production, Preview, Development)
   
   - **Key**: `MONGODB_ATLAS_PRIVATE_KEY`
     **Value**: `28a8cbb6-990b-4b96-a1c6-b78719b75ac6`
     **Environment**: All (Production, Preview, Development)
4. Click **Save**
5. **Redeploy** your backend

## Important Notes

⚠️ **Security Warning**: These are sensitive credentials. Never commit them to Git!

- ✅ Already in `.gitignore` - `.env` files are excluded
- ✅ Use environment variables in production
- ✅ Keep these credentials secure

## What These Credentials Are For

These MongoDB Atlas API credentials allow you to:
- Programmatically manage your Atlas clusters
- Access Atlas API endpoints
- Automate database operations
- Monitor and manage your database resources

## Current Database Connection

Your database connection string is already configured:
```
mongodb+srv://svnglobal:Svnglobal%402025@svnglobal.5vlys7w.mongodb.net/svn-global
```

The API credentials are **separate** from the database connection string and are used for Atlas API operations.

## Verification

After adding the credentials, you can verify they work by checking the MongoDB Atlas dashboard or using the Atlas API.

