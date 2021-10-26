import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /* Dashboard */
  {
    path: '/',
    name:'DashboardPage',
    component: () => import('../views/dashboard/DashboardPage')
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
  /* Planes */
  {
    path: '/planes',
    name:'Planes',
    component: () => import('../views/planes/IndexPlanesPage')
  },
  {
    path: '/planes/:payment/payments/',
    name:'PlanesPayments',
    component: () => import('../views/planes/PaymentsPage')
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
    name:'IndexQuestionPage',
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
  /* Flash Cards */
  {
    path: '/criamf',
    name:'IndexCriamfPage',
    component: () => import('../views/criamf/IndexCriamfPage')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = JSON.parse(localStorage.getItem('user'));
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
