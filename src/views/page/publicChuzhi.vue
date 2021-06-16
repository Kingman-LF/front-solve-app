<template>
  <!-- 舆情处置 -->
  <div class="box">
    <div class="header">舆情处置</div>
    <div class="item">
      <div class="info-title">
        <div class="title-imgs">
          <img src="../../assets/images/look.png" alt="">
        </div>
        <div class="title-txt">事件描述</div>
      </div>
      <!-- <input type="text"  /> -->
      <textarea placeholder="请输入事件描述"></textarea>
    </div>

    <div class="item">
      <div class="info-title">
        <div class="title-imgs">
          <img src="../../assets/images/look.png" alt="">
        </div>
        <div class="title-txt">处置结果</div>
      </div>
      <textarea placeholder="请输入处置结果"></textarea>
    </div>

    <div class="btn">完成</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
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
  .item {
    width: 100%;
    padding:0 21px;
    box-sizing: border-box;
    margin-bottom:20px;
    .info-title {
      width: 100%;
      height: 72px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .title-imgs {
        width: 27px;
        height: 28px;
        img{
          width: 100%;
        }
      }
      .title-txt {
        font-size: 24px;
        font-weight: bold;
        color: #0a57ff;
        margin-left: 11px;
      }
    }
    textarea {
      width: 100%;
      height: 222px;
      background: #ffffff;
      border: 1px solid #b1b0b0;
      border-radius: 4px;
      padding:20px 0 0 20px;
      box-sizing: border-box;
    }
  }
  .btn{
      width: 420px;
        height: 60px;
        margin:100px auto 0px;
        background: #FFFFFF;
        border: 1px solid #0A57FF;
        border-radius: 30px;
        font-size: 24px;
        color: #0A57FF;
        line-height: 60px;
  }
}
</style>
