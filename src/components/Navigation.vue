<template>
  <div
    id="wm_navigation"
    class="animate__animated animate__fadeIn"
  >
    <button @click="navigateTo('')">
         <i class="material-icons">logout</i>
    
     <logo v-if="1===0" /> 
    </button>

    <button
      v-for="(item, index) in menuitems"
      :key="index"
      @click="navigateTo(item.text)"
      :title="item.tooltip"
      active
    >          <i class="material-icons">{{item.icon}}</i>
    </button>
  </div>
</template>
<script>
/*
Each View will decide whether to show the navigation in the beforeMount function for now - should be fine
*/
import logo from "@/components/logo.vue";
export default {
  components: {
    logo,
  },
  methods: {
    navigateTo(link) {
      this.$router.push("/" + link).catch(() => {});
     // console.log(this.$route.path);
    },
  },
  data() {
    return {
      menuitems: [
        { text: "project", icon: "home", tooltip: "Project Home" },
        {
          text: "writer",
          icon: "import_contacts",
          tooltip: "Writing Tool",
        },
        { text: "timeline", icon: "access_time", tooltip: "Timeline Tool" },
        { text: "snowflake", icon: "ac_unit", tooltip: "Snowflake Tool" },
        { text: "gridplanner", icon: "view_comfy", tooltip: "Grid Planner Tool" },
        { text: "mindmap", icon: "schema", tooltip: "Mindmap Tool" },
        { text: "exportoptions", icon: "launch", tooltip: "Export Options" },
        { text: "database", icon: "layers", tooltip: "Cards Database" },
        { text: "settings", icon: "settings", tooltip: "Settings" },
        //   { text :'cloud', icon : "backup" , tooltip : ""},
      ],
    };
  },
  beforeMount(){
    document.body.classList.add("wm_sidenav");
  },
  beforeDestroy(){
    document.body.classList.remove("wm_sidenav");
  }
};
</script>

<style>
.wm_sidenav{
  margin-left:50px;
}
</style>
