import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Home from '../views/Home.vue'
import NewProject from '../views/NewProject.vue'
import ProjectHome from '../views/ProjectHome.vue'
import Writer from '../views/Writer.vue'

import WriterItem from '../views/WriterItem.vue'
import PlanningboardItem from '../views/PlanningboardItem.vue'
import Snowflake from '../views/Snowflake.vue'
import SnowflakeItem from '../views/SnowflakeItem.vue'
import Timeline from '../views/Timeline.vue'
import TimelineItem from '../views/TimelineItem.vue'
import Gridplanner from '../views/Gridplanner.vue'
import GridplannerItem from '../views/GridplannerItem.vue'
import Mindmap from '../views/Mindmap.vue'
import MindmapItem from '../views/MindmapItem.vue'
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
    path: '/writer/:id',
    name: 'WriterItem',
    component: WriterItem
  },
  {
    path: '/planningboard/:id',
    name: 'PlanningboardItem',
    component: PlanningboardItem
  },
  {
    path: '/snowflake',
    name: 'Snowflake Home',
    component: Snowflake
  },
  {
    path: '/snowflake/:id',
    name: 'SnowflakeItem',
    component: SnowflakeItem
  },
  {
    path: '/timeline',
    name: 'Timeline Home',
    component: Timeline
  },
  {
    path: '/timeline/:id',
    name: 'TimelineItem',
    component: TimelineItem
  },
  {
    path: '/gridplanner',
    name: 'Gridplanner Home',
    component: Gridplanner
  },
  {
    path: '/gridplanner/:id',
    name: 'GridplannerItem',
    component: GridplannerItem
  },
  {
    path: '/mindmap',
    name: 'Mindmap Home',
    component: Mindmap
  },
  {
    path: '/mindmap/:id',
    name: 'MindmapItem',
    component: MindmapItem
  },
  {
    path: '/settings',
    name: 'Settings Home',
    component: Settings
  },
  {
    path: '/exportoptions',
    name: 'Exportoptions Home',
    component: ExportFile
  },
  
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'hash',
  base: process.env.BASE_URL,
  routes
})


export default router
