<template>
  <div class="list">
    <div class="list-item" v-for="(item,index) in reconsiderList" :key="index">
      <div class="item-num">案号：{{item.jfAnhao}}</div>
      <div class="item-detail-info">
        <div class="txt">序号：<span style="color: #0a57ff">{{item.jfId}}</span></div>
        <div class="txt">收到时间：{{item.jfSdsj}}</div>
        <div class="txt">申请人：{{item.jfSqr}}</div>
        <div class="txt">被申请人：{{item.jfBsqr}}</div>
        <div class="txt">复议结果：{{item.jfFyjg}}</div>
        <div class="txt">
          类型：<div style="color: #0a57ff">{{item.jfAnyiu}}</div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import {getReconsiderList} from '../../assets/api/jiufen'
export default{
  data(){
    return{
      reconsiderList:[],
      // limit:10,
      // page:1,
    }
  },
  mounted(){
      getReconsiderList({page:1,limit:10}).then(res=>{
          // console.log(res)
          if(res.code==200){
            this.reconsiderList=res.data.data
            // console.log(this.reconsiderList)
          }
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