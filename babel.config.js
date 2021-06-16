// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  presets: [
    '@vue/app'
  ]
};
// 接着你可以在代码中直接引入 Vant 组件
// 插件会自动将代码转化为方式二中的按需引入形式
// import { Button } from 'vant';