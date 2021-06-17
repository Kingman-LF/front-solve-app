<template>
  <div class="list">
    <div class="list-item" v-for="(item,index) in completedList" :key="index">
      <div class="item-num">登记编号：{{ item.tsRegister}}</div>
      <div class="item-detail-info">
        <div class="txt">类型：<span style="color: #0a57ff">{{ item.tsType }}</span></div>
        <div class="txt">登记时间：2021-06-15 10:47:39</div>
        <div class="txt">
          办理情况状态：<span style="color: #0a57ff">{{ item.tsHandlingStatus }}</span>
        </div>
        <div class="txt">提供方姓名：{{ item.tsProvider }}</div>
        <div class="txt">内容：{{ item.tsContent }}</div>
        <div class="txt">登记部门：{{ item.tsDefendantName }}</div>
      </div>
    </div>



  </div>
</template>
<script>
import {listDept} from '../../assets/api/index'
export default{
  data(){
    return{
      completedList:[],
      limit:10,
      page:1,
      pageFlag:false,
      flag:true,
    }
  },
  mounted(){
    listDept({tsProcessingDept: "湖州市",tsHandlingStatus:"办结已归档",page:'1',limit:"10"}).then(res => {
      // console.log(res)
      // this.completedList = res.data;
      //  滚动分页
      if(res.code == 200){
       if( this.flag){
         this.completedList = this.completedList.concat(res.data);
        //小于每页限制的数量
        if(res.count < this.limit){
          this.pageFlag = true; //禁止滚动
        }else{
          this.pageFlag = false; // 启用
          this.page++;
        }
       }else{
         this.completedList = res.data;
         this.pageFlag = false;
       }
      }

    })

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
      }
    }
  }
}
</style>