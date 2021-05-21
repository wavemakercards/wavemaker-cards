<template>
  <div>

  <v-navigation-drawer app clipped :width="340"  v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Search
          </v-list-item-title>
          <v-list-item-subtitle>
            Database
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>


        <v-list-item  >
      
           

     
           <v-text-field
        hide-details
        single-line
placeholder="keyword"
        v-model="searchterm"
        @blur="computeCardArray()"
        @keydown.enter="computeCardArray()"
        prepend-icon="mdi-magnify"
      ></v-text-field>
     </v-list-item>
     <v-list-item> 
        <v-select
            v-model="selectedLabels"
            :items="labelArray"
            attach
            chips
placeholder="labels"
            multiple
                    @blur="computeCardArray()"
                            prepend-icon="mdi-label"
          ></v-select>
     
        </v-list-item>
           <v-list-item>
<v-btn @click="clearall()" text block >Clear</v-btn>
   </v-list-item>
    </v-navigation-drawer>






    <v-container style="padding-top:45px;">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(card, cardIndex) in cardsArray"
          :key="cardIndex"
        >
          <CardViewer
            :key="cardIndex"
            :cardIndex="cardIndex"
            :uuid="card.uuid"
            :drag="false"
            :edit="true"
            :deleteCard="false"
          />
        </v-col>
      </v-row>      
      
      
      <v-btn fab color="secondary" small style="position:fixed; top:70px" @click="drawer=!drawer"><v-icon>mdi-magnify</v-icon></v-btn>
    </v-container>


  </div>
</template>
<script>
import CardViewer from "@/components/CardViewer";
export default {
  data() {
    return {
      drawer: true,
      searchterm: null,
      cardsArray: [],
      labelArray: [],
      selectedLabels :[]
    };
  },
  components: {
    CardViewer,
  },
  methods: {
    clearall(){
      this.selectedLabels =[]
       this.searchterm = null
       this.computeCardArray()
    },
    computeCardArray() {
      let output = [];
      let labels = [];
      Object.keys(this.$root.shadowDB.Cards).forEach((uuid) => {
        /* Make the Label Array */
        this.$root.shadowDB.Cards[uuid].labels.forEach((lbl) => {
          if(labels.indexOf(lbl)===-1){
          labels.push(lbl);
          }
        });
        labels.sort()
        this.labelArray = labels;
     /* Keywords */
        if (
          this.$root.shadowDB.Cards[uuid].title ||
          this.$root.shadowDB.Cards[uuid].content
        ) {
          if (this.searchterm) {
            if (
              String(this.$root.shadowDB.Cards[uuid].title)
                .toLowerCase()
                .indexOf(this.searchterm.toLowerCase()) > -1 ||
              String(this.$root.shadowDB.Cards[uuid].content)
                .toLowerCase()
                .indexOf(this.searchterm.toLowerCase()) > -1
            ) {
              output.push(this.$root.shadowDB.Cards[uuid]);
            }
          } else {
            output.push(this.$root.shadowDB.Cards[uuid]);
          }
        }
      });

let map1 = []
      if(this.selectedLabels.length){
          output.forEach((item)=>{
              let addme=0
            this.selectedLabels.forEach(lbl=>{
               if(item.labels.indexOf(lbl)>-1){
                addme++
              }
            })
              if(addme){
                map1.push(item)
              }
          })
      }else{
        map1 = output
      }

      this.cardsArray = map1;
    },
  },
  beforeMount() {
    this.computeCardArray();
  },
};
</script>
<style scoped>
</style>