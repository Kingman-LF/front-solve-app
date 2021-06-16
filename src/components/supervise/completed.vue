<template>
  <div class="list">
    <div class="list-item">
      <div class="item-num">登记编号：45368824278974621096</div>
      <div class="item-detail-info">
        <div class="txt">类型：<span style="color: #0a57ff">投诉</span></div>
        <div class="txt">登记时间：2021-06-15 10:47:39</div>
        <div class="txt">
          办理情况状态：<span style="color: #0a57ff">已完成</span>
        </div>
        <div class="txt">提供方姓名：陆女士</div>
        <div class="txt">内容：信访标题：[来电]浙江省湖州市吴兴区</div>
        <div class="txt">登记部门：南浔分局消保科</div>
      </div>
    </div>

    <div class="list-item">
      <div class="item-num">登记编号：45368824278974621096</div>
      <div class="item-detail-info">
        <div class="txt">类型：<span style="color: #0a57ff">投诉</span></div>
        <div class="txt">登记时间：2021-06-15 10:47:39</div>
        <div class="txt">
          办理情况状态：<span style="color: #0a57ff">已完成</span>
        </div>
        <div class="txt">提供方姓名：陆女士</div>
        <div class="txt">内容：信访标题：[来电]浙江省湖州市吴兴区</div>
        <div class="txt">登记部门：南浔分局消保科</div>
      </div>
    </div>

    <div class="list-item">
      <div class="item-num">登记编号：45368824278974621096</div>
      <div class="item-detail-info">
        <div class="txt">类型：<span style="color: #0a57ff">投诉</span></div>
        <div class="txt">登记时间：2021-06-15 10:47:39</div>
        <div class="txt">
          办理情况状态：<span style="color: #0a57ff">已完成</span>
        </div>
        <div class="txt">提供方姓名：陆女士</div>
        <div class="txt">内容：信访标题：[来电]浙江省湖州市吴兴区</div>
        <div class="txt">登记部门：南浔分局消保科</div>
      </div>
    </div>

  </div>
</template>
<style lang="scss" scoped>
.list {
  width: 100%;
  box-sizing: border-box;
  padding: 0 21px;
  .list-item {
    background: #ffffff;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
    padding: 15px;
    margin: 20px 0;
    .item-num {
      height: 26px;
      font-size: 20px;
      font-weight: 400;
      color: #0a57ff;
      margin-bottom: 10px;
    }
    .item-detail-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-around;
      .txt {
        width: 48%;
        font-size: 18px;
        font-weight: 400;
        color: #000;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>