import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStore } from '@/stores/session'
import MoviesView from '@/views/MoviesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MoviesView
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('@/views/MovieDetailsView.vue')
    },
    {
      path: '/casts/:id',
      name: 'cast',
      component: () => import('@/views/CastDetailsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { requiresAuth: false },
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach( (to, from, next) => {
  const sessionStore = useSessionStore()
  console.log(sessionStore.autenthicated, 'fuera if')
  if(!sessionStore.autenthicated) {
    next('/login')
  }

  next('/')
})

export default router
