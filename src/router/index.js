import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Home from '../views/Home.vue'
import NewProject from '../views/NewProject.vue'
import ProjectHome from '../views/ProjectHome.vue'
import Writer from '../views/Writer.vue'
import Snowflake from '../views/Snowflake.vue'
import Timeline from '../views/Timeline.vue'
import Gridplanner from '../views/Gridplanner.vue'
import Mindmap from '../views/Mindmap.vue'
import Settings from '../views/Settings.vue'
import ExportFile from '../views/ExportFile.vue'

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
  {
    path: '/writer',
    name: 'Writer Home',
    component: Writer
  },
  {
    path: '/snowflake',
    name: 'Snowflake Home',
    component: Snowflake
  },
  {
    path: '/timeline',
    name: 'Timeline Home',
    component: Timeline
  },
  {
    path: '/gridplanner',
    name: 'Gridplanner Home',
    component: Gridplanner
  },
  {
    path: '/mindmap',
    name: 'Mindmap Home',
    component: Mindmap
  },
  {
    path: '/settings',
    name: 'Settings Home',
    component: Settings
  },
  {
    path: '/export',
    name: 'Exportoptions Home',
    component: ExportFile
  },
  
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
