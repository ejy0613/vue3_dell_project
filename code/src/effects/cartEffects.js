// 购物车相关逻辑
import { computed } from 'vue'
import { useStore } from 'vuex'
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList

  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {}
    const isNotEmptyProductList = {}
    for (const i in productList) {
      const product = productList[i]
      if (product.count > 0) {
        isNotEmptyProductList[i] = product
      }
    }
    return isNotEmptyProductList
  })

  const shopName = computed(() => {
    return cartList[shopId]?.shopName || ''
  })

  const calculations = computed(() => {
    const result = { total: 0, totalPrice: 0, checkedAll: true }
    if (productList.value) {
      for (const i in productList.value) {
        const product = productList.value[i]
        result.total += product.count
        if (product.check) {
          result.totalPrice += (product.count * product.price)
        }
        if (!product.check && product.count > 0) {
          result.checkedAll = false
        }
      }
    }
    result.totalPrice = result.totalPrice.toFixed(2)
    return result
  })

  const changeCartItemInfo = (shopId, productId, productInfo, count) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, count })
  }

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  return { cartList, productList, shopName, calculations, changeCartItemInfo, changeCartItemChecked }
}
