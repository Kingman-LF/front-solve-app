<template>
  <div class="list">
    <div class="list-item" v-for="(item,index) in lawsuitList" :key="index">
      <div class="item-num">诉讼结果（是否进入二审）：{{item.jfSdjg}}</div>
      <div class="item-detail-info">
        <div class="txt">序号：<span style="color: #0a57ff">{{item.jfId}}</span></div>
        <div class="txt">立案时间：{{item.jfLasj}}</div>
        <div class="txt">原告方：{{item.jfYgf}}</div>
        <div class="txt">被告方：{{item.jfBgf}}</div>
        <div class="txt">类型：{{item.jfLx}}</div>
        <div class="txt">诉讼机关：{{item.jfSsjg}}</div>
        <div class="txt">案由：{{item.jfAnyiu}}</div>
        <div class="txt">
          是否出庭：<div style="color: #0a57ff">{{item.jfCt}}</div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import {getLawsuitList} from '../../assets/api/jiufen'
export default{
  data(){
    return{
      lawsuitList:[],
    }
  },
  mounted(){
      getLawsuitList({page:1,limit:10}).then(res=>{
          // console.log(res)
          if(res.code==200){
              this.lawsuitList=res.data.data
          }
          // console.log(this.lawsuitList)
          
      })
  },
  methods:{

  }
}
</script>
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
        display: flex;
        justify-content: flex-start;
        div{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>