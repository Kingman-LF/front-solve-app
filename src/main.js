import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import 'lib-flexible'

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


// 引入
import * as echarts from 'echarts';
// eslint-disable-next-line no-irregular-whitespace
Vue.prototype.$echarts = echarts
// 水球echars js
import "echarts-liquidfill";

// 全局的config
import { axios } from '@/utils/request'
axios({
  url: process.env.VUE_APP_URL+'/portalrest/auth/getConfigs',
  method: 'get',
  params: {}
}).then(res => {
  if(res.code === 200) {
    let obj = {}
    // eslint-disable-next-line no-irregular-whitespace
    obj.areaCode = res.data.COUNTY_CODE.toUpperCase()
    obj.name = res.data.COUNTY_NAME
    obj.simpleName = res.data.COUNTY_SIMPLE_NAME
    obj.departmentId = res.data.COUNTY_CODE_NUM
    obj.serviceCode = res.data.UNIFIED_KEY
    obj.servicePwd = res.data.UNIFIED_CODE
    obj.D_LEVEL = res.data.COUNT_GRADE
    Vue.prototype.$config = obj
  }
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
