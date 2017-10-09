//document节点是文档的根节点，window.doucment属性就指向这个节点

//doucment不同的方法可以获取
//1.正常的网页，直接使用document或者window.doucumen
//2.对于iframe载入的网页，使用iframe节点的contentDocument属性
//3.ajax返回的文档，使用XMLHttpRequest对象的responseXML
//4.对于包含某个节点的文档，使用该节点的ownerDocument

//内部节点属性

//document.doctype一个对象，包含了当前文档类型
//document.documentElement 返回当前文档的根节点   一般返回html
//document.head 返回当前文档的head节点
//document.body 返回当前文档的body

//document.activeElement返回文档中获得焦点的那个元素

//document.links返回当前文档设定了herf属性的a和area元素
//document.forms 返回页面中所有表单的form
//document.images 返回页面所有图片元素

//document.embeds返回网页中所有嵌入对象

//document.scripts属性返回当前文档的所有脚本

//document.documentURI属性和document.URL属性都返回一个字符串，表示当前文档的网址。
//document.documentURI可以用于所有的文档，document.URL只能用于HTML文档

//document.domain属性返回当前文档的域名。无法获取域名，返回null

//document.lastModified属性返回当前文档最后修改的时间戳，格式为字符串。不能直接比较，比较
//那个文档更新，需要使用Date.parse转化成时间戳格式比较

//document.location 返回location对象，提供当前文档URL信息

//假设当前网址为 http://user:passwd@www.example.com:4097/path/a.html?x=111#part1
// document.location.href // "http://user:passwd@www.example.com:4097/path/a.html?x=111#part1"
// document.location.protocol // "http:"
// document.location.host // "www.example.com:4097"
// document.location.hostname // "www.example.com"
// document.location.port // "4097"
// document.location.pathname // "/path/a.html"
// document.location.search // "?x=111"
// document.location.hash // "#part1"
// document.location.user // "user"
// document.location.password // "passwd"


// 跳转到另一个网址
// document.location.assign('http://www.google.com')
// 优先从服务器重新加载
// document.location.reload(true)
// 优先从本地缓存重新加载（默认值）
// document.location.reload(false)
// 跳转到新网址，并将取代掉history对象中的当前记录
// document.location.replace('http://www.google.com');
// 将location对象转为字符串，等价于document.location.href
// document.location.toString()

// document.referrer属性返回一个字符串，表示当前文档的访问来源，
// document.title属性返回当前文档的标题，该属性是可写的。
// document.characterSet属性返回渲染当前文档的字符集

// document.readyState属性返回当前文档的状态
// loading：加载HTML代码阶段（尚未完成解析）
// interactive：加载外部资源阶段时
// complete：加载完成时

// document.designMode属性控制当前文档是否可编辑

// document.implementation属性返回一个对象，用来甄别当前环境部署了哪些DOM相关接口。

// compatMode属性返回浏览器处理文档的模式，可能的值为BackCompat（向后兼容模式）和CSS1Compat（严格模式）。

// document.open()新建一个文档，供write方法写入内容。它等于清除当前文档，重写写入内容。

// document.close关闭open方法新建的文档

// document.write向当前文档写入内容

// document.querySelector方法接受一个CSS选择器作为参数，返回匹配该选择器的第一个元素节点。

console.log('querySelector ' + document.querySelector('.myClass'));

// document.querySelectorAll 返回所有匹配的节点

// document.getElementsByTagName方法返回所有指定HTML标签的元素

// document.getElementByClassName 所有class名字符合指定条件的元素

// document.getElementsByName方法用于选择拥有name属性的HTML元素

// getElementById方法返回匹配指定id属性的元素节点。如果没有发现匹配的节点，则返回null。

// document.createElement方法用来生成网页元素节点。

// document.createTextNode方法用来生成文本节点

// 这个方法可以确保返回的节点，被浏览器当做文本渲染，而不是当做HTML代码渲染。因此可以展示用户的输入，避免XSS攻击

// createTextNode方法对大于号和小于号进行转义，该方法不对单引号和双引号转义

// document.createAttribute()生成一个新的属性对象节点

var node = documnet.getElementById("div1");
var a = document.createAttribute("my_attrib");
a.value = "newVal1";
node.setAttributeNode(a);

// 等同于
var node1 = document.getElementById("div1");
node1.setAttribute("my_attribute","new1");

// createDocumentFragment方法生成一个DocumentFragment对象。
// DocumentFragment对象是一个存在于内存的DOM片段，但是不属于当前文档，常常用来生成较复杂的DOM结构，然后插入当前文档。
