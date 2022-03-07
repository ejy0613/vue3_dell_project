<template>
  <div class="cart">
    <!-- 购物车商品 -->
    <div class="product">
      <div class="product__header">
        <div class="product__header__all">
          <span
            class="product__header__icon iconfont"
            v-html="checkedAll ? ' &#xe70f;' : '&#xe6f7;'"
            @click="handleCheckedAllClick"
          ></span>
          全选
        </div>
        <div class="product__header__clear" @click="cleanCartProduct($route.params.id)">清空购物车</div>
      </div>
      <template
        v-for="(item, index) in productList" :key="index"
      >
        <div  class="product__item" v-if="item.count > 0">
          <div
            class="product__item__checked iconfont"
            v-html="item.check ? ' &#xe70f;' : '&#xe6f7;'"
            @click="changeCartItemChecked(shopId, item.id)"
          >
          </div>
          <img :src="item.imgUrl" alt="" class="product__item__img">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>

            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product__number">
            <span class="product__number__minus" @click="changeCartItemInfo(shopId, item.id, item, -1)">-</span>
            {{ item.count || 0 }}
            <span class="product__number__plus" @click="changeCartItemInfo(shopId, item.id, item, 1)">+</span>
          </div>
        </div>
      </template>
    </div>
    <!-- 结算 -->
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;{{ totalPrice }}</span>
      </div>
      <div class="check__button">去结算</div>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { useCommonCartEffect } from './commonCartEffect'

const useCartEffect = (shopId) => {
  const { changeCartItemInfo, changeCartItemChecked } = useCommonCartEffect()

  const store = useStore()
  const cartList = store.state.cartList
  const total = computed(() => {
    const { count } = onCartChange()
    return count
  })
  const totalPrice = computed(() => {
    const { price } = onCartChange()
    return price
  })
  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })

  const onCartChange = () => {
    let count = 0
    let price = 0
    const productList = cartList[shopId]
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
        if (product.check) {
          price += (product.count * product.price)
        }
      }
    }
    return { count, price: price.toFixed(2) }
  }

  const cleanCartProduct = (shopId) => {
    store.commit('cleanCartProduct', { shopId })
  }

  return { productList, total, totalPrice, changeCartItemInfo, changeCartItemChecked, cleanCartProduct }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { productList, total, totalPrice, changeCartItemInfo, changeCartItemChecked, cleanCartProduct } = useCartEffect(shopId)

    const checkedAll = ref(false)
    const handleCheckedAllClick = () => {}
    return {
      checkedAll,
      productList,
      total,
      totalPrice,
      shopId,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProduct,
      handleCheckedAllClick
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
  .cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .product {
    flex: 1;
    background: #FFF;
    overflow-y: scroll;
    &__header {
      display: flex;
      line-height: .52rem;
      border-bottom: 0.01rem solid #f1f1f1;
      font-size: .14rem;
      color: #333;
      &__all {
        width: .64rem;
        margin-left: .18rem;
      }
      &__icon {
        color: #0091ff;
        font-size: .16rem;
      }
      &__clear {
        flex: 1;
        margin-right: .16rem;
        text-align: right;
      }
    }
    &__item {
      position: relative;
      display: flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid #f1f1f1;
      box-sizing: border-box;
      &__checked {
        line-height: .5rem;
        margin-right: .2rem;
        color: #0091ff;
        font-size: .2rem;
      }
      &__detail {
        overflow: hidden;
      }
      &__img {
        display: block;
        width: .46rem;
        height: .46rem;
        margin-right: .16rem;
      }
      &__title {
        margin: 0;
        line-height: .2rem;
        font-size: .14rem;
        color: $content-fontcolor;
        @include ellipsis;
      }
      &__price {
        margin: 0.06rem 0 0;
        line-height: .2rem;
        font-size: .14rem;
        color: #E93B3B;
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
      .product__number {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        bottom: .12rem;
        &__minus, &__plus {
          display: inline-block;
          width: .2rem;
          height: .2rem;
          line-height: .16rem;
          border-radius: 50%;
          font-size: .2rem;
          text-align: center;
          box-sizing: border-box;
        }
        &__minus {
          border: 0.01rem solid #666;
          color: #666;
          margin-right: .06rem;
        }
        &__plus {
          background: #0091ff;
          color: $bgColor;
          margin-left: .06rem;
        }
      }
    }
  }
  .check {
    display: flex;
    height: .5rem;
    line-height: .5rem;
    border-top: .01rem solid #f1f1f1;
    box-sizing: border-box;
    &__icon {
      position: relative;
      width: .84rem;
      &__img {
        display: block;
        margin: .12rem auto;
        width: .28rem;
        height: .26rem;
      }
      &__tag {
        position: absolute;
        top: .04rem;
        right: .2rem;
        width: .2rem;
        height: .2rem;
        line-height: .2rem;
        font-size: .12rem;
        color:#FFF;
        text-align: center;
        background: #E93B3B;
        border-radius: 50%;
        transform: scale(.5);
        transform-origin: left center;
      }
    }
    &__info {
      flex: 1;
      font-size: .12rem;
      color: #333;
      &__price {
        font-size: .18rem;
        color: #E93B3B;
      }
    }
    &__button {
      width: .98rem;
      font-size: .14rem;
      color: #fff;
      text-align: center;
      background: #4FB0F9;
    }

  }
</style>
