<template>
  <div class="login2">
    <div class="title">
      <span></span>
      <span>投诉方信息</span>
    </div>
    <div class="tsfBox">
      <div class="tsfInfo">
        <div class="tsf">
          <span class="line"></span>
          <span class="type">姓名/名称:</span>
          <span class="typeFont">程先生</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">联系电话:</span>
          <span class="typeFont">&nbsp;&nbsp;13505676</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">通讯地址:</span>
          <span class="typeFont"></span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">事发地:</span>
          <span class="typeFont"></span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">事发时间:</span>
          <span class="typeFont">2021-06-12</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">消费类型中类:</span>
          <span class="typeFont">其他商品</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">消费类型小类:</span>
          <span class="typeFont">其他商品</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">消费类型品种:</span>
          <span class="typeFont">其他商品</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">投诉内容大类:</span>
          <span class="typeFont">&nbsp;&nbsp;&nbsp;&nbsp;违反食品安全法规</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">投诉内容中类:</span>
          <span class="typeFont">&nbsp;&nbsp;&nbsp;&nbsp;违反食品安全法规</span>
        </div>
      </div>
      <div class="tsfInfo">
        <div class="tsf">
          <span class="line"></span>
          <span class="type">姓别:</span>
          <span class="typeFont">男</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">投诉方身份:</span>
          <span class="typeFont">城镇</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">投诉主体:</span>
          <span class="typeFont">其他</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">关键字:</span>
          <span class="typeFont"></span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">消费方式:</span>
          <span class="typeFont">实体店铺</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">是否预付式消费:</span>
          <span class="typeFont">否</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">残疾人标志:</span>
          <span class="typeFont">否</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">受理环节:</span>
          <span class="typeFont">其他</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">是否长三角地区:</span>
          <span class="typeFont">是</span>
        </div>
        <div class="tsf">
          <span class="line"></span>
          <span class="type">投诉内容小类:</span>
          <span class="typeFont"></span>
        </div>
      </div>
    </div>
    <div class="infoTsf">
      <div class="tsf">
        <div class="oneLine">
          <span class="line"></span>
          <span class="type">具体内容:</span>
        </div>
        <div class="typeFont">投诉人称今天中午在该店就餐，点了两瓶500ml的雪碧,
          吃完感觉不舒服已到中管卫生院就医，发现该雪碧已过期(留有实物和视频)，现要求相关部门调处。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tsfInfo"
}
</script>

<style scoped lang="scss">
.login2{
  height:740px;
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
        width:30px;
        height:28px;
        //border:1px solid #0A57FF;
        margin-right:11px;
        background:url("../../assets/images/fwz.png") no-repeat;
        background-size:30px 28px;
      }
      &:nth-child(2){
        font-weight: bold;
      }
    }
  }
  .tsfBox{
    display:flex;
    margin-bottom:20px;
    // height:520px;
  }
  .tsfInfo{
    margin-left:19px;
    .tsf{
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
      .oneLine{
        width:100%;
      }
    }
  }
  .infoTsf{
    margin-left:19px;
    .oneLine{
      display:flex;
      align-items: center;
    }
    .line{
      display:inline-block;
      width:4px;
      height:20px;
      background-color: #0A57FF;
      border-radius: 2px;
      margin-right:4px;
    }
	.typeFont{
		margin-left:27px;
    margin-right:32px;
	}
  }
}
</style>