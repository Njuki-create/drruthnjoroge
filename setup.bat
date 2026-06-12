@echo off
REM Dr. Ruth Njoroge Medical Spa - Setup Automation Script for Windows
REM This script installs all dependencies and starts both servers

echo.
echo =========================================
echo Dr. Ruth Njoroge Medical Spa - Setup
echo =========================================
echo.

REM Check if Node.js is installed
echo Checking Node.js installation...
node --version > nul 2>&1
if errorlevel 1 (
    echo.
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✓ Node.js detected

echo.
echo =========================================
echo STEP 1: Installing Backend Dependencies
echo =========================================
cd backend
call npm install

if errorlevel 1 (
    echo Backend installation failed!
    pause
    exit /b 1
)

echo ✓ Backend dependencies installed

echo.
echo =========================================
echo STEP 2: Installing Frontend Dependencies
echo =========================================
cd ..\frontend
call npm install

if errorlevel 1 (
    echo Frontend installation failed!
    pause
    exit /b 1
)

echo ✓ Frontend dependencies installed

echo.
echo =========================================
echo Setup Complete!
echo =========================================
echo.
echo To start the application:
echo.
echo 1. Open TWO separate command prompt windows
echo.
echo Terminal 1 - Backend Server:
echo    cd backend
echo    npm run dev
echo.
echo Terminal 2 - Frontend Server:
echo    cd frontend
echo    npm start
echo.
echo Then visit: http://localhost:4200
echo.
echo Admin Login:
echo   Email: admin@drruthnjoroge.com
echo   Password: admin123
echo.
pause
