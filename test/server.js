var http = require('http');

var test = function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('holle world\n');
}
var server = http.createServer(test)
server.listen(8888,'127.0.0.1');
console.log("server success!");