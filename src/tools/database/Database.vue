<template>
   <div>
 <!--
     <v-toolbar
      dense
      floating
    >
      <v-text-field
        hide-details
        single-line
      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  -->
      <v-navigation-drawer
        permanent
        absolute
        mini-variant
      >
        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

     <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="2"
              v-for="(linkcard, linkindex) in $root.shadowDB.Cards"
              :key="linkindex"
            >
              <v-card>
                <h3>{{ linkcard.uuid }}</h3>
                <div
                  v-html="linkcard.content"
                  style="height: 200px; overflow-y: auto"
                ></div>
              </v-card>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="addUUidtolist(linkcard.uuid)">
                  <v-icon class="mr-3">link</v-icon> link this card
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>


</div>


</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>