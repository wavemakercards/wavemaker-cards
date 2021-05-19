import Vue from 'vue'
import VueRouter from 'vue-router'
// Basic sinlge pages
import Welcome from '../views/Welcome.vue'
import NewProject from '../views/NewProject.vue'
import ProjectHome from '../views/ProjectHome.vue'
import Settings from '../views/Settings.vue'
// Tools 
import Writer from '../tools/writer/Writer.vue'
import WriterItem from '../tools/writer/WriterItem.vue'
import PlanningboardItem from '../tools/writer/PlanningboardItem.vue'
import Snowflake from '../tools/snowflake/Snowflake.vue'
import SnowflakeItem from '../tools/snowflake/SnowflakeItem.vue'
import Timeline from '../tools/timeline/Timeline.vue'
import TimelineItem from '../tools/timeline/TimelineItem.vue'
import Gridplanner from '../tools/gridplanner/Gridplanner.vue'
import GridplannerItem from '../tools/gridplanner/GridplannerItem.vue'
import Mindmap from '../tools/mindmap/Mindmap.vue'
import MindmapItem from '../tools/mindmap/MindmapItem.vue'
import ExportFile from '../tools/export/ExportFile.vue'
import Database from '../tools/database/Database.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
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
    path: '/database',
    name: 'Database',
    component: Database
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
