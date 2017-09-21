//window.location 当前窗口的url信息
console.log('当前网址： ' + window.location);

//window.closed 布尔值，表示是否关闭
console.log('窗口关闭： ' + window.closed);

//window.opener 返回打开当前窗口的父窗口，如果窗口没有父窗口，返回null
// 通过opener属性，可以获得父窗口的的全局变量和方法，比如window.opener.propertyName和
// window.opener.functionName()。但这只限于两个窗口属于同源的情况

//window.frames 返回一个类似数组的对象，成员为页面内所有框架窗口，包括frame元素和iframe元素
console.log('页面第一个窗口： ' + window.frames[0]);

//window.length属性返回当前框架包含的框架总数，如果不包括frame和iframe。length就是0
console.log('当前网页包含的框架总数 '+ window.length);

//window.screenX和window.screenY属性，返回浏览器窗口左上角相对于当前屏幕左上角（(0, 0)）的水平距离和垂直距离，单位为像素。
console.log('screenX: '+ window.screenX);
console.log('screenY: '+ window.screenY);

// window.innerHeight和window.innerWidth属性，返回网页在当前窗口中可见部分的高度和宽度，即“视口”（viewport），单位为像素。
console.log('innerHeight: '+ window.innerHeight);
console.log('innerWidth: '+ window.innerWidth);

// window.outerHeight和window.outerWidth属性返回浏览器窗口的高度和宽度，
// 包括浏览器菜单和边框，单位为像素。
console.log('outerHeight: '+ window.outerHeight);
console.log('outerWidth: '+window.outerWidth);

// window.pageXOffset属性返回页面的水平滚动距离，
// window.pageYOffset属性返回页面的垂直滚动距离，单位都为像素。
console.log('pageXOffset: '+ window.pageXOffset);
console.log('pageXOffset: '+window.pageYOffset);

//window对象的navigator属性，指向一个包含浏览器信息的对象。
console.log('window navigator: '+ window.navigator);

//navigator.userAgent属性返回浏览器的User-Agent字符串，标示浏览器的厂商和版本信息。
console.log('window userAgent: '+ window.navigator.userAgent);

// 通过userAgent可以大致准确地识别手机浏览器，方法就是测试是否包含mobi字符串。
var ua = navigator.userAgent.toLowerCase();

if (/mobi/i.test(ua)) {
  // 手机浏览器
  console.log('mobile');
} else {
  // 非手机浏览器
  console.log('pc');
}
//如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。
///mobi|android|touch|mini/i.test(ua)

// navigator.plugins属性返回一个类似数组的对象，成员是浏览器安装的插件，比如Flash、ActiveX等。
console.log('window plugins: '+ window.navigator.plugins);

// navigator.platform属性返回用户的操作系统信息。

// navigator.onLine属性返回一个布尔值，表示用户当前在线还是离线。

// navigator.geolocation返回一个Geolocation对象，包含用户地理位置的信息。

// cookieEnabled属性返回一个布尔值，表示浏览器是否能储存Cookie。

// window.screen对象包含了显示设备的信息。
console.log('screen height: '+ screen.height);
console.log('screen width: '+ screen.width);

// screen.availHeight和screen.availWidth属性返回屏幕可用的高度和宽度，单位为像素。
// window.moveTo方法用于移动浏览器窗口到指定位置。它接受两个参数，
// 分别是窗口左上角距离屏幕左上角的水平距离和垂直距离，单位为像素。
window.moveTo(100, 200);  

// window.moveBy方法将窗口移动到一个相对位置。它接受两个参数，
// 分布是窗口左上角向右移动的水平距离和向下移动的垂直距离，单位为像素。
window.moveBy(25, 50)

// window.scrollTo方法用于将网页的指定位置，滚动到浏览器左上角。
// 它的参数是相对于整张网页的横坐标和纵坐标。它有一个别名window.scroll。

// window.scrollBy方法用于将网页移动指定距离  window.scrollBy(0, window.innerHeight) 网页向下滚动一屏

//window.open方法用于新建另一个浏览器窗口，并且返回该窗口对象。
var openNew = window.open();
console.log(openNew)

//window.close方法用于关闭当前窗口，一般用来关闭window.open方法新建的窗口。该方法只对顶层窗口有效

// window.print方法会跳出打印对话框，同用户点击菜单里面的“打印”命令效果相同。

// 非桌面设备（比如手机）可能没有打印功能
if (typeof window.print === 'function') {
  // 支持打印功能
  console.log('print able');
}

// window.focus()  focus方法会激活指定当前窗口，使其获得焦点。

// window.getSelection方法返回一个Selection对象，表示用户现在选中的文本。

// 由于网页可以使用iframe元素，嵌入其他网页，因此一个网页之中会形成多个窗口
// top 顶层窗口，即最上层的那个窗口
// parent  父窗口
// self 当前窗口，即自身

// 父窗口后退一次 parent.history.back()

// window.onload 事件发生在文档在浏览器窗口加载完毕时

//浏览器发生错误时，会触发window对象的error事件，可以通过window.onerror属性对该事件指定回调函数

// 编码解码
// encodeURI 方法的参数是一个字符串，代表整个URL。它会将元字符和语义字符之外的字符，都进行转义。
console.log('编码后： '+ encodeURI('http://www.example.com/q=春节'));

// encodeURIComponent只转除了语义字符之外的字符，元字符也会被转义。因此，它的参数通常是URL的路径或参数值，而不是整个URL。
console.log(encodeURIComponent('春节'));
console.log(encodeURIComponent('http://www.example.com/q=春节'));

// decodeURI用于还原转义后的URL

// decodeURIComponent用于还原转义后的URL片段。

// alert方法的参数只能是字符串
// prompt方法弹出的对话框，在提示文字的下方，还有一个输入框，要求用户输入信息，并有“确定”和“取消”两个按钮。

//history对象用来保存浏览历史

//history.back() 移动到上一个访问页面，等于浏览器的后退键
//history.forward() 移动到下一个访问的页面，等同于浏览器的前进键
//history.go()接受一个整数作为参数，移动到该整数指定的页面 
//  go(1)相当于forward()   go(-1)相当于back go(0)刷新当前页面

//history.pushState() 和history.replaceState() 用于在浏览历史记录中添加和修改记录

//history.state返回当前页面的state对象

// URLSearchParams用于处理URL之中的查询字符串，即问号之后的部分。
var paramsString = 'q=URLUtils.searchParams&topic=api';
var searchParams = new URLSearchParams(paramsString);
console.log('has: ' + searchParams.has('topic'));
console.log('get: ' + searchParams.get('topic'));

//has() 是否具有某个参数
//get() 返回指定参数的第一个值
//getAll() 返回一个数组，成员是指定参数的所有值
//set() 设置指定参数
//delete() 删除指定的参数
//append() 在查询字符串中，追加一个键值对
//toString()返回整个查询的字符串



