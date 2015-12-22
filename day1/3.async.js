/**
 * 吃饭(1小时) 买西瓜(10分钟)
 * 同步
 **/
/*var now = Date.now();
var end = now + 1000 * 3600;
console.log('点菜');
while(Date.now()<=end){
    console.log('饭做好了，开吃');
}

console.log('买西瓜');*/

//-----------------------------------

console.log('点饭');
setTimeout(function(){
    console.log('饭已OK，老板打电话给你，叫你回去吃饭,可以咪西了');
},1000*3600)
console.log('买西瓜');
console.log('买烟');