<template>
  <div class="lizhuan">
<!--    当前记录信息-->
    <jiluInfo></jiluInfo>
<!--    流转记录情况-->
    <qingkuang></qingkuang>
  </div>
</template>

<script>
import jiluInfo from './jiluInfo';
import qingkuang from './qingkuan';
export default {
  name: "liuzhuan",
  components:{
    jiluInfo,
    qingkuang
  }
}
</script>

<style scoped lang="scss">

</style>