

## 创建数组

- 方式一

  ```
  var arr = new Array();
  var arr2 = new Array(10,20,30);
  arr2 = new Array(10);       #这种表示的是创建长度为10的数组，此时表示的就不是数组的元素是10了
  ```

  

- 方式二

  ```
  var arr = [];
  var arr = [1,2,3,4,5,10];
  ```

  

### 读取/添加元素

```
arr[0] = 10;
arr[1] = 33;
arr[arr.length] = 123;                #向数组的末尾位置添加元素

arr.hello = "abc";    #这样也能写，但是没有意义了，相当于是添加了一个hello的属性（数组也是一个对象，对象能做的事情他都能做）
```



### length

```
arr.length                #对于连续的数组，使用length可以获取到数组的长度（元素的个数），
	#arr[10] = 100;  但是对于非连续的数组，使用length会获取到数组的最大的索引+1；

修改length:
	如果修改的length大于原长度，则多出部分会空出来
	如果修改的length小于原长度，则多出的元素会被删除，arr.length = 10;		
```







## 能影响原数组方法

```
能影响原数组的方法：push/pop/shift/unshift/splice/sort/reverse
```



## 循环列表

```
aa=[11,22,33,44,55]

for (var i = 0;i < aa.length;i++ ){console.log(aa[i])}    #需要先定义i=0，循环完成后i的值为6
```



## for...in

```
for (var i in aa){console.log(i)}        #输出的结果为列表的索引值，输出结果为'4'
```



## for...of

```
for (var i of aa){console.log(i)}        #输出结果为列表中的值，循环完成后i的值为55
```



## 判断列表是否包含某值

- includes方法

  ```
  if (aa.includes(22)) { console.log('true') }    #不仅适用于判断list是否包含特定元素，也适用于判断字符串中是否包含特定字符
  ```

- indexOf方法

  ```
  if(aa.indexOf(22) !== -1) {console.log('true')}    #不仅适用于判断list是否包含特定元素，也适用于判断字符串中是否包含特定字符
  ```

- 判读是否包含空时：数组和字符串的区别

  ```
  [11,22,33,44,55].indexOf('')                #数组判断的时候为false，不包含
  'abc'.includes('')            #字符串判断的时候为true，包含
  ```



## push

```
#向数组的末尾添加一个或多个元素，并返回数组的新的长度

arr.push("唐僧","蜘蛛精","白骨精","玉兔精");
```



## pop

```
#该方法可以删除数组的最后一个元素,并将被删除的元素作为返回值返回

arr.pop();
```



## unshift

```
#向数组开头添加一个或多个元素，并返回新的数组长度

arr.unshift("唐僧");
```



## shift

```
#可以删除数组的第一个元素，并将被删除的元素作为返回值返回

arr.shift();
```





## filter

> filter过滤不影响原数组，而是返回一个新的数组！！！！！！！

```
alreadyFinishCount() {
    return this.todolist.filter((item) => item.status == true).length;
}

#此处可以改为：this.todolist.filter((item) => item.status).length;
```



## forEach

```
arr.forEach((正在遍历的元素,正在遍历元素的索引,正在遍历的数组)=>{...})

arr.forEach(function(value, index, totalObj){		#forEach
	console.log(value);
});
```



## slice

```
#可以用来从数组提取指定元素; 该方法不会改变原数组，而是将截取到的元素封装到一个新数组中返回

arr.slice(1,4);             #包含开始索引元素，不包含结束位置的索引元素
arr.slice(3);               #从3开始的所有元素
arr.slice(1,-2);            #-1 倒数第一个，-2 倒数第二个
```



## splice

```
#使用splice()会影响到原数组，会将指定元素从原数组中删除，并将被删除的元素作为返回值返回

arr.splice(3,0,"牛魔王","铁扇公主","红孩儿");
```



##  some



## every



## map



## concat

```
#可以连接两个或多个数组，并将新的数组返回；	该方法不会对原数组产生影响

arr.concat(arr2,arr3,"牛魔王","铁扇公主");


#注意：[1,2,3] + [4,5]  结果为：'1,2,34,5'
[...[1,2,3],...[4,5]]		#还可以用这种ES6中的方法
```



## join

```
#该方法可以将数组转换为一个字符串
#在join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符;如果不指定连接符，则默认使用,作为连接符

arr.join("@-@")
```



## reverse

```
#该方法会直接修改原数组

arr.reverse();
```





## sort

> 会影响原数组

```
升序：aa.sort((a,b)=>a-b)
降序：aa.sort((a,b)=>b-a)
```



## reduce

```
const todos = {
	{ todo: "奔驰", flag: true },
	{ todo: "奥迪", flag: false },
    { todo: "宝马", flag: true }
}
todos.reduce((pre, todo,index) => pre + (todo.flag ? 1 : 0), 0)
```



## 类数组 => list数组

- 方式一：Array.from()方法

  ```
  let allSpan = document.getElementsByClassName('menuSpan')    #此时allSpan是类list列表
  	#此时 allSpan.forEach(item=>{}) 此时会报错 allSpan.forEach is not a function
  
  Array.from(allSpan).forEach(element => {...});	#Array.from(allSpan)转换下就可以了
  ```

  

- 方式二： ...[xx]方法









