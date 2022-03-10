<template>
  <div class="wrapper">
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
    <div class="products">
      <div class="products__title">{{ shopName }}</div>
      <div class="products__list">
        <template v-for="item in productList" :key="item.id">
          <div class="product__item" v-if="item.count > 0">
            <img :src="item.imgUrl" alt="" class="product__item__img">
            <div class="product__item__detail">
              <h4 class="product__item__title">{{ item.name }}</h4>
              <p class="product__item__price">
                <span>
                  <span class="product__item__yen">&yen;</span>
                  {{ item.price }} x {{ item.count }}
                </span>
                <span class="product__item__total">
                  <span class="product__item__yen">&yen;</span>
                  {{ item.price * item.count }}
                </span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="order">
      <div class="order__price">实付金额：<b>&yen; {{ calculations.totalPrice }}</b></div>
      <div class="order__btn">提交订单</div>
    </div>
  </div>

</template>
<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { productList, shopName, calculations } = useCommonCartEffect(shopId)
    return { productList, shopName, calculations }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  overflow: hidden;
}
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
.products {
  position: relative;
  margin: .16rem .18rem .55rem;
  background: #fff;
  &__title {
    padding: .16rem .16rem 0 .16rem;
    font-size: .16rem;
    color: #333;
  }
  &__list {
    overflow-y: scroll;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3.9rem;
    background: #fff;
  }
  .product__item {
    position: relative;
    display: flex;
    padding: .16rem;
    box-sizing: border-box;
    &__img {
      display: block;
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex: 1;
      overflow: hidden;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: #E93B3B;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: #000;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: #999;
      text-decoration: line-through;
    }
  }
}
.order {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: .49rem;
  line-height: .49rem;
  background: #fff;
  &__price {
    flex: 1;
    font-size: .14rem;
    color: #333;
    text-indent: .24rem;
  }
  &__btn {
    width: .9rem;
    background: #409eff;
    font-size: .14rem;
    color: #fff;
    text-align: center;
  }
}
</style>
