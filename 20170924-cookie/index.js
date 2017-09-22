//cookie是服务器保存在浏览器的一段文本信息，每个cookie的大小一般不能超过4kb，
// 浏览器每次向服务器发送请求时，都会附上这段信息

//cookie保存着 名字， 值， 到期时间， 所属的域名， 生效的路径

// 浏览器可以设置不接受 Cookie，也可以设置不向服务器发送 Cookie。window.navigator.cookieEnabled属性返回一个布尔值，表示浏览器是否打开 Cookie 功能。

//当前网页的cookie
console.log('cookie: ' + document.cookie);

//由于document.cookie 返回的是分号分割的所有cookie，所以手动还原，才能取出每一个cookie的值
var cookies = document.cookie.split(";");

for(var i = 0; i < cookies.length; i++){
    cookies[4]='lwg';
}

//document.cookie属性是可写的。每次只能写入一条cookie

// Set-Cookie: value[; expires=date][; domain=domain][; path=path][; secure]
// values 键值对 用于指定cookie的值
//expires 指定cookie的过期时间
// domain cookie所在的域名
//path 指定路径，必须是绝对路径 
// secure 属性用来指定cookie只能在加密协议https下发送到服务器
//max-age 指定cookie的有效期，比如60*60*24*365
//httpOnly用来指定cookie不能被js读取

document.cookie = 'fontSize=14; '
  + 'path=/subdirectory; '
  + 'domain=*.example.com';
console.log('new cookie: ' + document.cookie);

// 删除一个Cookie的简便方法，就是设置expires属性等于0，或者等于一个过去的日期。

// 浏览器的同源政策规定，两个网址只要域名相同和端口相同，就可以共享Cookie  注意，这里不要求协议相同。