<template>
  <ElectronTitlebar
    theme="dark"
    :platform="platform"
    :is-maximizable="true"
    :is-closable="true"
    :is-minimizable="true"
    :show-icon="true"
    :show-title="true"
    :on-minimize="minimize"
    :on-maximize="toggleMaximize"
    :on-close="close"
  >
    <template slot="icon">
      <img src="@/assets/logo.png" alt="icon" />
    </template>
  </ElectronTitlebar>
</template>
<script>
import ElectronTitlebar from "./electron-titlebar.vue";
import { remote } from "electron";

export default {
  data() {
    return {
      platform: process.platform,
    };
  },
  components: {
    ElectronTitlebar,
  },
  methods: {
    close() {
      remote.getCurrentWindow().close();
    },
    minimize() {
      remote.getCurrentWindow().minimize();
    },
     toggleMaximize() {
                let win = remote.getCurrentWindow();
                if (win.isMaximized())
                    win.unmaximize();
                else
                    win.maximize();
            },
  },
};
</script>