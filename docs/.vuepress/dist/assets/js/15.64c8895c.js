(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{413:function(a,t,e){"use strict";e.r(t);var s=e(56),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"算数运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算数运算符"}},[a._v("#")]),a._v(" 算数运算符")]),a._v(" "),e("p",[a._v("运算符都是会返回结果的，意味着可以用变量来接收运算结果（包括typeof函数）")]),a._v(" "),e("h3",{attrs:{id:"加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加"}},[a._v("#")]),a._v(" 加（+）")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("当对非Number类型的值进行运算时，会将这些值转换为Number然后在运算(除了字符串的加法之外)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("true + 1 --\x3e    2\ntrue + false --\x3e    1\n2 + null  --\x3e   2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("任何值和NaN做运算都得NaN")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("2 + NaN     --\x3e     NaN\n")])])])]),a._v(" "),e("li",[e("p",[a._v("如果对两个字符串进行加法运算，则会做拼串，会将两个字符串拼接为一个字符串，并返回")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("‘123’ + ‘456’  --\x3e    '123456'\n")])])])]),a._v(" "),e("li",[e("p",[a._v("任何的值和字符串做加法运算，都会先转换为字符串，然后再和字符串做拼串的操作")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('如 123 + ‘1’     --\x3e   1231\ntrue + \'hello\'      --\x3e     truehello\n\n我们只需要为任意的数据类型 + 一个 "" 即可将其转换为String：        #这种方式比string()的方式还多一些\n\t123 + ""        #效果同string(123)\n\tnull + ""   --\x3e     \'null\'\n')])])])]),a._v(" "),e("li",[e("p",[a._v("练习")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1 + 2 + '3'     --\x3e     '33'      #从左往右运算，在chrome的console中可以看到，刚写到1+2+就先出来了结果3\n\n'1' + 2 + 3     --\x3e     '123'\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"减"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#减"}},[a._v("#")]),a._v(" 减（-）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("#当对非Number类型的值进行减法运算时，会将这些值转换为Number然后在运算(包括字符串)\n\n100 - true          --\x3e     99\n100 - '1'           --\x3e     99\n")])])]),e("h3",{attrs:{id:"乘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#乘"}},[a._v("#")]),a._v(" 乘（*）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("2 * '8'             --\x3e         16\n2 * undefined       --\x3e         NaN(因为undefined转换为数字是NaN，任何值和NaN运算结果都是NaN)  ！！！！\n2 * null            --\x3e         0\n")])])]),e("h3",{attrs:{id:"除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#除"}},[a._v("#")]),a._v(" 除（/）")]),a._v(" "),e("h3",{attrs:{id:"模运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模运算"}},[a._v("#")]),a._v(" 模运算（%）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("取模运算（取余数）\n")])])]),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("任何值做- * /运算时都会自动转换为Number，我们可以利用这一特点做隐式的类型转换\n\n可以通过为一个值 -0 *1 /1来将其转换为Number，原理和Number()函数一样，使用起来更加简单\n")])])]),e("h2",{attrs:{id:"一元运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一元运算符"}},[a._v("#")]),a._v(" 一元运算符")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("正号（+）【Number类型】")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("正号不会对数字产生任何影响\n\n#如 var a=123;  a = +a;          #a不会变化，默认就是正数的123\n")])])])]),a._v(" "),e("li",[e("p",[a._v("负号（-）【Number类型】")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("负号可以对数字进行负号的取反\n\n#如 var a=123;  a = -a;          #a变成了 -123\n#如 var a=-123;  a = -a;          #a变成了 123\n")])])])]),a._v(" "),e("li",[e("p",[a._v("非Number类型")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("它会将先转换为Number，然后在运算\n\t#var a =true; a=-a              #a变成了-1\n\n可以对一个其他的数据类型使用+,来将其转换为number    （适用于任意数字类型）\n\t#var a = '18'; a=+a             #a由字符串变成了数字18\n\t\n\t#1 + '2' + 3     --\x3e    字符串123\n\t#1 + +'2' + 3    --\x3e     数字6\n\n它的原理和Number()函数一样\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"自增-和自减"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自增-和自减"}},[a._v("#")]),a._v(" 自增（++）和自减（--）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var a=1  &&\ta++;              #并没有执行var a=a++;  此时a已经变成2了\n")])])]),e("h3",{attrs:{id:"自增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自增"}},[a._v("#")]),a._v(" 自增 ++")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(' - 通过自增可以使变量在自身的基础上增加1\n - 对于一个变量自增以后，原变量的值会立即自增1           #！！！！！\n \n - 自增分成两种：后++(a++) 和 前++(++a)    \n\t无论是a++ 还是 ++a，都会立即使原变量的值自增1\n\t\t不同的是a++ 和 ++a的值不同\n\ta++的值等于原变量的值（自增前的值）    #a的值都是已经加过的值，只是在print a++或是print ++a时有区别 ！！！！！！\n\t++a的值等于新值 （自增后的值）\n\t\n\t\n\t#var a =1\n\ta++ / ++a ;\n\tconsole.log("a++ =" + a++ /"++a =" + ++a);      #如果是a++此时是1，如果是++a此处是2         #P17 07:00\n\tconsole.log(a)                                  #不管是a++ / ++a，此处a都是2                #P17 07:00\n\n\n练习：\n\tvar d=20;\n\tvar result = d++ + ++d + d;         #20 + 22 +22        #P17 14:00\n\tvar d=20;\n\td = d++;                #执行后d=20                      #P17 16:00\n\tvar d=20;\n\td +=1;                  #执行后d=21\n')])])]),e("h3",{attrs:{id:"自减"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自减"}},[a._v("#")]),a._v(" 自减 --")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("- 通过自减可以使变量在自身的基础上减1\n- 自减分成两种：后--(a--) 和 前--(--a)\n\t无论是a-- 还是 --a 都会立即使原变量的值自减1\n\t\t不同的是a-- 和 --a的值不同\n\t\t\ta-- 是变量的原值 （自减前的值）\n\t\t\t--a 是变量的新值 （自减以后的值）\n")])])]),e("h3",{attrs:{id:"练习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[a._v("#")]),a._v(" 练习")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var n1=10, n2=20;\nvar n = n1++;\nconsole.log('n=' + n);                  //10\nconsole.log('n1=' + n1);                 //11\nn = ++n1\nconsole.log('n=' + n);                  //12\nconsole.log('n1=' + n1);                 //12\nn = n2--\nconsole.log('n=' + n);                  //20\nconsole.log('n2=' + n2);                 //19\nn = --n2\nconsole.log('n=' + n);                  //18\nconsole.log('n2=' + n2);                 //18\n")])])]),e("h2",{attrs:{id:"逻辑运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[a._v("#")]),a._v(" 逻辑运算符")]),a._v(" "),e("h3",{attrs:{id:"非"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非"}},[a._v("#")]),a._v(" 非（! ）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var a=true; console.log('a=' + !a)\n!!a                 #两次取反(非布尔值转换为布尔值)\n\n如果对非布尔值进行运算，则会将其转换为布尔值，然后再取反，所以我们可以利用该特点，来将一个其他的数据类型转换为布尔值\n\t可以为一个任意数据类型取两次反，来将其转换为布尔值，原理和Boolean()函数一样          #隐式进行布尔值转换\n\t\n\t# var a = 'hello'\n\t# a = !!a;              //a=true\n")])])]),e("h3",{attrs:{id:"与"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与"}},[a._v("#")]),a._v(" 与 (&&)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("JS中的“与”属于短路的与，如果第一个值为false，则不会看第二个值\n")])])]),e("ul",[e("li",[e("p",[a._v("非布尔值的与运算")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("对于非布尔值进行与或运算时，会先将其转换为布尔值，然后再运算，并且返回原值             #返回值不是true或false\n\n- 如果第一个值为true，则必然返回第二个值               #规则好像是计算到哪一步，就返回哪个值！！！！\n- 如果第一个值为false，则直接返回第一个值              #规则好像是计算到哪一步，就返回哪个值！！！！\n\nvar result =  5 && 6            #如果两个值都为true，则返回后边的\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"或"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#或"}},[a._v("#")]),a._v(" 或 (||)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("- 两个值中只要有一个true，就返回true；如果两个值都为false，才返回false\n\t\n- JS中的“或”属于短路的或；如果第一个值为true，则不会检查第二个值\n")])])]),e("ul",[e("li",[e("p",[a._v("非布尔值的或运算")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("- 如果第一个值为true，则直接返回第一个值\n- 如果第一个值为false，则返回第二个值\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"赋值运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#赋值运算符"}},[a._v("#")]),a._v(" 赋值运算符")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("+= :        \ta += 5 等价于 a = a + 5\n-=:        \t\ta -= 5 等价于 a = a - 5\n*=:        \t\ta *= 5 等价于 a = a * 5\n/=:        \t\ta /= 5 等价于 a = a / 5\n%=:        \t\ta %= 5 等价于 a = a % 5\n")])])]),e("h2",{attrs:{id:"关系运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关系运算符"}},[a._v("#")]),a._v(" 关系运算符")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('> 大于号    #如果关系成立它会返回true，如果关系不成立则返回false\n>= 大于等于\n< 小于号\n<= 小于等于\n\n非数值的情况\n    - 对于非数值进行比较时，会将其转换为数字然后在比较  (两侧至少有一个是数值，不能都是字符串)\n        console.log(1 > true);          //false        #true转换为1，false转换为0\n        console.log(1 > "0");           //true\n        console.log(10 > null);         //true          #null转换为数字为0\n        console.log(true > false);      //true          1>0\n        \n        #任何值和NaN做任何比较都是false\n        console.log(10 <= "hello");     //false  #字符串中有非数字的内容，则转换为NaN\n        console.log(10 <= "undefined");     //false     ##undefined --\x3e 数字为NaN\n        \n    - 如果符号两侧的值都是字符串时，不会将其转换为数字进行比较\n        而会分别比较字符串中字符的Unicode编码\n        console.log("1" < "5"); //true\n        console.log("11" < "5"); //true                 #参考下面的规则，先比较第一位1<5,后面的就不比较了\n        \n        console.log("a" < "b");//true\n        \n        比较字符编码时是一位一位进行比较\n        如果两位一样，则比较下一位，所以借用它来对英文进行排序！！！！！！\n        console.log("abc" < "b");//true                      #先比较第一位，第一位成立后面的就不比较了\n        console.log("bbc" < "b");//false                     #\n        console.log("abc" < "bcd");//true\n        \n        比较中文时没有意义\n        console.log("戒" > "我"); //true\n    \n    经验：如果两个都是字符串，可以将一侧的字符串转换为数字之后在进行比较！！！！！\n        //如果比较的两个字符串型的数字，可能会得到不可预期的结果\n        //注意：在比较两个字符串型的数字时，一定一定一定要转型\n        console.log("11123123123123123123" < +"5"); //true\n')])])]),e("h2",{attrs:{id:"相等运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相等运算符"}},[a._v("#")]),a._v(" 相等运算符")]),a._v(" "),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")]),a._v(" ==")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('- 当使用==来比较两个值时，如果值的类型不同，则会自动进行类型转换，将其转换为相同的类型然后在比较\n    #转换成什么类型不确定，大部分情况下会转换成数字\n    console.log("1" == 1);  //true\n    console.log(true == "1"); //true    #将字符串和布尔值都转换成了num，再进行比较的\n    console.log(null == 0); //false     #但是这个就没有都转换成num进行比较，转换的规则比较奇怪！！！！\n    \n\tundefined 衍生自 null，所以这两个值做相等判断时，会返回true\n        console.log(undefined == null);\n    \n\tNaN不和任何值相等，包括他本身\n        console.log(NaN == NaN); //false\n        isNaN(b) 来判断字符串b是不是NaN类型的（NaN == NaN不能这么比较）\n')])])]),e("h3",{attrs:{id:"-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[a._v("#")]),a._v(" !=")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("#不相等\n")])])]),e("h3",{attrs:{id:"-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[a._v("#")]),a._v(" ===")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("- 用来判断两个值是否全等，它和相等类似，不同的是它不会做自动的类型转换\n\t如果两个值的类型不同，直接返回false\n\n\tconsole.log(null === undefined);        //false\n")])])]),e("h3",{attrs:{id:"-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[a._v("#")]),a._v(" !==")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('- 用来判断两个值是否不全等，和不等类似，不同的是它不会做自动的类型转换\n\t如果两个值的类型不同，直接返回true\n\t\n\tconsole.log(1 !== "1"); //true\n')])])]),e("h2",{attrs:{id:"条件运算符-三元-三目运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#条件运算符-三元-三目运算符"}},[a._v("#")]),a._v(" 条件运算符（三元/三目运算符）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('语法：条件表达式?语句1:语句2;\n    var a = 300;\n    var b = 143;\n    var c = 50;\n    \n    //a > b ? alert("a大"):alert("b大");\n    \n    //获取a和b中的最大值\n    var max = a > b ? a : b;\n    \n    //这种写法不推荐使用，不方便阅读               #取出a、b、c的最大值\n    var max = a > b ? (a > c ? a :c) : (b > c ? b : c);\n\n如果条件的表达式的求值结果是一个非布尔值，\n    会将其转换为布尔值然后在运算\n    #   "hello"?alert("语句1"):alert("语句2");\n')])])]),e("h2",{attrs:{id:"运算符的优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运算符的优先级"}},[a._v("#")]),a._v(" 运算符的优先级")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("使用,可以分割多个语句，一般可以在声明多个变量时使用,\n    var a , b , c;\n    var a=1 , b=2 , c=3;\n    \n就和数学中一样，在JS中运算符也有优先级，比如：先乘除 后加减\n\n在JS中有一个运算符优先级的表，    #P26  06:30，在ppt课件中有一个表格\n    在表中越靠上优先级越高，优先级越高越优先计算，\n    如果优先级一样，则从左往右计算。\n但是这个表我们并不需要记忆，如果遇到优先级不清楚, 可以使用()来改变优先级！！！！！\n\nvar result = 1 || 2 && 3;           #与的优先级高于或的优先级，结果为1\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);