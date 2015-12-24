function Person(){

}

//构造函数的原型
console.log(Person.prototype);

var obj = new Object();
var obj = {name:'zfpx'};
console.log(Object.prototype.hasOwnProperty);
console.log(obj.hasOwnProperty('age'));

console.log(Object.prototype.hasOwnProperty('name'));


