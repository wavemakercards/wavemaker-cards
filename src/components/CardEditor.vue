<template>
    <div>
      <pre>ID : {{$root.shadowDB.Cards[uuid]}}</pre>
      Card Editor</div>
</template>

<script>

 
export default {
  name : "editor",
  data(){
    return{
      editme : false,
       showSrc : false,
    // declare extensions you want to use
      // Custom order of extensions to change the order of the buttons
    }
  },
    props:{
        uuid : String,
        editmode : String,
        parent: Object,
        editOn : Boolean,
        popmenu : Boolean
    },
    methods:{
      SaveChange() {
      this.$root.UpdateRecord(
        "Cards",
        this.uuid,
        this.$root.shadowDB.Cards[this.uuid]
      );
      
    },
    nl2br (str, is_xhtml) {
    if (typeof str === 'undefined' || str === null) {
        return '';
    }
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
    },
    created(){
        if(!this.$root.shadowDB.Cards[this.uuid]){
         console.log("Adding Record")
            let obj = {}
            obj.uuid=this.uuid
            obj.title =""
            obj.content=""
            this.$root.AddRecord("Cards", obj);
        }
    if(this.editOn){
  this.editme= true
}
        
    }
}
</script>