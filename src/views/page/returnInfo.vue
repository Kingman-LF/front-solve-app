<template>
  <!-- 回访信息页面 -->
  <div class="box">
    <!-- 回访信息 -->
    <div class="backinfo">
      <div class="info-title">
        <div class="title-imgs"></div>
        <div class="title-txt">回访信息</div>
      </div>
      <div class="info-detail">
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">回访状态：</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">回访人：</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">回访时间：</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">回访方式：</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">满意度：</div>
        </div>
      </div>
    </div>
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
  .backinfo {
    width: 100%;
    // height: 392px;
    background: #ffffff;
    padding: 0 21px;
    box-sizing: border-box;
    margin-bottom: 20px;
    .detail-item {
      &:nth-child(10) {
        width: 100%;
      }
    }
  }
  .info-title {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .title-imgs {
      width: 27px;
      height: 28px;
      //border: 1px solid blue;
      background:url("../../assets/images/jl.png");
      background-size:27px 28px;
    }
    .title-txt {
      font-size: 24px;
      font-weight: bold;
      color: #0a57ff;
      margin-left: 11px;
    }
  }
  .info-detail {
    width: 100%;
    // height: 320px;
    display: flex;
    flex-wrap: wrap;
    .detail-item {
      width: 50%;
      height: 32px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin:5px 0;
      box-sizing: border-box;
      .line {
        width: 4px;
        height: 20px;
        background: #0a57ff;
        border-radius: 2px;
      }
      .detail-info {
        font-size: 24px;
        font-weight: 400;
        color: #000000;
        margin-left: 4px;
      }
    }
  }
}
</style>
