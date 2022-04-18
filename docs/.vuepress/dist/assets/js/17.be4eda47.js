(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{415:function(a,t,e){"use strict";e.r(t);var s=e(56),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"创建对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建对象"}},[a._v("#")]),a._v(" 创建对象")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("方式一")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('var obj = new Object();\n\n向对象添加属性\n    obj.name = "孙悟空";\n    obj.gender = "男";\n    obj.age = 18;\n\n读取对象的属性：\n    obj.name    如果读取对象中没有的属性，不会报错而是会返回undefined，如读取obj.hello\n\ndelete obj.name;                   #删除对象的属性\n')])])])]),a._v(" "),e("li",[e("p",[a._v("方式二")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('var obj = {};    #和使用var obj = new Object();本质上是一摸一样的\nobj.name = "孙悟空";\n')])])])])]),a._v(" "),e("h2",{attrs:{id:"读取属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读取属性"}},[a._v("#")]),a._v(" 读取属性")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('- 如果要使用特殊的属性名，不能采用.的方式来操作，需要使用另一种方式：\n\t语法：对象["属性名"] = 属性值   ，读取时也需要采用这种方式               #！！！！！！\n\t如：obj.123 = 789;会读取失败，定义时需要obj["123"] = 789;    \n\t\n- 使用[]这种形式去操作属性，更加的灵活，    \n\t在[]中可以直接传递一个变量，这样变量值是多少就会读取那个属性             #！！！\n\t如 var n=\'123\';  obj[n]就能取出123\n')])])]),e("ul",[e("li",[e("p",[a._v("in 运算符")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('- 通过该运算符可以检查一个对象中是否含有指定的属性，如果有则返回true，没有则返回false\n\n- 语法："属性名" in 对象\n\t如：console.log("name" in obj);       --\x3e  true\n')])])])]),a._v(" "),e("li",[e("p",[a._v("循环属性")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('for(var n in obj){\n\tconsole.log("属性名:"+n);\n\tconsole.log("属性值:"+obj[n]);    #此处不能使用obj.n这种写法，如果这样写，就是找名称为n的属性\n}\n')])])])])]),a._v(" "),e("h2",{attrs:{id:"object-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-keys"}},[a._v("#")]),a._v(" Object.keys")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("a = {k1:'v1',k2:\"v2\"}\nObject.keys(a)\t\t\t\t\t\t#结果：['k1', 'k2']\n")])])]),e("h2",{attrs:{id:"object-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-values"}},[a._v("#")]),a._v(" Object.values")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("a = {k1:'v1',k2:\"v2\"}\nObject.values(a)\t\t\t\t\t#结果：['v1', 'v2']\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);