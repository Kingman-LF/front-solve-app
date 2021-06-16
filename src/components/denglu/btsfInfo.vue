<template>
  <div class="login3">
    <div class="title">
      <span></span>
      <span>被诉方信息</span>
    </div>
   <div class="btsfBox">
     <div class="btsfInfo">
       <div class="btsf">
         <span class="line"></span>
         <span class="type">设计主体名称:</span>
         <span class="typeFont">淮南牛肉汤</span>
       </div>
       <div class="btsf">
         <span class="line"></span>
         <span class="type">涉及主体地址:</span>
         <span class="typeFont">钟管镇干村碧云街</span>
       </div>
       <div class="btsf">
         <span class="line"></span>
         <span class="type">联系电话:</span>
         <span class="typeFont"></span>
       </div>
       <div class="btsf">
         <span class="line"></span>
         <span class="type">统一社会信用代码:</span>
         <span class="typeFont">无</span>
       </div>
       <div class="btsf">
         <span class="line"></span>
         <span class="type">商标进口标志:</span>
         <span class="typeFont">国产</span>
       </div>
       <div class="btsf">
         <span class="line"></span>
         <span class="type">数量:</span>
         <span class="typeFont">0</span>
       </div>
     </div>
     <div class="btsfInfo">
       <div class="btsf">
         <span class="line"></span>
         <span class="type">所在行业类别:</span>
         <span class="typeFont">小商铺</span>
       </div>
       <div class="btsf">
         <span class="line"></span>
         <span class="type">品牌:</span>
         <span class="typeFont">无</span>
       </div>
       <div class="btsf">
         <span class="line"></span>
         <span class="type">商品名称:</span>
         <span class="typeFont">0</span>
       </div>
       <div class="btsf">
         <span class="line"></span>
         <span class="type">涉及金额:</span>
         <span class="typeFont">0元</span>
       </div>
       <div class="btsf">
         <span class="line"></span>
         <span class="type">型号规格:</span>
         <span class="typeFont">不详</span>
       </div>
       <div class="btsf">
         <span class="line"></span>
         <span class="type">单位:</span>
         <span class="typeFont">其他</span>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "btsfInfo"
}
</script>

<style scoped lang="scss">
.login3{
  height:384px;
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
        width:32px;
        height:27px;
        //border:1px solid #0A57FF;
        margin-right:11px;
        background:url("../../assets/images/bfw.png") no-repeat;
        background-size:32px 27px;
      }
      &:nth-child(2){
        font-weight: bold;
      }
    }
  }
 .btsfBox{
   display:flex;
   .btsfInfo{
     margin-left:19px;
     .btsf{
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