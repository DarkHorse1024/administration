import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'layout',
    component: () => import('../views/layout/layout.vue'),
    children:[
      {
        path: '/',
        name:'index',
        component: () => import('../views/index.vue'),
      },
      {
        path: 'PersonnelFiles',
        name:'PersonnelFiles',
        component: () => import('../views/PersonnelFiles.vue'),
      },
      {
        path: 'consult',
        name:'consult',
        component: () => import('../views/consult.vue'),
      },
      {
        path: 'transferOut',
        name:'transferOut',
        component: () => import('../views/transferOut.vue'),
      },
      {
        path: 'dataExport',
        name:'dataExport',
        component: () => import('../views/dataExport.vue'),
      },
      {
        path: 'printing',
        name:'printing',
        component: () => import('../views/printing.vue'),
      },
      {
        path: 'printing',
        name:'printing',
        component: () => import('../views/printing.vue'),
      },
      {
        path: 'statistics',
        name:'statistics',
        component: () => import('../views/statistics.vue'),
      },
      {
        path: 'journal',
        name:'journal',
        component: () => import('../views/journal.vue'),
      },
      {
        path: 'structure',
        name:'structure',
        component: () => import('../views/structure.vue'),
      },
      {
        path: 'parameter',
        name:'parameter',
        component: () => import('../views/parameter.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
