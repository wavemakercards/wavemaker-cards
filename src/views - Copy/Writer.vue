<template>
 <div class="wm_scrollwindow">


    
      <h1 class="title"
      style="display:block;  background-color: var(--c7); padding:5px; text-align:center; margin-bottom:10px; "
      >Your Manuscripts</h1>
    

<div class="columns is-tablet">
  <div class="column is-half-tablet is-offset-one-quarter ">
   <div  v-for="(writer, index) in $root.shadowDB.Writer"  :key="index" >


<div class="card">

  <div class="card-content">
       <button  @click="DeleteMe(writer.uuid)" class="button  is-danger" style="position:absolute; top:10px; right:10px;" ><i class="material-icons">delete</i></button>
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
       <i class="material-icons">book</i>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ writer.title }}</p>
        <p class="subtitle is-6">{{ writer.author }}</p>
      </div>
    </div>

    <div class="content nl2br">
      {{ writer.description }}
    </div>
  </div>
   <footer class="card-footer">
 <button  @click="$router.push('/planningboard/' + writer.uuid)"  class="button is-info card-footer-item"
          ><i class="material-icons">comments</i> </button>
 
  <button  @click="$router.push('/writer/' + writer.uuid)"  class="button is-success card-footer-item"
          ><i class="material-icons">edit</i> </button>
  </footer>
</div>

         
 
     





   </div>

 </div>
</div>
        <button  @click="toggleModal"  class="button  is-info" style="position: fixed; top:calc(var(--electron-offset) + 10px); right:10px;"> <i class="material-icons">add</i></button>

<div :class="'modal '+showmodal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">New Manuscript</p>
      <button class="delete" aria-label="close" @click="toggleModal"></button>
    </header>
    <section class="modal-card-body">
     <label>Title</label>
   <input class="input is-small" type="text" placeholder="My Great Novel" v-model="newManuscript.title">
     <label>Author</label>
     <input class="input is-small" type="text" placeholder="A. N. Other" v-model="newManuscript.author">
     <label>Summary</label>
     <textarea class="textarea is-small" placeholder="Brief Summary of Novel" v-model="newManuscript.description"></textarea>
     <label>Template</label><BR/>
<div class="select is-small">
  <select v-model="newManuscript.template">
    <option value="">Blank Template</option>
    <option value="Atemplate.json">Placeholder Template</option>
    <option value="Atemplate.json">Placeholder Template</option>
    <option value="Atemplate.json">Placeholder Template</option>
    <option value="Atemplate.json">Placeholder Template</option>
    <option value="Atemplate.json">Placeholder Template</option>
    <option value="Atemplate.json">Placeholder Template</option>
  </select>
</div>
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
            newManuscript : { title :'', author : '' , description :'' , template :''}
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
      n.title = this.newManuscript.title;
      n.author = this.newManuscript.author;
      n.description = this.newManuscript.description;
      n.template = this.newManuscript.template;
      n.files = [
        {
          type: "folder",
          name: "Welcome",
          uuid: this.$root.uuid.v4(),
          files: [],
          open: true,
          active: false,
        },
      ];
        /* TODO Will need to also import template data here if needed */

      this.$root.AddRecord("Writer", n);
     //no to heading stright off?
     this.toggleModal()
     // this.$router.push('/writer/'+ uuid)
    },
    DeleteMe(myKey) {
      if (confirm("sure?")) {
        this.$root.DeleteRecord("Writer", myKey);
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
