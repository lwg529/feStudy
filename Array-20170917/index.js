//创建数组
let fruits = ["apple", "banana"];

//访问元素
let first = fruits[0];
console.log('fruits first item ' +first);
//遍历一个数组

fruits.forEach(function(item, index, array) {
    console.log(item, index);
})

//添加元素到末尾
var newLength = fruits.push("orange");

//删除数组末尾的元素
let last  = fruits.pop();

//删除数组最前面的元素
let firstItems = fruits.shift();

//添加到数组的前面
let newArr  = fruits.unshift("strawberry")

//找到元素的索引
let index = fruits.indexOf("banana")

//通过索引删除某个元素
let pos = 1;
let removedIndex = fruits.splice(pos, 1);

//从某个索引开始，删除多个元素
let n = 2;
let removedItems = fruits.splice(pos, n);

//复制一个数组
var shallowCopy = fruits.slice();



