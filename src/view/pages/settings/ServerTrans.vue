<template>
  <v-card>
    <div class="card-body">
      <v-card-title>
        <h1>Server Transfer Request</h1>
        <v-spacer></v-spacer>
        <!-- <v-text-field
          v-model="search"
          append-icon="search"
          label="Search..."
          single-line
          hide-details
        ></v-text-field> -->
      </v-card-title>
      <div>
        <span class="text--lighten-1 font-size-sm mt-8">
            Accept or reject any server transfer requests. Accepting a transfer request will grant full permission to the server.
          </span>
      </div>
      <v-data-table
        :headers="headers"
        :items="desserts"
      ></v-data-table>
    </div>
  </v-card>
</template>

<script>
// import { mapGetters } from "vuex";
// import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";

export default {
  name: "ServerTrans",
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Server Name',
          align: 'left',
          sortable: false,
          value: 'server',
        },
        { text: 'Transfer Status', value: 'Status' },
        { text: 'Request From', value: 'From' },
        { text: 'Action', value: 'Action' },
      ],
      desserts: [
      ]
    };
  }
};
</script>
