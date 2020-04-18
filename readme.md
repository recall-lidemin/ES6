# ES6语法
  ## let const
  
  ## promise(构造函数)
   - 创建promise容器
   - 一旦创建就立即开始执行里面的代码
  
  ## async await
   - async 是Generator函数的语法糖，是对该方法的改进版，使用async修饰的函数，是一个异步函数，该函数返回promise，
   - await 修饰的语句，相当于yield，必须调用next()才能继续执行，只不过内部有自动遍历器，不需要再调用next()，await的作用是使当前异步函数内的代码进入等            待状态，直到await后面的语句执行完成，才会继续执行
   
  ## entries() 方法
   - Object.entries()
   - Array.prototype.entries()
   - 该方法返回一个Iterator遍历器对象，该对象包含了数组中每一项的键值对，键为下标索引，值为数组中值
   - 可以通过 for...of 遍历
   ```
   for(let [key,value] of arr.entries()){
      console.log(`${key}----${value}`)
   }
   ```
