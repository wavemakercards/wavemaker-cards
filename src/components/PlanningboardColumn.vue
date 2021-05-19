<template>
  <div class="notecol">
    <div class="colheader" v-if="$root.shadowDB.ManuscriptCards[mynode.uuid] && $root.shadowDB.ManuscriptCards[mynode.uuid].title">{{$root.shadowDB.ManuscriptCards[mynode.uuid].title}}</div>
    <div class="colheader" v-else><em style="opacity:50%">New Card</em></div>
 <draggable
                  v-model="mynode.notes"
                  handle=".boxhandle"
                  group="boxes"
                  @change="BoxDrag"
                >
                  <transition-group
                    type="transition"
                    name="flip-list"
                    class=""
                    tag="div"
                  >


                              
    <CardViewer
v-for="(card, cardIndex) in mynode.notes"
          table="Writer"
          :key="cardIndex"
          :cardIndex="cardIndex"
          :uuid="card.uuid"
          :drag="true"
          :edit ="true"
          :deleteCard="true"
          :targetArray="mynode.notes"
           />

        </transition-group>
                </draggable>
                   <div class="button-holder">
          <v-btn @click="addNote(mynode)" color="primary" x-small fab right >
      <v-icon>add</v-icon>
    </v-btn>
      </div>
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
      selectedColumn : null,
      showModal : false,
    }
  },
  props: {
    mynode: Object,
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
      this.showModal =  false
      console.log("closed")
    },

      BoxDrag() {
      //should work with simple save change
      this.SaveData();
    },
    SaveData() {
      this.$root.UpdateRecord(
        "Writer",
      this.$route.params.id,
        this.$root.shadowDB.Writer[
       this.$route.params.id
        ]
      );
    },
  },
};
</script>

<style scoped>
.colheader{
  text-align: center;
}
.notecol {
  width: 360px;
  padding: 0px;
  display: inline-block;
  margin: 5px;
  height: 100%;
  position: relative;
  vertical-align: top;
}
.button-holder{
 text-align: right;
 margin-bottom: 5px;
 position: sticky;
 top:0px;
}
.boxhandle {
  text-align: right;
  cursor: move;
}

.handle {
  cursor: move;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
  width: 200px;
}
</style>