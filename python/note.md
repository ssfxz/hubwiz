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

## 元组
Python的元组与列表类似，不同之处在于元组的元素不能修改。元组使用小括号，列表使用方括号。

元组创建很简单，只需要在括号中添加元素，并使用逗号隔开即可。如下实例：

```
tup1 = ('physics', 'chemistry', 1997, 2000);
tup2 = (1, 2, 3, 4, 5 );
tup3 = "a", "b", "c", "d";
tup4 = ();    # 创建空元组
tup5 = (50,); #元组中只包含一个元素时，需要在元素后面添加逗号。
```

注意：元组与字符串类似，下标索引从0开始，可以进行截取，组合等。

元组可以使用下标索引来访问元组中的值，如下实例:

```
tup1 = ('physics', 'chemistry', 1997, 2000);
tup2 = (1, 2, 3, 4, 5, 6, 7 );
print "tup1[0]: ", tup1[0]  # 运行结果为：tup1[0]:  physics
print "tup2[1:5]: ", tup2[1:5] # 运行结果为：tup2[1:5]:  (2, 3, 4, 5)
```

可以使用del语句来删除整个元组,但是不允许删除元组中的元素。

```
tup = ('physics', 'chemistry', 1997, 2000);
del tup;
```

**元组中的元素值是不允许修改的**，但我们可以对元组进行连接组合，如下实例:

```
tup1 = (12, 34.56);
tup2 = ('abc', 'xyz');
tup3 = tup1 + tup2;
print tup3;   #运行结果为：(12, 34.56, 'abc', 'xyz')
```

## 元组操作符
与字符串一样，元组之间可以使用 + 号和 * 号进行运算。

Python 表达式 | 结果 | 描述
---- | ---- | ----
len((1, 2, 3)) | 3 | 计算元素个数
(1, 2, 3) + (4, 5, 6) | (1, 2, 3, 4, 5, 6) | 连接
('Hi!',) * 4 | ('Hi!', 'Hi!', 'Hi!', 'Hi!') | 复制
3 in (1, 2, 3) | True | 元素是否存在
for x in (1, 2, 3): print x, | 1 2 3 | 迭代

## 字典
字典由键和对应值成对组成。字典也被称作**关联数组**或**哈希表**。基本语法如下：

```
dict = {'Alice': '2341', 'Beth': '9102', 'Cecil': '3258'} # 或者
dict1 = { 'abc': 456 };
dict2 = { 'abc': 123, 98.6: 37 };
```

每个键与值用**冒号隔开**（:），每对用逗号分割，整体放在花括号中（{}）。键必须独一无二，但值则不必。值可以取任何数据类型，但必须是不可变的，如字符串，数或元组。

访问字典中值，把相应的键放入熟悉的方括弧，如下实例:

```
dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'};
print "dict['Name']: ", dict['Name'];
print "dict['Age']: ", dict['Age'];
```

我们也可以对字典中的元素进行增加、修改、删除，也可以删除字典，如下实例：

```
dict['School'] = "DPS School"; # 增加键为'School'的条目
dict['Name']="Jim";            # 修改键为'Name'的条目的值
del dict['Name'];              # 删除键是'Name'的条目
dict.clear();                  # 清空词典所有条目
del dict ;                     # 删除词典
```

## 变量
变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。Python中的变量不需要声明，变量的赋值操作既是变量声明和定义的过程。

每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。等号（=）用来给变量赋值。等号（=）运算符左边是一个变量名,等号（=）运算符右边是存储在变量中的值。例如：

```
counter = 100 # 赋值整型变量
miles = 1000.0 # 浮点型
name = "John" # 字符串
```

Python允许你同时为多个变量赋值。例如：

```
j = k = l = 1 
a, b, c = 1, 2, "john"  #1和2分配给变量a和b，字符串对象"john"分配给变量c。
```

# 运算符
## 算术运算符
以下假设变量a为10，变量b为20：

运算符 | 描述 | 实例
---- | ---- | ----
+ | 加 - 两个对象相加 | a + b 输出结果 30
- | 减 - 得到负数或是一个数减去另一个数 | a - b 输出结果 -10
* | 乘 - 两个数相乘或是返回一个被重复若干次的字符串 | a * b 输出结果 200
/ | 除 - x除以y | b / a 输出结果 2
% | 取模 - 返回除法的余数 | b % a 输出结果 0
** | 幂 - 返回x的y次幂 | a**b 为10的20次方， 输出结果 100000000000000000000
// | 取整除 - 返回商的整数部分 | 9//2 输出结果 4 ,9.0//2.0 输出结果 4.0

## 比较运算符
以下假设变量a为10，变量b为20：

运算符 | 描述 | 实例
---- | ---- | ----
== | 等于 - 比较对象是否相等 | (a == b) 返回 False。
!= | 不等于 - 比较两个对象是否不相等 | (a != b) 返回 true.
<> | 不等于 - 比较两个对象是否不相等 | (a <> b) 返回 true。这个运算符类似 != 。
> | 大于 - 返回x是否大于y | (a > b) 返回 False。
< | 小于 - 返回x是否小于y | (a < b) 返回 true。
>= | 大于等于 - 返回x是否大于等于y | (a >= b) 返回 False。
<= | 小于等于 - 返回x是否小于等于y | (a <= b) 返回 true。

> 所有比较运算符返回1表示真，返回0表示假。这分别与特殊的变量True和False等价。注意，这些变量名的大写。

## 赋值运算符
运算符 | 描述 | 实例
---- | ---- | ----
= | 简单的赋值运算符 | c = a + b 将 a + b 的运算结果赋值为 c
+= | 加法赋值运算符 | c += a 等效于 c = c + a
-= | 减法赋值运算符 | c -= a 等效于 c = c - a
*= | 乘法赋值运算符 | c *= a 等效于 c = c * a
/= | 除法赋值运算符 | c /= a 等效于 c = c / a
%= | 取模赋值运算符 | c %= a 等效于 c = c % a
**= | 幂赋值运算符 | c **= a 等效于 c = c ** a
//= | 取整除赋值运算符 | c //= a 等效于 c = c // a

## 位运算符
按位运算符是把数字看作二进制来进行计算的。Python中的按位运算法则如下：

运算符 | 描述 | 实例
---- | ---- | ----
& | 按位与运算符 | (a & b) 输出结果 12 ，二进制解释： 0000 1100
\| | 按位或运算符 | (a \| b) 输出结果 61 ，二进制解释： 0011 1101
^ | 按位异或运算符 | (a ^ b) 输出结果 49 ，二进制解释： 0011 0001
~ | 按位取反运算符 | (~a ) 输出结果 -61 ，二进制解释： 1100 0011， 在一个有符号二进制数的补码形式。
<< | 左移动运算符 | a << 2 输出结果 240 ，二进制解释： 1111 0000
>> | 右移动运算符 | a >> 2 输出结果 15 ，二进制解释： 0000 1111

## 逻辑运算符
运算符 | 描述 | 实例
---- | ---- | ----
and | 布尔"与" - 如果x为False，x and y返回False，否则它返回y的计算值。 | (a and b) 返回 true。
or | 布尔"或" - 如果x是True，它返回True，否则它返回y的计算值。 | (a or b) 返回 true。
not | 布尔"非" - 如果x为True，返回False。如果x为False，它返回True。 | not(a and b) 返回 false。

## 成员运算符
除了以上的一些运算符之外，Python还支持成员运算符，测试实例中包含了一系列的成员，包括字符串，列表或元组。

运算符 | 描述 | 实例
---- | ---- | ----
in | 如果在指定的序列中找到值返回True，否则返回False。 | x 在 y序列中 , 如果x在y序列中返回True。
not in | 如果在指定的序列中没有找到值返回True，否则返回False。 | x 不在 y序列中 , 如果x不在y序列中返回True。

```
print (1 in (1,2))
print (1 not in (1,2))
```

## 身份运算符
身份运算符用于比较两个对象的存储单元。

运算符 | 描述 | 实例
---- | ---- | ----
is | is是判断两个标识符是不是引用自一个对象 | x is y, 如果 id(x) 等于 id(y) , **is** 返回结果 1
is not | is not是判断两个标识符是不是引用自不同对象 | x is not y, 如果 id(x) 不等于 id(y). **is not** 返回结果 1

## 运算符的优先级
以下表格列出了从最高到最低优先级的所有运算符：

运算符 | 描述
---- | ----
** | 指数 (最高优先级)
~ + - | 按位翻转, 一元加号和减号 (最后两个的方法名为 +@ 和 -@)
* / % // | 乘，除，取模和取整除
+ - | 加法减法
>> << | 右移，左移运算符
& | 位 'AND'
^ | \| 位运算符
<= < > >= | 比较运算符
<> == != | 等于运算符
= %= /= //= -= += *= **= | 赋值运算符
is is not | 身份运算符
in not in | 成员运算符
not or and | 逻辑运算符

# 控制语句
## if语句
Python条件语句是通过一条或多条语句的执行结果（True或者False）来决定执行的代码块。用if语句可以构成分支结构。它根据给定的条件进行判断，以决定执行某个分支程序段。

第一种形式为：

```
if (表达式) :  
    语句1  
else :  
    语句2
```
```
flag = False
name = 'luren'
if name == 'python':         # 判断变量否为'python'
   flag = True          # 条件成立时设置标志为真
   print 'welcome boss'    # 并输出欢迎信息
else:
   print name              # 条件不成立时输出变量名称
```

第二种形式为:

```
if (表达式) :  
    语句1  
elif (表达式) :  
    语句2  
    …  
elif (表达式) :  
    语句n  
else :  
    语句m 
```
```
num = 5     
if num == 3:            # 判断num的值
    print 'boss'        
elif num == 2:
    print 'user'
elif num == 1:
    print 'worker'
elif num < 0:           # 值小于零时输出
    print 'error'
else:
    print 'roadman'     # 条件均不成立时输出
```

第三种形式为:(强行第三种)

```
if (表达式1) :  
   if (表达式2) :  
       语句1  
   elif (表达式3) :  
       语句2  
        …  
   else:  
       语句3  
else :  
    … 
```
```
num = 9
if num >= 0 and num <= 10:    # 判断值是否在0~10之间
    print 'HELLO'
    if num > 10:    # 判断值是否大于10
       print 'world'
    elif num>=0:
       print 'WORLD'
else:
    print 'undefine'
```

## while语句
Python 编程中 while 语句用于循环执行程序，即在某条件下，循环执行某段程序，以处理需要重复处理的相同任务。其基本形式为：

```
while 判断条件：
    执行语句……
```
```
count = 0
while (count < 9):
   print 'The count is:', count
   count = count + 1
 
print "Good bye!"
```

在 python 中，while … else 表示这样的意思，while 中的语句和普通的没有区别，**else 中的语句会在循环正常执行完的情况下执行**。其格式如下：

```
while 判断条件：
      语句组
else:
      语句组
```
```
count = 0
while count < 5:
     print count, " is  less than 5"
     count = count + 1
else:
     print count, " is not less than 5"
```

## for语句
Python for循环可以遍历任何序列的项目，如一个列表或者一个字符串。for循环的第一种语法格式如下：

```
for iterating_var in sequence:
   statements(s)
```
```
for letter in 'Python':     # First Example
   print 'Current Letter :', letter

fruits = ['banana', 'apple',  'mango']
for fruit in fruits:        # Second Example
   print 'Current fruit :', fruit
```

在 python 中，for … else 表示这样的意思，for 中的语句和普通的没有区别，**else 中的语句会在循环正常执行完的情况下执行**。如下格式：

```
for iterating_var in sequence:
      statements(s)
else:
      statements(s1) 
```
```
num=10
for i in range(2,num): #to iterate on the factors of the number
   if num%i == 0:      #to determine the first factor
       j=num/i          #to calculate the second factor
       print '%d equals %d * %d' % (num,i,j)
else:                  # else part of the loop
   print num, 'is a prime number'
以上代码中range返回一个序列的数。
```

**python不支持类似c的for(i=0;i<5;i++)这样的循环语句，但可以借助range函数模拟**：

```
for x in range(0,5,1):  
    print x 
# 执行结果为： 0 1 2 3 4
```

## break语句
break语句用来终止循环语句，即循环条件没有False条件或者序列还没被完全递归完，也会停止执行循环语句。break语句用在while和for循环中。

```
for letter in 'Python':     # First Example
   if letter == 'h':
      break
   print 'Current Letter :', letter
 
var = 10                    # Second Example
while var > 0:              
   print 'Current variable value :', var
   var = var -1
   if var == 5:
      break
 
print "Good bye!"
```

## continue语句
continue 语句用来告诉Python跳过当前循环的剩余语句，然后继续进行下一轮循环。continue语句用在while和for循环中。

```
for letter in 'Python':     # First Example
   if letter == 'h':
      continue
   print 'Current Letter :', letter
 
var = 10                    # Second Example
while var > 0:              
   var = var -1
   if var == 5:
      continue
   print 'Current variable value :', var
print "Good bye!"
```

## pass语句
pass是空语句，是为了保持程序结构的完整性。

```
for letter in 'Python': 
   if letter == 'h':
      pass
      print 'This is pass block'
   print 'Current Letter :', letter
 
print "Good bye!"
```

## example
以下实例使用了嵌套循环输出2~100之间的素数：

```
i = 2
while(i < 100):
   j = 2
   while(j <= (i/j)):
      if not(i%j): break
      j = j + 1
   if (j > i/j) : print i, " 是素数"
   i = i + 1
 
print "Good bye!"
```

求100的阶乘

```
factorial = 1
for i in range(1,100):
    factorial *= i
print factorial
```

# 函数
## 函数的定义
函数是组织好的，可重复使用的，用来实现单一，或相关联功能的代码段。

定义一个由自己想要功能的函数，以下是简单的规则：

* 函数代码块以def关键词开头，后接函数标识符名称和圆括号()。
* 任何传入参数和自变量必须放在圆括号中间。圆括号之间可以用于定义参数。
* 函数的第一行语句可以选择性地使用文档字符串—用于存放函数说明。
* 函数内容以冒号起始，并且缩进。
* Return[expression]结束函数，选择性地返回一个值给调用方。不带表达式的return相当于返回None。

语法定义格式如下：

```
def functionname( parameters ):
   "函数_文档字符串"
   function_suite
   return [expression]
```
```
def printme( str ):
   "打印传入的字符串到标准显示设备上"
   print str
   return
```

## 函数的调用
定义一个函数只给了函数一个名称，指定了函数里包含的参数，和代码块结构。这个函数的基本结构完成以后，你可以通过另一个函数调用执行，也可以直接从Python提示符执行。

如下实例调用了printme（）函数：

```
# Function definition is here
def printme( str ):
   "打印任何传入的字符串"
   print str;
   return;
 
# Now you can call printme function
printme("我要调用用户自定义函数!");
printme("再次调用同一函数");
```

## 传递参数
**所有参数（自变量）在Python里都是按引用传递**。如果你在函数里修改了参数，那么在调用这个函数的函数里，原始的参数也被改变了。

```
# 可写函数说明
def changeme( mylist ):
   "修改传入的列表"
   mylist.append([1,2,3,4]);
   print "函数内取值: ", mylist
   return
 
# 调用changeme函数
mylist = [10,20,30];
changeme( mylist );
print "函数外取值: ", mylist
```
传入函数的和在末尾添加新内容的对象用的是同一个引用。故输出结果如下：

```
函数内取值:  [10, 20, 30, [1, 2, 3, 4]]
函数外取值:  [10, 20, 30, [1, 2, 3, 4]]
```

## 匿名函数
用lambda关键词能创建小型匿名函数。这种函数得名于省略了用def声明函数的标准步骤。

* Lambda函数能接收任何数量的参数但只能返回一个表达式的值，同时只能不能包含命令或多个表达式。
* 匿名函数不能直接调用print，因为lambda需要一个表达式。
* lambda函数拥有自己的名字空间，且不能访问自有参数列表之外或全局名字空间里的参数。
* 虽然lambda函数看起来只能写一行，却不等同于C或C++的内联函数，后者的目的是调用小函数时不占用栈内存从而增加运行效率。

lambda函数的语法格式如下：

```
lambda [arg1 [,arg2,.....argn]]:expression

```
```
sum = lambda arg1, arg2: arg1 + arg2;
 
#调用sum函数
print "Value of total : ", sum( 10, 20 )
print "Value of total : ", sum( 20, 20 )
```

输出结果为：

```
Value of total :  30
Value of total :  40
```

## return语句
return语句[表达式]退出函数，选择性地向调用方返回一个表达式。不带参数值的return语句返回None。

```
# 可写函数说明
def sum( arg1, arg2 ):
   # 返回2个参数的和."
   total = arg1 + arg2
   print "Inside the function : ", total
   return total;
 
# 调用sum函数
total = sum( 10, 20 );
print "Outside the function : ", total 
```

# 模块
## import语句
简单地说，模块就是一个保存了Python代码的文件。模块能定义函数，类和变量。模块里也能包含可执行的代码。

一个叫做aname的模块里的Python代码一般都能在一个叫aname.py的文件中找到。下例是个简单的模块support.py。

```
def print_func( par ):
   print "Hello : ", par
   return
```

想使用Python源文件，只需在另一个源文件里执行import语句，语法如下：

```
import module1[, module2[,... moduleN]
```

如下例子：

```
# 导入模块
import support
# 现在可以调用模块里包含的函数了
support.print_func("Zara")
```

## from…import
Python的from语句让你从模块中导入一个指定的部分到当前命名空间中。语法如下：

```
from modname import name1[, name2[, ... nameN]]
```

例如，要导入模块fib的fibonacci函数，使用如下语句：

```
from fib import fibonacci
```

## from…import*
把一个模块的所有内容全都导入到当前的命名空间也是可行的，只需使用如下声明：

```
from modname import *
```

这提供了一个简单的方法来导入一个模块中的所有项目。然而这种声明不该被过多地使用。

## reload函数
当一个模块被导入到一个脚本，模块顶层部分的代码只会被执行一次。因此，如果你想重新执行模块里顶层部分的代码，可以用reload()函数。该函数会重新导入之前导入过的模块。语法如下：

```
reload(module_name)
```

在这里，module_name要直接放模块的名字，而不是一个字符串形式。比如想重载hello模块，如下：

```
reload(hello)
```

# 文件I/O
## open函数
Python内置的open()函数打开一个文件，创建一个file对象，相关的辅助方法才可以调用它进行读写。语法为：

```
file object = open(file_name [, access_mode][, buffering])
```

各个参数的细节如下：

* file_name：file_name变量是一个包含了你要访问的文件名称的字符串值。

* access_mode：access_mode决定了打开文件的模式：只读，写入，追加等。所有可取值见如下的完全列表。这个参数是非强制的，默认文件访问模式为只读(r)。

* buffering:如果buffering的值被设为0，就不会有寄存。如果buffering的值取1，访问文件时会寄存行。如果将buffering的值设为大于1的整数，表明了这就是的寄存区的缓冲大小。如果取负值，寄存区的缓冲大小则为系统默认。

不同模式打开文件的完全列表：

模式 | 描述
---- | ----
r | 以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。
rb | 以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。
r+ | 打开一个文件用于读写。文件指针将会放在文件的开头。
rb+ | 以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。
w | 打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
wb | 以二进制格式打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
w+ | 打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
wb+ | 以二进制格式打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
a | 打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
ab | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
a+ | 打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。
ab+ | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。

## close函数
File对象的close（）方法刷新缓冲区里任何还没写入的信息，并关闭该文件，这之后便不能再进行写入。当一个文件对象的引用被重新指定给另一个文件时，Python会关闭之前的文件。语法为：

```
fileObject.close();
```
```
# 打开一个文件
fo = open("foo.txt", "wb")
print "Name of the file: ", fo.name
 
# 关闭打开的文件
fo.close()
```

## File对象的属性
一个文件被打开后，你有一个file对象，你可以得到有关该文件的各种信息。以下是和file对象相关的所有属性的列表:

属性 | 描述
---- | ----
file.closed | 返回true如果文件已被关闭，否则返回false。
file.mode | 返回被打开文件的访问模式。
file.name | 返回文件的名称。
file.softspace | 如果用print输出后，必须跟一个空格符，则返回false。否则返回true。

```
# 打开一个文件
fo = open("foo.txt", "wb")
print "Name of the file: ", fo.name
print "Closed or not : ", fo.closed
print "Opening mode : ", fo.mode
print "Softspace flag : ", fo.softspace
```

## read函数
read（）方法从一个打开的文件中读取一个字符串。语法：

```
fileObject.read([count]);
```

在这里，被传递的参数是要从已打开文件中读取的字节计数。该方法从文件的开头开始读入，如果没有传入count，它会尝试尽可能多地读取更多的内容，很可能是直到文件的末尾。

```
# 打开一个文件
fo = open("/tmp/foo.txt", "r+")
str = fo.read(10);
print "Read String is : ", str
# 关闭打开的文件
fo.close()
```

## write函数
Write()方法可将任何字符串写入一个打开的文件。Write()方法不在字符串的结尾不添加换行符('\n')。语法为：

```
fileObject.write(string);
```

在这里，被传递的参数是要写入到已打开文件的内容。

```
# 打开一个文件
fo = open("/tmp/foo.txt", "wb")
fo.write( "Python is a great language.\nYeah its great!!\n");
# 关闭打开的文件
fo.close()
```

# 异常处理
## try/except
捕捉异常可以使用try/except语句。try/except语句用来检测try语句块中的错误，从而让except语句捕获异常信息并处理。如果你不想在异常发生时结束你的程序，只需在try里捕获它。语法：

```
try:
<语句>        #运行别的代码
except <名字>：
<语句>        #如果在try部份引发了'name'异常
except <名字>，<数据>:
<语句>        #如果引发了'name'异常，获得附加的数据
else:
<语句>        #如果没有异常发生
```

如下面例子所示

```
try:
   fh = open("testfile", "w")
   fh.write("This is my test file for exception handling!!")
except IOError:
   print "Error: can\'t find file or read data"
else:
   print "Written content in the file successfully"
   fh.close()
```

## try-finally
try-finally 语句无论是否发生异常都将执行最后的代码。语法为：

```
try:
<语句>
finally:
<语句>    #退出try时总会执行
raise
```

注意：你可以使用except语句或者finally语句，但是两者不能同时使用。else语句也不能与finally语句同时使用。例如：

```
try:
   fh = open("testfile", "w")
   fh.write("This is my test file for exception handling!!")
finally:
   print "Error: can\'t find file or read data"
```

# 类（class）
## 创建类
类(Class): 用来描述具有相同的属性和方法的对象的集合。它定义了该集合中每个对象所共有的属性和方法。对象是类的实例。 使用class语句来创建一个新类，class之后为类的名称并以冒号结尾，如下实例:

```
class ClassName:
   '类的帮助信息'   #类文档字符串
   class_suite  #类体
```

下面代码就创建了一个名为Employee的类.

```
class Employee:
   # '所有员工的基类'
   empCount = 0
 
   def __init__(self, name, salary):
      self.name = name
      self.salary = salary
      Employee.empCount += 1
 
   def displayCount(self):
     print "Total Employee %d" % Employee.empCount
 
   def displayEmployee(self):
      print "Name : ", self.name,  ", Salary: ", self.salary
```

如下代码创建Employee的实例。

```
# "创建 Employee 类的第一个对象"
emp1 = Employee("Zara", 2000)
# "创建 Employee 类的第二个对象"
emp2 = Employee("Manni", 5000)
```

## 访问属性
可以使用点(.)来访问对象的属性。使用如下类的名称访问类变量:

```
# 定义类
class Employee:
   # '所有员工的基类'
   empCount = 0
 
   def __init__(self, name, salary):
      self.name = name
      self.salary = salary
      Employee.empCount += 1
 
   def displayCount(self):
     print "Total Employee %d" % Employee.empCount
 
   def displayEmployee(self):
      print "Name : ", self.name,  ", Salary: ", self.salary
# "创建 Employee 类的第一个对象"
emp1 = Employee("Zara", 2000)
# "创建 Employee 类的第二个对象"
emp2 = Employee("Manni", 5000)
# 访问类成员
emp1.displayEmployee()
emp2.displayEmployee()
```

我们也可以对类的属性进行修改，增加，删除。

```
emp1.age = 7  # 添加一个 'age' 属性
emp1.age = 8  # 修改 'age' 属性
del emp1.age  # 删除 'age' 属性
```

## 类的继承
面向对象的编程带来的主要好处之一是代码的重用，实现这种重用的方法之一是通过继承机制。继承完全可以理解成类之间的类型和子类型关系。

继承语法为 **class 派生类名（基类名）：**//... 基类名写作括号里，基本类是在类定义的时候，在元组之中指明的。

派生类的声明，与他们的父类类似，继承的基类列表跟在类名之后，如下所示：

```
    class SubClassName (ParentClass1[, ParentClass2, ...]):
               'Optional class documentation string'
               class_suite
```

如下继承的例子。

```
class Parent:        # 定义父类
   parentAttr = 100
   def __init__(self):
      print "调用父类构造函数"
 
   def parentMethod(self):
      print '调用父类方法'
 
   def setAttr(self, attr):
      Parent.parentAttr = attr
 
   def getAttr(self):
      print "父类属性 :", Parent.parentAttr
 
class Child(Parent): # 定义子类
   def __init__(self):
      print "调用子类构造方法"
 
   def childMethod(self):
      print '调用子类方法 child method'
 
c = Child()          # 实例化子类
c.childMethod()      # 调用子类的方法
c.parentMethod()     # 调用父类方法
c.setAttr(200)       # 再次调用父类的方法
c.getAttr()          # 再次调用父类的方法
```

## 方法重写
如果你的父类方法的功能不能满足你的需求，你可以在子类重写你父类的方法：

```
class Parent:        # 定义父类
   def myMethod(self):
      print '调用父类方法'
 
class Child(Parent): # 定义子类
   def myMethod(self):
      print '调用子类方法'
 
c = Child()          # 子类实例
c.myMethod()         # 子类调用重写方法
```
