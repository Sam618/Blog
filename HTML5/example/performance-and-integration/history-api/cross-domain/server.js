const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const html = fs.readFileSync('./index.html', 'utf8');
    response.end(html);
  } else if (request.url === '/index2.html') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const html = fs.readFileSync('./index2.html', 'utf8');
    response.end(html);
  }
}).listen(3000);
console.log('listen: 3000');