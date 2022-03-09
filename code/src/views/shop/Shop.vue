<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont icon-back" @click="$router.back()">&#xe679;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont icon-search">&#xe699;</span>
        <input class="search__content__input" placeholder="请输入产品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" />
    <Content :shop-name="item.title" />
    <Cart />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
import Content from './Content.vue'
import Cart from './Cart.vue'

// 获取当前商铺信息
const useShopInfoEffect = () => {
  const data = reactive({ item: {} })
  const getShopInfo = async (route) => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result.code === 200 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getShopInfo }
}

export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },
  setup () {
    const route = useRoute()

    const { item, getShopInfo } = useShopInfoEffect()

    getShopInfo(route)

    return { item }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
  .wrapper {
    padding: 0 .18rem;
  }
  .search {
    display: flex;
    height: .32rem;
    line-height: .32rem;
    margin: .14rem 0 .04rem 0;
    &__back {
      width: .3rem;
      font-size: .24rem;
      color: #B6B6B6;
    }
    &__content {
      display: flex;
      flex: 1;
      background: $search-bgColor;
      border-radius: .16rem;
      &__icon {
        display: inline-block;
        width: .44rem;
        text-align: center;
        color: #B7B7B7;
      }
      &__input {
        display: block;
        width: 100%;
        height: .32rem;
        padding-right: .2rem;
        border: none;
        outline: none;
        background: none;
        font-size: .14rem;
        color: $content-fontcolor;
      }
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
</style>
