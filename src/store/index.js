import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
import jibenType from "./modules/jibenType"
 
export default new Vuex.Store({
  modules:{
    jibenType
  }
})