<template>
  <!-- 首页 -->
  <div class="box">
    <div class="header">破五多任务工作台</div>
    <div class="banner">
      <img src="../assets/images/kj.png" alt="" />
    </div>
    <div class="box-item">
      <div class="item" @click="complaintMediation">
        <div class="title">
          <img src="../assets/images/pwdone.png" alt="" />
        </div>
        <div class="txt">投诉调处</div>
      </div>
      <div class="item" @click="showModal=true">
        <div class="title">
          <img src="../assets/images/pwdone.png" alt="" />
        </div>
        <div class="txt">纠纷化解</div>
      </div>
      <div class="item" @click="showModal=true">
        <div class="title">
          <img src="../assets/images/pwdone.png" alt="" />
        </div>
        <div class="txt">风险管控</div>
      </div>
      <div class="item" @click="publicOpinionMonitoring">
        <div class="title">
          <img src="../assets/images/pwdone.png" alt="" />
        </div>
        <div class="txt">舆情监测</div>
      </div>
      <div class="item" @click="showModal=true">
        <div class="title">
          <img src="../assets/images/pwdone.png" alt="" />
        </div>
        <div class="txt">事故防控</div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="mask" v-if="showModal" @click="showModal=false"></div>
    <div class="pop" v-if="showModal">
        <img src="../assets/images/weixiu.png" alt="">
        <span>正在开发中...</span>
    </div>
  </div>
</template>
<script>
export default{
    data() {
      return {
          showModal: false
      };
    },
    mounted() {

    },
    methods:{
      //投诉列表
      complaintMediation(){
        this.$router.push('/complaintTiaochu');
      },
      //舆情监测
      publicOpinionMonitoring(){
        this.$router.push('/yuqingChuzhi');
      }
    }
  };
</script>
<style lang="scss" scoped>
.box {
  text-align: center;
  background: #f5f5f5;
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
  .banner {
    width: 720px;
    height: 346px;
    margin: 20px auto;
    img {
      width: 100%;
    }
  }
  .box-item {
    padding:0 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 292px;
      height: 171px;
      box-sizing: border-box;
      margin: 10px 0px 50px;
      .title {
        height: 123px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 90px;
            height: 77px;
        }
      }
      .txt {
          line-height: 48px;
        height: 48px;
        background: #0a57ff;
        opacity: 1;
        border-radius: 0px 0px 4px 4px;
        font-size: 28px;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }

.mask {
  background-color: #000;
  opacity: 0.1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1
}
.pop {
  width: 383px;
height: 298px;
background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(10, 87, 255, 0.3);
opacity: 1;
border-radius: 4px;
padding:40px 0;
box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img{
      width: 153px;
      height: 167px;
  }
  span{
      font-size: 24px;
font-weight: bold;
color: #0A57FF;
  }
}

}
</style>