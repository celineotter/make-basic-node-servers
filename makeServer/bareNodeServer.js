var http = require("http");
var fs = require("fs");

var apiData = [1,2,3,4,5,6,7,8,9,0]

requestHandler = function (req, res){
    if (req.method === 'GET') {
        req.path = req.url;
        console.log('path', req.path, req.path.indexOf('api'))


        if (req.path === '/') {
          req.path = '/index.html';
        } else if(req.path.indexOf('api') !== -1) {
          res.writeHead(200, {
            "Content-Type": "application/json"
          });
          res.end(JSON.stringify(apiData));
          return;
        } else if (req.path.indexOf('.') === -1) {
          req.path = req.path + '.html';
        }

        handleResponse(req, res);
    }

};



function handleResponse(req, res) {
    fs.readFile(__dirname + '/public' + req.path, 'utf8', function (err, data) {
        if (err) {
          res.writeHead(404, {
            "Content-Type": "text/plain"
          });
          res.write("404 Not Found\n");
          res.end();

        } else {
          console.log('Data read:', data);
          res.end(data);
        }
        return;
    });
};




var server = http.createServer(requestHandler);
console.log("Listening on http://127.0.0.1:8080");
server.listen('8080', '127.0.0.1');
