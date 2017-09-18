//reduce 对累加器和数组中每个元素(从左到右)应用一个函数，将其减少为单个值
//params1：上次调用返回的值
//params2：正在处理的元素
//params3: 正在处理元素的索引
//params4： 调用reduce的数组
var total = [0, 1, 2, 3, 4].reduce((sum, value) => {
    return sum + value;
}, 0);
console.log('total sum: ' + total);

var flattened = [[0, 1], [2, 3], [5, 6]].reduce(function(a, b) {
    return a.concat(b);
}, []);
console.log('flattened array: ' + flattened);

//reduceRight()从右向左开始累加

//reverse()将数组中的元素颠倒过来
var oriArr = ["one", "two", "three"];
console.log("arr after reverse: " + oriArr.reverse());

//shift()从数组中删除第一个元素，并返回该元素，此方法会更改数组的长度.数组为空，返回undefined
console.log([1, 2, 3].shift());

//从开始到结束选择数组的一部分浅拷贝到新数组对象，原始数组不会改变
//params1:开始的位置
//params2:结束的位置 [start, end)
//如果该元素是个对象引用，slice 会拷贝这个对象引用到新的数组里。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
console.log([1, 2, 3, 4, 5].slice(1, 3));

//slice可以将一个类数组的对象转换成一个数组
function list(){
    return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3);
console.log('list1: ' + list1);

//some 测试数组中某些元素是否通过提供的函数的测试
var passed = [2, 5, 8, 1, 4].some((item, index, array) => {
    return item >= 4;
});
console.log('passed: ' + passed);

//sort() 对数组排序，返回数组。默认的排序方式是根据unicode码点
// 在Unicode中, 数字在大写字母之前,
// 大写字母在小写字母之前.
var fruits = ["cherries", "apple", "peach"];
console.log('fruits sort result: ' + fruits.sort());

var numbersArray = [4, 2, 5, 1, 3];
numbersArray.sort(function(a, b) {
    return a - b;
});
console.log('sort array: ' + numbersArray);

//splice(start，deleteCount,items) 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。
//start：修改开始的位置 
//deleteCount：要删除元素的个数
//items:要添加进数组的元素
//如果有删除元素，则返回删除元素，否则返回空数组
var myFish = ["fish1", "fish2", "fish3"];
myFish.splice(2, 0, "fish4"); //在2的位置插入fish4
myFish.splice(3, 1); //从索引为3的位置删除一个元素

//toLocaleString()返回一个字符串表示数组中的元素
var numbers = 1001;
var date = new Date();
var myArr = [numbers, date];
console.log("myArr: " + myArr.toLocaleString());

//toString() 返回一个字符串，表示指定的数组及其元素。
var newArr = ["one", "two", "three"];
console.log("newArr:" + newArr.toString());

//unshift将一个元素或多个元素添加到数组的开头，并返回新数组的长度
console.log("new array: " + [1, 2, 3].unshift('a'));
