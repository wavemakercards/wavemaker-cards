import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Home from '../views/Home.vue'
import NewProject from '../views/NewProject.vue'
import ProjectHome from '../views/ProjectHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/newproject',
    name: 'New Project',
    component: NewProject
  },
  {
    path: '/project',
    name: 'Project Home',
    component: ProjectHome
  },
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
