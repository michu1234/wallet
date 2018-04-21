import Vue from 'vue'
import Router from 'vue-router'
import Wallet from '../components/WalletApp'

Vue.use(Router)

const routes = [
  {
    // path: '/sign-in',
    path: '/',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "sign-in" */ 'src/views/SignIn'),
  },
  { 
    path: '/wallet',
    name: 'Wallet',
    component: Wallet
  }
]

const router = new Router({
  mode: 'history',
  routes,
})

export default router
