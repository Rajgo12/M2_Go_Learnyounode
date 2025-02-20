const http = require('http');
const through2map = require('through2-map');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      console.log("Received POST data: ", body);
      
      res.write(body.toUpperCase());
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
