//导航配置
let nav = [
    {text: '首页', link: '/'},
    {text: 'AppCode', link: '/appCode/'},
    {text: 'iOS开发', link: '/iOS/tableView'},
    {text: '简书主页', link: 'https://www.jianshu.com/u/88f9903778d8'},
];
//侧边栏配置

module.exports = {
    base: "/",
    title: 'Jeffrey的个人博客',
    description: '博客在建中,请暂移步至简书主页(点击右上角简书主页),您也可以先随便看看。',
    head: [
        ['link', {rel: 'icon', href: `/logo.png`}]
    ],
    themeConfig: {
        nav: nav,
        sidebar: {
            '/appCode/': [{
                collapsable: false,
                title: "AppCode",
                children: ['', 'simpleUse']
            }],
            '/iOS/': [{
                collapsable: false,
                title: "iOS开发",
                children: ['tableView', 'animation'],
            }]
        }
    },
};
