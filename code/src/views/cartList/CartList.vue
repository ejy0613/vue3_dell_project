<template>
  <div>{{ pageName }}</div>
  <div @click="handleButtonClick">change</div>
  <!-- <div>
    子组件内容：
    <Suspense>
      <template #default>
        <async-com />
      </template>
      <template #fallback>Loading ...</template>
    </Suspense>
  </div> -->
  <Cart />
</template>

<script setup>
import { ref } from 'vue'
import Cart from '../shop/Cart.vue'

// const asyncCom = defineAsyncComponent(() => import('./AsyncComp.vue'))

const pageName = ref('CartList Page')

const handleButtonClick = () => {
  pageName.value = 'change Title'
}
</script>

<style lang="scss" scoped>

</style>
