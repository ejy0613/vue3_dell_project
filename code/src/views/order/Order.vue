<template>
  <div class="wrapper">
    <TopArea />
    <ProductList :product-list="productList" :shop-name="shopName" />
    <BottomArea />
  </div>

</template>
<script>

import TopArea from './TopArea.vue'
import ProductList from './ProductList.vue'
import BottomArea from './BottomArea.vue'

export default {
  name: 'Order',
  components: { TopArea, ProductList, BottomArea }
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  overflow: hidden;
}

</style>
