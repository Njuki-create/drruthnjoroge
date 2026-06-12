#!/bin/bash
# Dr. Ruth Njoroge Medical Spa - Setup Automation Script for Mac/Linux

echo ""
echo "========================================="
echo "Dr. Ruth Njoroge Medical Spa - Setup"
echo "========================================="
echo ""

# Check if Node.js is installed
echo "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo ""
    echo "ERROR: Node.js is not installed!"
    echo "Please download and install Node.js from https://nodejs.org/"
    echo ""
    exit 1
fi

node_version=$(node --version)
echo "✓ Node.js detected: $node_version"

echo ""
echo "========================================="
echo "STEP 1: Installing Backend Dependencies"
echo "========================================="
cd backend
npm install

if [ $? -ne 0 ]; then
    echo "Backend installation failed!"
    exit 1
fi

echo "✓ Backend dependencies installed"

echo ""
echo "========================================="
echo "STEP 2: Installing Frontend Dependencies"
echo "========================================="
cd ../frontend
npm install

if [ $? -ne 0 ]; then
    echo "Frontend installation failed!"
    exit 1
fi

echo "✓ Frontend dependencies installed"

echo ""
echo "========================================="
echo "Setup Complete!"
echo "========================================="
echo ""
echo "To start the application:"
echo ""
echo "1. Open TWO separate terminal windows"
echo ""
echo "Terminal 1 - Backend Server:"
echo "    cd backend"
echo "    npm run dev"
echo ""
echo "Terminal 2 - Frontend Server:"
echo "    cd frontend"
echo "    npm start"
echo ""
echo "Then visit: http://localhost:4200"
echo ""
echo "Admin Login:"
echo "  Email: admin@drruthnjoroge.com"
echo "  Password: admin123"
echo ""
