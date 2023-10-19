import { createRouter, createWebHashHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import 

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductList.vue'),
      beforeEnter: requireLogin,
    }
  ]
})

export function requireLogin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
  const session = getSession();
  if(!session.user){
    session.redirectUrl = to.fullPath;
    next('/login');
  }
  else{
    next();
  }
  console.log("required Login");
}
export default router
