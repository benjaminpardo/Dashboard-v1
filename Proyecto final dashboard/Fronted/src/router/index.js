import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../views/Home'),
  // },
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/LandingPage'),
  },
  {
    path: '/Ingresar',
    name: 'Ingresar',
    component: () => import('../views/Login'),
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard'),
  },
  {
    path: '/Historico',
    name: 'Historico',
    component: () => import('../views/Historico'),
  },





  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/Auth/Login')
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('../views/Auth/Register')
  },
  {
    path: '/views/tareas',
    name: 'Tareas',
    component: () => import('../views/tareas')
  },
  {
    path: '/views/ListaTareas',
    name: 'ListaTareas',
    component: () => import('../views/ListaTareas')
  },
  {
    path: '/admin',
    component: () => import('../layouts/AdminLayout'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAdmin) next()
      else next('/profile')
    },
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'users',
        component: () => import('../views/Admin/Users'),
      }
    ]
  },
  {
    path: '/profile',
    component: () => import('../views/Profile'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // La ruta requiere autentificación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuth) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else {
    // Evitamos que un usuario logeado ingrese a la vista de Login o Registro
    if (store.getters.isAuth && (to.name === 'Login' || to.name === 'Register')) {
      next({ name: 'Home' });
    } else {
      next();
    }
  }
});

export default router