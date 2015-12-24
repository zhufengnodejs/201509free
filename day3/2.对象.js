var person = {
    name:'zfpx',
    getName:function(){
        console.log(this.name);
    },
    child:{
        name:'xiao zf',
        age:3
    }
}
console.log(person);

var person = new Object();
person.age = 4;

var arr = [1,2,3];
console.log(arr.length);
console.log(arr.concat);
arr.age = 100;
console.log(arr.age);

var myFun = function(){

}
myFun.arr = arr;
console.log(myFun.arr);
var xxx ;
console.log(xxx);

var boy = {

}
console.log(boy.girlfriend);


