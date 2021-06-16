<template>
  <div class="table">
    <table>
      <tr>
        <td class="bgc lie">序号</td>
       <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.id}}</td>
      </tr>
      <tr>
        <td class="bgc lie">送审类型</td>
        <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.type}}</td>
      </tr>
      <tr>
        <td class="bgc lie">送审部门</td>
        <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.bumen}}</td>
      </tr>
      <tr>
        <td class="bgc lie">送审人员</td>
        <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.renyuan}}</td>
      </tr>
      <tr>
        <td class="bgc lie">送审时间</td>
        <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.songTime}}</td>
      </tr>
      <tr>
        <td class="bgc lie">审批部门</td>
        <td class="w" v-for="(item,index) in tableData" :key="index">{{item.shenpbumen}}</td>
      </tr>
      <tr>
        <td class="bgc lie">审批人员</td>
        <td class="w"  v-for="(item,index) in tableData" :key="index">{{item.shenpirenyuan}}</td>
      </tr>
      <tr>
        <td class="bgc lie">审批时间</td>
        <td  class="w" v-for="(item,index) in tableData" :key="index">{{item.shenpiTime}}</td>
      </tr>
      <tr>
        <td class="bgc lie">送审附言</td>
        <td class="w" v-for="(item,index) in tableData" :key="index">{{item.songshenfuyan}}</td>
      </tr>
      <tr>
        <td class="bgc lie">审核附言</td>
        <td class="w" v-for="(item,index) in tableData" :key="index">{{item.shenhefuyan}}</td>
      </tr>
      <tr>
        <td class="bgc lie">审核状态</td>
        <td class="w" v-for="(item,index) in tableData" :key="index">{{item.shenhezhuangtai}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "shenpi",
  data(){
    return{
      tableData:[
        {id:1,type:'分流审批',bumen:'德清消保分局',renyuan:'钱宁',songTime:'2021-06-11 16:42:06',shenpbumen:'德清消保分局',
          shenpirenyuan:'钱宁',shenpiTime:'2021-06-11 16:51:09',songshenfuyan:'请分流审批',shenhefuyan:'同意分流',shenhezhuangtai:'已审批'},
        {id:2,type:'分流审批',bumen:'德清消保分局',renyuan:'钱宁',songTime:'2021-06-11 16:42:06',shenpbumen:'德清消保分局',
          shenpirenyuan:'钱宁',shenpiTime:'2021-06-11 16:51:09',songshenfuyan:'请分流审批',shenhefuyan:'同意分流',shenhezhuangtai:'已审批'},
      ]
    }
  },
  mounted:{

  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
.table{
  height:588px;
  font-size: 20px;
  margin:0 19px;
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
          padding-left:68px;
          padding-right: 29px;
      }
     .w{
         width:33.33%;
         padding:13px 21px 11px 30px;
       }
    }
  }
}
</style>