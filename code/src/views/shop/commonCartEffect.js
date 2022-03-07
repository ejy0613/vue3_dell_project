// 购物车相关逻辑
import { useStore } from 'vuex'
export const useCommonCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, count) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, count })
  }

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  return { cartList, changeCartItemInfo, changeCartItemChecked }
}
