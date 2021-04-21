<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    :delay="200"
    :delayOnTouchOnly="true"
    @end="savechanges"
    v-model="list.files"
  >
    <div :key="index" v-for="(el, index) in list.files">
      <div
        class="wm_manuscript_item"
        :class="{ manuscript_active: el.uuid === $root.writer.activenode.uuid }"
        @click="MakeCurrentNode(el)"
      >
        <button @click="toggleOpenFolder(el)" v-if="el.type === 'folder'">
          <i class="material-icons" v-if="!el.open">folder</i>
          <i class="material-icons" v-if="el.open">folder_open</i>
        </button>
        <button v-else>
          <i class="material-icons">notes</i>
        </button>
        <div class="wm_manuscript_item_title">
          <div v-if="el.type === 'folder'">
            <div v-if="el.title">{{ el.title }}</div>
            <div v-else><em style="opacity: 30%">New Folder</em></div>
          </div>

          <div v-if="el.type==='file'">
            <div v-if="$root.shadowDB.ManuscriptCards[el.uuid]">
              <span v-if="$root.shadowDB.ManuscriptCards[el.uuid].title">
                {{ $root.shadowDB.ManuscriptCards[el.uuid].title }}</span
              >
              <em v-else style="opacity: 30%">New Card</em>
            </div>
            <em v-else style="opacity: 30%">pending</em>
          </div>
      


          <!--
        <button v-if="el.active">
          <v-icon>check_box</v-icon>
        </button>
        --></div>
      </div>

      <div v-if="el.open && el.type === 'folder'">
        <ManuscriptItem :list="el" class="subfolder" />
      </div>
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "ManuscriptItem",
  methods: {
    savechanges() {
      // just save the stuff
      this.$root.UpdateRecord(
        "Writer",
        this.$route.params.id,
        this.$root.shadowDB.Writer[this.$route.params.id]
      );
    },

    toggleOpenFolder(el) {
      el.open = !el.open;
      this.savechanges();
    },
    MakeCurrentNode(el) {
      if (this.$root.writer.activenode === el) {
        //toggle it off // NO shit behaviour with the mone node added
        // this.$root.writer.activenode = {};
      } else {
        this.$root.writer.activenode = el;
      }
    },
  },
  components: {
    draggable,
  },
  data() {
    return {
      drag: null,
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  props: {
    list: {
      required: false,
      type: Object,
      default: null,
    },
  },
};
</script>


<style scoped>
.subfolder {
  padding-left: 10px;
}
.subfolder:empty {
  padding: 10px;
  text-align: left;
  font-size: 0.5rem;
  padding-left: 20px;
}
.subfolder:empty::after {
  padding-left: 10px;
  content: ">";
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





</style>