<template>
  <v-app>
    <v-main  v-if="$root.dbloaded">
           <MainNavigation v-if="$root.interface.MainNavigationToggle" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainNavigation from "@/MainNavigation.vue";
//import TopMenu from "@/TopMenu.vue";
export default {
  components: {
    MainNavigation,
  },
  methods: {
    WavemakerReset(){
      console.log("Doing a database and cache clear")
      this.$root.db.delete()
      window.location.reload(true)
    },
    trigger(e) {
      if (e.shiftKey && e.key === "Backspace") {
        if(confirm("You really wanna clear the database?")){
          this.WavemakerReset()
        }
      }
     if (e.shiftKey && e.key === "Enter") {
        console.log("ShadowDB : ", this.$root.shadowDB);
      }
    },
     updateAvailable(event) {
      this.registration = event.detail
      this.updateExists = false
    },
    refreshApp() {
  this.updateExists = false
  this.WavemakerReset()
  // Make sure we only send a 'skip waiting' message if the SW is waiting
  if (!this.registration || !this.registration.waiting) return
  // Send message to SW to skip the waiting and activate the new SW
  this.registration.waiting.postMessage({ type: 'SKIP_WAITING' })
}
  },
  mounted() {
    window.addEventListener("keydown", this.trigger);
  },
  destroyed() {
    window.removeEventListener("keydown", this.trigger);
  },
   data() {
    return {
      registration: null,
      updateExists: true,
    }
  },
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true })
  },
};
</script>
<style >
@import "theme.css";

</style>