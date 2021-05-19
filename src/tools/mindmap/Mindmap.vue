<template>
  <v-main>
    <v-container>
      <v-row no-gutters justify="center">
        <h1>Your Mindmpas</h1>
      </v-row>

      <v-row no-gutters align="center" justify="center">
        <v-col
          v-for="(mindmap, index) in $root.shadowDB.Mindmap"
          :key="index"
          cols="12"
        >
          <v-card class="ma-2" outlined>
            <v-card-title>{{ mindmap.title }}</v-card-title>
            <v-card-actions>
              <v-btn
                color="success"
                class="ma-2"
                @click="$router.push('/mindmap/' + mindmap.uuid)"
                >Edit <v-icon>edit</v-icon>
              </v-btn>

              <v-btn
                @click="DeleteMe(mindmap.uuid)"
                icon
                absolute
                right
                top
                class="error"
              >
                <v-icon>delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          fab
          :style="{ left: '50%', transform: 'translateX(-50%)' }"
          large
          @click="showmodal = true"
        >
          <v-icon> add </v-icon></v-btn
        >
      </v-row>
    </v-container>

    <v-dialog v-model="showmodal" width="500">
      <v-card>
        <v-btn
          style="margin-top: 25px"
          color="pink"
          fab
          dark
          x-small
          absolute
          top
          right
          @click="toggleModal"
        >
          <v-icon>close</v-icon>
        </v-btn>
        <v-card-title class="headline grey lighten-2">
          <p class="modal-card-title">Create New</p>
        </v-card-title>

        <v-card-text>
          <v-text-field label="Title" v-model="newMindmap.title"></v-text-field>

          <v-textarea
            label="Description"
            auto-grow
            v-model="newMindmap.description"
          ></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="error" text @click="toggleModal"> Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="NewItem"> Create New </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      showmodal: "",
      newMindmap: { title: "", author: "", description: "", template: "" },
    };
  },
  methods: {
    toggleModal() {
      if (this.showmodal === "") {
        this.showmodal = "is-active";
      } else {
        this.showmodal = "";
      }
    },
    NewItem() {
      let uuid = this.$root.uuid.v4();
      let n = {};
      n.uuid = uuid;
      n.title = this.newMindmap.title;
      n.description = this.newMindmap.description;
      n.content = {
        headers: [""],
        rowtitle: [""],
        list: [[[]]], // 1 row 1 col array of arrays
      };
      this.$root.AddRecord("Mindmap", n);
      //no to heading stright off?
      this.toggleModal();
      // this.$router.push('/writer/'+ uuid)
    },
    DeleteMe(myKey) {
      if (confirm("sure?")) {
        this.$root.DeleteRecord("Mindmap", myKey);
      }
    },
  },
  beforeMount() {
    this.$root.showNavigation = true;
  },
};
</script>

<style scoped>
.card-footer-item {
  border: 0px;
  border-radius: 0px;
  margin: 5px;
}
.card {
  margin-bottom: 30px;
}
</style>
