// Simple script to start the development server
const { spawn } = require('child_process');
const path = require('path');

console.log('Starting React development server...');
console.log('Make sure you have installed dependencies with: npm install');

const server = spawn('npx', ['react-scripts', 'start'], {
  cwd: __dirname,
  stdio: 'inherit',
  env: {
    ...process.env,
    PORT: '3003',
    HOST: 'localhost'
  }
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});