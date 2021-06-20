import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/inicio', 
      name: 'inicio', 
      component: () => import('./components/Inicio.vue') 
    },
    { 
      path: '/perfil', 
      name: 'perfil', 
      component: () => import('./components/Profesionales/perfil.vue') 
    },
    { 
      path: '/persona', 
      name: 'persona', 
      component: () => import('./components/Profesionales/personas.vue') 
    },
    { 
      path: '/oferta', 
      name: 'oferta', 
      component: () => import('./components/Ofertas/oferta.vue') 
    },
    { 
      path: '/detalle', 
      name: 'detalle', 
      component: () => import('./components/Ofertas/detalle.vue') 
    },
    { 
      path: '/registro', 
      name: 'registro', component: () => import('./components/Miregistro/miregistro.vue') 
    },
  ]
})
