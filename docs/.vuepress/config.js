/*
 * @Descripttion:
 * @version:
 * @Author: shenjia
 * @Date: 2021-07-30 16:46:33
 * @LastEditors: shenjia
 * @LastEditTime: 2021-07-30 18:34:54
 */
module.exports = {
  base: '/',
  dest: './dist',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: '2021-7-30',
    displayAllHeaders: true,
    activeHeaderLinks: false
  },
  nav: [
    { text: '首页', link: '/' },
    {
      text: '博客',
      items: [
        { text: 'Html', link: '/index/html/1.md' },
        { text: 'css', link: '/index/css/1.md' }
      ]
    }
  ]
};
