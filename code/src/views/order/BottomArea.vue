<template>
  <div class="order">
    <div class="order__price">实付金额：<b>&yen; {{ calculations.totalPrice }}</b></div>
    <div class="order__btn" @click="confirmPopupVisible = true">提交订单</div>
  </div>
  <div class="mask" v-if="confirmPopupVisible" @click.self="confirmPopupVisible = false">
    <div class="mask__content">
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--cancel"
          @click="handleOrderConfirm(false)"
        >
          取消订单
        </div>
        <div
          class="mask__content__btn mask__content__btn--confirm"
          @click="handleOrderConfirm(true)"
        >
          确认支付
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '../../effects/cartEffects'
import { post } from '../../utils/request'
export default {
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const confirmPopupVisible = ref(false)
    const shopId = parseInt(route.params.id, 10)
    const { calculations, shopName, productList } = useCommonCartEffect(shopId)

    const handleOrderConfirm = async (isCanceled) => {
      const products = []
      for (const i in productList.value) {
        const product = productList.value[i]
        products.push({ id: product.id, num: product.count })
      }
      const result = await post('/api/order', {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCanceled,
        products
      })
      if (result && result.code === 200) {
        store.commit('clearCartData', shopId)
        confirmPopupVisible.value = false
        router.push('/orderList')
      }
    }
    return { confirmPopupVisible, calculations, handleOrderConfirm }
  }
}
</script>
<style lang="scss" scoped>
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
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background: rgba($color: #000000, $alpha: .5);
  &__content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background: #FFF;
    border-radius: .04rem;
    text-align: center;
    &__title {
      margin-top: .24rem 0 0 .24rem;
      line-height: .26rem;
      font-size: .18rem;
      color: #333;

    }
    &__desc {
      margin-top: .08rem 0 0;
      font-size: .14rem;
      color: #666;
    }
    &__btns {
      margin: .24rem .58rem;
      display: flex;
      justify-content: space-between;
    }
    &__btn {
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      text-align: center;
      border: .01rem solid #409eff;
      border-radius: .16rem;
      &--cancel {
        margin-right: .24rem;
        color: #409eff;
      }
      &--confirm {
        background: #409eff;
        color: #fff;
      }
    }

  }
}
</style>
