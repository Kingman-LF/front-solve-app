<template>
  <div class="qingkuan">
    <div class="title">
      <span></span>
      <span>流转记录情况</span>
    </div>
    <div class="table">
      <table>
        <tr>
          <td class="bgc lie">序号</td>
          <td class="w" v-for="(item,index) in tableData" :key="index">{{item.id}}</td>
        </tr>
        <tr>
          <td class="bgc lie">流转时间</td>
          <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.type}}</td>
        </tr>
        <tr>
          <td class="bgc lie">转出部门</td>
          <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.bumen}}</td>
        </tr>
        <tr>
          <td class="bgc lie">接受部门</td>
          <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.renyuan}}</td>
        </tr>
        <tr>
          <td class="bgc lie">流转类型</td>
          <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.songTime}}</td>
        </tr>
        <tr>
          <td class="bgc lie">联系电话</td>
          <td class="w" v-for="(item,index) in tableData" :key="index">{{item.shenpbumen}}</td>
        </tr>
        <tr>
          <td class="bgc lie">附言</td>
          <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.shenpirenyuan}}</td>
        </tr>
        <tr>
          <td class="bgc lie">退回原因</td>
          <td  class="w" v-for="(item,index) in tableData" :key="index">{{item.shenpiTime}}</td>
        </tr>
        <tr>
          <td class="bgc lie">撤诉人姓名</td>
          <td class="w" v-for="(item,index) in tableData" :key="index">{{item.songshenfuyan}}</td>
        </tr>
        <tr>
          <td class="bgc lie">撤诉人联系电话</td>
          <td class="w" v-for="(item,index) in tableData" :key="index">{{item.shenhefuyan}}</td>
        </tr>
        <tr>
          <td class="bgc lie">督办解释</td>
          <td class="w" v-for="(item,index) in tableData" :key="index">{{item.shenhezhuangtai}}</td>
        </tr>
        <tr>
          <td class="bgc lie">解释人</td>
          <td class="w" v-for="(item,index) in tableData" :key="index">{{item.shenhezhuangtai}}</td>
        </tr>
        <tr>
          <td class="bgc lie">解释部门</td>
          <td class="w" v-for="(item,index) in tableData" :key="index">{{item.shenhezhuangtai}}</td>
        </tr>
        <tr>
          <td class="bgc lie">解释时间</td>
          <td class="w" v-for="(item,index) in tableData" :key="index">{{item.shenhezhuangtai}}</td>
        </tr>
        <tr>
          <td class="bgc lie">解释内容</td>
          <td class="w" v-for="(item,index) in tableData" :key="index">{{item.shenhezhuangtai}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "qingkuan",
  data(){
    return{
      tableData:[
        {id:1,type:'分流审批',bumen:'德清消保分局',renyuan:'钱宁',songTime:'2021-06-11 16:42:06',shenpbumen:'德清消保分局',
          shenpirenyuan:'',shenpiTime:'',songshenfuyan:'',shenhefuyan:'',shenhezhuangtai:''},
        {id:2,type:'分流审批',bumen:'德清消保分局',renyuan:'钱宁',songTime:'2021-06-11 16:42:06',shenpbumen:'',
          shenpirenyuan:'',shenpiTime:'',songshenfuyan:'',shenhefuyan:'',shenhezhuangtai:''},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .qingkuan{
      background-color: #fff;
      margin-bottom:13px;
    .title{
      margin-left:21px;
      padding-top:20px;
      display:flex;
      align-items: center;
      margin-bottom:20px;
      font-size: 24px;
      span{
        color:#0A57FF;
        &:nth-child(1){
          width:28px;
          height:28px;
          //border:1px solid #0A57FF;
          margin-right:11px;
          background:url("../../assets/images/jilu.png") no-repeat;
          background-size:28px 28px;
        }
        &:nth-child(2){
          font-weight: bold;
        }
      }
    }
    .table{
        font-size: 20px;
        margin:0 19px;
        background-color: #fff;
      table{
        border:1px solid #CCCCCC;
        background-color: #fff;
        border-collapse: collapse;
        .bgc{
          background-color:#3296FA ;
          color:#fff;
        }
        tr{
          td{
            text-align:center;
            height:55px;
            line-height: 26px;
            border-bottom: 1px solid #CCCCCC;
            border-right:1px solid #CCCCCC;
            color:#000;
          }
          .lie{
              width:30%;
              padding-left:31px;
              padding-right: 29px;
          }
          .w{
              width:33.33%;
              padding:13px 21px 11px 30px;
          }
        }
      }
    }
  }
</style>