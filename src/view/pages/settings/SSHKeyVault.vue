<template>
  <v-app>
    <!--begin::Advance Table Widget 10-->
    <div class="card card-custom gutter-b">
      <!--begin::Header-->
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >SSH KEY Vault</span
          >
          <span class="text-muted mt-3  font-size-sm"
            >This is where you can add your SSH Key to make it easy for you to
            add the key to your server.</span
          >
        </h3>
      </div>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body py-0">
        <v-data-table
          :headers="headers"
          :items="SSHKeys"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <b-input class="searchSSHKey" placeholder="Search..."></b-input>
              <b-btn variant="success" @click="dialogDelete = true"
                >Add SSH Key</b-btn
              >
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialogDelete = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialogDelete = false"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <!-- <template v-slot:item.actions="{item}">
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template> -->
        </v-data-table>
      </div>
    </div>
  </v-app>
</template>
<style scoped>
.searchSSHKey {
  max-width: 200px;
  margin-right: 40px;
}
</style>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data: () => ({
    dialogDelete: false,
    headers: [
      {
        text: "Label",
        align: "start",
        sortable: false,
        value: "label"
      },
      { text: "Public Key", value: "key" },
      { text: "Delete", value: "actions", sortable: false }
    ],
    SSHKeys: []
  }),

  created() {
    this.initialize();
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "SSH KEY Vault" }
    ]);
  },

  methods: {
    initialize() {
      this.SSHKeys = [
        {
          label: "Frozen Yogurt",
          key: 159
        }
      ];
    },

    deleteItem(item) {
      this.dialogDelete = true;
    }
  }
};
</script>
