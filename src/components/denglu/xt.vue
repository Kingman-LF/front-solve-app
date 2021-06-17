<template>
  <div class="login1">
    <div class="title">
      <span></span>
      <span>系统信息</span>
    </div>
    <div class="xtInfo">
      <div class="xt" v-for="(item,index) in xtArr" :key="index">
        <span class="line"></span>
        <span class="type">{{ item.type }}:</span>
        <span class="typeFont">{{ item.typeName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComplaintlistDetails } from '../../assets/api/tousu'
export default {
  name: "xt",
  data(){
    return{
      xtArr:[],
    }
  },
  mounted(){
    getComplaintlistDetails({registration:"3305220000000202106111355"}).then(res => {
      // console.log(res)
      let registerList = res.data.register
      let obj = [
        {type:'职能',typeName:registerList.tsFunction},
        {type:'信息来源',typeName:registerList.tsInformation},
        {type:'接收方式',typeName:registerList.tsAcceptance},
        {type:'受理登记人',typeName:registerList.tsAcceptances},
        {type:'登记时间',typeName:registerList.tsDepartment},
        {type:'登记编号',typeName:registerList.tsIncidenttime},
        {type:'登记部门',typeName:registerList.tsRegistration}
      ]
      this.xtArr = obj;
    })
  }
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