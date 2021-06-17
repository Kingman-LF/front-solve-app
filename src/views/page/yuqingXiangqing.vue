<template>
  <div class="xaingqingBox">
    <myHead title="舆情处置"></myHead>

    <div class="yuqing-xiangqing">
      <div class="xiangqing-title">
        <span></span>
        <span>舆情详情</span>
      </div>
      <div class="xiangqing-con">
        <div class="xq-con-title">万通发展：拟6.3亿元将北京万置60%股权转让给融汇嘉恒</div>
        <div class="xq-con-li">
          <span>中国兰州网</span>
          <span>中青看点</span>
        </div>
        <div class="xq-con-li xq-con-li1">
          <span>原文链接:<span style="color:#0A57FF">http://www.skfa.com/d5963</span></span>
          <span>时间:2021-06-15</span>
        </div>
        <div class="xq-con-neirong">
          <div class="xq-neirong-first">
            <p>6月14日下午，万通发展发布公告称，公司拟将北京万置房地产60%股权转让给湖州融汇嘉恒融资租赁有限公司，对价为人民币6.3亿元。</p>
            <p>据悉，2021年6月6日，万通发展与方熙控股签署转让万置公司60%股权相关协议，因方熙控股未能按约履行付款义务，公司已根据相关协议约定，向其发出书面通知解除协议并保留依据法律法规向方熙控股主张违约责任的实体性及程序性权利。</p>
            <p>公司与方熙控股解除协议后，与融汇嘉恒达成股权转让意向。经各方协商，万通发展与融汇嘉恒及标的公司相关方就本次交易签署了《关于北京万置房地产开发有限公司60%股权之转让协议》和《关于北京万置房地产开发有限公司股权转让之框架协议》。</p>
            <p>公告显示，万置公司名下主要资产为位于北京市朝阳区朝阳门外大街6号院的新城国际项目自持物业，合计地上可售、无抵押、无查封、无共有且依法具有独立可分割产权的建筑面积约22,716平方米的地上物业及地下负一及负二层259个带产权车位。</p>
            <p>据悉，本次交易系公司基于调整资产结构、盘活存量资产的考虑，符合公司经营发展规划，能够有效维持公司利益。交易完成后，公司预计实现约人民币5.0-5.5亿元投资收益。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="xq-btn" @click="management">处置</div>
  </div>
</template>

<script>
import myHead from "@/components/myHead/myHead";
export default {
  name: "yuqingXiangqing",
  components:{
    myHead,
  },
  methods:{
    management(){
      this.$router.push('/describe');
    }
  }
}
</script>

<style scoped lang="scss">
.xaingqingBox{
  width:100%;
  height:100%;
  background:url("../../assets/images/bg.png") no-repeat;
  .yuqing-xiangqing{
    margin:0 19px;
    border-radius: 8px;
    .xiangqing-title{
      height:69px;
      display:flex;
      color:#0A57FF;
      span{
        align-items: center;
        margin-top:16px;
        margin-bottom:21px;
        &:nth-child(1){
          display:inline-block;
          width:27px;
          height:28px;
          //border: 1px solid #0A57FF;
          background:url("../../assets/images/jl.png") no-repeat;
          background-size:27px 28px;
        }
        &:nth-child(2){
          margin-left:11px;
          font-weight:Bold;
        }
      }
    }
    .xiangqing-con{
      background-color: #fff;
      .xq-con-title{
        padding:22px 0 21px 20px;
        color:#0A57FF;
      }
      .xq-con-li{
        display:flex;
        font-size:18px;
        margin-bottom:8px;
        span{
          display:inline-block;
          width:65%;
          align-items: center;
          justify-content: space-between;
          padding-left:20px;
          &:nth-child(2){
            width:35%;
          }
        }
      }
      .xq-con-li1{
        margin-bottom:51px;
      }
      .xq-con-neirong{
        padding-left:18px;
        padding-right:17px;
        font-size:18px;
        .xq-neirong-first{
          p{
            margin:0;
            padding-bottom:21px;
          }
        }
      }
    }
  }
  .xq-btn{
    width: 420px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #0A57FF;
    border-radius: 30px;
    text-align:center;
    line-height:60px;
    margin:0 auto;
    margin-top:120px;
    color:#0A57FF;
   }
}

</style>