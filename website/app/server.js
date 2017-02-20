const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  }, 1000);
});

server.listen(port, () => {
  console.log(`Listenning on port ${port}`);
});
