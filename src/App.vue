<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
body {
  background: #f4f5f7;
}
#app {
  color:#000;
  font-weight: 400;
  font-family: "HarmonyOS Sans SC Black";
  font-size:24px;
}
.common {
  background-color: #fff;
  margin-top: 12px;
  padding: 0 16px;
  //border-radius: 4px;
  overflow: hidden;
  .title {
    position: relative;
    border-bottom: 1px solid #dddddd;
    line-height: 55px;
    font-size: 18px;
    font-weight: 600;
    font-size: 18px !important;
    color: #333333;
  }
  .content {
    //padding: 16px;
  }


}
</style>
