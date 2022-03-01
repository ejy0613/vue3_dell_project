<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入密码" type="password" />
    </div>
     <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="确认密码" type="password" />
    </div>
    <div class="wrapper__login-button">注册</div>
    <div class="wrapper__login-link" @click="handleLoginClick">已有账号去登录</div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup () {
    const router = useRouter()
    const handleLoginClick = () => {
      router.push({ name: 'Login' })
    }
    return { handleLoginClick }
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
