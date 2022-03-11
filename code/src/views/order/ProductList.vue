<template>
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
                {{ (item.price * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { productList, shopName } = useCommonCartEffect(shopId)
    return { productList, shopName }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
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
</style>
