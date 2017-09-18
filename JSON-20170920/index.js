// JSON(JavaScriptObjectNotation)是一种轻量级的数据交换格式 
// JSON的优点:数据体积较小，解析转换简单
// 主要有两种结构:键值对集合，值的有序列表

// JSON标准规定string必须由 双引号 包裹
// JSON标准中没有注释的语法
// 键名必须是string

var lwg = {
"name": "underscore",
"description": "JavaScript's functional programming helper library.", "homepage": "http://underscorejs.org",
"keywords": ["util", "functional", "server", "client", "browser" ], 
"author": "Jeremy Ashkenas <jeremy@documentcloud.org>"
}
//JSON.stringify() 方法将一个  JavaScript 值转换为一个 JSON 字符串
//精确控制如何序列化，可以定义一个toJSON()的方法，直接返回JSON应该序列化的数据
// JSON.stringify发现参数对象有toJSON方法，就直接使用这个方法的返回值作为参数，而忽略原对象的其他参数。
console.log(JSON.stringify(lwg));
var newLwg = {
  name: 'lwg',
  age: 14,
  toJSON: function() {
    return {
      'Name': this.name,
      'Age': this.age
    };
  }
}
console.log(JSON.stringify(newLwg));

function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  } 
  return value;
}
var foo = {foundation: "Mozilla", model: "box", week: 45};
var jsonString = JSON.stringify(foo, replacer);
console.log(jsonString);


//JSON.parse() 解析JSON格式的字符串,构造由字符串描述的JavaScript值或对象
console.log('JSON parse: ' + JSON.parse('true'));

var o = JSON.parse('{"name": "张三"}');
console.log("JSON parse name: " + o.name);