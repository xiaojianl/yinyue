import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../src/components/Home/Home')
    },
    {
      path:'/login',
      name:'login',
      component:() => import (/*webpackChunkName:"login" */ '../src/components/login/login')
    },
    {
      path:'/frequency',
      name:'frequency',
      component:() => import (/*webpackChunkName:"frequency" */ '../src/components/frequency/frequency')
    },
    {
      path:'/calendar',
      name:'calendar',
      component:() => import (/*webpackChunkName:"calendar" */ '../src/components/calendar/calendar')
    },
    {
      path:'/genre',
      name:'genre',
      component:() => import (/*webpackChunkName:"genre" */ '../src/components/genre/genre')
    },
    {
      path:'/message',
      name:'message',
      component:() => import (/*webackChunkName:"message" */ '../src/components/message/message')
    },
  ]
})
