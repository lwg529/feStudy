// sessionStorage保存的数据用于浏览器的一次会话，当会话结束（通常是该窗口关闭），数据被清空；
// localStorage保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。

// 除了保存期限的长短不同，这两个对象的属性和方法完全一样。

// 与Cookie一样，它们也受同域限制。某个网页存入的数据，只有同域下的网页才能读取。

// sessionStorage和localStorage保存的数据，都以“键值对”的形式存在。也就是说，每一项数据都有一个键名和对应的值。所有的数据都是以文本格式保存。
 
// 存入数据使用setItem 方法，它接受两个参数，一个是健名，第二个是保存的数据

sessionStorage.setItem('name', 'lwg');
localStorage.setItem('FE','YMFE');

console.log('session: ' + sessionStorage.getItem('name'));
console.log('local: ' + localStorage.getItem('FE'));

//清除数据
//removeItem 用于清除某个键名对应的数据
sessionStorage.removeItem('name');
localStorage.removeItem('FE');

//clear 清除所有保存的数据
sessionStorage.clear();
localStorage.clear();

//遍历操作 使用length 和 key 方法，遍历所有的键

for(var i = 0; i < localStorage.length; i ++){
    console.log(localStorage.key(i));
}

//storage 当存储的数据发生变化时，会触发storage事件，我们可以指定这个事件的回调函数
window.addEventListener("storage", onStorageChange);

function onStorageChange (e) {
    console.log(e.key);
}


