<template>
  <div class="position">
    <span class="iconfont icon-location">&#xe790;</span>
    深圳市软件产业基地
  </div>
  <div class="search">
    <span class="iconfont icon-search">&#xe699;</span>
    山姆会员店优惠商品
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="" srcset="">
  </div>
  <div class="icons">
    <div
      class="icons__item"
      v-for="item in iconsList"
      :key="item.id"
    >
      <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" alt="" class="icons__item__img">
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { id: 1, imgName: '超市', desc: '超市便利' },
      { id: 2, imgName: '菜市场', desc: '菜市场' },
      { id: 3, imgName: '水果店', desc: '水果店' },
      { id: 4, imgName: '鲜花', desc: '鲜花绿植' },
      { id: 5, imgName: '医药健康', desc: '医药健康' },
      { id: 6, imgName: '家居', desc: '家居时尚' },
      { id: 7, imgName: '蛋糕', desc: '蛋糕' },
      { id: 8, imgName: '签到', desc: '签到' },
      { id: 9, imgName: '大牌免运', desc: '大牌免运' },
      { id: 10, imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
  .position {
    padding: .16rem .24rem .1rem 0;
    line-height: .22rem;
    font-size: .16rem;
    @include ellipsis;
  }
  .search {
    line-height: .32rem;
    background: #f5f5f5;
    color: #b7b7b7;
    border-radius: 0.16rem;
    font-size: .14rem;
    margin-bottom: .12rem;
    .iconfont {
      position: relative;
      display: inline-block;
      top: .03rem;
      padding: 0 0 0 .16rem;
      font-size: .22rem;
    }
  }
  .banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    &__img {
      width: 100%;
    }
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;
    &__item {
      width: 20%;
      &__img {
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
      }
      &__desc {
        margin: .06rem 0 .16rem 0;
        text-align: center;
        color: $content-fontcolor;
      }
    }
  }
  .gap {
    height: .1rem;
    background: $content-bgColor;
    margin: 0 -.18rem;
  }
</style>
