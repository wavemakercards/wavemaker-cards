<template>
<div>
<h1>Project</h1>
<label>Project Title</label>
<input type="text" placeholder="Project Title"/>

<v-text-field
                v-model="$root.shadowDB.Settings[Object.keys($root.shadowDB.Settings)[0]].settings.title" 
                placeholder="Project Title"
                  label="Project Title"
                  @blur="SaveChange()"
                ></v-text-field>

<p>
I'm sure there will be more stuff here but I'm blanking right now - theme, font stuff maybe some stats
<span class="material-icons">face</span>
</p>
</div>

</template>

<script>

export default ({
 beforeMount(){
     this.$root.showNavigation =  true
 },
 methods: {
     SaveChange() {
      this.$root.UpdateRecord(
        "Settings",
        Object.keys(this.$root.shadowDB.Settings)[0],
        this.$root.shadowDB.Settings[Object.keys(this.$root.shadowDB.Settings)[0]]
      );
      
    }
 }
})
</script>

<style scoped>


</style>
