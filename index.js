const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>My Node.js Test App</h1><p>Deployed via GitHub!</p>');
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running!');
});
