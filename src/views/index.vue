<template>
  <div class="conIndex">
    <myHead title="投诉调处处置闭环"></myHead>
    <div class="navigation">
      <div class="nav-item" :class="{navTitle:index==tabCur}" v-for="(item,index) in list" :key="index" @click="Navtab(index)">{{item}}</div>
    </div>
    <div class="navContent">
    <!-- 登录信息-->
     <denglu v-show="tabCur==0"></denglu>
    <!--审批记录-->
     <shenpi v-show="tabCur==1"></shenpi>
    <!-- 流转记录-->
    <liuzhuan v-show="tabCur==2"></liuzhuan>
    <!-- 查处结果反馈-->
    <resultFeedback v-show="tabCur==3"></resultFeedback>
      <!-- 回访信息-->
      <returnInfo v-show="tabCur==4"></returnInfo>
      <!--时间线-->
      <timeline v-show="tabCur==5"></timeline>


    </div>
  </div>
</template>

<script>
import  myHead from '../components/myHead/myHead';
import denglu from '../components/denglu/denglu';
import shenpi from '../components/shenpi';
import liuzhuan from '../components/liuzhuanjilu/liuzhuan'
import timeline from './page/timeline'
import returnInfo from './page/returnInfo'
import resultFeedback from './page/resultFeedback'

export default {
  name: "index",
  data(){
    return{
      tabCur: 0,
      list:[
        '登记信息','审批记录','流转记录','查处结果反馈','回访信息','时间轴'
      ]
    }
  },
  methods:{
    Navtab(index) {
      this.tabCur = index
    },
  },
  components:{
    myHead,
    denglu,
    shenpi,
    liuzhuan,
    timeline,
    returnInfo,
    resultFeedback
  },
}
</script>

<style scoped lang="scss">
html,body{
  margin:0;
  padding:0;
}
li{
  list-style: none;
}
.navTitle{
  border: 2px solid #0A57FF !important;
  color:#0A57FF !important;
}
.conIndex{
  width:100%;
  height:100%;
  background:url('../assets/images/bg.png') no-repeat;
  text-align: center;
  .navigation {
    width: 100%;
    height: 170px;
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-around;
    margin-bottom: 20px;
    .nav-item {
      width: 20%;
      height: 44px;
      font-size: 24px;
      color: #000;
      line-height: 44px;
      background: #ffffff;
      border: 1px solid #707070;
      border-radius: 30px;
      margin: 0 15px;
    }
  }
}
</style>