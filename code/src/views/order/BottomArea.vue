<template>
  <div class="order">
    <div class="order__price">实付金额：<b>&yen; {{ calculations.totalPrice }}</b></div>
    <div class="order__btn">提交订单</div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { calculations } = useCommonCartEffect(shopId)
    return { calculations }
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
</style>
