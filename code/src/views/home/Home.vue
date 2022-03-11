<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker :currentDockerItem="0" />
</template>

<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from '../../components/Docker.vue'
export default {
  name: 'Home',
  components: { StaticPart, Nearby, Docker }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
  .wrapper {
    @include wrapper
  }
</style>
