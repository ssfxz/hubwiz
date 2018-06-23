https://stackedit.io/app#

## 属性选择器
* E[attr="value"]:
* E[attr^="value"]：指定了属性名，并且有属性值，属性值是以value开头的；
* E[attr$="value"]：指定了属性名，并且有属性值，而且属性值是以value结束的；
* E[attr*="value"]：指定了属性名，并且有属性值，而且属值中包含了value；

```css
.wrap a[href="http://www.hubwiz.com"]{background:orange;color:blue;}
.wrap a[href^="http://"]{background:orange;color:blue;}
.wrap a[title*="hubwiz"]{background:black;color:white;}
.wrap a[href$="png"]{background:green;color:black;}
```

## 伪类选择器
|  |  |
|--|--|
| :first-child | 选择其父元素的第一个子元素； |
| :last-child | 选择其父元素的最后一个子元素； |
| :first-of-type | 选择其父元素的第一个同类子元素； |
| :last-of-type | 选择其父元素的最后一个同类子元素； |
| :nth-child() | 选择其父元素的一个或多个特定的子元素； |
| :nth-last-child() | 选择其父元素的一个或多个特定的子元素，从这个元素的最后一个子元素开始算； |
| :nth-of-type() | 选择指定的元素； |
| :nth-last-of-type() | 选择指定的元素，从元素的最后一个开始计算； |
| :only-child | 选择的元素是它的父元素的唯一一个了元素； |
| :only-of-type | 选择一个元素是它的上级元素的唯一一个相同类型的子元素； |
| :empty | 选择的元素里面没有任何内容。 |

```css
p:nth-child(3)
p:nth-child(2n)
p:nth-child(3n+1)
p:nth-child(odd)
p:nth-child(even)
```


## border-radius
```css
	border-radius: 20px;
	-moz-border-radius: 20px;
	-o-border-radius: 20px;
	-webkit-border-radius: 20px;
```

## border-image

## background
* background-clip
规定背景的绘制区域。

* background-origin
规定背景图片的定位区域。

* background-size
规定背景图片的尺寸。

## 文本效果
-   text-shadow
	- text-shadow:5px  5px  5px gray;
-   word-wrap
	- p {word-wrap:break-word;}

## font-face
在 CSS3 之前，web 设计师必须使用已在用户计算机上安装好的字体。
通过 CSS3，web 设计师可以使用他们喜欢的任意字体。
当您您找到或购买到希望使用的字体时，可将该字体文件存放到<B>web 服务器</B>上，它会在需要时被<B>自动下载</B>到用户的计算机上。
您“自己的”的字体是在 CSS3 @font-face 规则中定义的。
```html
<style> 
@font-face {
    font-family: myFirstFont;
    src: url('singlemalta-webfont.ttf'),
         url('singlemalta-webfont.eot'); /* IE9+ */
    font-weight:bold;
}
div {
    font-family:myFirstFont;
}
</style>
```

## Transform
### 2D transform
|  |  |
|--|--|
| matrix(n,n,n,n,n,n) | 定义 2D 转换，使用六个值的矩阵 |
| translate(x,y) | 定义 2D 转换，沿着 X 和 Y 轴移动元素 |
| translateX(n) | 定义 2D 转换，沿着 X 轴移动元素 |
| translateY(n) | 定义 2D 转换，沿着 Y 轴移动元素 |
| scale(x,y) | 定义 2D 缩放转换，改变元素的宽度和高度 |
| scaleX(n) | 定义 2D 缩放转换，改变元素的宽度 |
| scaleY(n) | 定义 2D 缩放转换，改变元素的高度 |
| rotate(angle) | 定义 2D 旋转，在参数中规定角度 |
| skew(x-angle,y-angle) | 定义 2D 倾斜转换，沿着 X 和 Y 轴 |
| skewX(angle) | 定义 2D 倾斜转换，沿着 X 轴 |
| skewY(angle) | 定义 2D 倾斜转换，沿着 Y 轴 |

### 3D transform
* rotateX()
* rotateY()

#### 转换属性
|  |  |
|--|--|
| transform | 向元素应用 2D 或 3D 转换。 |
| transform-origin | 允许你改变被转换元素的位置。 |
| transform-style | 规定被嵌套元素如何在 3D 空间中显示。 |
| perspective | 规定 3D 元素的透视效果。 |
| perspective-origin | 规定 3D 元素的底部位置。 |
| backface-visibility | 定义元素在不面对屏幕时是否可见。 |

#### 2D Transform 方法
|  |  |
|--|--|
| matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) |定义 3D 转换，使用 16 个值的 4x4 矩阵。|
| translate3d(x,y,z) | 定义 3D 转化。 |
| translateX(x) | 定义 3D 转化，仅使用用于 X 轴的值。 |
| translateY(y) | 定义 3D 转化，仅使用用于 Y 轴的值。 |
| translateZ(z) | 定义 3D 转化，仅使用用于 Z 轴的值。 |
| scale3d(x,y,z) | 定义 3D 缩放转换。 |
| scaleX(x) | 定义 3D 缩放转换，通过给定一个 X 轴的值。 |
| scaleY(y) | 定义 3D 缩放转换，通过给定一个 Y 轴的值。 |
| scaleZ(z) | 定义 3D 缩放转换，通过给定一个 Z 轴的值。 |
| rotate3d(x,y,z,angle) | 定义 3D 旋转。 |
| rotateX(angle) | 定义沿 X 轴的 3D 旋转。 |
| rotateY(angle) | 定义沿 Y 轴的 3D 旋转。 |
| rotateZ(angle) | 定义沿 Z 轴的 3D 旋转。 |
| perspective(n) | 定义 3D 转换元素的透视视图。 |


## Transition
```css
div {
   width:100px;
   height:100px;
   background:yellow;
   transition:width 2s;
   -moz-transition:width 2s; /* Firefox 4 */
   -webkit-transition:width 2s; /* Safari and Chrome */
   -o-transition:width 2s; /* Opera */
}
div:hover {
   width:300px;
}
```

### 过渡属性
|  |  |
|--|--|
| transition | 简写属性，用于在一个属性中设置四个过渡属性。 |
| transition-property | 规定应用过渡的 CSS 属性的名称。 |
| transition-duration | 定义过渡效果花费的时间。默认是 0。 |
| transition-timing-function | 规定过渡效果的时间曲线。默认是 "ease"。 |
| transition-delay | 规定过渡效果何时开始。默认是 0。 |

## Animation
```css
div {
   animation: myfirst 5s;
   -moz-animation: myfirst 5s;	/* Firefox */
   -webkit-animation: myfirst 5s;	/* Safari 和 Chrome */
   -o-animation: myfirst 5s;	/* Opera */
}
@keyframes myfirst {
}
@-moz-keyframes myfirst {
}
@-webkit-keyframes myfirst {
}
@-o-keyframes myfirst {
}
```
请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

### CSS3 动画属性
|  |  |
|--|--|
| @keyframes | 规定动画。 |
| animation | 所有动画属性的简写属性，除了 animation-play-state 属性。 |
| animation-name | 规定 @keyframes 动画的名称。 |
| animation-duration | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。 |
| animation-timing-function | 规定动画的速度曲线。默认是 "ease"。 |
| animation-delay | 规定动画何时开始。默认是 0。 |
| animation-iteration-count | 规定动画被播放的次数。默认是 1。 |
| animation-direction | 规定动画是否在下一周期逆向地播放。默认是 "normal"。 |
| animation-play-state | 规定动画是否正在运行或暂停。默认是 "running"。 |
| animation-fill-mode | 规定对象动画时间之外的状态。 |

## CSS3 多列
能够创建多个列来对文本进行布局 - 就像报纸那样！
-   column-count
-   column-gap
-   column-rule

```css
.newspaper {
   -moz-column-count:3; /* Firefox */
   -webkit-column-count:3; /* Safari and Chrome */
   column-count:3;
}
```
### 多列属性
|  |  |
|--|--|
| column-count | 规定元素应该被分隔的列数。 |
| column-fill | 规定如何填充列。 |
| column-gap | 规定列之间的间隔。 |
| column-rule | 设置所有 column-rule-* 属性的简写属性。 |
| column-rule-color | 规定列之间规则的颜色。 |
| column-rule-style | 规定列之间规则的样式。 |
| column-rule-width | 规定列之间规则的宽度。 |
| column-span | 规定元素应该横跨的列数。 |
| column-width | 规定列的宽度。 |
| columns | 规定设置 column-width 和 column-count 的简写属性。 |

## CSS3 用户界面
### resize
resize 属性规定是否可由用户调整元素尺寸。（拖拽）
```css
div {
   resize:both;
   overflow:auto;
}
```
### Box Sizing
box-sizing 属性允许您以确切的方式定义适应某个区域的具体内容。

### Outline Offset
outline-offset 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。
```css
div {
   border:2px solid black;
   outline:2px solid red;
   outline-offset:15px;
}
```
### 用户界面属性
|  |  |
|--|--|
| appearance | 允许您将元素设置为标准用户界面元素的外观 |
| box-sizing | 允许您以确切的方式定义适应某个区域的具体内容。 |
| icon | 为创作者提供使用图标化等价物来设置元素样式的能力。 |
| nav-down | 规定在使用 arrow-down 导航键时向何处导航。 |
| nav-index | 设置元素的 tab 键控制次序。 |
| nav-left | 规定在使用 arrow-left 导航键时向何处导航。 |
| nav-right | 规定在使用 arrow-right 导航键时向何处导航。 |
| nav-up | 规定在使用 arrow-up 导航键时向何处导航。 |
| outline-offset | 对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。 |
| resize | 规定是否可由用户对元素的尺寸进行调整。 |
