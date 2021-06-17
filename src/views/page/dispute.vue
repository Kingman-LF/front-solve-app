<template>
  <!-- 投诉调处处置闭环 -->
  <div class="box">
    <myHead title="纠纷列表"></myHead>
    <div class="tab">
          <div class="tab-" :class="{active:index==hbListCur}" v-for="(item,index) in hbList" :key="index" @click="tab(index)">
              <img :src="item.pathsel"/>
              <span>{{item.name}}</span>
          </div>
    </div>
    <div class="main">
        <reconsider v-if="hbListCur==0"></reconsider>
        <lawsuit v-else-if="hbListCur==1"></lawsuit>
        <proceeding v-else-if="hbListCur==2"></proceeding>
    </div>
    
  </div>
</template>
<script>
import myHead from "../../components/myHead/myHead"
import reconsider from "../../components/disputeList/reconsider";
import lawsuit from "../../components/disputeList/lawsuit";
import proceeding from "../../components/disputeList/proceeding";

export default {
  data() {
    return {
      hbList: [{
            pathsel: require('../../assets/images/write.png'),
            name: '行政复议'
          },
        {
          pathsel: require('../../assets/images/write.png'),
          name: '行政诉讼'
        },
          {
            pathsel: require('../../assets/images/yes.png'),
            name: '信访事项'
          }
        ],
        hbListCur: 0, //默认列表显示
    };
  },
  mounted(){
    
  },
  methods:{
      tab(index) {
        this.hbListCur = index
      },
      
  },
  components: {
    myHead,
    reconsider,
    lawsuit,
    proceeding
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
