//修饰器函数，用来修改类的行为
@testable
class MyTestableClass {
    console.log('test class');
}

function testable(target) {
    target.isTestable = true;
}
console.log(MyTestableClass.isTestable)

// @testable就是一个修饰器。它修改了MyTestableClass这个类的行为，为它加上了静态属性isTestable

// 修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。


// react + redux
// class MyReactComponent extends MyReactComponent.Component{}
// export default connect(maoStateToProps, mapDispatchToProps)(MyReactComponent)

// 使用修饰器
// @connect(mapStateToProps, mapDispatchToProps)
// exports default class MyReactComponent extends React.Component {}

// 修饰器只能用于类和类的方法，不能用于函数，因为函数存在提升

// core-decorators 第三方模块，提供常见的修饰器

// @autobind  方法中的this对象，绑定原始对象

// @readonly 使得属性或方法不可以写

// @override 检查子类方法是否正确的覆盖了父类的同名方法

// Mixin模式，就是对象继承的一种替代方案，中文译为“混入”（mix in），意为在一个对象之中混入另外一个对象的方法。

// Trait 也是一种修饰器，效果与 Mixin 类似，但是提供更多功能，比如防止同名方法的冲突、排除混入某些方法、为混入的方法起别名等等。