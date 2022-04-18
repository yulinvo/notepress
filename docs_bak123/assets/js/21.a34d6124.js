(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{423:function(a,t,n){"use strict";n.r(t);var e=n(56),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"创建函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建函数"}},[a._v("#")]),a._v(" 创建函数")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("方式一：使用 函数声明 来创建一个函数")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('语法：\n\tfunction 函数名([形参1,形参2...形参N]){\n\t\t语句...\n\t}\n\t\n\t\nfunction fun2(){    \t\t\t\t\t#这种是最常用的\n\tconsole.log("这是我的第二个函数~~~");\n\tdocument.write("~~~~(>_<)~~~~");\n}\n')])])])]),a._v(" "),n("li",[n("p",[a._v("方式二：使用 函数表达式 来创建一个函数")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('语法：\n\tvar 函数名  = function([形参1,形参2...形参N]){\n\t \t语句....\n\t}\n\n\nvar fun3 = function(){    \t\t\t\t#将创建的匿名函数，赋值给变量fun3\n\tconsole.log("我是匿名函数中封装的代码");\n};\nfun3();               \t\t\t\t\t#调用函数\n')])])])])]),a._v(" "),n("h2",{attrs:{id:"参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('function sum(a,b){\n\tconsole.log(a+b)\n}\n\n调用函数时，解析器也不会检查实参的数量,多余实参不会被赋值               #多的情况\n\tsum(123,456,"hello",true,null);     --\x3e579         #后面的"hello",true,null会被忽略\n\n如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined         #少的情况\n    sum(123);                           --\x3e NaN        #少的实参会被赋予undefined\n')])])]),n("h2",{attrs:{id:"return返回值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#return返回值"}},[a._v("#")]),a._v(" return返回值")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('return;         #相当于return undefined;\n如果函数中不写return，则也会返回undefined\n\nvar result = alert("hello");        #此时result为undefined，证明alert是没有返回值的\n')])])]),n("p",[a._v("使用return可以结束整个函数，不管return是不是写在主函数中，还是写在嵌套函数中！！！")]),a._v(" "),n("h2",{attrs:{id:"立即执行函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#立即执行函数"}},[a._v("#")]),a._v(" 立即执行函数")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('语法：\n    (function(){\n        alert("我是一个匿名函数~~~");\n    })();\n\n示例：\n    (function(a,b){\n\t\tconsole.log("a = "+a);\n        console.log("b = "+b);\n    })(123,456);                       #将123，456当作参数传递\n')])])]),n("h2",{attrs:{id:"函数作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域"}},[a._v("#")]),a._v(" 函数作用域")]),a._v(" "),n("h3",{attrs:{id:"全局作用域下声明提前"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局作用域下声明提前"}},[a._v("#")]),a._v(" 全局作用域下声明提前")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("变量的声明提前")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("- 使用var关键字声明的变量，会在所有的代码执行之前被声明（但是不会赋值）；但是如果声明变量时不使用var关键字，则变量不会被声明提前\n")])])])]),a._v(" "),n("li",[n("p",[a._v("函数的声明提前")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("- 使用函数声明形式[function 函数(){}]创建的函数，会在所有的代码执行之前就被创建，所以我们可以在函数声明前来调用函数\n\n- 使用函数表达式创建的函数[var aa = function(){}]，不会被声明提前，所以不能在声明前调用\n")])])])])]),a._v(" "),n("h3",{attrs:{id:"函数作用域下声明提前"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域下声明提前"}},[a._v("#")]),a._v(" 函数作用域下声明提前")]),a._v(" "),n("p",[a._v("在函数作用域中也有声明提前的特性，使用var关键字声明的变量会在函数中所有的代码执行之前被声明，"),n("strong",[a._v("不使用var声明的变量都会成为全局变量")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("示例一：\n    var a=10;\n    function fun3(){\n        console.log(a);                     #此时报undefined\n        var a = 35;\t\t\t\t\t\t\t#如果代码是 a = 35上条语句打印的结果就是10，但是将全局的a修改了\n    }                                       \n\n    console.log(a);             #如果代码是var a = 35; 此处输出10\n        #如果代码是a = 35;此处输出的是35；\n\n\n示例二：\n    function fun5(){\n        d = 100;                                #没有全局变量d的情况下\n        //d没有使用var关键字，则会设置为全局变量，相当于window.d=100\n    }                  \n    console.log(d);                 #此时输出100\n")])])]),n("p",[n("strong",[a._v("定义形参就相当于在函数作用域中声明了变量")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("#fun(e){}就相当于在函数内部定义，var e；\n\n没有传递参数时直接是undefined (就算全局有变量e，全局的变量e和此处的e实际没有任何关系，此时的e只是一个标识可以是abc、test、e都行)\n")])])]),n("p",[n("strong",[a._v("总结：函数内部声明的变量一定要写var")])]),a._v(" "),n("h3",{attrs:{id:"练习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[a._v("#")]),a._v(" 练习")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\n\n")])])]),n("h2",{attrs:{id:"call和apply"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call和apply"}},[a._v("#")]),a._v(" call和apply")]),a._v(" "),n("p",[a._v("func.call()、func.apply()、func() 都会调用函数执行")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('call()方法可以将实参在对象之后依次传递                        #fun.call(obj,2,3);\napply()方法需要将实参封装到一个数组中统一传递                 #fun.apply(obj,[2,3]);\n\n\nfunction fun(a,b) {\n    alert(this);\n}\n\nvar obj = {\n    name: "obj",\n    sayName:function(){\n        alert(this.name);\n    }\n};\n\nvar obj2 = {\n    name: "obj2"\n};\n\nfun.call(obj);\nfun.apply(obj);\n\nobj.sayName.apply(obj2);    \t#！！！！！！！！！！\n')])])]),n("h2",{attrs:{id:"arguments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[a._v("#")]),a._v(" arguments")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("在调用函数时，浏览器每次都会传递进两个隐含的参数：\n    1.函数的上下文对象 this\n    2.封装实参的对象 arguments\n        - arguments是一个类数组对象,它也可以通过索引来操作数据，也可以获取长度\n        - 在调用函数时，我们所传递的实参都会在arguments中保存（不管是否定义了形参）！！！\n        - arguments.length可以用来获取实参的长度\n        - 我们即使不定义形参，也可以通过arguments来使用实参，只不过比较麻烦\n            arguments[0] 表示第一个实参\n            arguments[1] 表示第二个实参 。。。\n    - 它里边有一个属性叫做callee，\n        这个属性对应一个函数对象，就是当前正在指向的函数的对象\n        function fun(a,b){\n            console.log(arguments.callee == fun)\n        }\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);