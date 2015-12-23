var http = require('http');

http.createServer(function (req, res) {
    var content = "";//定会引起一个变量
    req.on('data', function (chunk) {//监听客户端的数据
        content += chunk;
    });
    req.on('end', function () {//接收完毕
        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        res.write("receive: " + content);
        res.end();
    });
}).listen(8080);