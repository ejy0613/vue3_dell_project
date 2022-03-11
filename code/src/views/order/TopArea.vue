<template>
  <div class="top">
    <div class="top__bgcolor"></div>
    <div class="top__header">
      <span class="iconfont top__header__back" @click="$router.back()">&#xe679;</span>
      <span>确认订单</span>
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">深圳市软件产业基地</div>
      <div class="top__receiver__info">
        <span class="top__receiver__name">Joy（先生）</span>
        <span class="top__receiver__phone">13333333333</span>
      </div>
      <div class="iconfont top__receiver__enter">&#xe679;</div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255, 0) 4%, #409eff 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
    &__back {
      position: absolute;
      left: .18rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #fff;
    border-radius: .04rem;
    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      font-weight: 600;
      color: #333;
    }
    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: #333;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      color: #666;
      &__name {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
      }
    }
    &__enter {
      transform: rotate(180deg);
      position: absolute;
      right: .16rem;
      top: 0.55rem;
      color: #666;
      font-size: .16rem;
    }
  }
}
</style>
