<template>
  <div >
    <div  class="wm_sticky_toolbar" >
      <button class="btn_right"  @click="addFolder" icon v-if="$root.writer.activenode.type!=='file'"><i class="material-icons">create_new_folder</i></button>
      <button class="btn_right"  @click="addText" icon v-if="$root.writer.activenode.type!=='file'"><i class="material-icons">playlist_add</i></button>
    </div>
    

    <div>


 <div :class="{ wm_manuscript_active : (!$root.writer.activenode.uuid )}" class="wm_manuscript_item"  @click="selectHome()">
      <button >
          <i class="material-icons">home</i> 
        </button>

         <div class="wm_manuscript_item_title">
          <div v-if="$root.shadowDB.Writer[$route.params.id].title" >{{$root.shadowDB.Writer[$route.params.id].title }}</div>
            <div v-else ><em style="opacity:30%">Manuscript Title</em></div>
        </div>

      </div>


      <ManuscriptItem
        :list="
          $root.shadowDB.Writer[$route.params.id]
        "
      />
    </div>
  </div>
</template>

<script>
import ManuscriptItem from "@/components/ManuscriptItem";
export default {
  components: {
    ManuscriptItem,
  },
  data: () => ({
    drawer: true,
  }),
  methods: {
    selectHome(){
      this.$root.writer.activenode ={}
    },
    addFolder() {
      let obj = {
        type: "folder",
        name: "",
        uuid: this.$root.uuid.v4(),
        files: [],
        open: true,
        active: false,
      };
      if (this.$root.writer.activenode.uuid) {
        this.$root.writer.activenode.open = true
        this.$root.writer.activenode.files.push(obj);
      } else {
        console.log(this.$route.params.id)
        this.$root.shadowDB.Writer[this.$route.params.id].files.push(obj);
      }
      this.SaveData();
    },
    addText() {
      let obj = {
        type: "file",
        uuid: this.$root.uuid.v4(),
        notes : [],
        active: false,
      };
      if (this.$root.writer.activenode) {
        if (this.$root.writer.activenode.type === "folder") {
          // push into the folders list
         this.$root.writer.activenode.open = true
          this.$root.writer.activenode.files.push(obj);
          this.SaveData();
        }
      } else {
        this.$root.shadowDB.Writer[this.$route.params.id].files.push(obj);
        this.SaveData();
      }
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
