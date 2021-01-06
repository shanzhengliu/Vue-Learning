/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Com1 from '../components/com1';
import Com2 from '../components/com2';
import index from '../components/index'
import Dash from '../components/Dash'
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HelloWorld,
      meta: { title: 'dashboard' },

      children:[{
        path: "/dashboard/com1",
        name: "Com1",
        component: (resolve) => require(['@/components/com1'], resolve),
        meta:{
          title:"com1"
        }
      },
        {
          path: "/dashboard/com2",
          name: "Com2",
          component: (resolve) => require(['@/components/com2'], resolve),
          meta:{
            title:"com2"
          }
        },
        {
          path: "/dashboard/com3/1",
          name: "Com3-1",
          component: (resolve) => require(['@/components/com3-1'], resolve),
          meta: {
            title: "com3-1"
          }
        },
        {
          path: "/dashboard/com3",
          name: "Com3",
          component: (resolve) => require(['@/components/com3'], resolve),
          meta: {
            title:"com3"
          }
        }],





    },
    {
      path: '/',
      name: 'Index',
      component: index
    }



  ],

});
