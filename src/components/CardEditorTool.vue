<template>
  <div>
    <v-dialog
      v-model="$root.editCard.uuid"
      max-width="900px"
      persistent
      scrollable
      content-class="editor-dialog"
    >
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="closeEditor">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-title
          >Edit Card &nbsp;
          <small> ( {{ $root.editCard.uuid }} )</small></v-card-title
        >
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="$root.shadowDB.Cards[$root.editCard.uuid].title"
                  label="Title"
                ></v-text-field>

                <v-textarea
                  v-model="$root.shadowDB.Cards[$root.editCard.uuid].content"
                  rows="10"
                  outlined
                ></v-textarea>
                {{ $root.shadowDB.Cards[$root.editCard.uuid] }}
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeEditor">
            <v-icon class="mr-3">link</v-icon> Link to a card
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  methods: {
    closeEditor() {
      // todo : do a save here maybe - just in case?
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
  },
};
</script>

<style>
.editor-dialog {
  max-height: 100% !important;
  height: 95% !important;
}
</style>