const nav_运维 = require('./01 nav/01 运维')
const nav_web前端 = require('./01 nav/02 web前端')
const nav_python = require('./01 nav/03 python')
const nav_sql = require('./01 nav/04 sql')
const sidebar_vue3_ts_config = require('./02 sidebar/web前端/vue3_ts_config')

module.exports = {
    themeConfig: {
        base: "/notepress/",
        logo: '/images/logo.png',
        nav: [{
                text: 'Home',
                link: '/'
            },
            nav_运维,
            nav_web前端,
            nav_python,
            nav_sql,
            {
                text: 'External',
                link: 'https://google.com'
            },
        ],
        sidebar: {
            "/02 web前端/10 Vue3+TS 快速上手/": sidebar_vue3_ts_config,
            '/03 python/': [
                '01',
                '02',
                '01',
                '02',
                '01',
                '02',
                '01',
                '02',
                '01',
                '02',
                '01',
                '02',
                '01',
                '02',
                '01',
                '02',
            ]
        }
    }
}