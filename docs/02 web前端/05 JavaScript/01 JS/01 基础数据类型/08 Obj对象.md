## 创建对象

- 方式一

  ```
  var obj = new Object();
  
  向对象添加属性
      obj.name = "孙悟空";
      obj.gender = "男";
      obj.age = 18;
  
  读取对象的属性：
      obj.name    如果读取对象中没有的属性，不会报错而是会返回undefined，如读取obj.hello
  
  delete obj.name;                   #删除对象的属性
  ```

  

- 方式二

  ```
  var obj = {};    #和使用var obj = new Object();本质上是一摸一样的
  obj.name = "孙悟空";
  ```

  



## 读取属性

```
- 如果要使用特殊的属性名，不能采用.的方式来操作，需要使用另一种方式：
	语法：对象["属性名"] = 属性值   ，读取时也需要采用这种方式               #！！！！！！
	如：obj.123 = 789;会读取失败，定义时需要obj["123"] = 789;    
	
- 使用[]这种形式去操作属性，更加的灵活，    
	在[]中可以直接传递一个变量，这样变量值是多少就会读取那个属性             #！！！
	如 var n='123';  obj[n]就能取出123
```



- in 运算符

  ```
  - 通过该运算符可以检查一个对象中是否含有指定的属性，如果有则返回true，没有则返回false
  
  - 语法："属性名" in 对象
  	如：console.log("name" in obj);       -->  true
  ```




- 循环属性

  ```
  for(var n in obj){
  	console.log("属性名:"+n);
  	console.log("属性值:"+obj[n]);    #此处不能使用obj.n这种写法，如果这样写，就是找名称为n的属性
  }
  ```

  





## Object.keys

```
a = {k1:'v1',k2:"v2"}
Object.keys(a)						#结果：['k1', 'k2']
```



## Object.values

```
a = {k1:'v1',k2:"v2"}
Object.values(a)					#结果：['v1', 'v2']
```



