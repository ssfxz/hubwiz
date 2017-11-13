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

### entries() \ keys() \ values()
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