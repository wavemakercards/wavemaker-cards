<template>
  <div>
      <label for="selectFiles" class="button  is-fullwidth">
    <input 
    style="display:none"
      type="file"
      id="selectFiles"
      @change="openfile"
      value="Open"
      accept=".wmproj,.json"
  />
  <i class="mdi mdi-file-document md-24 "></i> Open File
      </label>  
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
