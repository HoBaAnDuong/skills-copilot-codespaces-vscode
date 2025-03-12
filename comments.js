// Create web server
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if(req.url === '/comments') {
    fs.readFile(__dirname + '/comments.json', function(err, data) {
      if(err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({err: 'Internal Server Error'}));
        return;
      }
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(data);
    });
  }
}).listen(8080);