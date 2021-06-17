<template>
  <div>
    <div class="list-y" @click="detailsFn">
      <div class="y-title">万通发展：拟6.3亿元将北京万置60%股权转让给融汇嘉恒</div>
      <div class="title1">
        <span>中青看点</span>
        <span>2021-06-15 14:11</span>
      </div>
      <div class="title1">
        <span>原文链接:<span style="color:#0A57FF">http://www.skfa.com/d5963</span></span>
        <span>中国兰州网</span>
      </div>
      <div class="neirong">
        6月14日下午，万通发展发布公告称，公司拟将北京万置房地产60%股权转让给湖州融汇嘉恒融资租赁有限公司，
        对价为人民币6.3亿元...万通发展与方熙控股签署转让万置公司60%股权相关协议，因方熙控股未能按约履行付款义务，
        公司已根据相关协议约定，向其发出书面通知解除协议并保留依据法律法规向方熙控股主张违约....
      </div>
    </div>

    <div class="list-y">
      <div class="y-title">2021中国文旅投资及民宿酒店展</div>
      <div class="title1">
        <span>钥城网-培训</span>
        <span>2021-06-15 14:11</span>
      </div>
      <div class="title1">
        <span>原文链接:<span style="color:#0A57FF">http://www.skfa.com/d5963</span></span>
        <span>钥城网</span>
      </div>
      <div class="neirong">
        内容：2021中国文旅投资及民宿....浙江省作为中国民营经济最发达的省份之一，被众多民营资本看好乡村民宿产业的投资，
        民营资本也成为浙江省乡村民宿产业蓬勃发展的主要推手...此次盛会将为民宿产业发展及建设提供一次树形象、显实力、
        创品牌、探市场、获信息的贸易良机...浙江省作为中国民营经济最发达的省份之一
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "completed",
  methods:{
    detailsFn(){
      this.$router.push('/yuqingXiangqing');
    }
  }
}
</script>

<style scoped lang="scss">
.list-y{
  border-radius: 8px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  padding:0 18px 017px;
  margin-bottom:20px;
  .y-title{
    padding:16px 0 23px 0;
    color:#0A57FF;
    font-size: 20px;
  }
  .title1{
    display:flex;
    margin-bottom:8px;
    justify-content: space-between;
    font-size:18px;
    span{
      display:inline-block;
      width:65%;
      align-items: center;
      &:nth-child(2){
        width:35%;
      }
    }
  }
  .neirong{
    font-size:18px;
  }
}
</style>