<template>
  <div class="conLogin">
<!--    系统信息-->
    <xt></xt>
<!-- 投诉方信息   -->
    <tsfInfo></tsfInfo>
<!--    被投诉方信息-->
    <btsfInfo></btsfInfo>
  </div>
</template>

<script>
import xt from './xt';
import tsfInfo from './tsfInfo';
import btsfInfo from './btsfInfo';
export default {
  name: "denglu",
  components:{
    xt,
    tsfInfo,
    btsfInfo
  }
}
</script>

<style scoped lang="scss">
  .conLogin{
    font-size:24px;
  }
</style>