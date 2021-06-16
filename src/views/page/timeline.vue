<template>
  <!-- 时间线 -->
  <div class="box">
    <div class="timebox">
      <!-- <div class="time-item">
        <div class="timer">2021-06-11</div>
        <div class="line">
          <div class="l">
            <div class="cicle"></div>
          </div>
        </div>
        <div class="content">
          <div class="con-title">登记受理</div>
          <div class="con-txt">
            该记录由德清消保分局机构的钱宁，于2021-06-11<br />16:42:06进行登记受理
          </div>
        </div>
      </div> -->

      <div class="line-item">
        <div class="item-time">2021-06-11</div>
        <div class="item-icon">
          <div class="icon_one">
            <img src="../../assets/images/workplanCicle.png" />
            <div class="shuxian"></div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">登记受理</div>
          <div class="item-txt">
            该记录由
            <span style="color:#0A57FF;">德清消保分局</span>
            机构的
            <span style="color:#0A57FF;">钱宁</span>
            ，于2021-06-11 16:42:06进行登记受理
          </div>
        </div>
      </div>

      <div class="line-item">
        <div class="item-time">2021-06-11</div>
        <div class="item-icon">
          <div class="icon_one">
            <img src="../../assets/images/workplanCicle.png" />
            <div class="shuxian"></div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">登记受理</div>
          <div class="item-txt">
            该记录由
            <span style="color:#0A57FF;">德清消保分局</span>
            机构的
            <span style="color:#0A57FF;">钱宁</span>
            ，于2021-06-11 16:42:06进行登记受理
          </div>
        </div>
      </div>

      <div class="line-item">
        <div class="item-time">2021-06-11</div>
        <div class="item-icon">
          <div class="icon_one">
            <img src="../../assets/images/workplanCicle.png" />
            <div class="shuxian"></div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">登记受理</div>
          <div class="item-txt">
            该记录由
            <span style="color:#0A57FF;">德清消保分局</span>
            机构的
            <span style="color:#0A57FF;">钱宁</span>
            ，于2021-06-11 16:42:06进行登记受理
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.box {
  text-align: center;
  background: #f5f5f5;
  .timebox {
    width: 100%;
    height: 500px;
    padding: 0 21px;
    box-sizing: border-box;


    // .time-item {
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   margin-bottom: 15px;
    //   .timer {
    //     width: 17%;
    //     font-size: 20px;
    //     font-weight: 400;
    //     color: #0a57ff;
    //   }
    //   .line {
    //     width: 5%;
    //     .l {
    //       width: 2px;
    //       height: 100px;
    //       background: #a7a7a7;
    //       position: relative;
    //       .cicle {
    //         width: 18px;
    //         height: 18px;
    //         background: #0a57ff;
    //         border-radius: 50%;
    //         position: absolute;
    //         left: 50%;
    //         top: 40%;
    //         transform: translateX(-50%);
    //       }
    //     }
    //   }
    //   .content {
    //     width: 69%;
    //     text-align: left;
    //     height: 120px;
    //     background: #ffffff;
    //     box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
    //     border-radius: 8px;
    //     padding-left: 20px;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     .con-title {
    //       font-size: 20px;
    //       font-weight: 400;
    //       color: #0a57ff;
    //     }
    //     .con-txt {
    //       font-size: 18px;
    //       font-weight: 400;
    //       color: #000000;
    //     }
    //   }
    // }

    .line-item {
      width: 100%;
      padding-bottom: 30px;
      @extend .flex-row;
      .item-time {
        width: 20%;
        line-height: 120px;
        font-size: 20px;
        font-weight: 400;
        color: #0a57ff;
      }
      .item-icon {
        width: 5%;
        text-align: center;
        position: relative;
        img {
          width: 28px;
          height: 28px;
        }
        .shuxian {
          width: 4px;
          height: 100px;
          position: absolute;
          top: 45px;
          bottom: 0px;
          left: 15px;
          background-color: #99cbf9;
          margin: 0 auto;
        }
      }
      .item-box {
        width: 65%;
        // width: 440px;
        text-align: left;
        height: 120px;
        background: #ffffff;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .item-title {
         font-size: 20px;
          font-weight: 400;
          color: #0a57ff;
        }
        .item-txt {
          color: #000;
          font-size: 18px;
        }
      }
    }
  }
}
</style>