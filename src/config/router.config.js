/**
 * 基础路由
 */
export const constantRouterMap = [
    {
        path: '/',
        component: () => import('@/views/workbench'),
    },
    //tab栏切换页面
    {
        path:'/index',
        name:'/index',
        component: () => import('../views/index'),
    },
    //审批记录
    {
        path:'/shenpi',
        name:'/shenpi',
        component: () => import('../components/shenpi'),
    },
    //流转记录
    {
        path:'/liuzhuan',
        name:'/liuzhuan',
        component: () => import('../components/liuzhuanjilu/liuzhuan'),
    },
    //舆情处置
    {
        path:'/yuqingChuzhi',
        name:'/yuqingChuzhi',
        component: () => import('../views/page/yuqingChizhi'),
    },
    //舆情详情
    {
        path:'/yuqingXiangqing',
        name:'/yuqingXiangqing',
        component:() => import('../views/page/yuqingXiangqing'),
    },
    //舆情 事件描述 处置结果
    {
        path:'/describe',
        name:'/describe',
        component:() => import('../views/page/publicChuzhi'),
    },
    //   投诉列表
    {
        path:'/complaintTiaochu',
        name:'/complaintTiaochu',
        component:() => import('../views/page/complaintTiaochu'),
    },
    //   纠纷列表
    {
        path:'/dispute',
        name:'/dispute',
        component:() => import('../views/page/dispute'),
    },
]