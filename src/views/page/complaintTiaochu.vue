<template>
  <!-- 投诉调处处置闭环 -->
  <div class="box">
    <myHead title="投诉调处处置闭环"></myHead>
    <div class="tab">
          <div class="tab-" :class="{active:index==hbListCur}" v-for="(item,index) in hbList" :key="index" @click="tab(index)">
              <img :src="item.pathsel"/>
              <span>{{item.name}}</span>
          </div>
    </div>
    <div class="main">
        <unfinished v-show="hbListCur==0"></unfinished>
        <inProcess v-show="hbListCur==1"></inProcess>
        <completed v-show="hbListCur==2"></completed>
    </div>
    
  </div>
</template>
<script>
import myHead from "../../components/myHead/myHead"
import unfinished from "../../components/supervise/unfinished";
import inProcess from "../../components/supervise/inProcess";
import completed from "../../components/supervise/completed";
export default {
  data() {
    return {
      hbList: [{
            pathsel: require('../../assets/images/write.png'),
            name: '待处置'
          },
        {
          pathsel: require('../../assets/images/write.png'),
          name: '办理中'
        },
          {
            pathsel: require('../../assets/images/yes.png'),
            name: '已办结'
          }
        ],
        hbListCur: 0, //默认列表显示
    };
  },
  methods:{
      tab(index) {
        this.hbListCur = index
      },
  },
  components: {
    myHead,
    unfinished,
    inProcess,
    completed
  },
};
</script>
<style lang="scss" scoped>
.active{
    color:#0a57ff;
    border-bottom: 3px solid #0a57ff;
}
.box {
  text-align: center;
  background: #f5f5f5;
  box-sizing: border-box;
  .header {
    width: 100%;
    height: 88px;
    background: #0a57ff;
    font-size: 36px;
    font-weight: 400;
    line-height: 88px;
    color: #ffffff;
    box-sizing: border-box;
  }
  .tab{
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      padding:0 21px;
      display: flex;
      justify-content: space-between;
      .tab-{
          width: 50%;
          height: 100%;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 10px;
          img{
              width: 28px;
              height: 28px;
              margin-right: 10px;
          }
      }
  }
  .main{
      box-sizing: border-box;
      padding-top: 15px;
  }
}
</style>
