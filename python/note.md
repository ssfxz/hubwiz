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