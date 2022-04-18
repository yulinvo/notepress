---
#首页
home: true
# 图标
heroImage: /images/vue3_logo.png
heroText: Yulinvo笔记
tagline: 笔记/记录/便签 ...
actionText: 大军开拔 GO →
# actionLink: "/web前端/Vue3+TS 快速上手/"
actionLink: "/02 web前端/10 Vue3+TS 快速上手/00_课程介绍.html"
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue驱动
    details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

## 像数 1, 2, 3 一样容易
```
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

::: warning 注意

请确保你的 Node.js 版本 >= 8.6。
:::
