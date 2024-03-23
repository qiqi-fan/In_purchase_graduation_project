import { createRouter, createWebHistory } from 'vue-router'
import MallHome from "@/views/MallHome.vue";
import StoreMerchandise from "@/views/StoreMerchandise.vue";
import shoppingCart from "@/views/ShoppingCart.vue";
import ShoppingCart from "@/views/ShoppingCart.vue";
import UserHome from "@/views/UserHome.vue";
import Login from "@/views/Login.vue";
import Register from "@/components/Register.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: '',
      name: 'home',
      component: MallHome
    },
    {
      path:'/store',
      name:'store',
      component:StoreMerchandise,
    },
    {
      path:'/shoppingCart',
      name:'shoppingCart',
      component:ShoppingCart,
    },
    {
      path:'/user',
      name:'user',
      component:UserHome,
    }
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
  ]
})
//
export default router
