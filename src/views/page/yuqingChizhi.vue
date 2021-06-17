<template>
  <div class="yuqing">
    <myHead title="舆情处置"></myHead>
    <div class="yuqingCon">
      <div class="yuqingTit">
        <div class="yuqing-item" :class="{current:index==tabNum}" v-for="(item,index) in tabList" :key="index" @click="completedFn(index)">
          <span><img :src="require('@/assets/images/'+item.icon)" alt=""></span>
          <span>{{ item.tit }}</span>
        </div>
      </div>

      <div class="yuqing-list">
        <yuqing v-show="tabNum==0"></yuqing>
        <completed v-show="tabNum==1"></completed>
      </div>
    </div>
  </div>
</template>

<script>
import myHead from "@/components/myHead/myHead";
import yuqing from '../../components/yuqing/yuqing'
import completed from "@/components/yuqing/completed";
export default {
  name: "yuqingChizhi",
  data(){
    return{
      tabNum:0,
      tabList:[
        {icon:'write.png',tit:'待处置'},
        {icon:'write.png',tit:'办理中'},
        {icon:'yes.png',tit:'已办结'}
      ]
    }
  },
  components:{
    myHead,
    yuqing,
    completed,
  },
  methods:{

    completedFn(index){
      this.tabNum = index;
    }
  }
}
</script>

<style scoped lang="scss">
  .current{
    border-bottom:1px solid #0A57FF;
    color:#0A57FF;
  }
  .yuqing{
    width:100%;
    height:100%;
    background:url('../../assets/images/bg.png') no-repeat;
  }
  .yuqingCon{
    height:96px;
    .yuqingTit{
      display:flex;
      font-weight: bold;
      justify-content: space-around;
      margin-bottom:20px;
      .yuqing-item{
        display:flex;
        width:45%;
        height:96px;
        line-height:32px;
        align-items: center;
        justify-content: center;
        padding-top:25px;
        font-size:18px;
        span{
         &:nth-child(1){
           display:inline-block;
           width:28px;
           height:28px;
           //border:1px solid #0A57FF;
           margin-right:10px;
           img{
             width:28px;
             height:28px;
           }
         }
        }
      }
    }
    .yuqing-list{
      margin:0 19px;
      font-size:18px;
    }
  }
</style>