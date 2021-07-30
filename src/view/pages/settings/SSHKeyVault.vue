<template>
    <!--begin::Advance Table Widget 10-->
    <v-card class="card-body">
      <!--begin::Header-->
      <v-card-title>
          <h1>SSH KEY Vault</h1>
      </v-card-title>
      <p class="text-muted font-size-sm mt-1">
        This is where you can add your SSH Key to make it easy for you to
            add the key to your server.
      </p>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body">
        <v-data-table :headers="headers" :items="SSHKeys" sort-by="calories">
          <template v-slot:top>
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-text-field 
                outlined 
                dense 
                label="Search" 
                hide-details=""
                class="searchSSHKey"
              ></v-text-field>
              <v-btn 
              color="primary" 
              @click="dialogDelete = true"
                >Add SSH Key</v-btn
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
          <template v-slot:item.actions="{ item }">
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </div>
    </v-card>
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

    deleteItem() {
      //console.log(item);
      this.dialogDelete = true;
    }
  }
};
</script>
