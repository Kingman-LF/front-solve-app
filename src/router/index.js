import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '../config/router.config.js'

Vue.use(Router)

// 解决路由重复问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//懒加载  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})




export default router
