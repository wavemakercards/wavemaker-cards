<template>
  <div>
    <VueTitlebar />
    <Navigation />
    <div id="app" v-if="$root.dbloaded">
      <router-view />
    </div>
  </div>
</template>

<script>
//import VueTitlebar  from '@/components/electron/titlebar/titlebar.vue'

/*
If there are electron specific components that are breaks ing stuff - i find this seems to work
have a 'clean' component and when importing them use something like below
*/
const VueTitlebar = () => {
  if (process.env.IS_ELECTRON) {
    return import("@/components/titlebar/titlebar.vue");
  } else {
    return import("@/components/titlebar/titlebar-clean.vue");
  }
};
import Navigation from "@/components/Navigation.vue"
export default {
  components: {
    VueTitlebar,
    Navigation
  },
};
</script>
<style >
@import "~mdi/css/materialdesignicons.min.css";
</style>
