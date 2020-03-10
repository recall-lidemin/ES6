// let const var 的区别
/**
 *                                  |  let    |   const   |   var
 *  变量提升                            no          no         yes
 * 块级作用域                           yes         yes        no
 * 不可重复定义                         yes         yes        no
 * 全局变量不会附加在window对象上        yes         yes        no
 * 必须初始化                           no          yes        no
 * 只读                                no          yes        no
 * Window调用                          no          no         yes
 * 
 *  */

//  1.let块级作用域，var没有
// for (let i = 1; i < 10; i++) {
//     for (var j = 1; j < 10; j++) {
//         console.log(i, j);
//     }
//     console.log(i, j);
// }
// console.log(i, j); // i is not defined

// 2.声明会提升变量
// console.log(a); //undefined
// var a = 1
// console.log(a); // 1

// 3.全局是否会挂载到window
// var b = 1 //会
// let c = 1 //不会
// console.log(window.b); // 1
// console.log(window.c); //window is not defined

// 4.重复声明
var a = 1
var a = 2
console.log(a);

let b = 1
let b = 2
console.log(b); // 'b' has already been declared