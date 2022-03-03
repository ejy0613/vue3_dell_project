<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link :to="`/shop/${item.id}`" v-for="item in nearbyList" :key="item.id">
      <ShopInfo  :item="item" />
    </router-link>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    onMounted(() => {
      getNearbyList()
    })

    const nearbyList = ref([])

    const getNearbyList = async () => {
      const result = await get('/api/shop/hotList', { pageIndex: 1 })
      if (result.code === 200) {
        nearbyList.value = result.data
      }
    }

    return {
      nearbyList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
  .nearby {
    & > a {
      text-decoration: none;
    }
    &__title {
      margin: .16rem 0 .02rem 0;
      font-size: .18rem;
      font-weight: normal;
      color: $content-fontcolor;
    }
    &__item {
      display: flex;
      padding-top: .12rem;
      &__img {
        width: .56rem;
        height: .56rem;
        margin-right: .16rem;
      }
    }
    &__content {
      flex: 1;
      padding-bottom: .12rem;
      border-bottom: 0.01rem solid $content-bgColor;
      &__title {
        line-height: .22rem;
        font-size: .16rem;
        color: $content-fontcolor;
      }
      &__tags {
        margin-top: .08rem;
        line-height: .18rem;
        font-size: .13rem;
        color: $content-fontcolor;
      }
      &__tag {
        margin-right: .16rem;
      }
      &__highlight {
        margin: .08rem 0 0;
        line-height: .18rem;
        font-size: .13rem;
        color: #E93B3B;
      }
    }
  }
</style>
