<template>
 <div class="wm_scrollwindow">


    
      <h1 class="title"
      style="display:block;  background-color: var(--c7); padding:5px; text-align:center; margin-bottom:10px; "
      >Your Snowflakes</h1>
    

<div class="columns is-tablet">
  <div class="column is-half-tablet is-offset-one-quarter ">
   <div  v-for="(snowflake, index) in $root.shadowDB.Snowflake"  :key="index" >


<div class="card">

  <div class="card-content">
       <button  @click="DeleteMe(snowflake.uuid)" class="button wm_button_icon is-danger" style="position:absolute; top:10px; right:10px;" ><i class="mdi mdi-delete md-24"></i></button>
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
        <i class="mdi mdi-timer-sand md-36"></i>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ snowflake.title }}</p>
      </div>
    </div>

    <div class="content nl2br">
      {{ snowflake.description }}
    </div>
  </div>
   <footer class="card-footer">

 
  <button  @click="$router.push('/Snowflake/' + snowflake.uuid)"  class="button is-success card-footer-item"
          ><i class="mdi mdi-pencil md-18"></i> </button>
  </footer>
</div>

         
 
     





   </div>

 </div>
</div>
        <button  @click="toggleModal"  class="button wm_button_icon is-info" style="position: fixed; top:calc(var(--electron-offset) + 10px); right:10px;"> <i class="mdi mdi-plus md-18"></i></button>

<div :class="'modal '+showmodal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">New Snowflake</p>
      <button class="delete" aria-label="close" @click="toggleModal"></button>
    </header>
    <section class="modal-card-body">
     <label>Title</label>
   <input class="input is-small" type="text" placeholder="title ..." v-model="newSnowflake.title">

     <label>Summary</label>
     <textarea class="textarea is-small" placeholder="type here ..." v-model="newSnowflake.description"></textarea>
   

    </section>
    <footer class="modal-card-foot">
     
      <button class="button is error card-footer-item" @click="toggleModal">Cancel</button>
       <button class="button is-success card-footer-item" @click="NewItem">Save changes</button>
    </footer>
  </div>
</div>
   </div>
</template>

<script>
export default {
    data(){
        return {
            showmodal : '',
            newSnowflake : { title :'', author : '' , description :'' , template :''}
        }
    },
  methods: {
      toggleModal(){
            if(this.showmodal===''){
                 this.showmodal ="is-active"
            }else{
                this.showmodal =""
            }          
      },
    NewItem() {
           let uuid=this.$root.uuid.v4();
  let n = {};
      n.uuid =uuid
      n.title = this.newSnowflake.title;
      n.description = this.newSnowflake.description;
        n.content = [
        {
          parent: null,
          uuid: this.$root.uuid.v4(),
          children: [],
          isopen: false,
        },
      ];
      this.$root.AddRecord("Snowflake", n);
     //no to heading stright off?
     this.toggleModal()
     // this.$router.push('/writer/'+ uuid)
    },
    DeleteMe(myKey) {
      if (confirm("sure?")) {
        this.$root.DeleteRecord("Snowflake", myKey);
      }
    },
  },
  beforeMount() {
    this.$root.showNavigation = true;
  },
};
</script>

<style scoped>
.card-footer-item{
    border:0px;
    border-radius :0px;
    margin:5px;
}
.card{
  margin-bottom:30px;
}
</style>
