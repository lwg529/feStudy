var promise = {
    'var' : 'text',
    'array' : [1,2,3,4]
};
console.log('array of promise: ' + promise['array']);

//array使用合法的下标，而且该下标超出了数组的大小，会自动更新array的长度

var arr = ['banana', 'apple', 'peach'];
console.log('origin length: ' + arr.length);
arr[5] = 'mango';
console.log('new length: ' + arr.length);
arr.forEach((item, index, array) => {
    console.log(item, index);
});

//array 从一个类似数组或可迭代的对象中创建一个新的数组实例
const bar = ["a", "b", "c"];
console.log('bar: ' + Array.from(bar));
console.log('foo: ' + Array.from('foo'));

//Array.isArray()用于确定传递的值是否是一个Array
Array.isArray([1, 2, 3]);//true
Array.isArray({foo: 123});

//Array.of()创建一个具有可变数量参数的新数组实例
Array.of(7); //[7]
Array.of(1, 2, 3);//[1,2,3]

Array(7); //[, , , , , , ]
Array(1,2,3); //[1,2,3]

//concat() 合并两个或多个数组，而是返回一个新数组

let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];
let arr3 = arr1.concat(arr2, [1, 2, 3]);
console.log('arr3: ' + arr3);

//copyWithin()复制数组的一部分到同一数组中的另一位置,
//第一个参数是目标位置，第二个第三个元素是复制开始和结束的位置
console.log(["a", "b", "c", "d"].copyWithin(1, 2, 3))

//entries() 返回一个新的Array Iterator对象，该对象包含数组每个索引的键/值对
var arrEntry = ["a", "b", "c"];
var iterator = arrEntry.entries();

for (let e of iterator) {
    console.log('arrEntry: ' + e);
}

//every 测试数组的所有元素是不是都通过了函数的测试
var passed = [12, 3, 5, 8, 23].every((item, index, array) => {
    return item >= 10;
});
console.log('passed: ' + passed)

//fill用一个固定值填充一个数组从起始索引到终止索引的全部元素
//第一个参数是要填充的元素，第二个是起始位置，第三个是结束位置，[start, end)
var numbers = [1, 2, 3];
console.log('numbers: ' + numbers.fill(1));

//filter()创建一个新数组，其包含通过所提供函数实现的测试的所有元素
var filtered = [12, 5, 8, 130, 44].filter((item) => {
    return item >= 10;
})
console.log(filtered);

//find 返回数组中满足提供的测试函数的第一个元素的值，否则返回undefined
var finded = [12, 3, 44, 33, 130].find((item) => {
    return item > 40 ;
})
console.log('find item: ' + finded);

var inventory = [
    {name: 'apples', quality: 2},
    {name: 'banana', quality: 5},
    {name: 'peach', quality: 7}
];
function findPeach(fruit) {
    return fruit.name == "peach";
}
console.log(inventory.find(findPeach));

//findIndex 返回数组中满足测试函数的第一个元素的索引，否则返回-1
var findItemIndex = [12, 3, 44, 33, 130].findIndex((item) => {
    return item > 40 ;
});
console.log('find index: ' + findItemIndex);

//forEach 为数组有效值执行一次callback函数，未初始化的undefined项会被跳过
function logArrayElements (element, index, array) {
    console.log("a[" + index + "] =" + element);
}
[2, 5, '', 9].forEach(logArrayElements);

//includes()方法判断一个数组是否包含指定的值，返回true或者false
//第一个参数是查找的值，第二个是开始的位置fromIndex
[1, 2, 3].includes(2); //true
[1, 2, 3].includes(4); //false

//indexOf()返回在数组中可以找到一个指定元素的第一个索引，不存在返回-1
let index = [2, 7, 9, 8, 9].indexOf(9);
console.log('indexOf: ' + index);

//join()将数组的所有元素连接到一个字符串中
let arrJoin = ['wind', 'rain', 'fire'].join();
console.log('arrJoin: ' + arrJoin);

//keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键。
let arrKeys = ["a", "b", "c"];
let iteratorKeys = arr.keys();
console.log('iterator: ' + iteratorKeys);
console.log('iterator next ' + iteratorKeys.next());

//lastIndexOf() 方法返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。

//map()创建一个新数组，结果是该数组中每个元素调用一个函数后返回的结果
//每个元素顺序调用一次函数，包括undefined
let mapNumbers = [1, 5, 10, 15];
let doubles = mapNumbers.map((item) => {
    return item * 2;
});
console.log("doubles: " + doubles);

