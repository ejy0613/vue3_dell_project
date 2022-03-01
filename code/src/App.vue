<template>
  <div class="wrapper">
    <div class="position">
      <span class="icon-location"></span>
      深圳市软件产业基地
    </div>
    <div class="search">
      <span class="iconfont icon-search">&#xe699;</span>
      山姆会员店优惠商品
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="" srcset="">
    </div>
  </div>
  <div class="docker">
    <!-- BEM: block__element--Modifier -->
    <span class="docker__item docker__item--active">首页</span>
    <span class="docker__item">购物车</span>
    <span class="docker__item">订单</span>
    <span class="docker__item">我的</span>
  </div>
  <!-- <router-view/> -->
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';
  .wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    width: 100%;
    padding: 0 .18rem;
    box-sizing: border-box;
    color: $content-fontcolor;
    .position {
      padding: .16rem .24rem .1rem 0;
      line-height: .22rem;
      font-size: .16rem;
      @include ellipsis;
    }
    .search {
      line-height: .32rem;
      background: #f5f5f5;
      color: #b7b7b7;
      border-radius: 0.16rem;
      font-size: .14rem;
      margin-bottom: .12rem;
      .iconfont {
        position: relative;
        display: inline-block;
        top: .03rem;
        padding: 0 0 0 .16rem;
        font-size: .22rem;
      }
    }
    .banner {
      &__img {
        width: 100%;
      }
    }
  }
  .docker {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 0.49rem;
    background: #efefef;
    border-top: .01rem solid #f1f1f1;
    box-sizing: border-box;
    &__item {
      flex: 1;
      text-align: center;
      line-height: 0.49rem;
      &--active {
        color: #409eff;
      }
    }
  }
</style>
