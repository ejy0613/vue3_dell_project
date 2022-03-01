<template>
  <div class="docker">
    <!-- BEM: block__element--Modifier -->
    <span :class="[`docker__item`, currentDockerItem === index && `docker__item--active`]" v-for="(item, index) in dockerList" :key="index">
      {{ item.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const currentDockerItem = 0
    const dockerList = [
      { icon: '', text: '首页' },
      { icon: '', text: '购物车' },
      { icon: '', text: '订单' },
      { icon: '', text: '我的' }
    ]
    return {
      currentDockerItem,
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
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
    &__item {
      flex: 1;
      text-align: center;
      line-height: 0.49rem;
      &--active {
        color: #409eff;
      }
    }
  }
</style>
