(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{408:function(e,t,s){"use strict";s.r(t);var o=s(56),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("下载外网资源思路：")]),e._v(" "),s("p",[e._v("​\t场景：源码安装python后，使用pip时提示如下，需要--with-openssl=/usr/bin/openssl，但是yum仓库中的openssl版本太低，需要源码安装openssl，但是安装openssl时需要perl 5，因为perl 5资源在外网，卡住了无法下载")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("WARNING: pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("wget https://www.cpan.org/src/5.0/perl-5.34.1.tar.gz 时卡住很久！！！！！！！！！\n")])])]),s("p",[s("strong",[e._v("一个思路")]),e._v("： 专门创建一个docker用来下载外网资源")]),e._v(" "),s("p",[e._v("可以使用阿里云镜像容器提供的外网功能，专门创建一个docker下载外网资源（使用docker-compose），用git管理docker-compose功能")])])}),[],!1,null,null,null);t.default=a.exports}}]);