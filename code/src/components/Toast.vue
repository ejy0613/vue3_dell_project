<template>
  <div class="toast">
    {{ message }}
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'

export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}

export const useToastEffect = () => {
  const toastData = reactive({ toastStatus: false, toastMessage: '' })
  const showToast = (message) => {
    toastData.toastStatus = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.toastStatus = false
      toastData.toastMessage = ''
    }, 2000)
  }
  const { toastStatus, toastMessage } = toRefs(toastData)
  return { toastStatus, toastMessage, showToast }
}

</script>
<style lang="scss" scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    padding: .1rem;
    background: rgba($color: #000000, $alpha: .35);
    border-radius: 0.05rem;
    color: #fff;
  }
</style>
