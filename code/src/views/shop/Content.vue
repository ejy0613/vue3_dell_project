<template>
  <div class="content">
    <div class="category">
      <div
        :class="{'category__item': true, 'category__item--active': currentCategory === item.tab}"
        v-for="item in categoryList" :key="item.id"
        @click="handleCategoryClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div
        class="product__item"
        v-for="(item, index) in productList" :key="index"
      >
        <img :src="item.imgUrl" alt="" class="product__item__img">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item_sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus" @click="changeCartItem(shopId, item.id, item, -1, shopName)">-</span>
          {{ getProductCount(shopId, item.id) || 0 }}
          <span class="product__number__plus" @click="changeCartItem(shopId, item.id, item, 1, shopName)">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'
import { useCommonCartEffect } from './commonCartEffect'

export default {
  name: 'Content',
  props: {
    shopName: {
      type: String,
      default: ''
    }
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const data = reactive({
      currentCategory: 'all',
      categoryList: [{ id: 0, tab: 'all', name: '全部商品' },
        { id: 1, tab: 'seckill', name: '秒杀' },
        { id: 2, tab: 'fruit', name: '新鲜水果' },
        { id: 3, tab: 'food', name: '休闲食品' },
        { id: 4, tab: 'vegetable', name: '时令蔬菜' },
        { id: 5, tab: 'meat', name: '肉蛋家禽' }],
      productList: [],
      shopId: route.params.id
    })

    const { cartList, changeCartItemInfo } = useCommonCartEffect()

    async function getCategoryData () {
      const result = await get(`/api/shop/${data.shopId}/products`, { tab: data.currentCategory })
      if (result?.code === 200 && result?.data?.length) {
        data.productList = result.data
      }
    }

    function getProductCount (shopId, productId) {
      return cartList?.[shopId]?.productList?.[productId]?.count
    }

    function handleCategoryClick (tab) {
      data.currentCategory = tab
    }

    function changeCartShopName (shopId, shopName) {
      store.commit('changeCartShopName', { shopId, shopName })
    }

    function changeCartItem (shopId, productId, productInfo, count, shopName) {
      changeCartItemInfo(shopId, productId, productInfo, count)
      changeCartShopName(shopId, shopName)
    }

    watchEffect(() => { getCategoryData() })

    return { ...toRefs(data), cartList, getProductCount, handleCategoryClick, changeCartItem }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
  .content {
    display: flex;
    position: absolute;
    top: 1.5rem;
    bottom: .5rem;
    left: 0;
    right: 0;
  }
  .category {
    height: 100%;
    width: .76rem;
    background: $search-bgColor;
    overflow-y: scroll;
    &__item {
      line-height: .4rem;
      text-align: center;
      font-size: .14rem;
      color: #333;
      &--active {
        background: $bgColor;
      }
    }
  }
  .product {
    flex: 1;
    overflow-y: scroll;
    &__item {
      position: relative;
      display: flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid #f1f1f1;
      box-sizing: border-box;
      &__detail {
        overflow: hidden;
      }
      &__img {
        display: block;
        width: .68rem;
        height: .68rem;
        margin-right: .16rem;
      }
      &__title {
        margin: 0;
        line-height: .2rem;
        font-size: .14rem;
        color: $content-fontcolor;
        @include ellipsis;
      }
      &__sales {
        margin: 0.06rem 0;
        line-height: .16rem;
        font-size: .12rem;
        color: $content-fontcolor;
      }
      &__price {
        margin: 0;
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
</style>
