<template>
  <div>
    <v-dialog
      v-model="$root.editCard.uuid"
      max-width="900px"
      persistent
      scrollable
      content-class="editor-dialog"
   
    >
      <v-card :style="$root.styleBuilder($root.editCard.uuid)">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="closeEditor">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-title
          >Edit Card &nbsp;
        <!--  <small> ( {{ $root.editCard.uuid }} )</small> -->
          </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="$root.shadowDB.Cards[$root.editCard.uuid].title"
                  label="Title"
                  @blur="SaveChange()"
                ></v-text-field>

                <v-text-field
                  placeholder="Labels"
                  outlined
                  dense
                  @keydown.enter="AddLabel"
                  @keydown.space="AddLabel"
                  v-model="newLabel"
                  prepend-icon="mdi-label"
                  append-outer-icon="mdi-plus"
                  @click:append-outer="AddLabel"
                ></v-text-field>


                <div style="padding-bottom: 10px">
                  <v-chip
                    color="primary"
                    v-for="(label, index) in $root.shadowDB.Cards[
                      $root.editCard.uuid
                    ].labels"
                    :key="index"
                    close
                    @click:close="deleteChip(index)"
                    style="margin: 1px"
                  >
                    {{ label }}
                  </v-chip>
                </div>
<v-container
    class="px-0"
    fluid
  >

  </v-container>

                <v-textarea
                  v-model="$root.shadowDB.Cards[$root.editCard.uuid].content"
                  rows="10"
                  outlined
                  label="Notes"
                  @blur="SaveChange()"
                ></v-textarea>
 
              <div>
                     <v-checkbox
      v-model="$root.shadowDB.Cards[$root.editCard.uuid].options.showtext"
      label="Show Notes on card"
    ></v-checkbox>

               <v-checkbox
      v-model="$root.inlineEdit"
      label="Allow Inline editing"
    ></v-checkbox>

               <div>
                 Choose a color
               </div>

 <v-btn x-small @click="setBg(-1)">
         <v-icon
           v-if="$root.shadowDB.Cards[$root.editCard.uuid].style.background === -1 || $root.shadowDB.Cards[$root.editCard.uuid].style.background === undefined"
           dense>mdi-check</v-icon>
    </v-btn>

  <v-btn
      x-small
      v-for="(col,ci) in $root.colorArray"
      :key="ci"
      :color="col"
      style="margin-left:2px;"
      @click="setBg(ci)"
    >
    <v-icon dense v-if="$root.shadowDB.Cards[$root.editCard.uuid].style.background === ci">mdi-check</v-icon>
    </v-btn>
                

              </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeEditor">
            <v-icon class="mr-3">save</v-icon> Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    newLabel: null,
  }),
  methods: {
    closeEditor() {
      this.SaveChange();
      this.$root.editCard.uuid = null;
    },
    SaveChange() {
     console.log("Saving Change");
      this.$root.UpdateRecord(
        "Cards",
        this.$root.editCard.uuid,
        this.$root.shadowDB.Cards[this.$root.editCard.uuid]
      );
    },
    AddLabel() {
       this.newLabel=this.newLabel.replace(/ /g,'');
      let newL = this.newLabel
    
      console.log(newL)
      if(!newL){
        alert("No text there?")
        return false
      }
      if (
        this.$root.shadowDB.Cards[this.$root.editCard.uuid].labels.indexOf(
          newL
        ) === -1
      ) {
        // not in the current array
        this.$root.shadowDB.Cards[this.$root.editCard.uuid].labels.push(newL);
        this.$root.shadowDB.Cards[this.$root.editCard.uuid].labels.sort();
        this.SaveChange();
        this.newLabel = null;
      } else {
      //  console.log("Already there : ", newL);
      }
    },
    deleteChip(i) {
      this.$root.shadowDB.Cards[this.$root.editCard.uuid].labels.splice(i, 1);
      this.SaveChange();
    },
    setBg(x){
      this.$root.shadowDB.Cards[this.$root.editCard.uuid].style.background = x
        this.SaveChange();
    }
  }
};

</script>

<style>
.editor-dialog {
  max-height: 100% !important;
  height: 95% !important;
}
</style>