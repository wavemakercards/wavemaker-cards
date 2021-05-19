<template>
  <div>
    <v-btn class="button is-primary is-fullwidth" @click="openfile"><i class="material-icons">folder_open</i></v-btn>
    {{ filepath }}
  </div>
</template>
<script>
var fs = require("fs");
const { dialog } = require("electron").remote;
export default {
  data() {
    return {
      filepath: null,
    };
  },
  methods: {
    openfile() {
      window.wmlog("Open local file", "warn");

      dialog
        .showOpenDialog({
          properties: ["openFile", "createDirectory"],
          filters: [
            { name: "Wavemaker", extensions: ["wmproj", "md", "json"] },
            { name: "JSON", extensions: ["json"] },
            { name: "All Files", extensions: ["*"] },
          ],
        })
        .then((result) => {
          //console.log(result.canceled)
          // console.log(result.filePaths)
          this.filepath = result.filePaths[0];
          this.$root.fileinfo.location = result.filePaths[0];
          this.$root.fileinfo.type = "fs"
          console.log(this.filepath)
 fs.readFile(this.filepath, "utf8", (err, data) =>  {
        if (err) {
          console.log("An error ocurred reading the file :" + err.message);
          return;
        }
        this.$root.importFile(data)      
      });




        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
