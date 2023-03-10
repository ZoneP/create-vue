import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
	linkActiveClass: 'haha',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

router.addRoute({
	path: '/about/:id',
	name: 'about',
	props: true,
	// route level code-splitting
	// this generates a separate chunk (About.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import('../views/AboutView.vue')
})

export default router
