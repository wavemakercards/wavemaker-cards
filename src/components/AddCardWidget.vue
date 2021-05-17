<template>
  <div>
    <v-dialog v-model="showModal1" width="500" persistent>
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="closeModal()">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-title> Add New Card </v-card-title>

        <v-card-text>
          You can create a new card, or link to an existing one
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text @click="showModal2 = true">
            <v-icon class="mr-3">link</v-icon> Link to a card
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="addUUidtolist()">
            <v-icon class="mr-3">queue</v-icon> Add a new card
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showModal2" fullscreen>
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="showModal2 = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-title> Choose a card to link to </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="(linkcard, linkindex) in $root.shadowDB.Cards"
              :key="linkindex"
            >
      <CardViewer
          :uuid="linkcard.uuid"
          :drag="false"
          :edit ="false" />
     
                <v-btn text @click="addUUidtolist(linkcard.uuid)">
                  <v-icon class="mr-3">link</v-icon> link this card
                </v-btn>
    
            </v-col>
          </v-row>
        </v-container>

        <v-card-text>
          You can create a new card, or link to an existing one
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="showModal2 = true">
            <v-icon class="mr-3">link</v-icon> Link to a card
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import CardViewer from "@/components/CardViewer"
export default {
  components:{
    CardViewer
  },
  methods: {
    closeModal() {
      this.showModal1 = true;
      this.showModal2 = false;
      this.$root.addCard.show = false;
    },
    addUUidtolist(uuid) {
      let obj = {
        state: {},
      };
      if (!uuid) {
        obj.uuid = this.$root.uuid.v4();
        /* in this case there is a NEW CARD created */
        let card = {
          uuid: obj.uuid,
          content: "",
          labels: [],
          style: {
            background: null,
          },
          options: {}
        };

        this.$set(this.$root.shadowDB.Cards, obj.uuid, card);
        console.log(this.$root.shadowDB.Cards);

        this.$root.UpdateRecord(
          "Cards",
          obj.uuid,
          this.$root.shadowDB.Cards[obj.uuid]
        );
        console.log("saved new card");
      } else {
        obj.uuid = uuid;
        // otherwise just pass the existing card uuid
      }
      // add the ID to the target list
      this.$root.addCard.target.list.push(obj);

      // save the updated list  in the database
      this.$root.UpdateRecord(
        this.$root.addCard.target.table,
        this.$root.addCard.target.uuid,
        this.$root.shadowDB[this.$root.addCard.target.table][this.$root.addCard.target.uuid]
      );

      // reset the modals
      this.showModal1 = true;
      this.showModal2 = false;
      // hide the tool
      this.$root.addCard.show = false;
      this.$root.addCard.target = null;
    },
  },
  data() {
    return {
      showModal1: true,
      showModal2: false,
    };
  },
  mounted() {
    this.showModal1 = true;
  },
};
</script>
<style scoped>
.modal {
  align-items: start;
  flex-direction: row;
  padding-top: 5%;
}
</style>