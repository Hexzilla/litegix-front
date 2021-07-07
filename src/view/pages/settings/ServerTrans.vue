<template>
  <v-card>
    <div class="card-body">
      <v-card-title>
        <h1>Server Transfer Request</h1>
        <v-spacer></v-spacer>
      </v-card-title>
      <p class="text-muted font-size-sm mt-1">
        Accept or reject any server transfer requests. Accepting a transfer
        request will grant full permission to the server.
      </p>
      <v-data-table :headers="headers" :items="desserts"></v-data-table>
    </div>
  </v-card>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "ServerTrans",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Server Name",
          align: "left",
          sortable: false,
          value: "server"
        },
        { text: "Transfer Status", value: "Status" },
        { text: "Request From", value: "From" },
        { text: "Action", value: "Action" }
      ],
      desserts: []
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Server Transfer" }
    ]);
  }
};
</script>
