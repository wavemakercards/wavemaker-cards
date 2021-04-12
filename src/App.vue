<template>
  <div id="app">
  <VueTitlebar  />
       <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>

    <router-view/>
  </div>
</template>

<script>
//import VueTitlebar  from '@/components/electron/titlebar/titlebar.vue'

/*
If there are electron specific components that are breaks ing stuff - i find this seems to work
have a 'clean' component and when importing them use something like below
*/
const  VueTitlebar = () =>{
  if(process.env.IS_ELECTRON){
  return import("@/components/electron/titlebar/titlebar.vue")
}else{
  return import("@/components/electron/titlebar/titlebar-clean.vue")
}

}

export default {
  components:{
VueTitlebar
  }
}
</script>

