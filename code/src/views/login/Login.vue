<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="用户名" v-model="username" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入密码" type="password" v-model="password" />
    </div>
    <div class="wrapper__register-button" @click="handleLogin">登录</div>
    <div class="wrapper__register-link" @click="handleRegister">立即注册</div>
  </div>
  <Toast v-if="toastStatus" :message="toastMessage" />
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue'

// 处理登录逻辑 -> 相当于一个 hooks
const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })
  const handleLogin = async () => {
    try {
      const result = await post('/api/login1', {
        username: data.username,
        password: data.password
      })
      if (result?.code === 200) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
    } catch (error) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}

export default {
  name: 'Login',
  components: { Toast },
  // setup职责：代码执行的一个流程
  setup () {
    const router = useRouter()

    const { toastStatus, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)

    const handleRegister = () => { router.push({ name: 'Register' }) }

    return { username, password, toastStatus, toastMessage, handleLogin, handleRegister }
  }
}
</script>
<style lang="scss">
@import '../../style/viriables.scss';
  .wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__img {
      display: block;
      margin: 0 auto .4rem auto;
      width: .66rem;
      height: .66rem;
    }
    &__input {
      height: .48rem;
      margin: 0 .4rem .16rem .4rem;
      padding: 0 .16rem;
      background: #F9F9F9;
      border: .01rem solid rgba($color: #000000, $alpha: 0.1);
      border-radius: .06rem;
      box-sizing: border-box;
      &__content {
        line-height: .48rem;
        width: 100%;
        border: none;
        outline: none;
        background: transparent;
        font-size: .16rem;
        color: $content-notice-fontcolor;
        &::placeholder {
          color: $content-notice-fontcolor;
        }
      }
    }
    &__register-button {
      margin: .32rem .4rem .16rem;
      line-height: .48rem;
      color: #fff;
      font-size: .16rem;
      text-align: center;
      background: #0091ff;
      box-shadow: 0 .04rem .08rem rgba(0, 145, 255, 0.32);
      border-radius: .04rem;
    }
    &__register-link {
      text-align: center;
      font-size: .14rem;
      color: $content-notice-fontcolor;
    }
  }
</style>
