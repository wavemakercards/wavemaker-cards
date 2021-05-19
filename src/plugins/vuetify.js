import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify, { VTooltip, VToolbar, VCard, VIcon, VBtn } from "vuetify/lib";


Vue.use(Vuetify, {
  iconfont: "md",
  components: {
    VTooltip,
    VToolbar,
    VCard,
    VIcon,
    VBtn,
  }
});



export default new Vuetify({
  lang: {
    current: "en"
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  rtl: false,
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        c0: "#fafafa",
        c1: "#f5f5f5",
        c2: "#eeeeee",
        c3: "#e0e0e0",
        c4: "#bdbdbd",
        c5: "#9e9e9e",
        c6: "#757575",
        c7: "#616161",
        c8: "#424242",
        c9: "#212121",
        cardcolours : [
          "#7f0000",
          "#560027",
          "#12005e",
          "#000063",
          "#000051",
          "#002171",
          "#002f6c",
          "#00363a",
          "#00251a",
          "#003300",
          "#003d00",
          "#524c00",
          "#bc5100",
          "#c43e00",
          "#ac1900",
          "#870000"
        ]
      },
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        c0: "#212121",
        c1: "#424242",
        c2: "#616161",
        c3: "#757575",
        c4: "#9e9e9e",
        c5: "#bdbdbd",
        c6: "#e0e0e0",
        c7: "#eeeeee",
        c8: "#f5f5f5",
        c9: "#fafafa",
        cardcolours : [
          "#ff7961",
          "#ff6090",
          "#d05ce3",
          "#9a67ea",
          "#757de8",
          "#5472d3",
          "#4f83cc",
          "#428e92",
          "#39796b",
          "#4c8c4a",
          "#629749",
          "#b4a647",
          "#ffb04c",
          "#ffa040",
          "#ff833a",
          "#f9683a"
        ]
      }
    }
  }
});


  /*
    this little baby is how to chaneg themes
    */
   /*
        let x= {
        primary: '#f00',
        secondary: '#f00',
        accent: '#f00',
        error: '#f00',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        c0: "#fafafa",
        c1: "#f5f5f5",
        c2: "#eeeeee",
        c3: "#e0e0e0",
        c4: "#bdbdbd",
        c5: "#9e9e9e",
        c6: "#757575",
        c7: "#616161",
        c8: "#424242",
        c9: "#212121"
      }
       
  Object.keys(x).forEach(i => {
        this.$vuetify.theme.themes.dark[i] = x[i];
      });

// Do this with themes from a theme file/database that can be updated on github

*/