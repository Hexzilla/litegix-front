<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          SSH KEY Vault
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Manage SSH key vault</span
        >
      </div>
      <div class="card-toolbar">
        <button
          type="reset"
          class="btn btn-success mr-2"
          @click="add()"
          ref="kt_save_changes"
        >
          Add SSH Key
        </button>
      </div>
    </div>
    <div class="card-body">
      <v-data-table :headers="headers" :items="SSHKeys" sort-by="calories">
        <template v-slot:top>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogDelete = false"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="dialogDelete = false"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<style scoped>
.searchSSHKey {
  max-width: 200px;
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
