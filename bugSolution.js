const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle errors during server startup
server.on('error', err => {
  console.error('Server error:', err);
  if (err.code === 'EADDRINUSE') {
    console.error('Port is already in use.');
  }
  process.exit(1);
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});