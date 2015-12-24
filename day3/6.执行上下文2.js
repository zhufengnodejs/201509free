/*var GLobalVo = {
   a:undefined,
   inner:function(){}，
   exp:undefined,
   this:window& global
}*/
//----------------------------
/*innerVO = {
    a:,
    b:,
    arguemtns:'',
    scopeChain:...
}*/
inner();

var a  = 10;
var c = 6;
//函数声明
function inner(){
    var a =5;
    var b = 20;
    console.log(a,b,c);
    function grand(){
        console.log(a);
    }
    return grand;
}
var grand = inner();
!function(){
    var a = 100;
    grand();
}()