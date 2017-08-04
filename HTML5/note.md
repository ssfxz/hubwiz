# HTML5 Web 存储
* localStorage - 没有时间限制的数据存储
* sessionStorage - 针对一个 session 的数据存储

---

# 什么是应用程序缓存（Application Cache）？
> HTML5 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。

应用程序缓存为应用带来三个优势：

1. 离线浏览 - 用户可在应用离线时使用它们
2. 速度 - 已缓存资源加载得更快
3. 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。
浏览器支持
所有主流浏览器均支持应用程序缓存，除了 Internet Explorer。

使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。

### 更新缓存
一旦应用被缓存，它就会保持缓存直到发生下列情况：

1. 用户清空浏览器缓存
2. manifest 文件被修改（参阅下面的提示）
3. 由程序来更新应用缓存

---

# 什么是 Web Worker？
> Web worker 是运行在后台的 JavaScript，不会影响页面的性能。

当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。

web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。

### 由于 web worker 位于外部文件中，它们无法访问下例 JavaScript 对象：

1. window 对象
2. document 对象
3. parent 对象

---

# HTML5 服务器发送事件（server-sent event）允许网页获得来自服务器的更新。
Server-Sent 事件 - 单向消息传递
Server-Sent 事件指的是网页自动获取来自服务器的更新。

以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。

例子：Facebook/Twitter 更新、估价更新、新的博文、赛事结果等。
