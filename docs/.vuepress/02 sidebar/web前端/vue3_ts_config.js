module.exports = [
    ['00_课程介绍', "课程指南"],
    {
        title: '一.TypeScript快速上手', // 必要的
        // path: '/chapter2/1_type', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 1, // 可选的, 默认值是 1
        initialOpenGroupIndex: -1,
        children: [{
                title: '初识 TypeScript', // 必要的
                // path: '/chapter1/02_安装TS',
                collapsable: true,
                // sidebarDepth: 1,
                children: [
                    ['1 初识TypeScript/01_初识TS', "1. 初识TS"],
                    ['1 初识TypeScript/02_安装TS', "2. 安装 TypeScript"],
                    ['1 初识TypeScript/03_第一个TypeScript程序', "3. 第一个TypeScript程序"],
                    ['1 初识TypeScript/04_webpack打包', "4. 使用webpack打包TS"]
                ],
            },
            {
                title: 'TypeScript 常用语法 ', // 必要的
                // collapsable: true,
                children: [
                    ['2 TypeScript常用语法/1_type', "1. 基础类型"],
                    ['2 TypeScript常用语法/2_interface', "2. 接口"],
                    ['2 TypeScript常用语法/3_class', "3. 类"],
                    ['2 TypeScript常用语法/4_function', "4. 函数"],
                    ['2 TypeScript常用语法/5_generic', "5. 泛型"],
                    ['2 TypeScript常用语法/6_other', "6. 其它"],
                ],
            }
        ]
    },
    {
        title: '二.Vue3快速上手', // 必要的
        collapsable: false,
        children: [
            ['3 Vue3快速上手/01_认识Vue3', "1. 认识Vue3"],
            ['3 Vue3快速上手/02_创建vue3项目', "2. 创建vue3项目"],
        ]
    },
    {
        title: '三.Composition API', // 必要的
        collapsable: false,
        children: [
            ['4 Composition API/01_Composition API_常用部分', "1. Composition API(常用部分)"],
            ['4 Composition API/02_Composition API_其它部分', "2. Composition API(其它部分)"],
            ['4 Composition API/03_手写组合API', "3. 手写组合API"],
            ['4 Composition API/04_Composition VS Option', "4. Composition API VS Option API"],
        ]
    },
    {
        title: '四.其它新组合和API', // 必要的
        collapsable: false,
        children: [
            ['5 其它新组合和API/01_新组件', "1. 新组件"],
            ['5 其它新组合和API/02_其他新API', "2. 其他新的API"],
        ]
    },
    {
        title: '五.Vue3综合案例', // 必要的
        collapsable: false,
        children: [
            ['6 Vue3综合案例/', "TODO LIST"],
        ]
    },
    ["7 使用VuePress搭建在线文档网站/快速搭建在线文档", "使用VuePress搭建在线文档网站"]
]