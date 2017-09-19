/*
 * @Author: wengai.liu 
 * @Date: 2017-09-19 15:26:02 
 * @Last Modified by:   wengai.liu 
 * @Last Modified time: 2017-09-19 15:26:02 
 */
//Date()返回的是当前时间,即使有参数，返回的还是当前时间
console.log('当前时间是: ' + Date());

//Date()可以当做构造函数使用，使用new命令，返回一个Date对象的实例
var today = new Date();
console.log('today: ' + today);

//Date对象接受从1970年1月1日00:00:00 UTC开始计算的毫秒数作为参数

var Jan02_1970 = new Date(3600 * 24 * 1000);
console.log(Jan02_1970);

//Date()接受一个日期字符串作为参数
console.log('date string: ' + new Date('January 6, 2013'));
console.log('date string1: ' + new Date('2017-09-19'));
console.log('date string1: ' + new Date('2017/09/19'));

//Date()对象的静态方法
//Date.now() 返回当前距离1970年1月1日的毫秒数
console.log('date now: ' + Date.now());

//Date().parse()用来解析日期字符串，返回距离1970年1月1日 00：00:00的毫秒数
console.log('date parse: ' + Date.parse('2000-01-01'));

//Date.UTC()返回的是当前时区的时间
console.log('date utc: ' + Date.UTC(2011,1,1))

//Date.toString()方法返回一个完整的日期字符串
//toUTCString方法返回对应的UTC时间，也就是比北京时间晚8个小时。
//toISOString方法返回对应时间的ISO8601写法。
//toJSON方法返回一个符合JSON格式的ISO格式的日期字符串
//toDateString方法返回日期字符串。
//toTimeString方法返回时间字符串。
//toLocaleDateString方法返回一个字符串，代表日期的当地写法。
//toLocaleTimeString方法返回一个字符串，代表时间的当地写法。
var d = new Date(2013,0,1);
console.log('toString: '+ d.toString());
console.log('toUTCString: ' + d.toUTCString());
console.log('toISOString: ' + d.toISOString());
console.log('toJSON: ' + d.toJSON());
console.log('toDateString: ' + d.toDateString());
console.log('toTimeString: ' + d.toTimeString());
console.log('toLocaleDateString: ' + d.toLocaleDateString());
console.log('toLocaleTimeString: ' + d.toLocaleTimeString());

//get类方法
//getTime() 返回当前时间的毫秒数
//getDate() 返回每个月的第几号
//getDay() 返回星期几
//getYear() 返回距离1900的年数
//getFullYear() 返回四位数年份
//getMonth() 返回月份，0表示1月，11表示12月
//getHours 返回小时数
//getMinutes() 返回分钟
//getSeconds() 返回秒

var nowTime = new Date();
console.log('now date: ' + nowTime.getDate());
console.log('now month: ' + nowTime.getMonth());
console.log('now year: ' + nowTime.getFullYear());

//所有的get方法，还提供了对应的UTC版本，用来返回UTC时间

//set()用来设置实例对象的各个方面
// setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
// setYear(year): 设置距离1900年的年数。
// setFullYear(year [, month, date])：设置四位年份。
// setHours(hour [, min, sec, ms])：设置小时（0-23）。
// setMilliseconds()：设置毫秒（0-999）。
// setMinutes(min [, sec, ms])：设置分钟（0-59）。
// setMonth(month [, date])：设置月份（0-11）。
// setSeconds(sec [, ms])：设置秒（0-59）。
// setTime(milliseconds)：设置毫秒时间戳。

//valueOf方法返回实例对象距离1970年1月1日00:00:00 UTC对应的毫秒数

