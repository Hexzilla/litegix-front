<template>
  <div>
    <div class="card card-custom">
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h3 class="card-label font-weight-bolder text-dark">
            API Key
          </h3>
          <span class="text-muted font-size-sm mt-1"
            >Manage API Key and API Secret</span
          >
        </div>
        <div class="card-toolbar">
          <!-- <v-btn color="primary" @click="update()" ref="kt_pass_update">
            Save Changes
          </v-btn>
          <button type="reset" class="btn btn-secondary" @click="cancel()">
            Cancel
          </button> -->
        </div>
      </div>
      <div class="card-body">
        <div class="card-title align-items-start flex-column">
          <p class="font-size-md mt-1">
            You can use this API Key and API Secret to download your backup. To
            enable API access, you need to enable API Access.
          </p>
        </div>

        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="API Key:" label-for="apiKey">
              <b-form-input
                id="apiKey"
                type="text"
                required
                ref="apiKey"
                append-icon="mdi-refresh"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="Secret Key:" label-for="secretKey">
              <b-form-input
                id="secretKey"
                type="text"
                required
                ref="secretKey"
                append-icon="mdi-refresh"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- <v-card>
      <div class="card-body">
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
    </v-card> -->
    <div class="card card-custom">
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h3 class="card-label font-weight-bolder text-dark">
            IP Address Restriction
          </h3>
          <span class="text-muted font-size-sm mt-1"
            >Manage API Key and API Secret</span
          >
        </div>
        <div class="card-toolbar">
          <!-- <v-btn color="primary" @click="update()" ref="kt_pass_update">
            Save Changes
          </v-btn>
          <button type="reset" class="btn btn-secondary" @click="cancel()">
            Cancel
          </button> -->
        </div>
      </div>
      <div class="card-body">
        <v-card-title>
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
          <v-row>
            <v-col md="6" offset-md="3" sm="12" offset-sm="0">
              <b-form-group label="IP Address:" label-for="ipAddress">
                <b-form-input
                  id="ipAddress"
                  type="text"
                  required
                  ref="ipAddress"
                  append-icon="mdi-refresh"
                ></b-form-input>
              </b-form-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" offset-md="3" sm="12" offset-sm="0">
              <b-form-group label="Description(Optional):" label-for="des">
                <b-form-input
                  id="des"
                  type="text"
                  required
                  ref="des"
                  append-icon="mdi-refresh"
                ></b-form-input>
              </b-form-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" offset-md="3" sm="12" offset-sm="0">
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
          </v-row>
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
    </div>
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
            value: "ipAddress",
          },
          {
            text: "Description",
            value: "desc",
          },
          {
            text: "Delete",
            value: "del",
          },
        ],
        desserts: [
          {
            ipAddress: "label",
            desc: "Subscribe to newsletter",
          },
        ],
      },
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        ipAddress: "",
        desc: "",
      },
      defaultItem: {
        ipAddress: "",
        desc: "",
      },
    };
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "26",
    },
    characters: {
      type: String,
      default: "a-z,A-Z,0-9",
    },
    auto: [String, Boolean],
    apikey: {
      type: String,
      default: "",
    },
  },
  mounted: function () {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "API Key" },
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
    },
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
          des,
        });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
  },
};
</script>
