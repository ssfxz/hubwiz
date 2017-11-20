# ECMAScript 6入门
---

## 变量与字符串

### let
块级作用域

### const
const声明的是常量，一旦声明，值将是不可变的。

### 是否包含字符串三种新方法
* includes()：返回布尔值，表示是否找到了参数字符串。
* startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
* endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。

### repeat()
repeat()返回一个新字符串，表示将原字符串重复n次。

```
var str = "x";
str.repeat(3) // "xxx"
```

### 模板字符串
* 模板字符中，支持字符串插值：

```
let first = 'hubwiz';
let last = '汇智网';
document.write(`Hello ${first} ${last}!`);
// Hello hubwiz 汇智网!
```

* 模板字符串可以包含多行：

```
let multiLine = `
    This is
    a string
    with multiple
    lines`;
document.write(multiLine); 
``` 

### 标签模板
它允许您通过标签函数修改模板字符串的输出

```
var a = 5;
var b = 10;
tag`Hello ${ a + b } world ${ a * b }`;
```
标签函数的第一个参数是一个包含了字符串字面值的数组（在本例中分别为“Hello”,“world”和""）；第二个参数，在第一个参数后的每一个参数，都是已经被处理好的替换表达式（在这里分别为“15”和“50”）。 最后，标签函数返回处理好的字符串。

### String.raw()
ES6还为原生的String对象，提供了一个raw方法。

若使用String.raw 作为模板字符串的前缀，则模板字符串可以是原始(raw)的。反斜线也不再是特殊字符，\n 也不会被解释成换行符。
```let raw = String.raw`Not a newline: \n`;```

## 数值
### Number.isFinite()、Number.isNaN()
ES6在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法，用来检查Infinite和NaN这两个特殊值。

### Number.isInteger()
Number.isInteger()用来判断一个值是否为整数。
需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。

### Math对象静态方法
* Math.trunc()：去除一个数的小数部分，返回整数部分
* Math.sign()：判断一个数到底是正数、负数、还是零
* Math.cbrt()：计算一个数的立方根
* Math.fround()：返回一个数的单精度浮点数形式
* Math.hypot()：返回所有参数的平方和的平方根

### Math对数方法
* Math.expm1(x)：返回ex - 1 (exp(x) - 1)
* Math.log1p(x)：返回1 + x的自然对数 (log(x+1))
* Math.log10(x)：返回以10为底的x的对数 (log10(x))
* Math.log2(x)：返回以2为底的x的对数

### 三角函数方法
* Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
* Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
* Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
* Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
* Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
* Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）

## 数组
### Array.from()
用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）

### Array.of()
用于将一组值，转换为数组
```Array.of(3, 11, 8) // [3,11,8]```

### find()
用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。

**数组实例的findIndex方法**，用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1

这两个方法都可以发现NaN，弥补了数组的IndexOf方法的不足

### fill()
使用给定值，填充一个数组。
```let arr = ['a', 'b', 'c'].fill(7) // [7, 7, 7]```

fill()还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
```let newArr = ['a', 'b', 'c'].fill(7, 1, 2) // ['a', 7, 'c']```

### entries() / keys() / values()
用于遍历数组。它们都返回一个遍历器，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历

## 对象
### 属性的简洁表示法
```
function f( x, y ) {
  return { x, y };
  // 等同于
  // return { x: x, y: y };
}
```

### 属性名表达式
ES6允许字面量定义对象时，用表达式作为对象的属性名，即把表达式放在方括号内，表达式还可以用于定义方法名

```
let propKey = 'foo';
let obj = {
  [propKey]: true,
  ['a'+'bc']: 123
};
['h'+'ello']() {
  return 'hi';
}
```

### Object.is()
用来比较两个值是否严格相等。它与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身。

### Object.assign()
用来将源对象（source）的所有可枚举属性，复制到目标对象（target）。它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象

```
var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```
如果目标对象与源对象有**同名属性**，或多个源对象有同名属性，则后面的属性会覆盖前面的属性

### proto属性
用来读取或设置当前对象的prototype对象
```
// es6的写法
var obj = {
  __proto__: someOtherObj,
  method: function() { ... }
}

// es5的写法
var obj = Object.create(someOtherObj);
obj.method = function() { ... }
```

### Symbol类型
ES6引入了一种新的原始数据类型Symbol，表示独一无二的ID。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
```let s = Symbol();```

### Proxy
Proxy 内置的一个代理工具，使用他可以在对象处理上加一层屏障：
S6原生提供Proxy构造函数，用来生成Proxy实例。
```var proxy = new Proxy(target, handler)```

## 函数
### 默认参数
```
function sayHello2(name='hubwiz'){
    document.write(`Hello ${name}`);
}
```

### rest参数
rest参数（形式为“...变量名”）可以称为不定参数，用于获取函数的多余参数，这样就不需要使用arguments对象了。
```
function add(...values) {
   let sum = 0;
   for (var val of values) {
      sum += val;
   }
   return sum;
}
add(1, 2, 3) // 6
```

### 扩展运算符
扩展运算符（spread）是三个点（...）。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。该运算符主要用于函数调用。
```
var people=['张三','李四','王五'];

//sayHello函数本来接收三个单独的参数people1，people2和people3
function sayHello(people1,people2,people3){
    document.write(`Hello ${people1},${people2},${people3}`);
}

//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);   //输出：Hello 张三,李四,王五 

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
sayHello.apply(null,people);   //输出：Hello 张三,李四,王五 
```

### 箭头函数
箭头函数是使用=>语法的函数简写形式，箭头函数和其上下文中的代码共享同一个具有词法作用域的this

### 函数绑定
函数绑定运算符是并排的两个双引号（::），双引号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。

```
foo::bar;
// 等同于
bar.call(foo);
 
foo::bar(...arguments);
i// 等同于
bar.apply(foo, arguments);
```

### 尾调用优化
是指某个函数的最后一步是调用另一个函数。

```
function f(x){
  return g(x);
}
```
由于调用g之后，函数f就结束了，所以执行到最后一步，完全可以删除 f(x) 的调用帧，只保留 g(3) 的调用帧。

“尾调用优化”（Tail call optimization），即只保留内层函数的调用帧，这样可以节省内存。

## Set
数据结构Set类似于数组，但是成员的值都是唯一的，没有重复的值

### Set实例的属性
* Set.prototype.constructor：构造函数，默认就是Set函数。
* Set.prototype.size：返回Set实例的成员总数。

### 操作方法
* add(value)：添加某个值，返回Set结构本身。
* delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
* has(value)：返回一个布尔值，表示该值是否为Set的成员。
* clear()：清除所有成员，没有返回值。

### 遍历方法
* keys()：返回一个键名的遍历器
* values()：返回一个键值的遍历器
* entries()：返回一个键值对的遍历器
* forEach()：使用回调函数遍历每个成员

由于Set结构没有键名，只有键值（或者说键名和键值是同一个值），所以key方法和value方法的行为完全一致。

### WeakSet
WeakSet和Set一样都不存储重复的元素，但有一些不同点 。
WeakSet的成员只能是对象，而不能是其他类型的值。

## Map
Map 是一个“超对象”，其 key 除了可以是 String 类型之外，还可以为其他类型（如：对象）
### 基本用法
* size：返回成员总数。
* set(key, value)：设置一个键值对。
* get(key)：读取一个键。
* has(key)：返回一个布尔值，表示某个键是否在Map数据结构中。
* delete(key)：删除某个键。
* clear()：清除所有成员。
* keys()：返回键名的遍历器。
* values()：返回键值的遍历器。
* entries()：返回所有成员的遍历器。

### WeakMap
WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受原始类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。

## Iterator
遍历器（Iterator）就是统一的接口机制，来处理所有不同的数据结构。

Iterator的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。

每一次调用next方法，都会返回当前成员的信息，具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

### 遍历器的return()，throw()

### for...of循环
for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。

## Generator
Generator函数是一个函数的内部状态的遍历器（也就是说，Generator函数是一个状态机）。

形式上，Generator函数是一个普通函数，但是有两个特征。

* 一是，function命令与函数名之间有一个星号；
* 二是，函数体内部使用yield语句，定义遍历器的每个成员，即不同的内部状态。

```
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
 
var hw = helloWorldGenerator();
hw.next()
// { value: 'hello', done: false }
 
hw.next()
// { value: 'world', done: false }
 
hw.next()
// { value: 'ending', done: true }
 
hw.next()
// { value: undefined, done: true }
```

总结一下，调用Generator函数，返回一个部署了Iterator接口的遍历器对象，用来操作内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield语句后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。

### yield*语句
　　如果yield命令后面跟的是一个遍历器，需要在yield命令后面加上星号，表明它返回的是一个遍历器。这被称为yield*语句。

　　其实yield关键字就是以一种更直观、便捷的方式让我们创建用于遍历有限序列集合的迭代器，而yield则用于将生成器函数的代码切片作为有限序列集合的元素（元素的类型为指令+数据，而不仅仅是数据而已）

## Promise
所谓Promise，就是一个对象，用来传递异步操作的消息。

Promise对象有以下两个特点:

* 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
* 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

Promise也有一些缺点:

* 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
* 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
* 第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

### 基本用法
```
//创建promise
var promise = new Promise(function(resolve, reject) {
    // 进行一些异步或耗时操作
    if ( /*如果成功 */ ) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});
//绑定处理程序
promise.then(function(result) {
    //promise成功的话会执行这里
    document.write(result); // "Stuff worked!"
}, function(err) {
    //promise失败会执行这里
    document.write(err); // Error: "It broke"
});
```

* resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
* reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

## class
ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。

### 基本语法
```
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '('+this.x+', '+this.y+')';
  }
}

var point = new Point(2, 3);
```

### 继承
Class之间可以通过extends关键字，实现继承。

```
class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}
```

### 取值函数（getter）和存值函数（setter）
```
class MyClass {
  get prop() {
    return 'getter';
  }
  set prop(value) {
    document.write('setter: '+value);
  }
}
 
let inst = new MyClass();
 
inst.prop = 123;
// setter: 123
 
inst.prop
// 'getter'
```

### 静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

```
class Foo {
  static classMethod() {
    return 'hello';
  }
}
Foo.classMethod() // 'hello'
var foo = new Foo();
foo.classMethod()
// TypeError: undefined is not a function
```

### new.target属性
new是从构造函数生成实例的命令。ES6为new命令引入了一个new.target属性，（在构造函数中）返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。

## Module
### export
export命令用于用户自定义模块，规定对外接口；

### import
import命令用于输入其他模块提供的功能，同时创造命名空间（namespace），防止函数名冲突。

### module
module命令可以取代import语句，达到整体输入模块的作用。

### export default
为加载模块指定默认输出，使用export default命令。
