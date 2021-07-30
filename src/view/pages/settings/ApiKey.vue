<template>
  <div>
    <!--begin::Card-->
    <v-card>
      <div class="card-body">
        <!--begin::Header-->
        <div class="card-title align-items-start flex-column">
          <h1 class="font-weight-bolder">API Key</h1>
          <p class="text-muted font-size-sm mt-1">
            You can use this API Key and API Secret to download your backup. To
            enable RunCloud API access, you need to enable API Access.
          </p>
        </div>

        <div class="form-group row align-items-center">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              outlined
              dense
              type="text"
              append-icon="mdi-refresh"
              auto="true"
              characters="characters"
              :value="apikey"
              @click:append="generate()"
            ></v-text-field>
          </v-col>
        </div>

        <div class="form-group row align-items-center">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              outlined
              dense
              type="text"
              append-icon="mdi-refresh"
              auto="true"
              characters="characters"
              :value="apikey"
              @click:append="generate()"
            ></v-text-field>
          </v-col>
        </div>
      </div>
    </v-card>
    <!--end::Card-->
    <div class="form-group"></div>
    <!--begin::Card-->
    <v-card>
      <div class="card-body">
        <!--begin::Header-->
        <div class="card-title align-items-start flex-column">
          <h1 class="font-weight-bolder">Enable API Access</h1>
          <p class="text-muted font-size-sm mt-1">
            Enable API Access to use the RunCloud API endpoint. If you are only
            using the API Key and API Secret to download backups, you don't have
            to enable this.
          </p>
        </div>

        <div class="form-group row align-items-center">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-select dense outlined label="select"> </v-select>
          </v-col>
        </div>
      </div>
    </v-card>
    <!--end::Card-->
    <div class="form-group"></div>
    <!--begin::Card-->
    <v-card>
      <div class="card-body">
        <!--begin::Header-->
        <v-card-title>
          <h1>IP Address Restriction</h1>
          <v-spacer></v-spacer>
          <v-text-field
            outlined
            dense
            label="Search"
            type="text"
            v-model="search"
          ></v-text-field>
        </v-card-title>

        <p class="text-muted font-size-sm mt-1">
          Any requests to the API endpoint can only be made from these IP
          Address(es). If no IP Address is added and API Access is enabled, your
          API Key and API Secret can be requested from any IP address.
        </p>
        <form class="form">
          <div class="form-group row align-items-center">
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-text-field
                outlined
                dense
                label="IP Address"
                ref="ipAddress"
                type="text"
              >
              </v-text-field>
            </v-col>
          </div>

          <div class="form-group row align-items-center">
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-text-field
                dense
                outlined
                label="Description(Optional)"
                ref="des"
                type="text"
              >
              </v-text-field>
            </v-col>
          </div>

          <div class="form-group row align-items-center">
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-btn
                block
                color="primary"
                large
                type="button"
                @click="add()"
                ref="kt_ip_add"
              >
                Add
              </v-btn>
            </v-col>
          </div>
        </form>
        <div>
          <h2 class="text--lighten-1 font-size-sm mt-8">
            Allowed IP Address(es)
          </h2>
        </div>
        <v-data-table
          :headers="tblData.headers"
          :items="tblData.desserts"
          :search="tblData.search"
          no-data-text="No data"
          no-results-text="No result"
        >
          <template v-slot:item.del="{ item }">
            <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
  <!--end::Card-->
</template>

<script>
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Vue from "vue";
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);

export default {
  name: "Authentication",
  data() {
    return {
      tblData: {
        search: "",
        headers: [
          {
            text: "IP Address",
            align: "left",
            sortable: false,
            value: "ipAddress"
          },
          {
            text: "Description",
            value: "desc"
          },
          {
            text: "Delete",
            value: "del"
          }
        ],
        desserts: [
          {
            ipAddress: "label",
            desc: "Subscribe to newsletter"
          }
        ]
      },
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        ipAddress: "",
        desc: ""
      },
      defaultItem: {
        ipAddress: "",
        desc: ""
      }
    };
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "26"
    },
    characters: {
      type: String,
      default: "a-z,A-Z,0-9"
    },
    auto: [String, Boolean],
    apikey: {
      type: String,
      default: ""
    }
  },
  mounted: function() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "API Key" }
    ]);
    this.generate();
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      console.log("watch dialogDelete val = " + val);
      val || this.closeDelete();
    }
  },

  methods: {
    generate() {
      let charactersArray = this.characters.split(",");
      let CharacterSet = "";
      let key = "";
      if (charactersArray.indexOf("a-z") >= 0) {
        CharacterSet += "abcdefghijklmnopqrstuvwxyz";
      }
      if (charactersArray.indexOf("A-Z") >= 0) {
        CharacterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (charactersArray.indexOf("0-9") >= 0) {
        CharacterSet += "0123456789";
      }
      for (let i = 0; i < this.size; i++) {
        key += CharacterSet.charAt(
          Math.floor(Math.random() * CharacterSet.length)
        );
      }
      this.apikey = key;
    },

    setChangePassLength() {
      this.generate();
    },
    deleteItem(item) {
      console.log("function deleteItem item = " + item);
      this.editedIndex = this.desserts.indexOf(item);
      console.log("function this.editedIndex = " + this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("function this.editedItem = " + this.editedItem);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    add() {
      var ipAddress = this.$refs.ipAddress.value;
      var des = this.$refs.des.value;

      // set spinner to submit button
      const submitButton = this.$refs["kt_ip_add"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send update request
        this.$store.dispatch(UPDATE_PERSONAL_INFO, {
          ipAddress,
          des
        });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    }
  }
};
</script>
