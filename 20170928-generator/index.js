// Generator 是es6的异步编程解决方案

// Generator 函数是一个状态机，封装了多个内部状态。执行generator函数会返回一个遍历器对象，可以
// 依次遍历generator函数内部的每一个状态

// Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
function* helloWorld() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hello = helloWorld();
// 调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，
// 而是一个指向内部状态的指针对象，需要调用next()对象，使指针指向下一个状态
console.log(hello.next())
console.log(hello.next())
console.log(hello.next())

// 调用 Generator 函数，返回一个遍历器对象，
// 代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，
// 就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，
// 是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。

// 遇到yield 暂停后面的操作，并将紧跟在yield后面表达式的值，作为返回对象的value

// for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。

function * foo() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
for (let item of foo()){
    console.log(item);
}