<template>
  <div
    id="wm_navigation"
    class="animate__animated animate__fadeIn"
    v-if="$root.showNavigation"
  >
    <button @click="navigateTo('')">
      <logo />
    </button>

    <button
      v-for="(item, index) in menuitems"
      :key="index"
      @click="navigateTo(item.text)"
      :title="item.tooltip"
      active
    >
      <i :class="'mdi mdi-' + item.icon + ' md-18'"></i>
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
      console.log(this.$route.path);
    },
  },
  data() {
    return {
      menuitems: [
        { text: "project", icon: "home", tooltip: "Project Home" },
        {
          text: "writer",
          icon: "book-open-page-variant",
          tooltip: "Writing Tool",
        },
        { text: "timeline", icon: "timer-sand", tooltip: "Timeline Tool" },
        { text: "snowflake", icon: "snowflake", tooltip: "Snowflake Tool" },
        { text: "gridplanner", icon: "grid", tooltip: "Grid Planner Tool" },
        { text: "mindmap", icon: "vector-triangle", tooltip: "Mindmap Tool" },
        { text: "exportoptions", icon: "launch", tooltip: "Export Options" },
        { text: "database", icon: "layers", tooltip: "Cards Database" },
        { text: "settings", icon: "settings", tooltip: "Settings" },
        //   { text :'cloud', icon : "backup" , tooltip : ""},
      ],
    };
  },
};
</script>

<style>
body {
  margin-left: 50px;
}
</style>
