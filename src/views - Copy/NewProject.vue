<template>


    <v-row justify="center" style="text-align:center">

          <v-card style="margin-top:60px; padding:10px;">
               <logo style="width:50px;" />
            <v-card-title>
              <span class="headline" >Create a New Project</span>
              <v-card-text>Choose a name and where to save your work</v-card-text>
            </v-card-title>
            <v-card-text>

              <v-row>
                <v-col cols="12">
        
   <v-text-field
                    label="Project Name*"
                    required
                    v-model="projectName"
                  ></v-text-field>
        

             
    <v-btn @click="$router.push('/')">Cancel</v-btn>
    <v-btn @click="Createproject">Create</v-btn>

                </v-col>

   
              </v-row>

         
            </v-card-text>
          </v-card>
     
      </v-row>



</template>

<script>
import logo from "@/components/logo.vue";
export default ({
  components:{
    logo
  },
      data(){
        return{
            projectName : ""
        }
    },
    methods:{
       async Createproject(){
          // make sure they have entered a Project name
          if(this.projectName === ""){
            alert("You need to type a project name")
            return false
          }
          // clear the existing database from the system (new one should be created with first call)
         await this.$root.db.delete().catch(error => { console.log('caught', error.message); });
         await this.$root.db.open().catch(error => { console.log('caught', error.message); });
         // recreate the shadowDB
         this.$root.shadowDBLoad()
            let settingsObj={}
            settingsObj.title =  this.projectName;
            settingsObj.file = {location : null, path : null}
            settingsObj.projectUUID = this.$root.uuid.v4()

              this.$root.shadowDB.Settings[settingsObj.projectUUID] = {settings : settingsObj}
              this.$root.UpdateRecord("Settings", settingsObj.projectUUID ,  {settings : settingsObj})
              
              this.$router.push("/project")
   
        }
    },
 beforeMount(){
     this.$root.showNavigation =  false
 }
})
</script>

<style scoped>
.card-footer-item{
    border:0px;
    border-radius :0px;
    margin:5px;
}


</style>
