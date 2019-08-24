import Vue from 'vue'
import Router from 'vue-router'
import items from './nav'

Vue.use(Router)
const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: items.items
})
export default router
