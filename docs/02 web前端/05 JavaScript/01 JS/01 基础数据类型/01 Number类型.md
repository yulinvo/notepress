

## 强制类型转换

- 方式一：使用Number()函数

  ```
  - 字符串 --> 数字
  	1.如果是纯数字的字符串，则直接将其转换为数字
      2.如果字符串中有非数字的内容，则转换为NaN                             #！！！！！
      3.如果字符串是一个空串或者是一个全是空格的字符串，则转换为0               #！！！！
  
  
  - 布尔 --> 数字
  	true 转成 1
      false 转成 0
  
  
  - null --> 数字     0
  
  
  - undefined --> 数字 NaN
  ```

  

- 方式二：这种方式专门用来对付字符串

  ```
  - parseInt() 把一个字符串转换为一个整数    #如parseInt("123px;")
  	parseInt()从左到右，遇到非整数后面的就不看了，如'123.456'和'123px456'都只能取出123
  
  
  - parseFloat() 把一个字符串转换为一个浮点数    
  	#如parseFloat('123.456px;')     取出123.456
  	#parseFloat('123.456.789px;')   取出123.456
  
  
  如果对非String使用parseInt()或parseFloat()，它会先将其转换为String然后在操作
  	#如parseInt(null)    --> parseInt('null')        -->NaN
  	#如parseInt(true)    --> parseInt('true')        -->NaN
  ```

  

## MAX_VALUE

```
Number.MAX_VALUE							#JS数字可以表示的最大数

Number.MAX_VALUE*2							
	# 用Number表示的数字超过了最大值(并不会报错)，则会返回一个Infinity 表示正无穷
	# -Infinity 表示负无穷
	# 使用typeof检查Infinity也会返回number, 可以直接定义a=Infinity,typeof a是数字！！！
```



## MIN_VALUE

```
Number.MIN_VALUE							#JS数字可以表示的最小正数（同样最大的负数-Number.MIN_VALUE）

# Number.Min_VALUE返回的并不是一个负数，而是一个能表示的最小的大于0的浮点数
```



## NaN

```
# NaN 是一个特殊的数字，表示Not A Number 

# 两个字符串相乘 "abc" * "bcd" 	结果为NaN，使用typeof ${结果}检查一个NaN也会返回number

# a=NaN, typeof a是数字！！！
```



- isNaN判断是否是数字

  ```
  var score = prompt("请输入小明的期末成绩:");
  isNaN(score)            #判断用户输入的是否是数字
  
  #注意：prompt接收的都是一个string类型，转换：var score = +prompt("请输入数字:");
  ```

  



## 不同进制

```
##但是输出的时候都会以十进制输出，如console.log(a)

#var a=0x10;	以0x开头表示16进制的数字              		
#var a=010;		以0开头表示八进制的数字                       
#var a=0b10;	以0b开头表示二进制的数字，但是不是所有的浏览器都支持（火狐、chrome中支持）


parseInt指定进制：
    a = "070"  &&  parseInt(a)   
        #"070"这种字符串，大部分浏览器都会当成10进制解析，但是有些浏览器会当成8进制解析（IE老的版本）
    a = parseInt(a,10);    #可以在parseInt()中传递一个第二个参数，来指定数字的进制
```





















