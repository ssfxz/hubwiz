### SVG Path

* M/m = moveto 移动当前位置
* L/l = lineto 从当前位置绘制线段到指定位置
* H/h = horizontal lineto 从当前位置绘制水平线到达指定的x 坐标
* V/v = vertical lineto 从当前位置绘制竖直线到达指定的y 坐标
* C/c = curveto 从当前位置绘制三次贝塞尔曲线到指定位置
* S/s = smooth curveto 从当前位置光滑绘制三次贝塞尔曲线到指定位置
* Q/q = quadratic Belzier curve 从当前位置绘制二次贝塞尔曲线到指定位置
* T/t = smooth quadratic Belzier curveto 从当前位置光滑绘制二次贝塞尔曲线到指定位置
* A/a = elliptical Arc 从当前位置绘制弧线到指定位置
* Z/z = closepath 闭合当前路径

区分大小写：大写表示坐标参数为绝对位置，小写则为相对位置 （例如：从上一个点开始，向上移动10px，向左移动7px）
最后的参数表示最终要到达的位置
上一个命令结束的位置就是下一个命令开始的位置
命令可以重复参数表示重复执行同一条命令。
