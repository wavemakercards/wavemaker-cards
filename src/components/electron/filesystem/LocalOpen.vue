<template>
  <div>
    <button @click="openfile">OPEN FILE</button>
    {{ filepath }}
    <hr />

<pre style="overflow:auto; max-height:500px;">{{ filedata }} </pre>
  </div>
</template>
<script>
var fs = require("fs");
const { dialog } = require("electron").remote;
export default {
  data() {
    return {
      filedata: null,
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
          console.log(this.filepath)
 fs.readFile(this.filepath, "utf8", (err, data) =>  {
        if (err) {
          alert("An error ocurred reading the file :" + err.message);
          return;
        }
        this.filedata=data;
      });




        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
