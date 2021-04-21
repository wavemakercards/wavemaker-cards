<template>
  <div
    class="columns is-mobile is-vcentered is-centered"
    style="margin-top: 10%"
  >
    <div class="column is-three-quarters-tablet is-half-desktop">
      <div class="card animate__animated animate__fadeIn">
        <div class="card-content">
          <div class="media">
            <div style="text-align: center; width: 100%">
              <logo style="width:50px;" />
              <p class="title is-4">Wavemaker Cards</p>

            </div>
          </div>
          <div class="content">

  <div class="column">
                 <button
                  class="wm_button_icon"
                  @click="$router.push('/newproject')"
                  alt="New project"
                 title="New project"
                >
          <i class="material-icons">create_new_folder</i> 
                </button>
              </div>


 <div class="column wm-hilight-box" v-if="Object.keys(this.$root.shadowDB.Settings).length">



                {{$root.shadowDB.Settings[Object.keys($root.shadowDB.Settings)[0]].settings.title}}
                <button @click="$router.push('project')" class="button">
                <i class="material-icons">chevron_right</i>  Continue Working
                </button>
              </div>

        
              <div class="column">
                <div>
                <p> Load a file from this computer</p> 
                  <LocalOpen />
                </div>
                <div>
                                  <p>Load a file from your wavemaker account</p> 
                  <WebOpen />
                </div>
              </div>

             

            
     
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const LocalOpen = () => {
  if (process.env.IS_ELECTRON) {
    return import("@/components/filesystem/LocalOpen.vue");
  } else {
    return import("@/components/filesystem/LocalOpen-clean.vue");
  }
};

import WebOpen from "@/components/filesystem/WebOpen.vue";
import logo from "@/components/logo.vue";

export default {
  components: {
    LocalOpen,
    WebOpen,
    logo
  },
 beforeMount(){
     this.$root.showNavigation =  false
 }
};
</script>
<style scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 10px;
}


</style>
