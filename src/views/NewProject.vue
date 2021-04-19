<template>


<div class="columns is-mobile is-vcentered is-centered" style="margin-top:10%" >
  <div class="column is-half-tablet is-one-third-desktop">
  <div class="card animate__animated animate__fadeIn">
  <div class="card-content">
    <div class="media">
    
      <div style="text-align:center; width:100%;">
                    <svg id="logo" version="1.1" viewBox="0 0 24 24" width="50px" >
          <defs id="defs10" />
          <path id="path2" d="M0 0h24v24H0V0z" fill="none" />
          <g
            transform="matrix(0.046875,0,0,0.04604639,-1.951887,-3.0598516)"
            id="Layer_x0020_1"
          >
            <g id="_921457168" >
              <path
                style="fill: var(--logo-top)" 
                id="path2-8"
                d="M 464.632,212.901 337.566,83.292 c -22.014,-22.454 -57.758,-22.454 -79.771,0 l -126.63,129.386 c -7.411,7.559 -7.411,19.563 0,27.122 l 38.359,39.127 25.5,24.232 c 7.628,7.114 19.18,7.114 26.808,0 l 51.219,-48.242 c 14.167,-13.338 35.744,-13.338 49.693,0 l 51.219,48.242 c 7.629,7.114 19.18,7.114 26.809,0 l 25.501,-24.232 38.359,-38.904 c 7.193,-7.337 7.193,-19.563 0,-27.122 z"
              />
              <path
                style="fill: var(--logo-bottom)"
                id="path4"
                d="m 58.804,367.853 198.991,202.973 c 22.013,22.452 57.757,22.452 79.771,0 L 536.557,367.853 c 34.437,-35.125 10.244,-45.574 -15.039,-70.029 L 490.35,267.59 c -7.409,-7.336 -19.18,-7.113 -26.808,0 l -51.218,48.242 c -14.169,13.339 -35.744,13.339 -49.694,0 L 311.411,267.59 c -7.575,-7.113 -19.233,-7.113 -26.809,0 l -51.219,48.242 c -14.167,13.339 -35.744,13.339 -49.693,0 L 132.471,267.59 c -7.576,-7.113 -19.233,-7.113 -26.809,0 l -28.77,27.123 c -26.37,24.899 -54.05,36.236 -18.088,73.14 z"
              />
            </g>
          </g>
        </svg>
        <p class="title is-4">Create a New Project</p>
        <p class="subtitle is-6">Choose a name and where to save your work</p>
      </div>
    </div>
    <div class="content">
        <label>Project Name</label>
<input type="text" class="input" v-model="projectName" placeholder="Project Name" />
 <p>Needs a chose online or offline option here</p>

</div>
  <footer class="card-footer">
    <button  class="button card-footer-item error" @click="$router.push('/')">Cancel</button>
    <button  class="button card-footer-item primary" @click="Createproject">Create</button>
  </footer>
  </div>
</div>


  </div>
</div>

</template>

<script>
export default ({
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
         await this.$root.db.delete()
         await this.$root.db.open()
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
