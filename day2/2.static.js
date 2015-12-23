var http = require('http');
var fs = require('fs');
/**
 *
 * @param req 请求对象 电话的听筒
 * @param res 响应对象 电话的话筒
 */
function serve(req,res){
    // err 如果文件读取失败，会把原因放在err对象里
    // data 如果读取成功了，会把文件的内容放在data对象里
    fs.readFile('index.html',function(err,data){
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end(data);
    })
}
//当有连接到来的时候调用serve方法为客户端提供服务
var server = http.createServer(serve);//创建一个服务

//在localhost这个主机上监听8080端口
server.listen(8080,'192.168.1.113');
