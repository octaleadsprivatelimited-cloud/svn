# MongoDB Atlas Connection Setup

## Current Status
The connection string has been updated to use MongoDB Atlas, but authentication is failing.

## Connection String Format
```
mongodb+srv://svnglobal:<password>@svnglobal.5vlys7w.mongodb.net/svn-global?retryWrites=true&w=majority&appName=svnglobal
```

## Troubleshooting Steps

### 1. Verify Database User Credentials
- Go to MongoDB Atlas Dashboard: https://cloud.mongodb.com
- Navigate to **Database Access** (left sidebar)
- Find the user `svnglobal`
- Click **Edit** to view or reset the password
- **Important**: If the password contains special characters (`@`, `<`, `>`, etc.), they must be URL-encoded in the connection string

### 2. Check IP Whitelist
- Go to **Network Access** in MongoDB Atlas
- Click **Add IP Address**
- Either:
  - Add your current IP address
  - OR use `0.0.0.0/0` to allow from anywhere (for development only)

### 3. Verify Database User Permissions
- In **Database Access**, ensure the user `svnglobal` has:
  - **Atlas admin** role, OR
  - **Read and write to any database** role

### 4. Test Connection
Run the test script:
```powershell
cd backend
node test-atlas-connection.js
```

## Common Issues

### Authentication Failed
- **Cause**: Wrong username or password
- **Solution**: 
  1. Reset the password in MongoDB Atlas
  2. Update the `.env` file with the new password (URL-encoded)
  3. Special characters in password must be encoded:
     - `@` → `%40`
     - `<` → `%3C`
     - `>` → `%3E`
     - `#` → `%23`
     - `%` → `%25`

### IP Not Whitelisted
- **Cause**: Your IP address is not in the allowed list
- **Solution**: Add your IP to Network Access in MongoDB Atlas

### Connection Timeout
- **Cause**: Firewall or network blocking MongoDB
- **Solution**: Check firewall settings, ensure port 27017 is open

## Password URL Encoding Examples

If your password is: `db_Svngloal@2025`
- URL-encoded: `db_Svngloal%402025`

If your password is: `<db_Svngloal@2025>`
- URL-encoded: `%3Cdb_Svngloal%402025%3E`

## Update .env File

Once you have the correct password, update `backend/.env`:

```env
MONGODB_URI=mongodb+srv://svnglobal:<URL_ENCODED_PASSWORD>@svnglobal.5vlys7w.mongodb.net/svn-global?retryWrites=true&w=majority&appName=svnglobal
```

Replace `<URL_ENCODED_PASSWORD>` with your actual password (URL-encoded).

## Quick Test

After updating, test the connection:
```powershell
cd backend
node test-atlas-connection.js
```

You should see: `✅✅✅ MongoDB Atlas connection successful! ✅✅✅`

