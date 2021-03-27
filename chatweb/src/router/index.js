import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next) {
      if (store.getters.userToken) {
        next();
      } else {
        console.log(store.getters.userToken)
        next('/Login');
      }
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    beforeEnter(to, from, next) {
      if (store.getters.userToken) {
        next('/');
      } else {
        next();
      }
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      if (store.getters.userToken) {
        next('/');
      } else {
        next();
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
