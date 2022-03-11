<template>
  <div class="docker">
    <!-- BEM: block__element--Modifier -->
    <span :class="[`docker__item`, currentDockerItem === index && `docker__item--active`]" v-for="(item, index) in dockerList" :key="index">
      <router-link :to="item.to">
        {{ item.text }}
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  props: ['currentDockerItem'],
  setup () {
    const dockerList = [
      { icon: '', text: '首页', to: '/home' },
      { icon: '', text: '购物车', to: '/cartList' },
      { icon: '', text: '订单', to: '/orderList' },
      { icon: '', text: '我的', to: '/home' }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
  .docker {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 0.49rem;
    background: #efefef;
    border-top: .01rem solid $content-bgColor;
    box-sizing: border-box;
    a {
      color: #000;
      text-decoration: none;
    }
    &__item {
      flex: 1;
      text-align: center;
      line-height: 0.49rem;

      &--active {
        color: #409eff;
        a {
          color: #409eff;
        }
      }

    }
  }
</style>
