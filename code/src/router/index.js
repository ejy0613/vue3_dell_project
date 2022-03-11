import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cart" */ '../views/cartList/CartList')
  },
  {
    path: '/order/:id',
    name: 'Order',
    component: () => import(/* webpackChunkName: "order" */ '../views/order/Order')
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "order" */ '../views/orderList/OrderList')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next() // next('/') == next({ name: 'Home' })
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "login" */ '../views/register/Register.vue'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next() // next('/') == next({ name: 'Home' })
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ y: 0 })
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const isLoginOrRegister = (to.name === 'Login' || to.name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
