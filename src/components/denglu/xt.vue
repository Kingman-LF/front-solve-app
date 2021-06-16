<template>
  <div class="login1">
    <div class="title">
      <span></span>
      <span>系统信息</span>
    </div>
    <div class="xtInfo">
      <div class="xt">
        <span class="line"></span>
        <span class="type">职能:</span>
        <span class="typeFont">食品</span>
      </div>
      <div class="xt">
        <span class="line"></span>
        <span class="type">信息来源:</span>
        <span class="typeFont">&nbsp;&nbsp;12315中心</span>
      </div>
      <div class="xt">
        <span class="line"></span>
        <span class="type">接收方式:</span>
        <span class="typeFont">&nbsp;&nbsp;电话</span>
      </div>
      <div class="xt">
        <span class="line"></span>
        <span class="type">受理登记人:</span>
        <span class="typeFont">&nbsp;&nbsp;钱宁</span>
      </div>
      <div class="xt">
        <span class="line"></span>
        <span class="type">登记时间:</span>
        <span class="typeFont">2021-06-12</span>
      </div>
      <div class="xt">
        <span class="line"></span>
        <span class="type">登记编号:</span>
        <span class="typeFont">330522</span>
      </div>
      <div class="xt">
        <span class="line"></span>
        <span class="type">登记部门:</span>
        <span class="typeFont">&nbsp;&nbsp;&nbsp;&nbsp;德清县消保分局</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "xt"
}
</script>

<style scoped lang="scss">
.login1{
  height:392px;
  margin-bottom:20px;
  background-color: #fff;
  .title{
    margin-left:21px;
    padding-top:20px;
    display:flex;
    align-items: center;
    margin-bottom:12px;
    span{
      color:#0A57FF;
      &:nth-child(1){
        width:27px;
        height:28px;
        //border:1px solid #0A57FF;
        margin-right:11px;
        background: url("../../assets/images/jl.png") no-repeat;
        background-size: 27px 28px;
      }
      &:nth-child(2){
        font-weight: bold;
      }
    }
  }
  .xtInfo{
    margin-left:19px;
    .xt{
      display:flex;
      align-items: center;
      height:32px;
      margin-bottom:14px;
      .line{
        display:inline-block;
        width:4px;
        height:20px;
        background-color: #0A57FF;
        border-radius: 2px;
        margin-right:4px;
      }
      .typeFont{
        margin-left:20px;
      }
    }
  }
}
</style>