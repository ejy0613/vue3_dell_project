<template>
  <div class="shop">
    <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" class="shop__img">
    <div :class="{'shop__content': true, 'shop__content--bordered': hideBorder ? false : true }">
      <div class="shop__content__title">{{ item.title }}</div>
      <div class="shop__content__tags">
        <span
          class="shop__content__tag"
          v-for="(tagItem, index) in item.tags"
          :key="index"
        >
          {{ tagItem }}
        </span>
      </div>
      <p class="shop__content__highlight">{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
  .shop {
    display: flex;
    padding-top: .12rem;
    &__img {
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }
    &__content {
      flex: 1;
      padding-bottom: .12rem;
      &--bordered {
        border-bottom: 0.01rem solid $content-bgColor;
      }
      &__title {
        line-height: .22rem;
        font-size: .16rem;
        color: $content-fontcolor;
      }
      &__tags {
        margin-top: .08rem;
        line-height: .18rem;
        font-size: .13rem;
        color: $content-fontcolor;
      }
      &__tag {
        margin-right: .16rem;
      }
      &__highlight {
        margin: .08rem 0 0;
        line-height: .18rem;
        font-size: .13rem;
        color: #E93B3B;
      }
    }
  }

</style>
