import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // shopId: {
      //   productId: {
      //     id: 2,
      //     name: '车厘子500g/份',
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/cherry.png',
      //     sales: 10,
      //     price: 99.6,
      //     oldPrice: 119.6
      //   }
      // }
    }
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, count } = payload
      const shopInfo = state?.cartList?.[shopId] ?? {}
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      if (product.count === 0 && count < 0) return false
      product.count += count
      product.check = true
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },

    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const shopInfo = state.cartList[shopId]
      const product = shopInfo[productId]
      product.check = !product.check
    },

    cleanCartProduct (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    }

  },
  actions: {
  },
  modules: {
  }
})
