function random(){
    var num = Math.random();
    return function(){
        console.log('a');
    }

}
var r1 = random();
var r2 = random();
//产生过几个上下文对象
r1();
r2();
