<template>
  <div class="head">{{title}}</div>
</template>

<script>
export default {
  name: "myHead",
  props:{
    title:{
      type:String,
      default:'投诉调处处置闭环'
    }
  }
}
</script>

<style scoped lang="scss">
.head{
  height:88px;
  background-color: #0A57FF;
  font-size:36px;
  color:#ffffff;
  text-align:center;
  line-height:88px;
}
</style>