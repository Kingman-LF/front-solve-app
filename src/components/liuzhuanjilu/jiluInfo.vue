<template>
  <div class="login4">
    <div class="title">
      <span></span>
      <span>当前记录信息</span>
    </div>
    <div class="jilufBox">
      <div class="jiluInfo">
        <div class="jilu">
          <span class="line"></span>
          <span class="type">信息类型:</span>
          <span class="typeFont">投诉</span>
        </div>
        <div class="jilu">
          <span class="line"></span>
          <span class="type">当前状态:</span>
          <span class="typeFont">办结已归案</span>
        </div>
        <div class="jilu">
          <span class="line"></span>
          <span class="type">催问次数:</span>
          <span class="typeFont">0</span>
        </div>
        <div class="jilu">
          <span class="line"></span>
          <span class="type">受理登记人:</span>
          <span class="typeFont">钱宁</span>
        </div>
        <div class="jilu">
          <span class="line"></span>
          <span class="type">登记时间:</span>
          <span class="typeFont">2021-06-11</span>
        </div>
        <div class="jilu">
          <span class="line"></span>
          <span class="type">受理编号:</span>
          <span class="typeFont">3305210000002021</span>
        </div>
        <div class="jilu">
          <span class="line"></span>
          <span class="type">受理编号:</span>
          <span class="typeFont">3305210000002021</span>
        </div>
        <div class="jilu">
          <span class="line"></span>
          <span class="type">登记部门:</span>
          <span class="typeFont">德清县消保分局</span>
        </div>
      </div>
      <div class="jiluInfo">
        <div class="jilu">
          <span class="line"></span>
          <span class="type">所在部门:</span>
          <span class="typeFont">德清消保分局</span>
        </div>
        <div class="jilu">
          <span class="line"></span>
          <span class="type">转向部门:</span>
          <span class="typeFont"></span>
        </div>
        <div class="jilu">
          <span class="line"></span>
          <span class="type">是否重大案件:</span>
          <span class="typeFont"></span>
        </div>
        <div class="jilu">
          <span class="line"></span>
          <span class="type">办理期限:</span>
          <span class="typeFont">2021-8-13</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jiluInfo"
}
</script>

<style scoped lang="scss">
.login4{
  height:440px;
  margin-bottom:20px;
  background-color: #fff;
  font-size:24px;
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
        background:url("../../assets/images/jl.png") no-repeat;
        background-size:30px 28px;
      }
      &:nth-child(2){
        font-weight: bold;
      }
    }
  }
  .jilufBox{
    display:flex;
    .jiluInfo{
      margin-left:19px;
      .jilu{
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
}
</style>