<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from './Docker.vue'
export default {
  name: 'Home',
  components: { StaticPart, Nearby, Docker }
}
</script>

<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
  .wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    width: 100%;
    padding: 0 .18rem .15rem .18rem;
    box-sizing: border-box;
    color: $content-fontcolor;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
