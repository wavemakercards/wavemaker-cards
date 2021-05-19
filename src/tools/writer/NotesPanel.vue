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
      v-bind="dragOptions"
      :setData="setData"
      :editinline="$root.inlineEdit"
    >
      <transition-group type="transition" name="flip-list" class="flip-list" tag="div">
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
    computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
    },
    data(){
    return{
      selectedColumn : null
    }
  },
  methods: {
    setData(dataTransfer) {
    dataTransfer.setDragImage(document.createElement('div'), 0, 0);
},
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

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>