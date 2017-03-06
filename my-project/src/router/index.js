import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import home from 'components/Home'
import Hello from 'components/children/Hello'
import home1 from 'components/Home1.vue'

import elecMap from 'components/children/elecMap.vue'
import videoMonitor from 'components/children/videoMonitor.vue'

// 报表
import chart from 'components/children/chart/chart.vue'
import alarmChart from 'components/children/chart/alarmChart.vue'

//事件中心
import eventCenter from 'components/children/eventCenter/eventCenter.vue'
import alarmEvent from 'components/children/eventCenter/alarmEvent.vue'

// 系统配置
import configure from 'components/children/configure/configure.vue'
import regionalManage from 'components/children/configure/regionalManage.vue'


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
          path: 'eventCenter',
          name: 'eventCenterPart',
          component: eventCenter,
          children: [
            {
              path: 'alarmEvent/:menuId',
              name: 'start.systemStart.alarmEvent',
              component: alarmEvent
            }

          ]
        },
        {
          path: 'chart',
          name: 'chart',
          component: chart,
          children: [
            {
              path: 'alarmChart/:menuId',
              name: 'start.systemStart.alarmChart',
              component: alarmChart
            }

          ]
        },
        {
          path: 'configure',
          name: 'configure',
          component: configure,
          children: [
            {
              path: 'regionalManage/:menuId',
              name: 'start.systemStart.regionalManage',
              component: regionalManage
            }

          ]
        }
      ]
    }
  ]
})
