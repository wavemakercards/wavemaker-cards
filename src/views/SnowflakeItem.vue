<template>
 <div class="wm_scrollwindow">
      <!-- needs to make sure its loaded -->
      <div v-if="!$root.shadowDB.Snowflake[$route.params.id]">loading ...</div>
      <div v-else>



        <div no-gutters align="center" justify="center">
          <div>
            <input type="text"
              v-model="$root.shadowDB.Snowflake[$route.params.id].title"
              @change="SaveChange()"
            />
          </div>
        </div>

        <div
          v-for="(row, rowindex) in $root.shadowDB.Snowflake[$route.params.id]
            .content"
          :key="rowindex"
        >
          <div>
            <div class="card" max-width="100%" outlined>
              <button
              class="button is-warning"
                @click="openRow(row)"
                ><i style="transform: rotate(90deg)" class="mdi mdi-call-split md-48"
                  ></i
                ></button
              >
              <p>
                <CardEditor :uuid="row.uuid" editmode="inline" />
              </p>
            </div>
          </div>

          <div>
            <div  v-if="row.isopen">
              <div
                v-for="(subcard, subindex) in row.children"
                :key="subindex"
              >
                <p>
                  <CardEditor :uuid="subcard.uuid" editmode="inline" />
                </p>
                <div>
                  <button class="button is-danger"
                    @click="deleteSub(row, rowindex)"
                    ><i>delete</i></button>
                </div>
              </div>
              <div class="ma-4 mb-10" align="center">
                <button
                  @click="replaceMe(row, rowindex)"
                  fab
                  x-small
                  color="success"
                >
                  <i>check</i>
                </button>

                <button @click="extraCard(row)" fab x-small color="accent">
                  <i>add</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>

import CardEditor from "@/components/CardEditor.vue";

export default {
  components: {
    CardEditor,
  },
  methods: {
    openRow(r) {
      if (r.children.length === 0) {
        r.children.push({
          uuid: this.$root.uuid.v4(),
          parent: this.$route.params.id,
          children: [],
          isopen: false,
        });
        r.children.push({
          uuid: this.$root.uuid.v4(),
          parent: this.$route.params.id,
          children: [],
          isopen: false,
        });
        r.children.push({
          uuid: this.$root.uuid.v4(),
          parent: this.$route.params.id,
          children: [],
          isopen: false,
        });
      }
      r.isopen = !r.isopen;
      this.SaveChange();
    },
    extraCard(r) {
      r.children.push({
        uuid: this.$root.uuid.v4(),
        parent: this.$route.params.id,
        children: [],
        isopen: false,
      });
      this.SaveChange();
    },
    deleteSub(r, index) {
      if (confirm("you sure?")) {
        r.children.splice(index, 1);
        this.SaveChange();
      }
    },
    replaceMe(row, rowindex) {
      if (confirm("you sure?")) {
        this.$root.shadowDB.Snowflake[this.$route.params.id].content.splice(
          rowindex,
          1,
          ...row.children
        );
        this.SaveChange();
      }
    },
    SaveChange() {
      this.$root.UpdateRecord(
        "Snowflake",
        this.$route.params.id,
        this.$root.shadowDB.Snowflake[this.$route.params.id]
      );
    },
  },
  beforeMount() {
    this.$root.showNavigation = true;
  },
};
</script>