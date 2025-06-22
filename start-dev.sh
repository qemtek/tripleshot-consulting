#!/bin/bash

echo "🚀 Starting Tripleshot Consulting Development Environment"
echo "=================================================="

# Function to cleanup processes on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down servers..."
    pkill -f "vite"
    pkill -f "node index.js"
    exit 0
}

# Set up trap to cleanup on Ctrl+C
trap cleanup SIGINT

# Kill any existing processes on our ports
echo "🧹 Cleaning up existing processes..."
echo "   Killing processes on port 3001 (backend)..."
lsof -ti:3001 | xargs kill -9 2>/dev/null || true
echo "   Killing processes on port 5173 (frontend)..."
lsof -ti:5173 | xargs kill -9 2>/dev/null || true
echo "   Killing any existing vite/node processes..."
pkill -f "vite" 2>/dev/null || true
pkill -f "node index.js" 2>/dev/null || true
sleep 1

# Start backend server
echo "📡 Starting backend server..."
cd server
npm start &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 2

# Start frontend server
echo "🌐 Starting frontend server..."
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Development environment started!"
echo "📡 Backend: http://localhost:3001"
echo "🌐 Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for background processes
wait 