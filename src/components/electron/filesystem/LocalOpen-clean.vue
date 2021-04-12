<template>
  <div>
      <input type="file" id="selectFiles" @change="openfile" value="Open"  accept=".wmproj,.json" />
<br />
<pre style="overflow:auto; max-height:500px;">    {{ filedata }} </pre>
  </div>
</template>
<script>

export default {
  data() {
    return {
      filedata: null,
      filepath: null,
    };
  },
  methods: {

    openfile() {
      window.wmlog("Open local file (WEB)", "warn");

  const files = document.getElementById('selectFiles').files;
  if (files.length <= 0) {
    return false;
  }

  const fr = new FileReader();
console.log(files)
  fr.onload = e => {
    const result = JSON.parse(e.target.result);
    const formatted = JSON.stringify(result, null, 2);
    this.filedata = formatted;
  }

  fr.readAsText(files.item(0));


    },
  },
};
</script>
