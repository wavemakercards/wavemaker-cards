<template>
  <div id="welcome">
        <div id="banner">
            <img src="@/assets/logo.png" />

            <h1>Continue Working ....</h1>
            <h1>Create New  ....</h1>
            <h1>Load a different project  ....</h1>

      <router-link to="/">Home</router-link> |
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  //  HelloWorld
  },
  data(){
      return{
        
      }
  }
}
</script>
<style scoped>
#welcome{
    position: fixed;
    top:10px;
    bottom:10px;
    left:10px;
    right:10px;
    background-color: var(--c8);
}

#banner{
    position: absolute;
    width:50%;
    height:50%;
    top:calc(50% - (50%/2));
    left:calc(50% - (50%/2));
    text-align: center;
      background-color: var(--c9);
      padding: 2%;
-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=14, Direction=0, Color=#000000)";/*IE 8*/
-moz-box-shadow: 0 4px 14px -5px #000000;/*FF 3.5+*/
-webkit-box-shadow: 0 4px 14px -5px #000000;/*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
box-shadow: 0 4px 14px -5px #000000;/* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
filter: progid:DXImageTransform.Microsoft.Shadow(Strength=14, Direction=135, Color=#000000); /*IE 5.5-7*/
}

#banner img{
    max-width: 100px;
}
</style>
