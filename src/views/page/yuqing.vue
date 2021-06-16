<template>
  <div class="yqms">
      <myHead title="舆情处置"></myHead>
      <div class="yqms-con">
        <div class="yqms-con-wenzi">
          <div class="xyms-wenzi-title">
            <span></span>
            <span>事件描述</span>
          </div>
          <div class="xyms-input">
            <textarea style="border: 1px solid #707070;" placeholder="请输入事件描述"></textarea>
          </div>
        </div>
        <div class="yqms-con-wenzi yqms-con-wenzi1">
          <div class="xyms-wenzi-title">
            <span></span>
            <span>处置结果</span>
          </div>
          <div class="xyms-input">
            <textarea style="border: 1px solid #707070;" placeholder="请输入处置结果"></textarea>
          </div>
        </div>
      </div>
      <div class="yqms-btn">完成</div>
  </div>
</template>

<script>
import myHead from '../../components/myHead/myHead'
export default {
  name: "yuqing",
  components:{
    myHead,
  }
}
</script>

<style scoped lang="scss">
  .yqms{
    width:100%;
    height:100%;
    background:url("../../assets/images/bg.png") no-repeat;
    .yqms-con{
      margin:0 19px;
      .yqms-con-wenzi{
        .xyms-wenzi-title{
          height:72px;
          display:flex;
          span{
            margin:16px 0 24px 6px;
            font-weight: bold;
            line-height: 32px;
            color: #0A57FF;
            align-items: center;
            &:nth-child(1){
              display:inline-block;
              width:27px;
              height:28px;
              //border:1px solid #0A57FF;
              margin-right:11px;
              background:url("../../assets/images/jl.png") no-repeat;
              background-size: 27px 28px;
            }
          }
        }
        .xyms-input{
          height:222px;
          textarea{
            height:100%;
            width:97%;
            border-radius: 4px;
            padding:20px 0 0 20px;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }
      .yqms-con-wenzi1{
        margin-top:72px;
      }
    }
    .yqms-btn{
      width: 420px;
      height: 60px;
      background: #FFFFFF;
      border: 1px solid #0A57FF;
      border-radius: 30px;
      line-height: 60px;
      color: #0A57FF;
      text-align:center;
      margin:121px auto;
    }
  }
</style>