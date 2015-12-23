var express = require('express');
var multer = require('multer');//处理上传文件中间件
var path = require('path');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })
var app = express();
app.use(express.static(__dirname));

app.get('/',function(req,res){
    res.sendfile('index.html');
});

app.post('/upload',upload.single('avatar'),function(req,res){
    console.log(req.file);
    res.send({code:1,msg:req.file.path});
});

app.listen(8080);