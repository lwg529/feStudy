//async 是generator函数的语法糖，

const gen = function* () {
    const f1 = yield readFile('/etc/fstab');
    const f2= yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};

const asyncReadFile = async function () {
    const f1 = await readFile('/etc/fstab');
    const f2 = await readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
}

// sync函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await

// 优点： 1.generator函数执行必须靠执行器，async函数自带执行器，也就是async执行，只要asyncReadFile()
// 2.更好的语义
// 3.yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。
// async返回值是promise对象，可以用then指定下一步的操作

// await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。

async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

// 另一种写法

async function myFunction() {
  await somethingThatReturnsAPromise()
  .catch(function (err) {
    console.log(err);
  });
}

// 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;

// await命令只能用在async函数之中，如果用在普通函数，就会报错。