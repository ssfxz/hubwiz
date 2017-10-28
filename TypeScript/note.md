## 安装与编译
``` bash
INSTALL : npm install -g typescript
COMPILE : tsc helloworld.ts
```

## 基本数据类型
TypeScript 的基本数据类型 有boolean、number 、string 、 array 、 enum 、any 、void

> 通过var关键字 变量名后面+冒号 + 数据类型来指定

* number

用在JS与TS中的所有数值都是浮点型，而在TS中定义他们为“number”型。

* enum

枚举类型是 TypeScript 中新添加的，而 JavaScript 中是没有这个类型的。用关键字enum来声明。代码示例如下：

```
enum Color {
  Red,　　　//枚举元素列表
  Green,
  Blue
};
var c: Color = Color.Green;
```

* any

和 JavaScript 中变量的默认类型一样，指代是动态的，能够赋予任意类型。例如：

```
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;  // 定义为boolen型
```

定义为any后，将失去语法感知的功能，就相当于写JavaScript 一样。

值得一提的是，any可以配合数组来使用，代码如下:

```
var list: any[] = [1, true, "free"];
list[1] = 100; //更改list[1]的值
```

* void

这个类型仅能在函数中使用，可以将函数的返回类型指定为 void，表示该函数不返回任何值。代码如下:

```
function warnUser(): void {
  alert("This is my warning message");
}
```

## 函数
###在TypeScript中定义函数的语法为：

```
function function_name(arg:number,arg1:number,....):return_type{
  code 函数要执行的代码;
  return data;
}
```

### 可选与默认参数：
可选参数：在参数名后面，冒号前面添加一个问号，则表明该参数是可选的。如下代码：

```
function buildName(firstName: string, lastName?: string) { //lastName为可选参数
  if (lastName)
      return firstName + " " + lastName;
  else
      return firstName;
}
var result1 = buildName("Bob");  //正确调用 Bob
var result2 = buildName("Bob", "Adams"); //正确调用 Bob Adams
```

默认参数：在参数名后直接给定一个值，如果这个值没有被传入，那么将会被赋值为默认值。如下代码：

```
function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

var result1 = buildName("Bob");  //没有传入第二个参数，则被赋值为默认的smith,结果为:Bob Smith
var result2 = buildName("Bob", "Adams");  //结果为:Bob Adams

```

注：可选参数和默认参数必须在参数列表的最后。

## 类
### 定义类
创建一个TypeScript类时，必须使用关键字class进行声明，该关键字后紧跟类的名称，之后用大括号将类体进行封装，类的基本声明格式如下。

* 属性：类的属性实质为在类体内定义的变量，用于保存或设置参数。
* 方法：类的方法实质为在类体内定义的函数，用于实现某项功能，其定义方法与普通函数定义方法相同，同时可以应用访问权限关键字对方法访问权限进行限制。

```
class 类名{
  name:string;  //定义类的属性
 
  fun(){ //定义了一个无返回值的方法
           //定义该方法所要实现的功能
  }
  say():string{ //定义返回值类型为string的方法
           //定义该方法所要实现的功能
         return "返回值"; // 用return关键字返回函数值
  }
}
```

### 静态属性
TypeScript可以使用“static” 关键字标注类的成员。如下代码：

```
class calc{
  static count=10;
  add(data1:number):number{
    var sum=calc.count+data1;
    return sum;
  }
}

var test=new calc();
document.write(test.add(20));
```

类成员的静态属性我们可以直接调用，调用方式为如上例的count的调用方式：calc.count。**而不能用this.count在类的内部使用**。

### 构造函数
构造函数 ，是一种特殊的方法。主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。而TypeScript的构造函数用关键字constructor来实现。可以通过this（和java/C#一样代表对象实例的成员访问）关键字来访问当前类体中的属性和方法。

```
class student{  //定义student类
  name:string;  //定义类的属性
  constructor(myname:string){ //定义构造函数
      this.name=myname;
  }
  study(){ //定义类的方法
           //定义该方法所要实现的功能
  }
}
```

### 类的实例化
一般情况下，创建一个类后并不能直接的对属性和方法进行引用，必须对类进行实例化，即创建一个对象。TypeScript中用new 关键字创建对象。实例化后通过“.”来访问属性和方法。实例代码如下：

```
class student{  //定义student类
  name:string;  //定义类的属性
  constructor(myname:string){ //定义带参数的构造函数
      this.name=myname;
  }
   study(){ //定义类的方法
      document.write("<h1> My name is "+this.name+".</h1>");
  }
   write():string{
           return "write name:"+this.name;
  }
}
var s1=new student("Jim");
document.write("<h1>"+s1.name+"</h1>"); //获取name属性
s1.study();   // 调用study方法  
document.write("<h1>"+s1.write()+"</h1>");
```

### 继承
TypeScript中用关键字extends指明继承关系。例如，已经定义了类A，如果让类B继承A,我们把A叫做基类，B叫子类。可以用下面的方式定义类B。

```
class B extends A {
  // 类B中的成员
}
```

如果我们要在子类中调用基类中的属性与方法就要使用super关键字。如下代码：

```
class Animal {  //定义基类
  name:string;
  constructor(theName: string) { this.name = theName; }
   move(meters: number) {
      document.write(this.name + " moved " + meters + "m.");
  }
}
 
class Snake extends Animal { //继承基类
  constructor(name: string) { 
      super(name); //调用基本类的构造函数
  }
   move() { //重写了基类的方法
    document.write("Slithering...<br>");
    super.move(5); //调用基类的方法
  }
}
var sam = new Snake("Python"); //声明Snake类
sam.move();
```

在TypeScript中我们采用“extends”关键字来表示类的继承关系。在这里你可以看见“Snake”继承“Animal”的子类实现。在实例中也展示如何去重写父类的方法，在这里“Snake”创建了一个“move”方法来重写父类“Animal”的“move”方法，并通过“super”关键字来调用父类的方法。

## 接口
### 接口声明
在TypeScript中，**接口是用作约束作用的**，在编译成JavaScript的时候，所有的接口都会被擦除掉，因为 JavaScript中并没有接口这一概念。TypeScript中接口是用关键字interface进行声明，例如：

```
interface LabelledValue { //定义接口
  label: string;          //定义属性
}
interface LabelledValue {  //定义接口
  label: string;
}
function printLabel(labelledObj: LabelledValue) { //定义函数printLabel,其参数类型为接口类型
  document.write(labelledObj.label);
}
var myObj = {size: 10, label: "Size 10 Object"}; //定义含有接口中属性的对象
printLabel(myObj); //调用函数
```

在上面的例子中，printLabel函数要求传入一个包含一个label的字符串属性。而接口LabelledValue描述了printLabel的所要求的类型对象。它依然代表包含一个label的字符串属性。

### 可选属性
有时不是所有定义在interface中的属性都是必须的，typescript中便为我们提供了可选属性。带有可选属性的interface定义和c#语言很相似，以?紧跟变量名后边表示。如下代码：

```
interface SquareConfig { //定义了两个可选属性
  color?: string;  
  width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {//定义函数
  var newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
 
var mySquare = createSquare({color: "black"}); //调用函数，
document.write(mySquare.color);   //结果为： black
```
大家可能会问既然是可选属性，可有可无的，那么为什么还要定义呢?对比起完全不定义，定义可选属性主要是：如果存在属性，能约束类型，而这也是十分关键的。

### 方法类型
　　在 JavaScript 中，方法 function 是一种基本类型。在面向对象思想中，接口的实现是靠类来完成的，而 function 作为一种类型，是不是能够实现接口呢?答案是肯定的。在 TypeScript 中，我们可以使用接口来约束方法的签名。

```
interface SearchFunc {  
  (source: string, subString: string): boolean; //定义一个匿名方法
}
 
var mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {  //实现接口
  var result = source.search(subString);  //调用系统方法search查找字符串的位置
  if (result == -1) {
    return false;
  }
  else {
    return true;
  }
}
```

上面代码中，我们定义了一个接口，接口内约束了一个方法的签名，这个方法有两个字符串参数，返回布尔值。在第二段代码中我们声明了这个接口的实现。编译器仅仅检查类型是否正确(参数类型、返回值类型)，因此参数的名字我们可以换成别的。

### 数组类型
在前面一节中我们学习了接口定义方法类型，这一节我们来学习接口定义数组类型。在数组类型中有一个“index”类型其描述数组下标的类型，以及返回值类型描述每项的类型。如下：
　　
```
interface StringArray { //定义数组接口
  [index: number]: string;  //每个数组元素的类型
}
 
var myArray: StringArray; 
myArray = ["Bob", "Fred"];
　　在接口的定义里面，索引器的名字一般为 index(当然也可以改成别的，但一般情况下都是保持名字为 index)。索引器的类型只能为 number 或者 string。

interface Array{
  [myindex: number]: number;
}
 
interface Dictionary{
  [index: string]: any;
}
```

### Class类型
在C#和java中interface是很常使用的类型系统，其用来强制其实现类符合其契约。在TypeScript中同样也可以实现，通过类实现接口要用implements关键字。如下代码：

```
interface IPrint{
  print();
}
 
class A implements IPrint  { //实现接口
  print(){  //实现接口中的方法
      document.write("实现接口");
  }
}
 
var B=new A();  
B.print();
```

### 接口继承
和类一样，接口也能继承其他的接口。这相当于复制接口的所有成员。接口也是用关键字“extends”来继承。

```
interface Shape {     //定义接口Shape
    color: string;
}
 
interface Square extends Shape {  //继承接口Shape
    sideLength: number;
}
```

一个interface可以同时继承多个interface，实现多个接口成员的合并。用逗号隔开要继承的接口。

```
interface Shape {
    color: string;
}
 
interface PenStroke {
    penWidth: number;
}
 
interface Square extends Shape, PenStroke {
    sideLength: number;
}
```

需要注意的是，尽管支持继承多个接口，但是如果继承的接口中，定义的同名属性的类型不同的话，是不能编译通过的。如下代码：

```
interface Shape {
    color: string;
    test: number;
}
 
interface PenStroke extends Shape{
    penWidth: number;
    test: string;
}
```

## 模块
### 声明模块
使用 module 关键字来定义模块，并在末尾加花括号即可用； 用export 关键字使接口、类等成员对模块外可见。

```
module Validation {   //定义模块
  export interface StringValidator {  //声明接口对外部可以使用
    isAcceptable(s: string): boolean;
  }
 
  var lettersRegexp = /^[A-Za-z]+$/;
  var numberRegexp = /^[0-9]+$/;
 
  export class LettersOnlyValidator implements StringValidator {  //声明类对外部可用
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
 
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}
```

### 模块内容的调用
在前面一节中我学习了模块的声明，而在模块声明完成以后，我们就可以调用这个模块了，调用模块中的接口、类、方法等。调用方法简单，就是用模块名后面跟一个点来调用类、接口、方法等。如下代码：

```
module Validation {  //定义模块
  export interface StringValidator {  //声明接口对外部可以使用
      isAcceptable(s: string): boolean;
  }
 
  var lettersRegexp = /^[A-Za-z]+$/;
  var numberRegexp = /^[0-9]+$/;
 
  export class LettersOnlyValidator implements StringValidator { //声明类对外部可用
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
 
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}
 
var strings = ['Hello', '98052', '101'];
var validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();  //使用模块中的类
validators['Letters only'] = new Validation.LettersOnlyValidator();
// 显示匹配结果
for(var i=0;i<strings.length;i++){
  for (var name in validators) {
     document.write('"' + strings[i] + '" ' + (validators[name].isAcceptable(strings[i]) ? ' matches ' : ' does not match ') + name+"<br>"); // 使用方法
    }
}
```

### 分隔模块到多个文件
　　随着我们项目的扩展，我们的代码总不可能只写在一个文件里。为了更好地维护项目，我们会将特定功能放到一个文件里，然后加载多个文件实现我们想需要的功能。现在我们先将上面的代码分割到多个文件里。

Validation.ts

```
module Validation {
  export interface StringValidator {
      isAcceptable(s: string): boolean;
  }
}
```

LettersOnlyValidator.ts

```
/// <reference path="Validation.ts" />
module Validation {
  var lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements StringValidator {
      isAcceptable(s: string) {
        return lettersRegexp.test(s);
      }
  }
}
```

ZipCodeValidator.ts

```
/// <reference path="Validation.ts" />
module Validation {
  var numberRegexp = /^[0-9]+$/;
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}
```

Test.ts

```
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
 
var strings = ['Hello', '98052', '101'];
var validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
for(var i=0;i<strings.length;i++){
  for (var name in validators) {
     document.write('"' + strings[i] + '" ' + (validators[name].isAcceptable(strings[i]) ? ' matches ' : ' does not match ') + name+"<br>"); //调用类的方法
    }
}
```

在项目中新建好以上四个文件，然后我们编译项目，如果我们代码编写没错的话，是能够编译通过的。另外，我们可以见到后面三个文件开头有类似于 C# 的文档注释，这是告诉 TypeScript 编译器该文件依赖于哪些文件，假如依赖的文件不存在的话，编译就会不通过。当然我们不写也是可以的，只不过编译器在编译时不会帮我们检查，一般来说，还是建议写上。 另外，在引用编译生成的 JavaScript 文件时，我们需要注意好顺序。以上面的代码为例，我们在 Html 代码中已经这么引用。

```
<script src="Validation.js" type="text/javascript"/>
<script src="LettersOnlyValidator.js" type="text/javascript"/>
<script src="ZipCodeValidator.js" type="text/javascript"/>
<script src="Test.js" type="text/javascript"/>
```