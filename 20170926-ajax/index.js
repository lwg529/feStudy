//ajax包括以下几个步骤
//1.创建ajax对象
//2.发出HTTP请求
//3.接收服务器传回的数据
//4.更新网页数据

// AJAX通过原生的XMLHttpRequest对象发出HTTP请求，得到服务器返回的数据后，再进行处理。

// XMLHttpRequest对象用来在浏览器与服务器之间传送数据。

var ajax = new XMLHttpRequest();
ajax.open('GET', 'http://www.baidu.com', true);  //向指定的服务器网址，发出GET请求

// AJAX指定回调函数，监听通信状态（readyState属性）的变化。
ajax.onreadystatechange = handleStateChange;

// 一旦拿到服务器返回的数据，AJAX不会刷新整个网页，而是只更新相关部分，从而不打断用户正在做的事情。

// ajax 只能向同源的网址发出请求 跨源请求，会报错

var xhr = new XMLHttpRequest();

//指定通信过程转台改变时的回调函数
xhr.onreadystatechange = function(){
     if (xhr.readyState === 4) {
         if (xhr.status === 200) {
             console.log(xhr.responseText);
         } else {
             console.error(xhr.statusText);
         }
     }
};
xhr.onerror = function (e) {
    console.error(xhr.statusText);
}

xhr.open('GET', '/endpoint', true);  //第三个参数表示异步还是同步，false同步

xhr.sned(null);

// readyState是一个只读属性，表示XMLHttpRequest请求当前所处的状态。

// 0，对应常量UNSENT，表示XMLHttpRequest实例已经生成，但是open()方法还没有被调用。
// 1，对应常量OPENED，表示send()方法还没有被调用，仍然可以使用setRequestHeader()，设定HTTP请求的头信息。
// 2，对应常量HEADERS_RECEIVED，表示send()方法已经执行，并且头信息和状态码已经收到。
// 3，对应常量LOADING，表示正在接收服务器传来的body部分的数据，如果responseType属性是text或者空字符串，responseText就会包含已经收到的部分信息。
// 4，对应常量DONE，表示服务器数据已经完全接收，或者本次接收已经失败了。

// 在通信过程中，每当发生状态变化的时候，readyState属性的值就会发生改变。这个值每一次变化，都会触发readyStateChange事件。

// onreadystatechange属性指向一个回调函数，当readystatechange事件发生的时候，这个回调函数就会调用，并且XMLHttpRequest实例的readyState属性也会发生变化。


// responseText属性返回从服务器接收到的字符串，该属性为只读。如果本次请求没有成功或者数据不完整，该属性就会等于null。

// response属性为只读，返回接收到的数据体（即body部分）。

// responseType属性用来指定服务器返回数据（xhr.response）的类型。

// status属性为只读属性，表示本次请求所得到的HTTP状态码，它是一个整数。一般来说，如果通信成功的话，这个状态码是200。

// onreadystatechange这一个事件指定回调函数。该事件对所有情况作出响应。

// onloadstart 请求发出
// onprogress 正在发送和加载数据
// onabort 请求被中止，比如用户调用了abort()方法
// onerror 请求失败
// onload 请求成功完成
// ontimeout 用户指定的时限到期，请求还未完成
// onloadend 请求完成，不管成果或失败

// withCredentials属性是一个布尔值，表示跨域请求时，用户信息（比如Cookie和认证的HTTP头信息）是否会包含在请求之中，默认为false。

// XMLHTTPRequest对象的upload属性有一个progress，会不断返回上传的进度。

// load事件表示服务器传来的数据接收完毕，error事件表示请求出错，abort事件表示请求被中断

// Fetch API是一种新规范，用来取代XMLHttpRequest对象。它主要有两个特点，一是接口合理化，
// Ajax是将所有不同性质的接口都放在XHR对象上，而Fetch是将它们分散在几个不同的对象上，设计更合理；二是Fetch操作返回Promise对象，避免了嵌套的回调函数。

 fetch(url).then(function (response) {
  return response.json();
}).then(function (jsonData) {
  console.log(jsonData);
}).catch(function () {
  console.log('出错了');
});

// Fetch API最大的特点是，除了返回Promise对象，还有一点就是数据传送是以数据流（stream）的形式进行的。对于大文件，数据是一段一段得到的。

fetch('./api/some.json').then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
    });
  } else {
    console.log('请求失败，状态码为', response.status);
  }
}, function(err) {
  console.log('出错：', err);
});


// 如果需要在CORS机制下发出跨域请求，需要指明状态。
fetch('http://some-site.com/cors-enabled/some.json', {mode: 'cors'})

fetch("http://www.example.org/submit.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "firstName=Nikhil&favColor=blue&password=easytoguess"
}).then(function(res) {
  if (res.ok) {
    console.log("Perfect! Your settings are saved.");
  } else if (res.status == 401) {
    console.log("Oops! You are not authorized.");
  }
}, function(e) {
  console.log("Error submitting form!");
});