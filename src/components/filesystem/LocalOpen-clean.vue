<template>
  <div>
<v-file-input
      id="selectFiles"
    accept=".wmproj,.json"
        @change="openfile"
        prepend-icon="cloud_upload"
></v-file-input>

  </div>
</template>
<script>
export default {
  methods: {
    openselector(){
      document.getElementById('selectFiles').click()
    },
    openfile() {
      window.wmlog("Open local file (WEB)", "warn");

      const files = document.getElementById("selectFiles").files;
      if (files.length <= 0) {
        return false;
      }

      const fr = new FileReader();
      console.log(files);
      fr.onload = (e) => {
        this.$root.importFile(e.target.result);
        this.$root.fileinfo.location = "WebLocal";
        this.$root.fileinfo.type = "WebLocal";
      };

      fr.readAsText(files.item(0));
    },
  },
};
</script>
