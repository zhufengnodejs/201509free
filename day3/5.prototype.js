function Person(){

}

Person.prototype.say = function(){
    console.log('hello');
}
//原型继承 p1-> __proto__
var p1 = new Person();
//p1.say = 100;
p1.say();

console.log(Person.prototype.constructor == Person);

function Parent(name){
  this.name = name;
}
Parent.prototype.say = function(){
    console.log('say');
}
function Child(){
  this.name = 'zfpx';
}

//原型赋值 子类扩展会修改父类
/*Child.prototype = Parent.prototype;
Child.prototype.play = function(){
    console.log('play');
}*/
//指向父类的实例 也会继承父的私有属性 而且 无法传参数
/*Child.prototype = new Parent();
Child.prototype.play = function(){
    console.log('play');
}*/
//
//child->
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.play = function(){
    console.log('play');
}

var child = new Child();
child.say();
child.play();
///
console.log('============');
for(var attr in child){
    if(child.hasOwnProperty(attr))
    console.log(attr);
}
console.log(child.__proto__ instanceof Child);
console.log(child.__proto__ instanceof Parent);
console.log(child.__proto__.__proto__.__proto__);