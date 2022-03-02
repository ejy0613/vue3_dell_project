<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" v-model="mobile" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入密码" type="password" v-model="password" />
    </div>
     <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="确认密码" type="password" v-model="passwordRep" />
    </div>
    <div class="wrapper__login-button" @click="handleRegisterClick">注册</div>
    <div class="wrapper__login-link" @click="handleLoginClick">已有账号去登录</div>
  </div>
  <Toast v-if="toastStatus" :message="toastMessage" />
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue'

// 处理注册逻辑
const useRegisterEffect = (Toast) => {
  const data = reactive({ mobile: '', password: '', passwordRep: '' })
  const handleRegisterClick = async () => {
    const result = await post('/api/register', { mobile: data.mobile, password: data.password })
    if (result?.code === 200) {
      Toast('注册成功')
    } else {
      Toast('注册失败')
    }
  }
  const { mobile, password, passwordRep } = toRefs(data)
  return { mobile, password, passwordRep, handleRegisterClick }
}

export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const router = useRouter()

    const { toastStatus, toastMessage, showToast } = useToastEffect()

    const { mobile, password, passwordRep, handleRegisterClick } = useRegisterEffect(showToast)

    const handleLoginClick = () => { router.push({ name: 'Login' }) }

    return {
      toastStatus,
      toastMessage,
      mobile,
      password,
      passwordRep,
      handleRegisterClick,
      handleLoginClick
    }
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
    &__login-button {
      margin: .32rem .4rem .16rem;
      line-height: .48rem;
      color: #fff;
      font-size: .16rem;
      text-align: center;
      background: #0091ff;
      box-shadow: 0 .04rem .08rem rgba(0, 145, 255, 0.32);
      border-radius: .04rem;
    }
    &__login-link {
      text-align: center;
      font-size: .14rem;
      color: $content-notice-fontcolor;
    }
  }
</style>
