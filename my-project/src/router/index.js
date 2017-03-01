import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from 'components/Home'
import Hello from 'components/children/Hello'
import first from 'components/children/First.vue'
import home1 from 'components/Home1.vue'
import second from 'components/children1/Second.vue'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/',
          component: Hello
        }
      ]
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/',
          name: 'Hello',
          component: Hello
        },
        {
          path: 'first/:topId',
          name: 'firstPart',
          component: first
        }
      ]
    },
    {
      path: '/home1',
      name: 'home1',
      component: home1,
      children: [
        {
          path: 'second',
          name: 'second',
          component: second
        }
      ]
    }
  ]
})
