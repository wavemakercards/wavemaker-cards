<template>
    <div>
      <v-card-title>{{$root.shadowDB.Cards[uuid].title}}</v-card-title>
      <v-card-text style="white-space: pre-line; max-height:200px; overflow-y : scroll" >
        {{$root.shadowDB.Cards[uuid].content}}
      </v-card-text>
      <pre style="display:none;">data : {{$root.shadowDB.Cards[uuid]}}</pre>
   <v-card-actions>
     <v-spacer></v-spacer>
         <v-btn @click="$root.editCard.uuid=uuid" icon>
        <v-icon>
          mdi-pencil
        </v-icon>
        </v-btn>
   </v-card-actions>
  
      </div>
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