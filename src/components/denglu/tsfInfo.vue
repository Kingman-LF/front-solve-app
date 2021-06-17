<template>
  <div class="login2">
    <div class="title">
      <span></span>
      <span>投诉方信息</span>
    </div>
    <div class="tsfBox">
      <div class="tsfInfo">
        <div class="tsf" v-for="(item,index) in tsfinfoArr" :key="index">
          <span class="line"></span>
          <span class="type">{{ item.tstype }}:</span>
          <span class="typeFont">{{ item.typeName }}</span>
        </div>
      </div>
      <div class="tsfInfo">
        <div class="tsf" v-for="(item,index) in tsfinfoObj" :key="index">
          <span class="line"></span>
          <span class="type">{{ item.tsInfo }}:</span>
          <span class="typeFont">{{ item.tsfInfo }}</span>
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
import { getComplaintlistDetails } from '../../assets/api/tousu'
export default {
  name: "tsfInfo",
  data(){
    return{
      tsfinfoArr:[],
      tsfinfoObj:[],
    }
  },
  mounted() {
    getComplaintlistDetails({registration:"3305220000000202106111355"}).then(res => {
      console.log(res)
      let tsfinfoList = res.data.register;
      let obj = [
        {tstype:'姓名/名称',typeName:tsfinfoList.tsName},
        {tstype:'联系电话',typeName:tsfinfoList.tsContact},
        {tstype:'通讯地址',typeName:tsfinfoList.tsDesign},
        {tstype:'事发地',typeName:tsfinfoList.tsIncident},
        {tstype:'事发时间',typeName:tsfinfoList.tsRegistrationtime},
        {tstype:'消费类型中类',typeName:tsfinfoList.tsMiddleclass},
        {tstype:'消费类型小类',typeName:tsfinfoList.tsSubclass},
        {tstype:'消费类型品种',typeName:tsfinfoList.tsVarieties},
        {tstype:'投诉内容大类',typeName:tsfinfoList.tsContent},
        {tstype:'投诉内容中类',typeName:tsfinfoList.tsContent},
      ]
      let obj1 = [
        // {tsInfo:'性别',tsfInfo:tsfinfoList},
        // {tsInfo:'投诉方身份',tsfInfo:tsfinfoList},
        // {tsInfo:'投诉主体',tsfInfo:tsfinfoList},
        // {tsInfo:'关键字',tsfInfo:tsfinfoList},
        // {tsInfo:'消费方式',tsfInfo:tsfinfoList},
        // {tsInfo:'是否预付式消费',tsfInfo:tsfinfoList},
        // {tsInfo:'残疾人标志',tsfInfo:tsfinfoList},
        // {tsInfo:'受理环节',tsfInfo:tsfinfoList},
        // {tsInfo:'是否长三角地区',tsfInfo:tsfinfoList},
        // {tsInfo:'投诉内容小类',tsfInfo:tsfinfoList},
      ]
      this.tsfinfoArr = obj;
      this.tsfinfoObj = obj1;
    })
  }
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
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
}
</style>