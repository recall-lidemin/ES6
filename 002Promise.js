/**
 * ES6 API  Promise
 * 它是一个构造函数
 * 解决异步嵌套回调地狱
 * 
 * 一个容器，保存这未来某个阶段才会结束的事件(异步操作的结果)
 * 
 * 两个特点：
 *         1.对象状态不受外界影响 pending(进行中) fulfilled(已成功) rejected(已失败)
 *         2.一旦状态改变，就不会再变，任何时候都可以得到这个结果
 * 
 * Promise.prototype.then(),then方法定义在原型对象上，第一个参数是resolved,第二个参数是rejected(可选)，该方法返回一个新的Promise实例
 * 这样就可以使用链式编程
 * Promise.prototype.catch()捕获异常，Promise状态变为rejected时调用
 * 
 * 
 * 
 *  */

const fs = require('fs')


let p1 = new Promise((resolve, reject) => {
    fs.readFile('./a.json', 'utf-8', (err, data) => {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})

let p2 = new Promise((resolve, reject) => {
    fs.readFile('./b.json', 'utf-8', (err, data) => {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})

let p3 = new Promise((resolve, reject) => {
    fs.readFile('./c.json', 'utf-8', (err, data) => {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})
// then方法中接收的就是 resolve
p1.then(data => {
        console.log(data);
        return p2
    }, err => {
        console.log(err);
    })
    .then(data => {
        // 这里的data，就是前一个then方法返回的值
        console.log(data);
        return p3
    })
    .then(data => {
        console.log(data);
    })