import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Header from '@/components/header/Header'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Find from '@/components/Find'
import Recommend from '@/components/recommend/Recommend'
import Singer from '@/components/singer/Singer'
import Rank from '@/components/rank/Rank'
import Search from '@/components/search/Search'
Vue.use(Router)


export default new Router({
  'mode':'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },

    {
      path: '/recommend',
      component: Recommend
    },
    {
        path: '/singer',
        component: Singer
    },
    {
        path: '/rank',
        component: Rank
    },

    {
      path: '/search',
      component: Search ,
    },
    {
        path: '/home',
        component: Home ,
    },
    { path: '/mine', component: Mine },
    //
    { path: '/find', component: Find},
    { path: '*', redirect: '/home' },   /*默认跳转路由*/


  ]
})
