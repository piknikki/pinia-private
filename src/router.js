import { createRouter, createWebHistory } from 'vue-router'
import EventList from './views/EventList.vue'
import EventDetails from './views/EventDetails.vue'
import EventCreate from './views/EventCreate.vue'
import ErrorDisplay from './views/ErrorDisplay.vue'
import About from './views/AboutView.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  },
  {
    path: '/:path(.*)',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
