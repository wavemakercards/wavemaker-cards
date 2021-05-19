<template>
  <div>
    <!-- needs to make sure its loaded -->
    <div v-if="!$root.shadowDB.Gridplanner[$route.params.id]">
      loading ...
    </div>
    <div v-else>
      <v-row no-gutters align="top" justify="center" style="padding-top:15px;">
        <v-col cols="7">
          <v-text-field
            label="Title"
            v-model="$root.shadowDB.Gridplanner[$route.params.id].title"
            @change="SaveChange()"
          ></v-text-field>
        </v-col>
           <v-col cols="4" style="text-align:right">
          <v-btn @click="AddColumn" fab title="Add Column" small ><v-icon small>horizontal_distribute</v-icon></v-btn>
          <v-btn @click="AddRow" fab title="Add Row" small> <v-icon small>vertical_distribute</v-icon></v-btn>
        </v-col>
      </v-row>
      <div class="scroller">
        <!-- the header row -->
        <div
          :style="{
            width: TableWidth + 'px',
          }"
          class="headerRow"
        >
          <draggable
            v-model="
              $root.shadowDB.Gridplanner[$route.params.id].content.headers
            "
            handle=".handle"
            @change="HeaderRearrange"
          >
            <transition-group
              type="transition"
              name="flip-list"
              class=""
              tag="div"
            >
              <div
                class="tableBlock handle"
                v-for="(header, headerindex) in $root.shadowDB.Gridplanner[
                  $route.params.id
                ].content.headers"
                :key="headerindex"
                scope="headings"
              >
                <v-textarea
                  auto-grow
                  solo
                  rows="1"
                  placeholder="title"
                  
                  v-model="
                    $root.shadowDB.Gridplanner[$route.params.id].content
                      .headers[headerindex]
                  "
                  @change="SaveChange()"
                  class="centerText"
                ></v-textarea>
              </div>
            </transition-group>
          </draggable>
        </div>
        <!-- / the header row -->
    
        <!-- a row -->
        <draggable
          v-model="
            $root.shadowDB.Gridplanner[$route.params.id].content.rowtitle
          "
          handle=".rowhandle"
          @change="RowRearrange"
        >
          <transition-group
            type="transition"
            name="flip-list"
            class=""
            tag="div"
          >
            <div
              class="rowholder"
              :style="{
                width: TableWidth + 'px',
                'vertical-align': 'top',
              }"
              v-for="(row, rowindex) in $root.shadowDB.Gridplanner[
                $route.params.id
              ].content.rowtitle"
              :key="rowindex"
            >
              <div class="tableBlock rowhandle">
                <div>
                  <v-textarea
                    auto-grow
                    solo
                    rows="1"
                    placeholder="title"
                    
                    v-model="
                      $root.shadowDB.Gridplanner[$route.params.id].content
                        .rowtitle[rowindex]
                    "
                    @change="SaveChange()"
                    class="centerText"
                  ></v-textarea>
                </div>
              </div>
              <!-- a box -->
              <div
                class="tableBlock"
                v-for="(header, headerindex) in $root.shadowDB.Gridplanner[
                  $route.params.id
                ].content.headers"
                :key="headerindex"
              >
                <draggable
                  v-model="
                    $root.shadowDB.Gridplanner[$route.params.id].content.list[
                      rowindex
                    ][headerindex]
                  "
                  handle=".boxhandle"
                  group="boxes"
                  @change="BoxDrag"
                >
                  <transition-group
                    type="transition"
                    name="flip-list"
                    class=""
                    tag="div"
                  >
                    <div
                      class="ma-1"
                      v-for="(card, cardIndex) in $root.shadowDB.Gridplanner[
                        $route.params.id
                      ].content.list[rowindex][headerindex]"
                      :key="cardIndex"
                      style="position:relative;"
                    >
                   
                        <v-btn class="boxhandle" fab absolute top right x-small color="secondary">
                          <v-icon>open_with</v-icon>
                        </v-btn>
                          <CardViewer 
                                table="Gridplanner"
          :uuid="card"
          :drag="false"
          :edit ="true"
          :deleteCard="true"
          :targetArray="$root.shadowDB.Gridplanner[$route.params.id].content.list[rowindex][headerindex]"
          :editinline="true"
           />
                   
                    </div>
                  </transition-group>
                </draggable>
<div style="padding-left:25px;padding-right:25px; text-align:center">
                <v-btn
                  @click="AddCard(rowindex, headerindex)"
                  style="width:100%"
              
                  color="secondary"
                  
                  ><v-icon>add</v-icon></v-btn>
</div>
              </div>
            </div>
          </transition-group>
          <!-- /a box -->
        </draggable>

        <!-- /a row -->
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import CardViewer from "@/components/CardViewer.vue";
export default {
  components: {
    CardViewer,
    draggable,
  },
  computed: {
    TableWidth() {
      return (
        (this.$root.shadowDB.Gridplanner[this.$route.params.id].content
          .headers.length +
          2) *
        350
      );
    },
  },
  methods: {
    AddColumn() {
      this.$root.shadowDB.Gridplanner[
        this.$route.params.id
      ].content.headers.push("New");

      let mylist = this.$root.shadowDB.Gridplanner[this.$route.params.id]
        .content.list;
      mylist.forEach((element) => {
        element.push([]);
      });
      this.SaveChange();
    },
    AddRow() {
      this.$root.shadowDB.Gridplanner[
        this.$route.params.id
      ].content.rowtitle.push("New");

      let newrow = [];
      let mylist = this.$root.shadowDB.Gridplanner[this.$route.params.id]
        .content.headers;
      mylist.forEach(() => {
        newrow.push([]);
      });
      this.$root.shadowDB.Gridplanner[
        this.$route.params.id
      ].content.list.push(newrow);
      this.SaveChange();
    },
    HeaderRearrange(e) {
      //for the header changes I need to reposition each element in the array of arrays
      let mylist = this.$root.shadowDB.Gridplanner[this.$route.params.id]
        .content.list;
      mylist.forEach((element) => {
        element.splice(
          e.moved.newIndex,
          0,
          element.splice(e.moved.oldIndex, 1)[0]
        );
      });
      this.SaveChange();
    },
    RowRearrange(e) {
      // we need to reposition the list of lists as well
      let mylist = this.$root.shadowDB.Gridplanner[this.$route.params.id]
        .content.list;
      mylist.splice(e.moved.newIndex, 0, mylist.splice(e.moved.oldIndex, 1)[0]);
      this.SaveChange();
    },
    BoxDrag() {
      //should work with simple save change
      this.SaveChange();
    },
    AddCard(rowindex, headerindex) {
      let uuid = this.$root.uuid.v4();
      this.$root.shadowDB.Gridplanner[this.$route.params.id].content.list[
        rowindex
      ][headerindex].push(uuid);
      this.SaveChange();
    },

    removeMe(index) {
      if (confirm("you sure?")) {
        this.$root.shadowDB.Gridplanner[this.$route.params.id].content.splice(
          index,
          1
        );
        this.SaveChange();
      }
    },
    SaveChange() {
      this.$root.UpdateRecord(
        "Gridplanner",
        this.$route.params.id,
        this.$root.shadowDB.Gridplanner[this.$route.params.id]
      );
    },
  },
};
</script>

<style scoped>
/* This provides a scrollable window around the elements */
.scroller {
  position: absolute;
  top: 70px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow: scroll;
}
.centerText >>> textarea {
  text-align: center;
}
.handle {
  cursor: move;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
  width: 200px;
}
.tableBlock {
  width: 350px;
  min-height: 40px;
  display: inline-block;
  vertical-align: top;
}
.headerRow {
  padding-left: 350px;
  border-bottom:1px solid var(--c7);
}
.boxhandle {
  text-align: right;
  cursor: move;
}
.heady {
  width: 350px;
  text-align: center;
  color: #fff;

  cursor: move;
}
.rowhandle {
  width: 350px;
  cursor: move;
  vertical-align: middle;
  padding-top:20px;
}

.rowholder {
  border-bottom:1px solid var(--c7);
  padding-bottom:10px;
}
</style>