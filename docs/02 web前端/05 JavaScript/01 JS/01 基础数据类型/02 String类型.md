## 特殊字符

```
\进行转义
	在字符串中我们可以使用\作为转义字符，str = "我说:\"今天\t天气真不错！\"";
\n 表示换行
\t 制表符
\\ 表示\    #只想输出一个'\'，同样的如果向输出3个斜杠，就需要str = "\\\\\\";
```



## 强制类型转换

> #将其他的数据类型转换为String



- 方式一：调用被转换数据类型的toString()方法

  ```
  var a = 123 ;       	a.toString()    #字符串转换，方法不会影响到原变量，它会将转换的结果返回
  var a = true ;       	a.toString()
  var a = null ;       	a.toString()    #报错a没有toString属性（property）！！！！
  var a = undefined ;     a.toString()    #报错同上
  ```

  

- 方式二：调用String()函数，并将被转换的数据作为参数传递给函数

  ```
  var a = 123 ;       string(a)
  var a = null ;      string(a)    			#没有报错，a变成了"null"
  var a = undefined ;       string(a)    		#没有报错，a变成了"undefined"
  
  #使用String()函数做强制类型转换时，对于Number和Boolean实际上就是调用的toString()方法，但是对于null和undefined，就不会调用toString()方法
  	它会将 null 直接转换为 "null"
  	将 undefined 直接转换为 "undefined"
  ```

  



## length属性

```
#可以用来获取字符串的长度

'aaa'.length
```



## charAt

```
#可以返回字符串中指定位置的字符

str.charAt(6);
```



## charCodeAt

```
#获取指定位置字符的字符编码（Unicode编码）

'abcdefg'.charCodeAt(0)			#97
'Abcdefg'.charCodeAt(0)			#65
```



## String.fromCharCode

```
#可以根据字符编码去获取字符            #这个是通过构造函数调用的

String.fromCharCode(65);				#'A'
String.fromCharCode(20013);				#这个是十进制;    '中'
String.fromCharCode(0x2692);			#这个是十六进制;	'⚒'
```



## concat

```
#可以用来连接两个或多个字符串，作用和+一样

'abc'.concat("你好","再见");			#'abc你好再见'
```



## indexof

```
#该方法可以检索一个字符串中是否含有指定内容
- 如果字符串中含有该内容，则会返回其第一次出现的索引,如果没有找到指定的内容，则返回-1
- 可以指定一个第二个参数，指定开始查找的位置

str.indexOf("h");
str.indexOf("h",1);
```



## lastIndexOf

```
#该方法的用法和indexOf()一样，不同的是indexOf是从前往后找，而lastIndexOf是从后往前找,也可以指定开始查找的位置



```



## slice

```
#切片,可以从字符串中截取指定的内容,不会影响原字符串，而是将截取到内容返回
- 参数：第一个是开始位置的索引（包括开始位置） 第二个是结束位置的索引（不包括结束位置,如果省略第二个参数，则会截取到后边所有的）
	#也可以传递一个负数作为参数，负数的话将会从后边计算

str.slice(1);                       #1往后的全部内容
str.slice(1,4);
str.slice(1,-1);
```



## substring

```
#可以用来截取一个字符串，可以slice()类似
- 参数: 第一个是开始截取位置的索引（包括开始位置） 第二个是结束位置的索引（不包括结束位置）
	#不同的是这个方法不能接受负值作为参数，如果传递了一个负值，则默认使用0
	#而且他还自动调整参数的位置，如果第二个参数小于第一个，则自动交换
	
str.substring(0,1);
```



## substr

```
#用来截取字符串, 参数: 第一个是截取开始位置的索引, 第二个是截取的长度

str.substr(3,2);
```



## split

```
#可以将一个字符串拆分为一个数组
- 参数: 需要一个字符串作为参数，将会根据该字符串去拆分数组; 如果传递一个空串作为参数，则会将每个字符都拆分为数组中的一个元素

str.split("d");
Array.isArray(str.split("d"))		#检查结果是否是数组，和xx instanceof Array应该结果是一样的
```



## toUpperCase

```
#将一个字符串转换为大写并返回

'abc'.toUpperCase()						#'ABC'
```



## toLowerCase

```
#将一个字符串转换为小写并返回

'ABC'.toLowerCase()						#'abc'
```









## 正则相关方法

### split

```
#可以将一个字符串拆分为一个数组;	这个方法即使不指定全局匹配，也会全都拆分

str.split(/[A-z]/);
```



### search

```
#可以搜索字符串中是否含有指定内容;	如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1
#serach()只会查找第一个，即使设置全局匹配也没用 ！！！

str.search(/a[bef]c/);
```



### match

```
#从一个字符串中将符合条件的内容提取出来    #match侧重检索出匹配的结果，search侧重是否存在（即索引）

- 默认情况match只会找到第一个符合要求的内容，找到后就停止检索,可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容 ！！！
	可以为一个正则表达式设置多个匹配模式，且顺序无所谓 (/ig之类)
- match()会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果

str.match(/[A-z]/ig);
```



### replace

```
#可以将字符串中指定内容替换为新的内容（不会影响原字符串！！！）

#'1a2a'.replace('a','@_@')            #默认只替换第一个a
#str.replace(/[a-z]/gi , "");        #加上/g就可以全局替换
```

