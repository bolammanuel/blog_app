import { createRouter, createWebHistory } from 'vue-router'

// Lazy load components
const HomePage = () => import('../views/HomePage.vue')
const DetailPage = () => import('../views/DetailPage.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/post/:id',
    name: 'detail',
    component: DetailPage,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router