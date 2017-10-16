# 基础语法
## 标示符
在python中，标识符由**字母、数字、下划线**组成。

在python中，所有标识符可以包括英文、数字以及下划线（_），但不能以数字开头。

python中的标识符是**区分**大小写的。

以下划线开头的标识符是有特殊意义的。以单下划线开头（_foo）的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用"from xxx import *"而导入；

以双下划线开头的（ __ foo）代表类的私有成员；以双下划线开头和结尾的（ __ foo __ ）代表python里特殊方法专用的标识，如 __ init __（）代表类的构造函数。

## 行和缩进
学习Python与其他语言最大的区别就是，Python的代码块不使用大括号（{}）来控制类，函数以及其他逻辑判断。python最具特色的就是用缩进来写模块。

缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白数量，这个必须严格执行。如下所示：

``` python
if True:
    print "True"
else:
  print "False"
```

由于以上代码的缩进空白不一致，而导致执行错误。因此，在Python的代码块中必须使用相同数目的行首缩进空格数。

## 多行语句
Python语句中一般以新行作为语句的结束符。但是我们可以使用斜杠（\）将一行的语句分为多行显示，如下所示：

```
total = item_one + \ 
        item_two + \
        item_three
```

语句中包含[], {} 或 () 括号就不需要使用多行连接符。如下实例：

```
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
```

Python可以在同一行中使用多条语句，语句之间使用分号(;)分割，以下是一个简单的实例：

```
import sys; x = 'foo'; sys.stdout.write(x + '\n')
```

## 空行
函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用一行空行分隔，以突出函数入口的开始。

空行与代码缩进不同，空行并不是Python语法的一部分。书写时不插入空行，Python解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。

注意：空行也是程序代码的一部分。

## 代码组
缩进相同的一组语句构成一个代码块，我们称之代码组。像if、while、def和class这样的复合语句，首行以关键字开始，以冒号( : )结束，该行之后的一行或多行代码构成代码组。

我们将首行及后面的代码组称为一个子句(clause)。如下实例：

```
if expression : 
   suite 
elif expression :  
   suite  
else :  
   suite 
```

## 保留字
下面的列表显示了在Python中的保留字。这些保留字不能用作常数或变量，或任何其他标识符名称。所有Python的关键字只包含小写字母。

and exec not assert finally or break for pass class from print continue global raise def if return del import try elif in while else is with except lambda yield

# 数据类型
## 数字
Python 数字数据类型用于存储数值。数据类型是不允许改变的,这就意味着如果改变数字数据类型得值，将重新分配内存空间。

```
var1 = 1
var2 = 10
```

用del语句删除一些数字对象引用，del语句的语法是：

- del var1[,var2[,var3[....,varN]]]]

```
del var1
del var2, var3
```

Python 支持四种不同的数值类型：

* **整型(Int)** - 通常被称为是整型或整数，是正或负整数，不带小数点。
* **长整型(long integers)** - 无限大小的整数，整数最后是一个大写或小写的L。
* **浮点型(floating point real values)** - 浮点型由整数部分与小数部分组成，浮点型也可以使用科学计数法表示（2.5e2 = 2.5 x 102 = 250）。
* **复数 (complex numbers)** - 复数的虚部以字母J 或 j结尾 。如：2+3j

长整型也可以使用小写"l"，但是还是建议您使用大写"L"，避免与数字"1"混淆。Python使用"L"来显示长整型。

Python还支持复数，复数由实数部分和虚数部分构成，可以用a + bj,或者complex(a,b)表示， 复数的实部a和虚部b都是浮点型。

## 字符串
字符串是 Python 中最常用的数据类型。我们可以使用引号来创建字符串。

Python 接收单引号(' )，双引号(" )，三引号(""") 来表示字符串，引号的开始与结束必须的相同类型的。例如：

``` python
word = 'word'
sentence = "This is a sentence."
paragraph = """This is a paragraph. It is
made up of multiple lines and sentences."""
# 换行符也占一个字符
```

Python访问子字符串，可以使用方括号([])来截取字符串，如下实例：

```
var1 = 'Hello World!'
var2 = "Python Programming"
print "var1[0]: ", var1[0]
print "var2[1:5]: ", var2[1:5]
```

以上实例执行结果：

```
var1[0]:  H
var2[1:5]:  ytho
```

## 列表
**序列**是Python中最基本的数据结构。序列中的每个元素都分配一个数字 - 它的位置，或索引，第一个索引是0，第二个索引是1，依此类推。

**列表**是最常用的Python数据类型，它可以作为一个**方括号**内的**逗号**分隔值出现。列表的数据项**不需要**具有相同的类型。创建一个列表，只要把逗号分隔的不同的数据项使用方括号括起来即可。如下所示：

``` python
list1 = ['physics', 'chemistry', 1997, 2000];
list2 = [1, 2, 3, 4, 5 ];
list3 = ["a", "b", "c", "d"];
```

与字符串的索引一样，列表索引从0开始。列表可以进行截取、组合等。

使用下标索引来访问列表中的值，同样你也可以使用方括号的形式截取字符，如下所示：

```
list1 = ['physics', 'chemistry', 1997, 2000];
list2 = [1, 2, 3, 4, 5, 6, 7 ];
print "list1[0]: ", list1[0]
print "list2[1:5]: ", list2[1:5]
```

你可以对列表的数据项进行修改，如下所示：

```
list = ['physics', 'chemistry', 1997, 2000];
list[2] = 2001;
```

可以使用 del 语句来删除列表的的元素，如下实例：

```
list1 = ['physics', 'chemistry', 1997, 2000];
del list1[2];
```

## 列表脚本操作符
列表对 + 和 * 的操作符与字符串相似。+ 号用于组合列表，* 号用于重复列表。如下表所示：

Python 表达式 | 结果 | 描述
---- | ---- | ---- | ----
len([1, 2, 3]) | 3 | 长度
[1, 2, 3] + [4, 5, 6] | [1, 2, 3, 4, 5, 6] | 组合
['Hi!'] * 4 | ['Hi!', 'Hi!', 'Hi!', 'Hi!'] | 重复
3 in [1, 2, 3] | True | 元素是否存在于列表中
for x in [1, 2, 3]: print x, | 1 2 3 | 迭代

## 