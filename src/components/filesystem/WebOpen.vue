<template>
    <div>
    <div v-if="showState==='needscredentials'">
        account info needed
    </div>
    <div v-if="showState==='hascredentials'">
        <v-btn><i class="material-icons">cloud_download</i></v-btn>
    </div>
    </div>
</template>

<script>
export default ({
  data(){
        return{
            showState : "signup"
        }
    },
 beforeMount(){
     console.log(this.$root.shadowDB)

    if(this.$root.shadowDB.Settings.settings){
        this.showState="hascredentials"
    }

     let path="https://wavemaker.co.uk/api/get/project/?email=iain@woodit.co.uk&password=letmein"

        // Practical example
fetch(path)
  .then(response => response.json())
  .then(data => console.log(data))
 }
})
</script>
