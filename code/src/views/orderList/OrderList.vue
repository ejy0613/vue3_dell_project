<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div class="order" v-for="(item, index) in orderList" :key=" index">
        <div class="order__title">
          {{ item.shopName }}
          <span class="order__status">
            {{ item.isCanceled ? '已取消' : '已下单' }}
          </span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <template v-for="(innerItem, innerIndex) in item.products" :key="innerIndex">
              <img v-if="innerIndex <= 3" :src="innerItem.product.imgUrl" alt="" class="order__content__img" />
            </template>
          </div>
          <div class="order__content__info">
            <div class="order__content__price">￥{{ item.totalPrice }}</div>
            <div class="order__content__count">共{{ item.total }}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentDockerItem="2" />
</template>
<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import Docker from '../../components/Docker.vue'

const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getOrderList = async () => {
    const result = await get('/api/orderList')
    if (result && result?.code === 200) {
      const orderList = result.data
      orderList.forEach(order => {
        const products = order.products || []
        let total = 0
        let totalPrice = 0
        products.forEach(productItem => {
          total += (productItem.orderSales || 0)
          totalPrice += (productItem?.product?.price * productItem?.orderSales || 0)
        })
        order.total = total
        order.totalPrice = totalPrice
      })
      data.list = orderList
    }
  }
  getOrderList()
  const { list } = toRefs(data)
  return { list }
}

export default {
  name: 'OrderList',
  components: { Docker },
  setup () {
    const { list: orderList } = useOrderListEffect()
    console.log(orderList)
    return { orderList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
  @include wrapper;
  padding: 0;
  background: #f6f6f6;
}
.title {
  line-height: .44rem;
  background: #fff;
  font-size: .16rem;
  color: #333;
  text-align: center;
}
.orders {

}
.order {
  margin: .16rem .18rem;
  padding: .16rem;
  background: #fff;
  &__title {
    margin-bottom: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: #333;
  }
  &__status {
    float: right;
    font-size: .14rem;
    color: #999;
  }
  &__content {
    display: flex;
    &__imgs {
      flex: 1;
    }
    &__img {
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
    &__info {
      width: .7rem;
    }
    &__price {
      margin-bottom: .04rem;
      font-size: .14rem;
      color: #e93b3b;
      text-align: right;
    }
    &__count {
      line-height: .14rem;
      font-size: .12rem;
      color: #333;
      text-align: right;
    }
  }
}
</style>
