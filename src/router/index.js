import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  /* Autenticacion */
  {
    path: '/login',
    name:'Login',
    component: () => import('../views/auth/LoginPage')
  },
  {
    path: '/register',
    name:'Register',
    component: () => import('../views/auth/RegisterPage')
  },
  /* Test */
  {
    path: '/tests',
    name:'IndexTestPage',
    component: () => import('../views/tests/IndexTestPage')
  },
  /* Preguntas */
  {
    path: '/questions',
    name:'IndexTestPage',
    component: () => import('../views/questions/IndexQuestionPage')
  },
  /* Mi perfil */
  {
    path: '/profile',
    name:'ProfilePage',
    component: () => import('../views/profile/ProfilePage')
  },
  /* Flash Cards */
  {
    path: '/flashcards',
    name:'IndexFlashCardPage',
    component: () => import('../views/flashcards/IndexFlashcardPage')
  },
  {
    path: '/flashcards/show',
    name:'ShowFlashCardPage',
    component: () => import('../views/flashcards/ShowFlashcardPage')
  },
  {
    path: '/flashcards/finish',
    name:'FinishFlashCardPage',
    component: () => import('../views/flashcards/FinishFlashcardPage')
  },
  /* Flash Cards */
  {
    path: '/cards',
    name:'IndexCardPage',
    component: () => import('../views/cards/IndexCardPage')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
