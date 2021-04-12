<template>
  <div id="app">
  <VueTitlebar v-if="isElectron" />
 <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
-->
    <router-view/>
  </div>
</template>

<script>
import VueTitlebar  from '@/components/electron/titlebar/titlebar.vue'

export default {
  components:{
VueTitlebar
  },
  data(){
    return{
      isElectron : process.env.IS_ELECTRON,
    }
  },

}
</script>

<style>

</style>
