import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  return localStorage.cartList ? JSON.parse(localStorage.cartList) : {}
}

export default createStore({
  state: {
    cartList: getLocalCartList()
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, count } = payload
      const shopInfo = state?.cartList?.[shopId] || { shopName: '', productList: {} }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      if (product.count === 0 && count < 0) return false
      product.count += count
      product.check = true
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },

    changeCartShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state?.cartList?.[shopId] || { shopName: '', productList: {} }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },

    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const shopInfo = state.cartList[shopId]
      const product = shopInfo.productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },

    cleanCartProduct (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },

    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (const i in products) {
          const product = products[i]
          product.check = true
        }
      }
      setLocalCartList(state)
    },

    clearCartData (state, shopId) {
      state.cartList[shopId].productList = {}
    }

  },
  actions: {
  },
  modules: {
  }
})
