function Person(){
    this.name = 'zfpx';
    this.age = 6;
}
var p = new Person();
console.log(p);

var obj  = {
    name:'zfpx',
    age:6
}
var obj = new Object();
obj.name = 'zfpx';
obj.age = 6;

var arr = [1,2,3];
var arr = new Array();
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

/*function fn(a){
    console.log(a);
}*/
console.log(typeof(fn));
var fn = new Function('a','console.log(a)');
fn(100);
console.log(Function.prototype === fn.__proto__);
console.log(Function.prototype === Function.__proto__);

console.log(Object instanceof Function);//true
console.log(Function instanceof Object);//true

