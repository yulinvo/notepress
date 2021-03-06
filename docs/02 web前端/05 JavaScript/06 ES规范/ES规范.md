## Let、Const

**let 关键字用来声明变量，使用 let 声明的变量有几个特点：**

```
1) 不允许重复声明    #console界面会报错，var不会
2) 块儿级作用域
	#使用var就能正确读取，let会报错(var的作用域要在复习下了！)      #03:00
	#使用var定义的是往window中添加的属性，？？？
3) 不存在变量提升（即不会声明提前）
4) 不影响作用域链
	{ 
		let school = '尚硅谷';
		function fn() { 
			console.log(school);
		}
		fn();
	}
应用场景：以后声明变量使用 let 就对了
```



**const声明常量以及特点：**

```
const SCHOOL = '尚硅谷';

const 关键字用来声明常量，const 声明有以下特点
    1) 声明必须赋初始值
    2) 标识符一般为大写（小写也可以）
    3) 不允许重复声明
    4) 值不允许修改       注意: 对象属性修改和数组元素变化不会触发 const 错误(因为栈内存中指向的引用地址没有发生变化)
    5) 块儿级作用域
    应用场景：声明对象类型使用 const ，非对象类型声明选择 let
```



## 变量的解构赋值

```
-------------------Array数组------------------------
const F4 = ['小沈阳','刘能','赵四','宋小宝'];
let [xiao, liu, zhao, song] = F4;     #要加[]，不能直接等：xiao, liu, zhao, song = F4


--------------------obj对象-------------------------
const zhao = {
    name: '赵本山',
    age: '不详',
    xiaopin: function(){
        console.log("我可以演小品");
    }};
let {name, age, xiaopin} = zhao;    #同理要加{}，不能直接等
#注意: 
    - 顺序无所谓： let {xiaopin, age,name} = zhao 解构出来的结果是一样的 ！！！
    - let {a,b,c} = zhao是结构不出来的，必须和key值相等才能解构出来 ！！！！
对象还可以单独结构赋值：
    let {xiaopin} = zhao;    #变量xiaopin就单独结构成了函数xiaopin，可以单独调用xiaopin();
```



## 模板字符串

ES6 引入新的声明字符串的方式 『``』			#反引号

```
- 内容中可以直接出现换行符
let str = `<ul>
            <li>沈腾</li>
            <li>玛丽</li>
            <li>魏翔</li>
            <li>艾伦</li>
            </ul>`;
			
	之前的方法：
	let str = '<ul>'
			+ '<li>沈腾</li>'
			+ '<li>玛丽</li>'
			+ '<li>魏翔</li>'
			+ '<li>艾伦</li>'
			+ '</ul>';

- 变量拼接
let lovest = '魏翔';
let out = `${lovest}是我心目中最搞笑的演员!!`;
console.log(out);
```



## 对象的简化写法

```
//ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。
//这样的书写更加简洁
let name = '尚硅谷';
let change = function(){
    console.log('我们可以改变你!!');
}

const school = {
    name,                #完整写法：        name:name
    change,                #同上
    improve(){            #完整写法：        improve: function(){...}
        console.log("我们可以提高你的技能");
    }
}
```



## 箭头函数



## 函数参数的默认值

```
function add(a,b,c=10) {xxx}
    #默认值通常写在最后面(只是一个潜规则，非必须)
    function add(a,c=10,b){}，此时调用add(1,2)的时候，结果就是NaN了，因为a为1，c=2（替换掉了10），此时b没有值为NaN，相加结果就是NaN


function connect({host="127.0.0.1", username,password, port}){             #此时传递的参数只有一个，就是{xx} ！！！！！   这个读代码的时候很容易造成迷糊，要特别注意传递的参数是一个什么类型的！！！！
    console.log(host)
    console.log(username)
    console.log(password)
    console.log(port)
}
connect({
    host: 'atguigu.com',
    username: 'root',
    password: 'root',
    port: 3306
})
```



## rest参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments（arguments是ES5的写法）

```
function date(...args){
    console.log(args);// filter some every map            #args返回的是一个数组，arguments返回的是一个object对象
}

// rest 参数必须要放到参数最后
    function fn(a,b,...args){ xx }
    fn(1,2,3,4,5,6);
```



## 扩展运算符

```
spread扩展运算符

const pers=['刘德华','孙悟空','猪八戒','沙和尚']
function printperson(){ console.log(arguments) }
printperson(...pers)
---------------------------------------------

function  abc(xx){...}
abc(...[a,b,c])             #相当于python参数的解包，*args，好像没有**kwargs的功能
```



## Symbol



## 迭代器

```
1， ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费  (默认有for...in的方式可以遍历)


const banji = {
        name: "终极一班",
        stus: [
            'xiaoming',
            'xiaoning',
            'xiaotian',
            'knight'
        ],
        [Symbol.iterator]() {
            //索引变量
            let index = 0;
            //
            let _this = this;
            return {
                next: function () {
                    if (index < _this.stus.length) {
                        const result = { value: _this.stus[index], done: false };
                        //下标自增
                        index++;
                        //返回结果
                        return result;
                    }else{
                        return {value: undefined, done: true};
                    }
                }
            };
        }
    }
    //遍历这个对象 
    for (let v of banji) {                  #默认情况下是没有for...of方法的
        console.log(v);
    }
```



## 生成器

### 示例一

```
function * gen(arg){
    console.log(arg);
    let one = yield 111;
    console.log(one);
    let two = yield 222;
    console.log(two);
    let three = yield 333;
    console.log(three);
}


//执行获取迭代器对象
let iterator = gen('AAA');
console.log(iterator.next());        #注意第一次调用的时候并没有传递参数，是在初始化迭代器的时候(上一步时)传递的参数！！！！
//next方法可以传入实参
console.log(iterator.next('BBB'));    #这个'BBB'是传递的参数，和函数yield 111返回的结果没有关系！！！！！！！
console.log(iterator.next('CCC'));
console.log(iterator.next('DDD'));
```



### 示例二

```
示例：1s 后控制台输出 111  2s后输出 222  3s后输出 333
----------------方式一-------------------------
function* gen() {
    setTimeout(() => {
        console.log('111');
        iterator.next()
    }, 1000);
    yield;
    setTimeout(() => {
        console.log('222');
        iterator.next()
    }, 2000);
    yield;
    setTimeout(() => {
        console.log('333');       
    }, 3000);
}
const iterator = gen();
iterator.next()


----------------方式二-------------------------
function f1() { 
    setTimeout(() => {
        console.log('111');
        iterator.next()
    }, 1000);
}
function f2() { 
    setTimeout(() => {
        console.log('222');
        iterator.next()
    }, 2000);
}
function f3() {
    setTimeout(() => {
        console.log('333');
        iterator.next()
    }, 3000);
}
function* gen() {
    f1();
    yield;
    f2()
    yield;
    f3()
}
/*
function* gen() {     //视频中使用的时这种调用方式
    yield f1()
    yield f2()
    yield f3()
}
*/
let iterator = gen()
iterator.next()
```



### 示例三

```
//模拟获取  用户数据  订单数据  商品数据 
function getUsers(){
    setTimeout(()=>{
        let data = '用户数据';
        //调用 next 方法, 并且将数据传入
        iterator.next(data);
    }, 1000);
}
function getOrders(){
    setTimeout(()=>{
        let data = '订单数据';
        iterator.next(data);
    }, 1000)
}
function getGoods(){
    setTimeout(()=>{
        let data = '商品数据';
        iterator.next(data);
    }, 1000)
}
function * gen(){
    let users = yield getUsers();
    let orders = yield getOrders();
    let goods = yield getGoods();
}
//调用生成器函数
let iterator = gen();
iterator.next();
```





## Promise



## set集合

ES6 它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用『...扩展运算符』和『for…of…』进行遍历，

**集合的属性和方法：**

- size 返回集合的元素个数
-  add 增加一个新元素，返回当前集合
-  delete 删除元素，返回 boolean 值
- has 检测集合中是否包含某个元素，返回 boolean 值
- clear 清空集合，返回 undefined

```
let s = new Set();
let s2 = new Set(['大事儿','小事儿','好事儿','坏事儿','小事儿']);
//元素个数
// console.log(s2.size);
//添加新的元素
// s2.add('喜事儿');
//删除元素
// s2.delete('坏事儿');
//检测
// console.log(s2.has('糟心事'));
//清空
// s2.clear();
// console.log(s2);
for(let v of s2){
    console.log(v);
}
```



### 示例一

```
数组去重
    let arr = [1,2,3,4,5,4,3,2,1];
    let result = [...new Set(arr)];
    
交集
    let arr2 = [4,5,6,5,6];
    let result = [...new Set(arr)].filter(item => new Set(arr2).has(item));

并集
    let union = [...new Set([...arr, ...arr2])];

差集
    let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)));
```



## MAP

```
map就是一个升级版的对象，对象只能以字符串作为键，而map可以将对象作为键  #04:30
     #下面例子中的 m.set(key, ['北京','上海','深圳'])
     
     
ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”
的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map 也实现了
iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历。Map 的属
性和方法：
    1) size 返回 Map 的元素个数
    2) set 增加一个新元素，返回当前 Map
    3) get 返回键名对象的键值
    4) has 检测 Map 中是否包含某个元素，返回 boolean 值
    5) clear 清空集合，返回 undefined
    
    
//声明 Map
let m = new Map();


//添加元素
m.set('name','尚硅谷');
m.set('change', function(){
    console.log("我们可以改变你!!");
});
let key = {
    school : 'ATGUIGU'                         #key是一个对象{},key可以是任意字符，如abc
};
m.set(key, ['北京','上海','深圳']);            #这种python中能做到么？好像是没有


//size
console.log(m.size);


//删除
m.delete('name');


//获取
console.log(m.get('change'));
console.log(m.get(key));


//清空
m.clear();


//遍历
for(let v of m){
    console.log(v);
}
```





## class



## ES6的数值扩展



## 模块化



## babel









