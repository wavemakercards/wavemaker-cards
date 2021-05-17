<template>
  <div>
    <v-app-bar dense class="sticky" color="c9" elevation="0">
      <v-spacer></v-spacer>
      <v-btn icon @click="addNote($root.writer.activenode)">
        <v-icon>add_comment</v-icon>
      </v-btn>
    </v-app-bar>

    <draggable
      v-model="$root.writer.activenode.notes"
      handle=".boxhandle"
      group="boxes"
      @change="SaveChange"
    >
      <transition-group type="transition" name="flip-list" class="" tag="div">
          <CardViewer
          v-for="(card, cardIndex) in $root.writer.activenode.notes"
          table="Writer"
          :key="cardIndex"
          :cardIndex="cardIndex"
          :uuid="card.uuid"
          :drag="true"
          :edit ="true"
          :deleteCard="true"
          :targetArray="$root.writer.activenode.notes"
           />
      </transition-group>
    </draggable>
  </div>
  
</template>
<script>
import draggable from "vuedraggable";
import CardViewer from "@/components/CardViewer.vue";
export default {
  components: {
    CardViewer,
    draggable,

  },
    data(){
    return{
      selectedColumn : null
    }
  },
  methods: {
      addNote(o) {
        console.log("add to :", o)
     this.$root.addCard.target = {
       table : "Writer",
       // this should be the ID of the TOOL element not the Specific NODE element
       uuid : this.$route.params.id,
       list : o.notes
     }
     this.$root.addCard.show=true
    },
     closeModal(){
       this.$root.addCard.show=false
       this.$root.addCard.target = null
      console.log("closed")
    },
    SaveChange() {
      this.$root.UpdateRecord(
        "Writer",
        this.$route.params.id,
        this.$root.shadowDB.Writer[this.$route.params.id]
      );
    }
  },
};
</script>


<style scoped>
.sticky {
  position: sticky;
  top: 0px;
  z-index: 2;
}

.boxhandle {
  text-align: right;
  cursor: move;
}

.handle {
  cursor: move;
}
.flip-list-move {
  transition: all 0.5s;
}
.no-move {
  transition: all 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
  width: 200px;
}
</style>