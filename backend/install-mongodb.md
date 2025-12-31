# Install MongoDB Locally on Windows

## Option 1: Using MongoDB Installer (Recommended)

1. Download MongoDB Community Server:
   - Go to: https://www.mongodb.com/try/download/community
   - Select: Windows, MSI package
   - Download and run the installer

2. During installation:
   - Choose "Complete" installation
   - Install as a Windows Service (recommended)
   - Install MongoDB Compass (optional GUI tool)

3. MongoDB will be installed at: `C:\Program Files\MongoDB\Server\<version>\bin`

## Option 2: Using Chocolatey (if installed)

```powershell
choco install mongodb
```

## Option 3: Using Winget

```powershell
winget install MongoDB.Server
```

## After Installation

1. MongoDB service should start automatically
2. Default connection: `mongodb://localhost:27017`
3. Test connection: Open MongoDB Compass or use command line

## Start MongoDB Service (if not running)

```powershell
# Check if service is running
Get-Service MongoDB

# Start the service
Start-Service MongoDB
```

## Update .env file

Change MONGODB_URI to:
```
MONGODB_URI=mongodb://localhost:27017/svn-global
```

