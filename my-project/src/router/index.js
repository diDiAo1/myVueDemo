import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from 'components/Home'
import Hello from 'components/children/Hello'
import first from 'components/children/First.vue'
import home1 from 'components/Home1.vue'
import second from 'components/children1/Second.vue'

import elecMap from 'components/children/elecMap.vue'
import videoMonitor from 'components/children/videoMonitor.vue'
import alarmChart from 'components/children/alarmChart.vue'
import alarmEvent from 'components/children/alarmEvent.vue'
import regionalManage from 'components/children/regionalManage.vue'


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
        }
      ]
    },
    {
      path: '/home1',
      name: 'home1',
      linkActiveClass: 'active',
      component: home1,
      children: [
        {
          path: 'second',
          name: 'second',
          component: second
        },
        {
          path: 'first/:topId/:systemName',
          name: 'firstPart',
          component: first,
          children:[
            {
              path: 'elecMap',
              name: 'start.electronicMap',
              component: elecMap
            },
            {
              path: 'videoMonitor',
              name: 'start.videoMonitor',
              component: videoMonitor
            },
            {
              path: 'alarmChart',
              name: 'start.systemStart.alarmChart',
              component: alarmChart
            },
            {
              path: 'alarmEvent',
              name: 'start.systemStart.alarmEvent',
              component: alarmEvent
            },
            {
              path: 'regionalManage',
              name: 'start.systemStart.regionalManage',
              component: regionalManage
            }
          ]
        }
      ]
    }
  ]
})
