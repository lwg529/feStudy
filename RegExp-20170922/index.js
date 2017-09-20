//^ 表示字符串的开始位置
// $ 表示字符串的结束位置

// 竖线符号（|）在正则表达式中表示“或关系”（OR）
// [xyz] 表示x、y、z之中任选一个匹配。

// \d 匹配0-9之间的任一数字，相当于[0-9]。
// \D 匹配所有0-9以外的字符，相当于[^0-9]。
// \w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
// \W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。
// \s 匹配空格（包括制表符、空格符、断行符等），相等于[\t\r\n\v\f]。
// \S 匹配非空格的字符，相当于[^\t\r\n\v\f]。
// \b 匹配词的边界。
// \B 匹配非词边界，即在词的内部。
// 模式的精确匹配次数，使用大括号（{}）表示。{n}表示恰好重复n次，{n,}表示至少重复n次，
// {n,m}表示重复不少于n次，不多于m次。

// ? 问号表示某个模式出现0次或1次，等同于{0, 1}。
// * 星号表示某个模式出现0次或多次，等同于{0,}。
// + 加号表示某个模式出现1次或多次，等同于{1,}。
//字面量，斜杠表示开始和结束
var regex = /xyz/i; //编译时新建正则表达式

//使用RegExp构造函数
var regex1 = new RegExp('xyz', "i"); //运行时新建正则表达式

//正则对象的方法：将字符串作为参数，比如 regex.test(string)
//字符串对象的方法：将正则对象作为参数，比如 string.match(regex)

//正则对象的属性和方法
//ignoreCase 返回一个布尔值，表示是都设置了i修饰符，该属性只读
//global 返回一个布尔值，是否设置了global，该属性只读.如果有g的修饰符，从上次结束的位置开始向后匹配
//multiline 返回布尔，是都设置了m修饰符

var reg = /abc/igm;
console.log('ignoreCase: ' + reg.ignoreCase);
console.log('global: ' + reg.global);
console.log('multiline: ' + reg.multiline);

//lastIndex 返回下一次的搜索位置，可读写，设置了g修饰符有意义
//source 返回正则表达式的字符串形式，不包括斜杠，只读


//test 返回一个布尔值，表示当前模式是否能匹配参数字符串
console.log('test: '+ /cat/.test('cats and dogs'));

//exec() 匹配则返回一个数组，否则返回null
var s = '_x_x';
var r1 = /x/;
var r2 = /y/;
console.log('exec success: ' + r1.exec(s)); //["x"]
console.log('exec fail: ' + r2.exec(s)); //null

// match()：返回一个数组，成员是所有匹配的子字符串。
// search()：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。
// replace()：按照给定的正则表达式进行替换，返回替换后的字符串。
// split()：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。

console.log('aaa'.replace('a', 'b'))// "baa"
console.log('aaa'.replace(/a/, 'b')) // "baa"
console.log('aaa'.replace(/a/g, 'b')) // "bbb"