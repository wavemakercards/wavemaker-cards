<template>
  <div id="WriterHolder"  :class="{ left_indent : (drawer) , right_indent : (notedrawer&& $root.writer.activenode.type === 'file')}"  >
    <div class="wm_sticky_toolbar">
      <button  @click="drawer = !drawer">
        <i class="material-icons" v-if="drawer">menu_open</i>
        <i class="material-icons" v-else>menu</i>
      </button>

      <button
      class="btn_right"
        @click="notedrawer = !notedrawer"
        v-if="$root.writer.activenode.type === 'file'"
      >
        <i class="material-icons" v-if="notedrawer">speaker_notes_off</i>
        <i class="material-icons" v-else>speaker_notes</i>
      </button>
    </div>
    <div>
      <div v-if="$root.writer.activenode.type">
        <div v-if="$root.writer.activenode.type === 'file'">
          <div justify="center">
            <div cols="10" md="10" lg="8">
              <manuscript-editor
                :uuid="$root.writer.activenode.uuid"
                :key="$root.writer.activenode.uuid"
              />
            </div>
          </div>
        </div>
        <div v-else>
          <div justify="center">
            <div sm="12" md="10" lg="8">
              <input
                type="text"
                v-model="$root.writer.activenode.title"
                filled
                @change="SaveChange()"
              />
              <text-viewer :folder="$root.writer.activenode" />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div justify="center">
          <div cols="10" md="10" lg="8">
            title
            <input
              type="text"
              v-model="$root.shadowDB.Writer[$route.params.id].title"
              filled
              @change="SaveChange()"
            />
            by
            <input
              type="text"
              v-model="$root.shadowDB.Writer[$route.params.id].author"
              filled
              @change="SaveChange()"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="drawer" class="wm_sidepanel wm_sidepanel_left animate__animated animate__slideInLeft">
      <Manuscript :list="$root.shadowDB.Writer[$route.params.id]" />
    </div>

    <div
      class="wm_sidepanel wm_sidepanel_right animate__animated animate__slideInRight"
            v-if="notedrawer && $root.writer.activenode.type === 'file'"
    >
      <NotesPanel />
    </div>
  </div>
</template>

<script>
import Manuscript from "@/components/Manuscript";
import NotesPanel from "@/components/NotesPanel";
import ManuscriptEditor from "@/components/ManuscriptEditor.vue";
import TextViewer from "@/components/TextViewer.vue";
export default {
  data() {
    return {
      drawer: true,
      notedrawer: true,
    };
  },
  components: {
    Manuscript,
    NotesPanel,
    TextViewer,
    ManuscriptEditor,
  },
  methods: {
    SaveChange() {
      this.$root.UpdateRecord(
        "Writer",
        this.$route.params.id,
        this.$root.shadowDB.Writer[this.$route.params.id]
      );
    },
  },
  beforeMount() {
    this.$root.showNavigation = true;
  },
};
</script>


<style scoped>
.toolbar {
  width: 100%;
  background-color: indigo;
}
.left_indent{
  margin-left:320px;
}

.right_indent{
  margin-right:320px;
}

</style>