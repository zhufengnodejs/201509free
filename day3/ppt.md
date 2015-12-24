title: node.js入门
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
#珠峰node.js免费课第三天
<small>珠峰培训</small>

[slide]
##JS中的数据类型
* *值类型* {:&.moveIn}
  * undefined
  * number
  * string
  * boolean
* *引用类型*
  * 函数
  * 数组
  * 对象
  * null

[slide]
##对象是属性的集合
* javascript中的对象可以**任意**的扩展属性 {:&.moveIn}
* 函数和数组也可以定义属性

[slide]
##函数和对象的关系
---
* *函数*就是**对象**的一种 {:&.moveIn}

 ```javascript
var fn = function () { };
console.log(fn instanceof Object);  // true
 ```
* *对象*都是通过**函数**创建的
 ```
var obj = new Object();
var arr = new Array();
console.log(typeof (Object));  // function
console.log(typeof (Array));  // function
 ```

[slide]
##prototype
* 每个函数都有一个属性叫做prototype {:&.moveIn}
  <img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype1.jpg" class="img-responsive">
* prototype中有自己的属性和方法  
  <img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype2.jpg" class="img-responsive">
  
[slide]
##每个对象都有一个__proto__，可称为隐式原型
__proto__指向创建该对象的函数的prototype
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype3.jpg" class="img-responsive">

[slide]
##Foo.prototype也是对象，由new Object()创建，它的__proto__指向Object.prototype
Object.prototype确实一个特例——它的__proto__指向的是null
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype4.jpg" class="img-responsive">

[slide]
##函数由Function创建，函数的__proto__指向Function.prototype
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype5.jpg" class="img-responsive">

[slide]
##Function.__proto__指向Function.prototype
Function.prototype的__proto__指向Object.prototype
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype6.jpg" class="img-responsive">

[slide]
#instanceof
* instanceof运算符的第一个变量是一个对象，暂时称为A；第二个变量一般是一个函数，暂时称为B。 {:&.moveIn}
* 判断规则: 沿着A的__proto__这条线来找，如果能找到B的prototype，那么就返回true，否则false
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype4.jpg" class="img-responsive">

[slide]
#完整图例
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype7.jpg" class="img-responsive">

```javascript
console.log(Object instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Function instanceof Function);//true
```

[slide]
##继承和原型链
* javascript中的继承是通过**原型链**来体现的 {:&.moveIn}
* 访问一个对象的属性时，先在**自身属性**中查找，如果没有，再沿着__proto__这条链**向上找**，这就是原型链
* **hasOwnProperty**区分一个属性到底是自己的的还是从原型中继承的

[slide]
##执行上下文
* 执行全局代码时，会产生一个**全局执行上下文环境**，每次调用函数都又会产生**函数执行上下文环境**。 {:&.moveIn}
* 当函数调用完成时，这个上下文环境以及其中的数据都会被消除，再重新回到全局上下文环境。处于活动状态的执行上下文环境只有一个。
* 其实这是一个**压栈出栈**的过程——执行上下文栈。如下图：
    <img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/exestack.png" class="img-responsive">

[slide]
##全局预解释(上下文中的变量对象) 
js如何找变量?
* 普通变量声明(冲突则忽略) {:&.moveIn}
* 函数声明 声明并赋值(冲突则覆盖)
* 函数表达式 声明不赋值(冲突则忽略)
* this 声明并赋值
以上构成了全局执行上下文环境
函数**每**被调用一次，都会产生一个**新的**执行上下文环境

[slide]
##函数内的预解释额外的变量
* arguments(callee length,properties-indexes) 函数参数，未传则初始化为undefined {:&.moveIn}
* **自由变量**的取值作用域(作用域链)
* 自由变量是指在其它作用域中声明的变量
函数在定义的时候(不是调用的时候)就已经确定了函数体内部**自由变量**的**作用域**


[slide]
##this
在函数中this到底取何值，是在函数真正被调用**执行**的时候确定的，**函数定义**的时候确定不了
* 构造函数 {:&.moveIn}
* 函数作为对象的一个属性
* 函数用call或者apply调用
* 全局 & 调用普通函数
* prototype中的this

[slide]
##作用域
在定义时确定，自由变量从哪个作用域中取值在定义时决定
* javascript除了全局作用域之外，只有函数可以创建的作用域 {:&.moveIn}
* 作用域有**上下级**的关系，上下级关系的确定就看函数是在哪个作用域下创建的
* 作用域最大的用处就是**隔离**变量，不同作用域下同名变量不会有冲突
* 作用域类似于一个**地盘**,其中没有变量。要通过作用域对应的执行上下文环境来获取变量的值
* 同一个作用域下，**不同的调用**会产生不同的执行上下文环境，继而产生不同的变量的值
* 作用域中变量的值是在**执行**过程中产生的确定的，而作用域却是在函数创建时就确定了
* 如果要查找一个作用域下某个变量的值，就需要找到这个作用域对应的执行上下文环境，再在其中寻找变量的值。
* 取自由变量的值时要到**创建**fn函数的那个作用域中取，找不到要上创建此作用域的作用域中找，一直向上跨到全局作用域为止

[slide]
##作用域和执行上下文
* 除了全局作用域之外，每个函数都会创建自己的作用域，作用域在函数定义时就已经确定了 {:&.moveIn}
* 上下文环境是在函数调用时创建的无法直接访问的对象
* 只有函数才能创建作用域
* 一个作用域下可能包含**若干个**上下文环境。有可能从来没有过上下文环境（函数从来就没有被调用过）；有可能有过，现在函数被调用完毕后，上下文环境被销毁了；有可能同时存在一个或多个（闭包）


[slide]
##闭包
* 函数作为返回值 {:&.moveIn}
* 函数作为参数传递
* 指一个函数与一个引用环境**绑定**在一起，这个引用环境是一个存储该函数的非局部变量(或者说自由变量)的表

[slide]
##**QA**
<small>谢谢大家，欢迎大家踊跃提问</small>