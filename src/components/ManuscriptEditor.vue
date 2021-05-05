<template>
<div >
<div v-if="!$root.shadowDB.ManuscriptCards[this.uuid]" class="" >
      This card is not in the database
</div>
<div
 v-if="$root.shadowDB.ManuscriptCards[this.uuid]" class="manuscripteditor" >
    <button  @click="showSrc=!showSrc"><i class="material-icons">settings</i> </button>
   <input
          type="text"
          v-model="$root.shadowDB.ManuscriptCards[uuid].title"
          @keyup="SaveChange()"
    />
            
            {{$root.shadowDB.ManuscriptCards[uuid].content}}
 
        
    <textarea
    v-if="showSrc"

     v-model="$root.shadowDB.ManuscriptCards[uuid].content"
     @change="SaveChange()"
    ></textarea>

         
</div >
</div>
</template>
<script>

export default {
     data: () => ({
       showSrc : false,
  }),
    props:{
        uuid : String
    },
    methods:{
      SaveChange() {
        console.log("Saving Change")
      this.$root.UpdateRecord(
        "ManuscriptCards",
        this.uuid,
        this.$root.shadowDB.ManuscriptCards[this.uuid]
      );
    },
    },
    created(){
        if(!this.$root.shadowDB.ManuscriptCards[this.uuid]){
         // the card is not int database, meaning it's new! so
         console.log("Adding Record")
            let obj = {}
            obj.uuid=this.uuid
            obj.title =""
            obj.content=""
            this.$root.AddRecord("ManuscriptCards", obj);
        }
        
    }
}
</script>