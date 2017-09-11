import Vue from 'vue'
import Router from 'vue-router'
import TabView from '../views/TabView'
import HomeView from '../views/HomeView'
import MoreView from '../views/MoreView'
import WorkView from '../views/WorkView'
import NoView from '../views/NoView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TabView',
      component: TabView,
      children: [
        {
          path: 'home',
          component: HomeView
        },
        {
          path: 'more',
          component: MoreView
        },
        {
          path: '',
          component: HomeView,
          redirect: '/home'
        }
      ]
    },
    {
      path: '/work/:id',
      name: 'WorkView',
      component: WorkView
    },
    {
      path: '*',
      name: 'NoView',
      component: NoView
    }
  ]
})
