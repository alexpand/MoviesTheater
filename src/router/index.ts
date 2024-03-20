import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStore } from '@/stores/session'
import MoviesView from '@/views/MoviesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MoviesView,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('@/views/MovieDetailsView.vue'),
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/casts/:id',
      name: 'cast',
      component: () => import('@/views/CastDetailsView.vue'),
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: true
      },
    }
  ]
})

// Navigation guard redirects to login if user is not authenticated

// router.beforeEach((to) => {
//   const sessionStore = useSessionStore()

//   if (to.meta.requiresAuth && !sessionStore.authenticated) {
//     return {
//       path: '/login',
//       query: { redirect: to.fullPath }
//     }
//   }
// })

export default router
