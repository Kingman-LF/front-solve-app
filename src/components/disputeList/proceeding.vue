<template>
  <div class="list">
    <div class="list-item" v-for="(item,index) in proceedingList" :key="item.id">
      <div class="item-num">信访事项ID：{{item.storeid}}</div>
      <div class="item-detail-info">
        <div class="txt">登记人id：<span style="color: #0a57ff">{{item.djrid}}</span></div>
        <div class="txt">信访事项编号：<span>{{item.xfjbh}}</span></div>
        <div class="txt">信访入口：<span>{{item.xfxs}}</span></div>
        <div class="txt">姓名：<span>{{item.xm}}</span></div>
        <div class="txt">住址：<span>{{item.dz}}</span></div>
        <div class="txt">问题属地：<span>{{item.wtsd}}</span></div>
        <div class="txt">问题属地代码：<span>{{item.wtsddm}}</span></span></div>
        <div class="txt">
          办理方式：<div style="color: #0a57ff"><span>{{item.blfsjd}}</span></div>
        </div>
        <div class="txt">去向单位：<span style="color: #0a57ff">{{item.qx}}</span></div>
        <div class="txt">去向单位代码：<span>{{item.qxcode}}</span></div>
        <div class="txt">概况：<span>{{item.gk}}</span></div>
        <div class="txt">信访日期：<span>{{item.xfrq}}</span></div>
        <div class="txt">限办时间：<span>{{item.sfcq}}</span></div>
        <div class="txt">办结时间：<span>{{item.bjsj}}</span></div>
        <div class="txt">登记单位：<span>{{item.djdw}}</span></div>
        <div class="txt">登记单位代码：<span style="color: #0a57ff">{{item.djdwdm}}</span></div>
        <div class="txt">信访部门评价情况：<span>{{item.xfbmpjzt}}</span></div>
        <div class="txt">责任单位评价情况：<span>{{item.zrdwpjzt}}</span></div>
        <div class="txt">信访部门满意度：<span>{{item.xfbmmyd}}</span></div>
        <div class="txt">责任单位满意度：<span>{{item.zrdwmyd}}</span></div>
        <div class="txt">办理人：<span>{{item.blr}}</span></div>
        <div class="txt">办理单位：<span>{{item.bldw}}</span></div>
        <div class="txt">人数：<span style="color: #0a57ff">{{item.rs}}</span></div>
        <div class="txt">证件号码：<span>{{item.zjhm}}</span></div>
        <div class="txt">手机号码：<span>{{item.sjhm}}</span></div>
        <div class="txt">初重件标志：<span>{{item.scxfbz}}</span></div>
        <div class="txt">是否越级访：<span>{{item.yjbz}}</span></div>
        <div class="txt">是否联名信：<span>{{item.jtxfbz}}</span></div>
        <div class="txt">是否集体访：<span>{{item.jtxf}}</span></div>
        <div class="txt">扬言标志：<span style="color: #0a57ff">{{item.yybz}}</span></div>
        <div class="txt">是否抽查：<span>{{item.ccbz}}</span></div>
        <div class="txt">登记人：<span>{{item.djr}}</span></div>
        <div class="txt">登记时间：<span>{{item.djsj}}</span></div>
        <div class="txt">是否匿名：<span>{{item.nmbz}}</span></div>
        <div class="txt">信访渠道：<span>{{item.sjly}}</span></div>
        <div class="txt">信访目的：<span>{{item.xfmd}}</span></div>
        <div class="txt">性别：<span>{{item.xb}}</span></div>
        <div class="txt">民族：<span>{{item.mz}}</span></div>
        <div class="txt">事项原因：<span>{{item.csxfyy}}</span></div>
        <div class="txt">查询码状态：<span style="color: #0a57ff">{{item.cxmzt}}</span></div>
        <div class="txt">是否涉法涉诉：<span>{{item.sfssbz}}</span></div>
        <div class="txt">是否积案：<span>{{item.jabz}}</span></div>
        <div class="txt">热点问题：<span>{{item.rdwt}}</span></div>
        <div class="txt">三跨三分离：<span>{{item.sksflbz}}</span></div>
        <div class="txt">是否转督办：<span>{{item.sfyj}}</span></div>
        <div class="txt">信访标题：<span>{{item.bt}}</span></div>
        <div class="txt">回访标志：<span style="color: #0a57ff">{{item.hfbz}}</span></div>
        <div class="txt">受信人：<span>{{item.sxr}}</span></div>
        <div class="txt">是否办结：<span>{{item.bjbz}}</span></div>
        <div class="txt">是否公开：<span>{{item.sfgk}}</span></div>
        <div class="txt">是否保密：<span>{{item.issecret}}</span></div>
        <div class="txt">内容分类：<span>{{item.nrfl}}</span></div>
        <div class="txt">内容分类代码：<span>{{item.nrflcode}}</span></div>
        <div class="txt">扬按事项重复次数：<span style="color: #0a57ff">{{item.nums}}</span></div>
        <div class="txt">答复意见内容：<span>{{item.filecont}}</span></div>
        <div class="txt">限期答复：<span>{{item.xqdf}}</span></div>
        <div class="txt">投诉举报对象：<span>{{item.jbtsobj}}</span></div>
        <div class="txt">信访事项状态：<span>{{item.xfjclzt}}</span></div>
      </div>
    </div>


  </div>
</template>
<script>
import {getProceedingList} from '../../assets/api/jiufen'
export default{
  data(){
    return{
      proceedingList:[],
    }
  },
  mounted(){
      getProceedingList({page:1,limit:10}).then(res=>{
          console.log(res)
          if(res.code==200){
              this.proceedingList=res.data.data
          }
          console.log(this.proceedingList)
          
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
        display: flex;
        justify-content: flex-start;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        div,span{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>