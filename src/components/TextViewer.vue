<template>
  <div>
      
    <div v-for="el in folder.files" :key="el.uuid">
      <div v-if="el.type!='folder'">
      <div class="card">

    
    <div v-if="$root.shadowDB.ManuscriptCards[el.uuid]">
        <p>
           <i class="material-icons">notes</i>  {{ $root.shadowDB.ManuscriptCards[el.uuid].title }}
          <button
        
        @click="$root.writer.activenode=el"
        absolute 
        x-small
             color="accent"
             dark
             fab
             right
      >
       <i class="material-icons">edit</i> 
      </button>
        </p>
        <p v-html="$root.shadowDB.ManuscriptCards[el.uuid].content">
   
        </p>

        </div>
        <div v-else>
 <p>
         <i class="material-icons">notes</i> ...................
          <button
        
        @click="$root.writer.activenode=el"
        absolute 
        x-small
             color="accent"
             dark
             fab
             right
      >
             <i class="material-icons">edit</i> 
      </button>
        </p>
        </div>

      </div>
        </div>
        <div v-else >
            <h4 class="pa-3">       <i class="material-icons">folder</i>  {{ el.title }}</h4>
             <div >
             <text-viewer :folder="el" />
             </div>
        </div>
    </div>
  </div>
</template>
<script>
import TextViewer from "./TextViewer.vue";
export default {
  name: "TextViewer",
  props: {
    folder: Object,
  }, 
   components: {
    TextViewer
  },
};
</script>