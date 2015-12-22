/**
 * $('btn').on('click',function(){});
 **/
/**
 *
 * @param filename 要读取的文件名
 * @param callback 回调
 */
function readFile(filename,callback){
    setTimeout(function(){
        callback(filename+'文件的内容');
    },3000);
}
function callback(data){
    console.log(data);
}

//callback 就叫回调函数 回头调用 等文件读取完成之后调用

readFile('readme.txt',callback);