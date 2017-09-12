import Vue from 'vue'
import Router from 'vue-router'
import TabView from '../views/TabView'
import HomeView from '../views/HomeView'
import MoreView from '../views/MoreView'
import WorkView from '../views/WorkView'
import FindView from '../views/FindView'
import ClassView from '../views/ClassView'
import MessView from '../views/MessView'
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
        },
        {
          path: 'find',
          component: FindView
        },
        {
          path: 'class',
          component: ClassView
        },
        ,
        {
          path: 'mess',
          component: MessView
        },
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
