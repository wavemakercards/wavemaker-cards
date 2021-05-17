<template>
<div>
 <v-card
          class="ma-4 pa-2"
          :style="$root.styleBuilder(uuid)"
        >
     
   <v-card-actions v-if="drag" :class="'boxhandle'" >
     <v-spacer></v-spacer>
            <v-icon>drag_handle</v-icon>
   </v-card-actions>

      <v-card-title>{{$root.shadowDB.Cards[uuid].title}}</v-card-title>
      <v-card-text style="white-space: pre-line; max-height:200px; overflow-y : auto" v-if="$root.shadowDB.Cards[uuid].options.showtext" >
        {{$root.shadowDB.Cards[uuid].content}}
      </v-card-text>
      <pre style="display:none;">data : {{$root.shadowDB.Cards[uuid]}}</pre>
   <v-card-actions >
       <v-btn v-if="edit" @click="$root.editCard.uuid=uuid" icon>
        <v-icon>
          mdi-pencil
        </v-icon>
        </v-btn>
     <v-spacer></v-spacer>
         <v-btn v-if="deleteCard" @click="delete_card()" fab  color="error" x-small>
        <v-icon >
          mdi-delete
        </v-icon>
        </v-btn>
   </v-card-actions>
    </v-card>
</div>
</template>

<script>
export default {
  name : "editor",
  data(){
    return{

    }
  },
    props:{
        uuid : String,
        table : String,
        CardIndex : Number,
edit : {
          type : Boolean,
          default :false
        },
        drag : {
          type : Boolean,
          default :false
        },
        deleteCard : {
          type : Boolean,
          default :false
        },
        targetArray : {
          type : Array,
          default : null
        }
    },
    methods:{
      SaveChange() {
      this.$root.UpdateRecord(
        "Cards",
        this.uuid,
        this.$root.shadowDB.Cards[this.uuid]
      );
    },
    delete_card(){
      if(confirm("this will remove the card from this list, but it will remain in the database")){
      this.targetArray.splice(this.CardIndex, 1)
      console.log("delete fired",this.table, this.$route.params.id)

this.$root.UpdateRecord(
       this.table,
       this.$route.params.id,
        this.$root.shadowDB[this.table][this.$route.params.id]
      );
      }
    }

    /*
    TODO : remove this?
   getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'dark' : 'light';
}
*/
    },
    created(){
        if(!this.$root.shadowDB.Cards[this.uuid]){
            let obj = {}
            obj.uuid=this.uuid
            obj.title =""
            obj.content=""
            obj.labels=[]
            obj.style = {}
            this.$root.AddRecord("Cards", obj);
        }
    }
}
</script>