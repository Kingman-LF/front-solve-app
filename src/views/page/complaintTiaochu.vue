<template>
  <!-- 投诉调处处置闭环 -->
  <div class="box">
    <div class="header">通知督办</div>
    <div class="tab">
          <div class="tab-" :class="{active:index==hbListCur}" v-for="(item,index) in hbList" :key="index" @click="tab(index)">
                <!-- 选中蓝色 v-if="index==imgsel"-->
                  <img :src="item.pathsel" >
                  <!-- 未选中灰色 -->
                  <!-- <img :src="item.paths"  v-if="index==imgnot"> -->
                  <span>{{item.name}}</span>
          </div>
    </div>
    <div class="main">
        <unfinished v-show="hbListCur==0"></unfinished>
        <completed v-show="hbListCur==1"></completed>
    </div>
    <!-- <div class="majorTasks">
      <div class="elTable">
        <el-tabs v-model="activeName" class="elTabs">
          <el-tab-pane name="first" class="elTab">
            <span slot="label">
              <img src="~@/assets/images/write.png" alt="" />
              待处置
            </span>
            
          </el-tab-pane>
          <el-tab-pane name="second" class="elTab">
            <span slot="label">
              <img src="~@/assets/images/yes.png" alt="" />
              已办结
            </span>
            已办结
          </el-tab-pane>
        </el-tabs>
      </div>
    </div> -->
    
  </div>
</template>
<script>
import unfinished from "./unfinished";
import completed from "./completed";
export default {
  data() {
    return {
      hbList: [{
            pathsel: require('../../assets/images/write.png'),
            // paths: require('../../assets/images/write.png'),
            name: '待查收'
          },
          {
            pathsel: require('../../assets/images/yes.png'),
            // paths: require('../../assets/images/yes.png'),
            name: '已查收'
          }
        ],
        hbListCur: 0, //默认列表显示
        imgsel:0, //图片选中蓝色
        imgnot:1, //图片未选中灰色
    };
  },
  methods:{
      tab(index) {
        this.hbListCur = index
        // this.imgsel=!this.imgsel
        // this.imgnot=!this.imgnot
      },
  },
  components: {
    unfinished,
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
