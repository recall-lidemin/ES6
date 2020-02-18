/**
 * ES6 API  Promise
 * 它是一个构造函数
 * 解决异步嵌套回调地狱
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