// 修改信息 // BEGIN
const owner = 'mumumi'
const repo = 'blog';
const repoLink = `//github.com/${owner}/${repo}`
const clientId = 'clientId';
const clientSecret = 'clientSecret';
const websiteTitle = 'Ready';
const websiteDesc = 'Test';
const websiteIcon = '//avatars2.githubusercontent.com/u/4942212?v=4'
// 个人信息（没有或不想设置的，删掉对应字段即可）
const personalInfo = {
    // 昵称
    nickname: 'mumumi',

    // 个人简介
    description: 'Ready',

    // 电子邮箱
    email: 'hjjixx@foxmail.com',

    // 所在地
    location: 'China',

    // 组织
    organization: 'CF',

    // 头像
    avatar: '//avatars2.githubusercontent.com/u/4942212?v=4',

    // 社交平台帐号信息
    sns: {
        // Github 帐号和链接
        github: {
            account: `${owner}`,
            link: `${repoLink}`,
        },

        // // Facebook 帐号和链接
        // facebook: {
        //   account: 'mumumi',
        //   link: '//www.facebook.com/mumumi712',
        // },

        // // LinkedIn 帐号和链接
        // linkedin: {
        //   account: 'mumumi',
        //   link: '//www.linkedin.com/in/mumumi',
        // },

        // // Twitter 帐号和链接
        // twitter: {
        //   account: 'mumumi',
        //   link: '//twitter.com/mumumi2071231',
        // },

        // // 新浪微博 帐号和链接
        // weibo: {
        //   account: 'mumumi',
        //   link: '//weibo.com/u/xxx',
        // },

        // // 知乎 帐号和链接
        // zhihu: {
        //   account: 'mumumi',
        //   link: '//www.zhihu.com/people/xxx',
        // },

        // // 豆瓣 帐号和链接
        // douban: {
        //   account: '159342708',
        //   link: '//www.douban.com/people/159342708',
        // },
    },
};
// 修改信息 // END

const basePath = 'blog';
const path = require('path');
module.exports = {
    // meta
    title: `${websiteTitle}`,
    description: `${websiteDesc}`,
    // vuepress config
    dest: './dist',
    base: `/${basePath}/`,
    theme: 'meteorlxy',
    head: [
        ['link', { rel: 'icon', href: `${websiteIcon}` }],
    ],
    // 网站语言
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                '/': {
                    message: "发现新内容",
                    buttonText: "刷新"
                },
                '/en/': {
                    message: "New content is available.",
                    buttonText: "Refresh"
                },
            }
        }
    },
    themeConfig: {
        // 个人信息
        personalInfo: personalInfo,

        // 上方 header 的背景，可以使用图片，或者随机变化的图案
        headerBackground: {
            // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
            // url: '/assets/img/bg.jpg',

            // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为纯色背景
            useGeo: true,
        },

        // 是否显示文章的最近更新时间
        lastUpdated: true,

        // 顶部导航栏内容
        nav: [
            { text: 'Home', link: '/', exact: true },
            { text: 'Blog', link: '/posts/', exact: false },
            { text: 'Vuepress', link: 'https://github.com/vuejs/vuepress', exact: true },
            { text: 'Theme', link: 'https://github.com/meteorlxy/vuepress-theme-meteorlxy', exact: true },
            { text: 'Vssue', link: 'https://github.com/meteorlxy/vssue', exact: true },
            { text: 'Demo', link: 'https://github.com/mumumi/blog', exact: true }
            // { text: 'Github', link: `${repoLink}`, exact: true }
        ],

        // 评论配置，参考下方 [页面评论] 章节
        comments: {
            platform: 'github',
            owner: `${owner}`,
            repo: `${repo}`,
            clientId: `${clientId}`,
            clientSecret: `${clientSecret}`
        }
    }
};