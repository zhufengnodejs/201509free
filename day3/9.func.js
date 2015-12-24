function fn(){
    var max = 10;
    return function(num){
        if(num>max)
        console.log(num);
    }
}
var f = fn();
f(15);

var max = 10;
function compare(num){
    if(num>max)
        console.log(num);
}

!function(c){
  var max = 200;
    c(15);
}(compare)

