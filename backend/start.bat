@echo off
title SVN Global Backend Server
echo ========================================
echo Starting Backend Server
echo ========================================
echo.
cd /d %~dp0
echo Current directory: %CD%
echo.
echo Checking MongoDB connection...
node test-connection.js
echo.
echo Starting server...
node src/server.js
pause

