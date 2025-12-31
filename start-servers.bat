@echo off
echo ========================================
echo Starting SVN Global Application
echo ========================================
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd backend && npm run dev"

timeout /t 5 /nobreak >nul

echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo Servers are starting...
echo ========================================
echo.
echo Backend: http://localhost:3001
echo Frontend: http://localhost:5173
echo Admin Login: http://localhost:5173/admin/login
echo.
echo Credentials:
echo Email: admin@svnglobal.com
echo Password: admin123
echo.
echo Press any key to exit this window (servers will keep running)...
pause >nul

