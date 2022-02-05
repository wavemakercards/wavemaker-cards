<template>

    <v-row justify="center">

          <v-card style="margin-top:60px;">
               <logo style="width:80px; margin:0 auto; display:block; margin-top:10px;" />
            <v-card-title>
              <span class="headline">Getting Started</span>
              <v-card-text></v-card-text>
            </v-card-title>
            <v-card-text>
              If you have a wavemaker account put your details in here and it
              will sync your preferences

              <v-row>
                <v-col cols="12">
  <div class="column">
                 <v-btn
                  class="wm_button_icon"
                  @click="$router.push('/newproject')"
                  alt="New project"
                 title="New project"
                >
          <i class="material-icons">create_new_folder</i> 
                </v-btn>
              </div>


 <div class="column" v-if="Object.keys(this.$root.shadowDB.Settings).length">



                {{$root.shadowDB.Settings[Object.keys($root.shadowDB.Settings)[0]].settings.title}}

                <v-btn @click="$router.push('project')" >
                <i class="material-icons">chevron_right</i>  Continue Working
                </v-btn>
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

             


                </v-col>

   
              </v-row>

              <small>*indicates required field</small>
            </v-card-text>
          </v-card>
     
      </v-row>


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
