const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The above code has a bug, it does not handle errors properly.  If there is an issue with the server, like a port conflict, the server will crash without any informative message.

//In addition, the server will not close gracefully. This means if the program is terminated, active connections may be interrupted abruptly, leading to problems for the clients.