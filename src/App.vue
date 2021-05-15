<template>
  <v-app>
    <v-main  v-if="$root.dbloaded">
           <MainNavigation v-if="$root.interface.MainNavigationToggle" />
      <router-view />
    </v-main>
    <AddCardWidget v-if="$root.addCard.show" />
    <CardEditorTool v-if="$root.editCard.uuid"  />
  </v-app>
</template>

<script>
import MainNavigation from "@/MainNavigation.vue";
import AddCardWidget from "@/components/AddCardWidget.vue";
import CardEditorTool from "@/components/CardEditorTool.vue";
//import TopMenu from "@/TopMenu.vue";
export default {
  components: {
    MainNavigation,
    AddCardWidget,
    CardEditorTool
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
  mounted(){
        window.addEventListener("keydown", this.trigger);
  
  }
};
</script>
<style >
@import "theme.css";

</style>