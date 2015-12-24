//全局 this =全局对象
//console.log(this);

//一般函数 this =全局对象
/*function fn(){
    console.log(this);
}
fn();*/
//用对象来调用方法 this=调用对象
var person = {
    name:'zfpx',
    get:function(){
        console.log(this.name);
    }
}
person.get();
var p = person.get;
p();


//prototype 整 个原型链中this  指的是当前对象
var parent = {add:function(){return this.a+this.b}};
var child = Object.create(parent);
parent.a = 5;
child.b = 4;
console.log(child.add());

//构造函数
function Person(){
    this.name = 'zfpx';
}
var p =new Person();
console.log(p.name);
Person();
console.log(global.name);

// call apply bind
function add(b,c){
    return this.a+b+c;
}

var p = {a:1};
console.log(add.call(p,2,3));
console.log(add.apply(p,[2,3]));

function bb(obj){
    var self = this; //newP
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
        return self.apply(obj,args.concat(Array.prototype.slice.call(arguments)));
    }
}
add.bb = bb;
var newP = add.bb(p,3);
console.log(newP(4));//8
newP.bb=bb;
var new2P = newP.bb({a:5});
console.log(new2P(4));//8