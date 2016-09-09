/**
 * Created by dell4 on 2016/8/15.
 */
/*var klass=require('./klass');
klass.add('傻逼老师',['学生1','学生2']);*/

var http = require('http');


var klass=require('./klass');
var testdd=klass.add('aaa',['bbb1','bbb2']);


var test = function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(testdd);
}
var server = http.createServer(test)
server.listen(8888,'127.0.0.1');
console.log("server success!");