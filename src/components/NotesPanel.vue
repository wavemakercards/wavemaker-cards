<template>
  <div>
    <div class="wm_sticky_toolbar">

      <button class="btn_right" @click="addNote($root.writer.activenode)">
        <i class="material-icons">add_comment</i>
      </button>
    </div>

    <draggable
      v-model="$root.writer.activenode.notes"
      handle=".boxhandle"
      group="boxes"
      @change="SaveChange"
    >
      <transition-group type="transition" name="flip-list" class="" tag="div">
        <div class="card"
          v-for="(card, cardIndex) in $root.writer.activenode.notes"
          :key="cardIndex"
        >
          <div class="boxhandle">
            <v-icon>drag_handle</v-icon>
          </div>
          <CardEditor :uuid="card.uuid" />
        </div>
      </transition-group>
    </draggable>
        <AddCardWidget v-if="showModal" @close-modal="closeModal" />
  </div>
  
</template>
<script>
import draggable from "vuedraggable";
import CardEditor from "@/components/CardEditor.vue";
import AddCardWidget from "@/components/AddCardWidget.vue";
export default {
  components: {
    CardEditor,
    draggable,
    AddCardWidget
  },
    data(){
    return{
      selectedColumn : null,
      showModal : false,
    }
  },
  methods: {
      addNote(o) {
      this.$root.addcard.currentnode = o;
      console.log(o);
      this.showModal =  true
    },
     closeModal(){
      this.showModal =  false
      console.log("closed")
    },
    SaveChange() {
      this.$root.UpdateRecord(
        "Writer",
        this.$route.params.id,
        this.$root.shadowDB.Writer[this.$route.params.id]
      );
    },
  },
};
</script>


<style scoped>

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