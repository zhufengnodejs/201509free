console.time('cost');

for(var i=0;i<100000;i++){

}
console.timeEnd('cost');


var fs = require('fs');

//var content = fs.readFileSync('index.txt','utf8');
//console.log(content);
//console.log('next');

fs.readFile('index.txt2','utf8',function(err,content){
    console.log(err);
    console.log(content);
});
console.log('next');
