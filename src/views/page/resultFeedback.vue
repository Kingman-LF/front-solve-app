<template>
  <!-- 查处结果反馈页面 -->
  <div class="box">
    <!-- 反馈信息 -->
    <div class="backinfo">
      <div class="info-title">
        <div class="title-imgs"></div>
        <div class="title-txt">反馈信息</div>
      </div>
      <div class="info-detail">
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">信息类型：投诉</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">所在部门：德清消保分局</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">当前状态：结案已归档</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">转向部门：德清消保分局</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">催问次数：0</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">是否重大案件：</div>
        </div>

        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">受理登记人：钱宁</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">办理期限：2021-8-13</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">登记时间：2021-6-11</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">受理编号：3305210000000202106111279</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">登记部门：德清县消保部门</div>
        </div>
      </div>
    </div>
    <!-- 投诉信息 -->
    <div class="complaintInfo">
      <div class="info-title">
        <div class="title-imgs title-imgs1"></div>
        <div class="title-txt">投诉信息</div>
      </div>
      <div class="info-detail">
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">被方：淮南牛肉汤</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">侵权人类型：个体工商户</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">联系电话：</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">地址：钟管镇干山村碧云街</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">消费类型中类：其他商品</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">消费类型小类：其他商品</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">性质大类：质量</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">消费类型品种：其他商品</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">性质小类：</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">性质中类：质量</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">销售地所在行政区划：</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">品牌名称：无</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">型号规格：不详</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">商品名称：0</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">销售地：</div>
        </div>
        <div class="detail-item">
          <div class="line"></div>
          <div class="detail-info">统一社会信用代码：无</div>
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
    .title-imgs1{
      background:url("../../assets/images/jilu.png");
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
  .complaintInfo {
    width: 100%;
    // height: 438px;
    background: #fff;
    box-sizing: border-box;
    padding: 0 21px;
  }
}
</style>
